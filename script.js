// Funciones de Utilidad
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generador de Efectos de Sonido (Web Audio API nativa sin archivos externos)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const now = audioCtx.currentTime;

    // Función auxiliar para tocar notas suaves y modernas (estilo pop/burbuja/xilófono)
    const playNote = (freq, startTime, duration, vol = 0.3) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine'; // Sonido completamente redondo y amigable (0% agresivo)
        osc.frequency.setValueAtTime(freq, startTime);
        
        // Attack muy rápido, decay exponencial para dar el efecto de golpe de xilófono o burbuja
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(vol, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
    };

    if (type === 'click') {
        // Un suave y juguetón *pop* al marcar respuestas
        playNote(800, now, 0.1, 0.15);
    } 
    else if (type === 'correct') {
        // Arpegio veloz y alegre hacia arriba (C5, E5, G5, C6) tipo campana mágica de acierto
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
            playNote(freq, now + (i * 0.08), 0.5, 0.25); // Notas reproduciéndose en escalera rápida
        });
    } 
    else if (type === 'incorrect') {
        // Dos notas suaves y tristes (A3, F3) tipo "oh oh" amigable, sin saturar
        playNote(220.00, now, 0.3, 0.3);
        playNote(174.61, now + 0.18, 0.5, 0.3);
    } 
    else if (type === 'end') {
        // Un gran acorde final armonioso
        const notes = [523.25, 659.25, 783.99, 1046.50]; 
        notes.forEach((freq, i) => {
            // Entran juntas, pero suenan como un golpe de cristal o marimba
            playNote(freq, now, 2.0, 0.2);
        });
    }
}

// Constantes
const TIME_LIMIT = 120 * 60; // 120 minutos en segundos

// Estado Global
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = TIME_LIMIT;
let timerInterval;
let selectedOptions = []; // Mantiene el rastro de las selecciones múltiples
let selectedTestPool = null;

// Referencias del DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const questionCounter = document.getElementById('question-counter');
const timerDisplay = document.getElementById('timer');

const feedbackContainer = document.getElementById('feedback-container');
const feedbackTitle = document.getElementById('feedback-title');
const correctReason = document.getElementById('correct-reason');
const incorrectReasons = document.getElementById('incorrect-reasons');

const finalScore = document.getElementById('final-score');
const totalQuestions = document.getElementById('total-questions');

// Inicialización
function init() {
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', handleNextQuestion);
    restartBtn.addEventListener('click', resetQuiz);
    setupTestSelection();
}

function preparePools() {
    const raws = [
        window.rawTest1 || '',
        window.rawTest2 || '',
        window.rawTest3 || '',
        window.rawTest4 || '',
        window.rawTest5 || ''
    ];
    
    const allAnswers = [];
    raws.forEach(raw => {
        if(!raw) return;
        const lines = raw.trim().split('\n');
        lines.forEach(line => {
            const parts = line.split('\t');
            if(parts.length >= 4) {
                const corrects = parts.slice(3).join('\t').split(' / ').map(t => t.trim().replace(/^"|"$/g, ''));
                allAnswers.push(...corrects);
            }
        });
    });
    
    const uniqueAnswers = Array.from(new Set(allAnswers));
    
    const parse = (raw) => {
        if(!raw) return [];
        const parsed = [];
        const lines = raw.trim().split('\n');
        lines.forEach(line => {
            const parts = line.split('\t');
            if(parts.length >= 4) {
                const question = parts[1].trim().replace(/^"|"$/g, '');
                const corrects = parts.slice(3).join('\t').split(' / ').map(t => t.trim().replace(/^"|"$/g, ''));
                
                const options = corrects.map(t => ({ text: t, isCorrect: true, explanation: "Correcto." }));
                
                const numNeeds = corrects.length > 1 ? 5 : 4;
                const distractors = [];
                let shuffledUnique = [...uniqueAnswers].sort(() => 0.5 - Math.random());
                
                for(let ans of shuffledUnique) {
                    if(!corrects.includes(ans)) {
                        distractors.push({ text: ans, isCorrect: false, explanation: "Incorrecto." });
                    }
                    if(distractors.length >= (numNeeds - corrects.length)) break;
                }
                
                const finalOptions = [...options, ...distractors].sort(() => 0.5 - Math.random());
                parsed.push({ question, options: finalOptions });
            }
        });
        return parsed;
    };
    
    window.test1Questions = parse(raws[0]);
    window.test2Questions = parse(raws[1]);
    window.test3Questions = parse(raws[2]);
    window.test4Questions = parse(raws[3]);
    window.test5Questions = parse(raws[4]);
}

function setupTestSelection() {
    preparePools();

    const pools = [
        window.test1Questions || [],
        window.test2Questions || [],
        window.test3Questions || [],
        window.test4Questions || [],
        window.test5Questions || []
    ];

    const testBtns = document.querySelectorAll('.test-btn');
    const selectedTestInfo = document.getElementById('selected-test-info');
    
    // Set initial look
    testBtns.forEach(btn => btn.style.opacity = '0.7');

    testBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Limpiar seleccion previa
            testBtns.forEach(b => {
                b.style.opacity = '0.7';
                b.style.outline = 'none';
            });

            // Resaltar sin cambiar el tamaño para no desacomodar la grilla
            btn.style.opacity = '1';
            
            // Solo aplicar outline si es uno de los gris/blanco, pero no al aleatorio que ya es llamativo
            if(btn.getAttribute('data-test') !== 'random') {
                btn.style.outline = '3px solid var(--primary-color, #ff9900)';
                btn.style.outlineOffset = '-3px';
            } else {
                btn.style.outline = '3px solid #fff';
                btn.style.outlineOffset = '-3px';
            }
            
            const testId = btn.getAttribute('data-test');
            playSound('click'); 

            if(testId === 'random') {
                selectedTestInfo.textContent = 'Seleccionado: Quiz Aleatorio';
                selectedTestPool = 'random';
                selectedTestInfo.style.color = '#e07a00';
            } else {
                const pIndex = parseInt(testId) - 1;
                const pLength = pools[pIndex].length;
                selectedTestInfo.textContent = `Seleccionado: Test ${testId}`;
                selectedTestPool = pools[pIndex];
                
                if(pLength === 0) {
                    selectedTestInfo.textContent += ' - ¡Cargando preguntas!';
                    selectedTestInfo.style.color = 'var(--incorrect-color)';
                } else {
                    selectedTestInfo.style.color = '#e07a00';
                }
            }

            startBtn.style.opacity = '1';
            startBtn.style.cursor = 'pointer';
            startBtn.style.pointerEvents = 'auto';
        });
    });
}

function startQuiz() {
    if(!selectedTestPool) return;
    
    if(Array.isArray(selectedTestPool) && selectedTestPool.length === 0) {
        alert('El test seleccionado aún no tiene preguntas cargadas. Por favor agrega preguntas o elige otro test.');
        return;
    }
    
    playSound('click'); // Inicializar Engine de audio
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    if(selectedTestPool === 'random') {
        const pools = [
            window.test1Questions || [],
            window.test2Questions || [],
            window.test3Questions || [],
            window.test4Questions || [],
            window.test5Questions || []
        ];
        
        let allQuestions = [];
        pools.forEach(pool => {
            allQuestions = allQuestions.concat(pool);
        });
        
        const uniqueQuestions = [];
        const seenTexts = new Set();
        allQuestions.forEach(q => {
            if(!seenTexts.has(q.question)) {
                seenTexts.add(q.question);
                uniqueQuestions.push(q);
            }
        });
        
        shuffleArray(uniqueQuestions);
        window.quizQuestions = uniqueQuestions.slice(0, 65);
    } else {
        window.quizQuestions = [...selectedTestPool];
        shuffleArray(window.quizQuestions);
    }
    
    startTimer();
    loadQuestion();
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeRemaining < 300) { // Menos de 5 minutos
        timerDisplay.style.color = 'var(--incorrect-color)';
        timerDisplay.style.animation = 'pulse 1s infinite';
    }
}

function loadQuestion() {
    // Esconder feedback anterior
    feedbackContainer.classList.add('hidden');
    optionsGrid.innerHTML = ''; // Limpiar opciones
    selectedOptions = []; // Reiniciar para cada pregunta

    // Cargar la pregunta desde el script window.quizQuestions (importado de questions.js)
    // Nos aseguramos de acceder a un arreglo válido
    const questionsArray = window.quizQuestions || [];
    if(questionsArray.length === 0) {
        questionText.textContent = "No se encontraron preguntas configuradas.";
        return;
    }

    const question = questionsArray[currentQuestionIndex];
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questionsArray.length}`;
    questionText.textContent = question.question;
    
    // Mezclar las opciones para esta pregunta
    shuffleArray(question.options);
    
    // Inyectar alternativas
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        // Asigna clase opt-0 a opt-4 dinámicamente
        button.className = `option-btn opt-${index % 5}`;
        button.innerHTML = `<span>${option.text}</span>`;
        button.addEventListener('click', () => handleOptionClick(option, button, questionsArray[currentQuestionIndex]));
        optionsGrid.appendChild(button);
    });
}

function handleOptionClick(selectedOption, clickedButton, currentQuestion) {
    const correctCount = currentQuestion.options.filter(opt => opt.isCorrect).length;

    // Lógica para preguntas con múltiples respuestas correctas (ej. Escoge dos)
    if (correctCount > 1) {
        const isSelected = selectedOptions.includes(selectedOption);
        
        if (isSelected) {
            // Deseleccionar si ya estaba marcada
            selectedOptions = selectedOptions.filter(opt => opt !== selectedOption);
            clickedButton.style.border = '';
            clickedButton.style.transform = '';
        } else {
            // Seleccionar si aún no llegamos al tope permitido
            if (selectedOptions.length < correctCount) {
                playSound('click'); // Sonidito de que escogiste una opción
                selectedOptions.push(selectedOption);
                // Feedback visual de que fue seleccionada flotante
                clickedButton.style.border = '4px solid var(--white)';
                clickedButton.style.transform = 'scale(1.02)';
            }
        }

        // Si ya seleccionó el total de respuestas pedidas, evaluar inmediatamente
        if (selectedOptions.length === correctCount) {
            const allSelectedAreCorrect = selectedOptions.every(opt => opt.isCorrect);
            evaluateAnswer(allSelectedAreCorrect, currentQuestion);
        }
        return; // Detiene la ejecución esperando el siguiente click
    }

    // Lógica rápida para preguntas de una sola respuesta
    evaluateAnswer(selectedOption.isCorrect, currentQuestion);
}

function evaluateAnswer(isCorrect, currentQuestion) {
    const allButtons = optionsGrid.querySelectorAll('.option-btn');
    
    // Deshabilitar todos los botones para evitar clicks adicionales
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.border = ''; // Limpia el borde manual temporal
        btn.style.transform = '';
    });
    
    // Cambios visuales para el feedback global
    if (isCorrect) {
        playSound('correct');
        score++;
        feedbackTitle.textContent = '¡Correcto! 🎉';
        feedbackTitle.className = 'correct';
    } else {
        playSound('incorrect');
        feedbackTitle.textContent = 'Incorrecto 😅';
        feedbackTitle.className = 'incorrect';
    }

    // Identificar cuáles son correctas para resaltarlas definitivamente
    const correctIndices = [];
    currentQuestion.options.forEach((opt, idx) => {
        if (opt.isCorrect) correctIndices.push(idx);
    });
    
    // Aplicar las animaciones correctas e incorrectas
    allButtons.forEach((btn, idx) => {
        if (correctIndices.includes(idx)) {
            btn.classList.add('correct-anim');
        } else {
            btn.classList.add('wrong-anim');
        }
    });

    showFeedback(currentQuestion);
}

function showFeedback(question) {
    feedbackContainer.classList.remove('hidden');
    
    let correctExplanation = '';
    let incorrectListHTML = '';
    
    question.options.forEach(opt => {
        if (opt.isCorrect) {
            if (correctExplanation !== '') correctExplanation += '<br/><br/>';
            correctExplanation += `<strong>${opt.text}</strong>:<br/> ${opt.explanation}`;
        } else {
            incorrectListHTML += `<li><strong>${opt.text}</strong>:<br/> ${opt.explanation}</li>`;
        }
    });
    
    correctReason.innerHTML = correctExplanation;
    incorrectReasons.innerHTML = incorrectListHTML;
    
    // Cambiar texto de botón si es la última pregunta
    const questionsArray = window.quizQuestions || [];
    if (currentQuestionIndex === questionsArray.length - 1) {
        nextBtn.textContent = 'Ver Resultados 🏆';
    } else {
        nextBtn.textContent = 'Siguiente Pregunta ➡️';
    }
    
    // Hacer scroll hacia abajo suavemente para mostrar el feedback si en móvil se corta
    setTimeout(() => {
        feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function handleNextQuestion() {
    const questionsArray = window.quizQuestions || [];
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsArray.length) {
        loadQuestion();
        // Hacer scroll de regreso arriba
        quizScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        endQuiz();
    }
}

function endQuiz() {
    playSound('end');
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const questionsArray = window.quizQuestions || [];
    finalScore.textContent = score;
    totalQuestions.textContent = questionsArray.length;
    
    const passThreshold = 46; // Criterio de aprobación
    let resultMessage = document.getElementById('result-message');
    if (!resultMessage) {
        resultMessage = document.createElement('h3');
        resultMessage.id = 'result-message';
        resultMessage.style.marginTop = '1.5rem';
        resultMessage.style.fontSize = '1.5rem';
        resultMessage.style.textAlign = 'center';
        resultMessage.style.fontWeight = 'bold';
        
        const scoreCard = document.querySelector('.score-card');
        scoreCard.parentNode.insertBefore(resultMessage, scoreCard.nextSibling);
    }
    
    if (score >= passThreshold) {
        resultMessage.textContent = '¡Felicidades! Has aprobado el simulador 🎉';
        resultMessage.style.color = 'var(--correct-color)';
        finalScore.style.color = 'var(--correct-color)';
    } else {
        resultMessage.textContent = `No aprobado. Necesitas al menos ${passThreshold} aciertos. 📖`;
        resultMessage.style.color = 'var(--incorrect-color)';
        finalScore.style.color = 'var(--incorrect-color)';
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = TIME_LIMIT;
    timerDisplay.style.color = '';
    timerDisplay.style.animation = '';
    
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Ejecutar App
document.addEventListener('DOMContentLoaded', init);
