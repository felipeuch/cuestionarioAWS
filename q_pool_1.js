window.quizQuestions = [
    {
        question: "Un cliente está implementando una nueva aplicación y debe elegir una región de AWS. ¿Cuál de los siguientes factores podría influir en la decisión del cliente? (Escoge dos.)",
        options: [
            { text: "Latencia reducida a los usuarios", isCorrect: true, explanation: "Acercar los recursos al usuario final minimiza el tiempo de respuesta." },
            { text: "La presentación de la aplicación en el idioma local.", isCorrect: false, explanation: "El idioma se gestiona en la aplicación, independiente de la región." },
            { text: "Cumplimiento de la soberanía de datos", isCorrect: true, explanation: "Permite cumplir con leyes locales que prohíben sacar datos del país." },
            { text: "Costos de enfriamiento en climas más cálidos", isCorrect: false, explanation: "Este es un costo operativo interno de Amazon, no del cliente." },
            { text: "Proximidad a la oficina del cliente para visitas on-site", isCorrect: false, explanation: "AWS no permite visitas físicas a sus centros de datos." }
        ]
    },
    {
        question: "¿Qué servicio de almacenamiento se puede utilizar como una opción de bajo costo para alojar sitios web estáticos?",
        options: [
            { text: "Amazon Glacier", isCorrect: false, explanation: "Es exclusivo para archivar datos a largo plazo con acceso lento." },
            { text: "Amazon DynamoDB", isCorrect: false, explanation: "Es una base de datos NoSQL, no un servidor de archivos web." },
            { text: "Amazon Elastic File System (Amazon EFS)", isCorrect: false, explanation: "Es un disco compartido para sistemas Linux, no expone contenido web." },
            { text: "Amazon Simple Storage Service (Amazon S3)", isCorrect: true, explanation: "Permite alojar contenido estático web de manera muy económica." }
        ]
    },
    {
        question: "¿Qué modelo de precios de instancias de Amazon EC2 puede ofrecer descuentos de hasta el 90 %?",
        options: [
            { text: "Reserved Instances", isCorrect: false, explanation: "Ofrecen hasta 72% de descuento, pero exigen plazo de 1 a 3 años." },
            { text: "On-Demand", isCorrect: false, explanation: "Es el modelo más costoso ya que pagas la tarifa completa por hora." },
            { text: "Dedicated Hosts", isCorrect: false, explanation: "Alquilas un servidor físico completo, es la opción más cara." },
            { text: "Spot Instances", isCorrect: true, explanation: "Usa capacidad inactiva de AWS con descuentos de hasta el 90%." }
        ]
    },
    {
        question: "¿Cuál de los siguientes servicios en la nube de AWS se puede utilizar para ejecutar una base de datos relacional administrada por el cliente?",
        options: [
            { text: "Amazon EC2", isCorrect: true, explanation: "Al ser un servidor virtual, te da control total para instalar tu propio motor sql." },
            { text: "Amazon Route 53", isCorrect: false, explanation: "Es un servicio global de nombres de dominio (DNS)." },
            { text: "Amazon ElastiCache", isCorrect: false, explanation: "Es un almacén temporal en memoria, no una base relacional." },
            { text: "Amazon DynamoDB", isCorrect: false, explanation: "Es base de datos NoSQL administrada por AWS, no por el cliente." }
        ]
    },
    {
        question: "Una empresa está buscando una solución de data warehouse escalable. ¿Cuál de las siguientes soluciones de AWS satisfaría las necesidades de la empresa?",
        options: [
            { text: "Amazon Simple Storage Service (Amazon S3)", isCorrect: false, explanation: "Es un almacén de objetos, no orientado a consultas de bases de datos complejas." },
            { text: "Amazon DynamoDB", isCorrect: false, explanation: "Es para almacenamiento clave-valor, no estructurado analíticamente." },
            { text: "Amazon Kinesis", isCorrect: false, explanation: "Se utiliza para procesar transmisiones de datos en tiempo real." },
            { text: "Amazon Redshift", isCorrect: true, explanation: "Es el almacén de datos (warehouse) a petabytes de AWS." }
        ]
    },
    {
        question: "¿Qué afirmación describe mejor a Elastic Load Balancing?",
        options: [
            { text: "Traduce un nombre de dominio en una dirección IP usando DNS.", isCorrect: false, explanation: "Esa es la función específica de Amazon Route 53." },
            { text: "Distribuye el tráfico de aplicaciones entrantes a través de una o más instancias de Amazon EC2.", isCorrect: true, explanation: "Equilibra la carga redirigiendo a los servidores menos ocupados." },
            { text: "Recopila métricas en instancias Amazon EC2 conectadas.", isCorrect: false, explanation: "La recolección de métricas la realiza Amazon CloudWatch." },
            { text: "Ajusta automáticamente la cantidad de instancias de Amazon EC2 para admitir el tráfico entrante.", isCorrect: false, explanation: "Esta función pertenece a Amazon Auto Scaling." }
        ]
    },
    {
        question: "¿Cuáles de las siguientes son formas válidas para que un cliente interactúe con los servicios de AWS? (Escoge dos.)",
        options: [
            { text: "Command line interface", isCorrect: true, explanation: "Permite gestionar servicios ejecutando comandos de texto simples." },
            { text: "On-premises", isCorrect: false, explanation: "Se refiere a centros de datos locales físicos gubernamentales o privados." },
            { text: "Software Development Kits", isCorrect: true, explanation: "Facilita programar llamadas directas a AWS desde lenguajes como Java." },
            { text: "Software-as-a-service", isCorrect: false, explanation: "Es un modelo comercial genérico de suscripción de licencias." },
            { text: "Hybrid", isCorrect: false, explanation: "Es un tipo de arquitectura, no un método de interacción." }
        ]
    },
    {
        question: "Las múltiples regiones de la nube de AWS son un ejemplo de:",
        options: [
            { text: "agilidad.", isCorrect: false, explanation: "Agilidad es poder implementar cosas en minutos en vez de meses." },
            { text: "global infrastructure.", isCorrect: true, explanation: "Las regiones conforman la red de infraestructura global de AWS." },
            { text: "elasticity.", isCorrect: false, explanation: "Es la capacidad de crecer o reducir recursos según demanda." },
            { text: "precios de pago por uso.", isCorrect: false, explanation: "Es un beneficio financiero, no estructural." }
        ]
    },
    {
        question: "¿Cuál de los siguientes servicios de AWS se puede utilizar para entregar grandes cantidades de contenido de video en línea con la latencia más baja posible? (Escoge dos.)",
        options: [
            { text: "AWS Storage Gateway", isCorrect: false, explanation: "Conecta servidores locales con almacenamiento S3 en nube." },
            { text: "Amazon S3", isCorrect: true, explanation: "Proporciona el almacén de archivo original seguro a bajo costo." },
            { text: "Amazon Elastic File System (EFS)", isCorrect: false, explanation: "Es un disco duro de red interno, no distribuye video al público." },
            { text: "Amazon Glacier", isCorrect: false, explanation: "Es almacenamiento denso con horas de demora para recuperación." },
            { text: "Amazom CloudFront", isCorrect: true, explanation: "Es la red de entrega que almacena copias de video velozmente global." }
        ]
    },
    {
        question: "Los servidores web que se ejecutan en Amazon EC2 acceden a una aplicación heredada que se ejecuta en un centro de datos corporativo. ¿Qué término describiría este modelo?",
        options: [
            { text: "Cloud-native", isCorrect: false, explanation: "Sería solo si absolutamente todo está alojado en la nube." },
            { text: "Partner network", isCorrect: false, explanation: "Es la red de empresas afiliadas a AWS, no una configuración de servidores." },
            { text: "Hybrid architecture", isCorrect: true, explanation: "Combina recursos de nube pública con centros de datos locales." },
            { text: "Infrastructure as a service", isCorrect: false, explanation: "Es un modelo de venta genérico de computación base virtual." }
        ]
    },
    {
        question: "¿Qué servicio proporciona una cantidad prácticamente ilimitada de almacenamiento de objetos en línea de alta duración?",
        options: [
            { text: "Amazon Redshift", isCorrect: false, explanation: "Almacena bases de datos relacionales empresariales pesadas." },
            { text: "Amazon Elastic File System (Amazon EFS)", isCorrect: false, explanation: "Es almacenamiento a nivel de bloque para carpetas (NFS) compartidas." },
            { text: "Amazon Elastic Container Service (Amazon ECS)", isCorrect: false, explanation: "Es un orquestador para ejecutar código en contenedores." },
            { text: "Amazon S3", isCorrect: true, explanation: "Es nativamente el servicio ilimitado de alto rendimiento para objetos." }
        ]
    },
    {
        question: "¿Cuál de las siguientes entidades de administración de acceso e identidad (IAM) está asociada con un ID de clave de acceso y una clave de acceso secreta cuando se utiliza la interfaz de línea de comandos de AWS (AWS CLI)?",
        options: [
            { text: "IAM group", isCorrect: false, explanation: "Es solo un elemento organizador de permisos genéricos." },
            { text: "IAM user", isCorrect: true, explanation: "Un usuario físico requiere claves explícitas de acceso largo." },
            { text: "IAM role", isCorrect: false, explanation: "Otorga claves estrictamente efímeras temporales por minutos." },
            { text: "IAM policy", isCorrect: false, explanation: "Es un documento de texto que otorga o rechaza el pase." }
        ]
    },
    {
        question: "¿Qué servicio administrado de AWS se utiliza para alojar bases de datos?",
        options: [
            { text: "AWS Batch", isCorrect: false, explanation: "Acelera trabajos informáticos por lotes para cálculo avanzado." },
            { text: "AWS Artifact", isCorrect: false, explanation: "Guarda papeleo legal e informes de seguridad cumplida." },
            { text: "AWS Data Pipeline", isCorrect: false, explanation: "Mueve y transforma información fluida hacia plataformas." },
            { text: "Amazon RDS", isCorrect: true, explanation: "Es por excelencia el administrador relacional (MySql, Oracle)." }
        ]
    },
    {
        question: "¿Qué servicio de AWS proporciona una solución de almacenamiento de archivos compartidos simple y escalable para su uso con AWS basado en Linux y servidores locales?",
        options: [
            { text: "Amazon S3", isCorrect: false, explanation: "Es archivo de objetos tipo web HTTP, no montaje linux normal." },
            { text: "Amazon Glacier", isCorrect: false, explanation: "Sirve como depósito seguro congelado muy barato y lento." },
            { text: "Amazon EBS", isCorrect: false, explanation: "Disco montable que sirve solo para una máquina, casi nunca multiconectado." },
            { text: "Amazon EFS", isCorrect: true, explanation: "Permite que múltiples servidores servidores Linux lo monten simultáneamente." }
        ]
    },
    {
        question: "¿Qué servicio de AWS se debe usar para el almacenamiento a largo plazo y de bajo costo de copias de seguridad de datos?",
        options: [
            { text: "Amazon RDS", isCorrect: false, explanation: "Utilizado para tablas de bases de datos calientes de mayor precio." },
            { text: "Amazon Glacier", isCorrect: true, explanation: "Pensado literalmente para auditorías de 10 años, a costo casi nulo." },
            { text: "AWS Snowball", isCorrect: false, explanation: "Es la caja fuerte física entregada por mensajería al instante." },
            { text: "AWS EBS", isCorrect: false, explanation: "Usado para hospedar el Sistema Operativo, su nivel financiero es costoso." }
        ]
    },
    {
        question: "Una empresa quiere reducir el espacio de cómputo físico que usan los desarrolladores para ejecutar el código. ¿Qué servicio satisfaría esa necesidad al permitir arquitecturas sin servidor?",
        options: [
            { text: "Amazon Elastic Compute Cloud (Amazon EC2)", isCorrect: false, explanation: "Justamente requiere administrar directamente el servidor interno operativo." },
            { text: "AWS Lambda", isCorrect: true, explanation: "Permite inyectar código y olvidarse plenamente del servidor (Serverless)." },
            { text: "Amazon DynamoDB", isCorrect: false, explanation: "Pese a ser Serverless, es repositorio de datos, no ejecuta código ni scripts." },
            { text: "AWS CodeCommit", isCorrect: false, explanation: "Donde dejas almacenado tus proyectos git estáticos." }
        ]
    },
    {
        question: "¿Dónde debe ir una empresa para buscar listados de software de proveedores de software independientes para encontrar, probar, comprar e implementar software que se ejecuta en AWS?",
        options: [
            { text: "AWS Marketplace", isCorrect: true, explanation: "Es la tienda de terceros oficial virtual para complementos y aplicaciones prefabricadas." },
            { text: "Amazon Lumberyard", isCorrect: false, explanation: "Un viejo servicio gratuito que elaboraba videojuegos tridimensionales." },
            { text: "AWS Artifact", isCorrect: false, explanation: "Descarga reportes técnicos validando ISO internacionales de amazon global." },
            { text: "Amazon CloudSearch", isCorrect: false, explanation: "Filtro de indexado privado analítico de búsqueda de documentos internos." }
        ]
    },
    {
        question: "¿Qué servicio de AWS brinda la capacidad de administrar la infraestructura como código?",
        options: [
            { text: "AWS CodePipeline", isCorrect: false, explanation: "Orquesta la sucesión productiva programable orientada al desarrollador web." },
            { text: "AWS CodeDeploy", isCorrect: false, explanation: "Instalador automático masivo empujando actualizaciones sobre servidores IaaS vigentes." },
            { text: "AWS Direct Connect", isCorrect: false, explanation: "Enlace físico vía fibra óptica de empresas privadas al puerto físico nube." },
            { text: "AWS CloudFormation", isCorrect: true, explanation: "Construye esquemas enteros en minutos modelados en idioma Json." }
        ]
    },
    {
        question: "Si un cliente necesita auditar la administración de cambios de los recursos de AWS, ¿cuál de los siguientes servicios de AWS debería usar el cliente?",
        options: [
            { text: "AWS Config", isCorrect: true, explanation: "Inspecciona el pasado documentando el segundo de alteración técnica material de seguridad." },
            { text: "AWS Trusted Advisor", isCorrect: false, explanation: "Monitor genérico recomendando optimizaciones de arquitectura generales preventivas." },
            { text: "Amazon CloudWatch", isCorrect: false, explanation: "Captura información estadística referente al cpu saturado de la aplicación subyacente nativa activa." },
            { text: "Amazon Inspector", isCorrect: false, explanation: "Es un robot antivirus cazador de vulnerabilidades de programas desactualizados Linux/windows." }
        ]
    },
    {
        question: "Una instancia de Amazon EC2 se ejecuta solo cuando es necesario, pero debe permanecer activa durante la duración del proceso. ¿Cuál es la opción de compra más adecuada?",
        options: [
            { text: "Dedicated Instances", isCorrect: false, explanation: "Gasto super extremo ya que aisla un servidor entero por ti." },
            { text: "Spot Instances", isCorrect: false, explanation: "Te pueden apagar tu servidor en pleno proceso abruptamente." },
            { text: "On-Demand Instances", isCorrect: true, explanation: "Nadie la apaga forzosamente y pagas puramente las horas justas ininterrumpidas." },
            { text: "Reserved Instances", isCorrect: false, explanation: "Te obligan a mantenerla años atada sin beneficio a interrupciones necesarias." }
        ]
    },
    {
        question: "¿Qué plan de AWS Support brinda acceso a revisiones arquitectónicas y operativas, así como acceso las 24 horas, los 7 días de la semana, a ingenieros sénior de soporte en la nube a través de correo electrónico, chat en línea y teléfono?",
        options: [
            { text: "Basic", isCorrect: false, explanation: "Plan gratuito inicial libre sin ayuda especializada conversacional." },
            { text: "Business", isCorrect: false, explanation: "Pese a poseer servicio veloz chat, no provee un equipo dedicado arquitecto permanente personal." },
            { text: "Developer", isCorrect: false, explanation: "Abarca ayuda lenta pero mediante email demorado corporativo oficial solo laboral." },
            { text: "Enterprise", isCorrect: true, explanation: "Brinda expertos consultores proactivos que están asiduamente presentes para asesorías en videollamada." }
        ]
    },
    {
        question: "¿Cuál es el mejor recurso para que un usuario encuentre información e informes relacionados con el cumplimiento de AWS?",
        options: [
            { text: "AWS Artifact", isCorrect: true, explanation: "Aporta descargas confidenciales directas de acreditaciones globales como ISO, PCI médicas de todo Amazon." },
            { text: "AWS Marketplace", isCorrect: false, explanation: "Sitio comercial oficial publicitario de soluciones privadas como firewalls ajenos integrables externos temporales pagos directos." },
            { text: "Amazon Inspector", isCorrect: false, explanation: "Herramienta operativa anticuada automática de virus nativa instalada individual para proteger red interna vulnerabilidades." },
            { text: "AWS Support", isCorrect: false, explanation: "Solo gestionan problemas y caídas o ayuda administrativa al cliente, no emiten certificados auditorías." }
        ]
    },
    {
        question: "¿Qué es una zona de disponibilidad en AWS?",
        options: [
            { text: "Uno o más centros de datos físicos", isCorrect: true, explanation: "Son bloques locales dotados con múltiples edificios con fuente vital independiente para evitar averías múltiples simultáneas." },
            { text: "Una ubicación geográfica completamente aislada", isCorrect: false, explanation: "Es la descripción estricta formal exclusiva oficial concerniente para la Región." },
            { text: "Una o más ubicaciones de borde en todo el mundo", isCorrect: false, explanation: "Alude estrictamente y de lleno al servicio mundial Amazon Cloudfront cachés fronterizos." },
            { text: "Una ubicación de centro de datos con una sola fuente de energía y redes", isCorrect: false, explanation: "Implica todo lo opuesto arriesgado, siendo inoperante a un apagón global eléctrico barrial." }
        ]
    },
    {
        question: "Una empresa necesita protección contra ataques de denegación de servicio distribuido (DDoS) ampliados en su sitio web y la asistencia de expertos de AWS durante tales eventos. ¿Qué servicio administrado de AWS cumplirá estos requisitos?",
        options: [
            { text: "AWS Shield Advanced", isCorrect: true, explanation: "Permite escudo integral financiero con apoyo táctico en vivo 24/7." },
            { text: "AWS Firewall Manager", isCorrect: false, explanation: "Permite esparcir centralizadamente normativas web de red múltiples, sin mitigar ataques colosales directos." },
            { text: "AWS WAF", isCorrect: false, explanation: "Detiene hackeos convencionales inyectables (bots locales y SQLs limitados lógicos pequeños)." },
            { text: "Amazon GuardDuty", isCorrect: false, explanation: "Actúa vigilando sigilosamente las actividades en logs como un sistema detector interno avisador pasivo." }
        ]
    },
    {
        question: "¿Qué método ayuda a optimizar los costos de los usuarios que se trasladan a la nube de AWS?",
        options: [
            { text: "Pagando solo por lo que se usa", isCorrect: true, explanation: "Pilar esencial; puedes pagar tu servidor por tres horas e inactivarlo al dormir eliminando cargos." },
            { text: "Comprar hardware antes de que sea necesario", isCorrect: false, explanation: "Modelo capital ineficiente que la nube AWS abuele definitivamente desterrando inversión inicial incierta." },
            { text: "Aprovisionamiento manual de recursos en la nube", isCorrect: false, explanation: "Es contrario al ahorro. Un humano activo levantando computadoras falla operativamente." },
            { text: "Compra para la máxima carga posible", isCorrect: false, explanation: "Es el viejo modelo local provocando derroches de procesadores caros inactivos dormidos gran porción del mes." }
        ]
    },
    {
        question: "La aplicación de una empresa tiene horas de inicio y finalización flexibles. ¿Qué modelo de precios de Amazon EC2 será el MÁS rentable?",
        options: [
            { text: "On-Demand Instances", isCorrect: false, explanation: "Tarifa tope sin aprovechar su gran flexibilidad y cortes permitidos por ellos." },
            { text: "Spot Instances", isCorrect: true, explanation: "Al ser tolerante, AWS te alquila remanentes con descuentos colosales (hasta el 90%) compensando el riesgo corte eventual." },
            { text: "Reserved Instances", isCorrect: false, explanation: "Las reservas atan por compromiso rígido un tiempo permanente estricto." },
            { text: "Dedicated Hosts", isCorrect: false, explanation: "Físico carísimo." }
        ]
    },
    {
        question: "¿Qué servicio de AWS facilita la creación y administración de usuarios y grupos de AWS y les brinda acceso seguro a los recursos de AWS sin cargo?",
        options: [
            { text: "AWS Direct Connect", isCorrect: false, explanation: "Conector red Telecom." },
            { text: "Amazon Connect", isCorrect: false, explanation: "Call Center remoto puro por voz." },
            { text: "AWS Identity and Access Management (IAM)", isCorrect: true, explanation: "La herramienta gratuita gestora oficial perimetral base general de permisos accesos contraseñas vital base troncal autenticación universal amazon AWS total integrador nativo propio nube." },
            { text: "AWS Firewall Manager", isCorrect: false, explanation: "Asigna reglas multi cuentas global Waf." }
        ]
    },
    {
        question: "Un usuario debe generar un informe que describa el estado de las comprobaciones de seguridad clave en una cuenta de AWS. El informe debe incluir: El estado de los permisos del depósito de Amazon S3. Si la autenticación multifactor está habilitada para el usuario raíz de la cuenta de AWS. Si corresponde los grupos de seguridad están configurados para permitir el acceso sin restricciones ¿Dónde se puede encontrar toda esta información en un solo lugar?",
        options: [
            { text: "Amazon QuickSight dashboard", isCorrect: false, explanation: "Hace cuadros dinámicos graficados contables o bases analíticas." },
            { text: "AWS CloudTrail trails", isCorrect: false, explanation: "Log histórico auditoria API." },
            { text: "AWS Trusted Advisor report", isCorrect: true, explanation: "Chequea activamente con semáforo colores (bien/mal) todo aquello que indicas (S3 seguro, MFA activo perimetral, Grupos Red fallando)." },
            { text: "IAM credential report", isCorrect: false, explanation: "Únicamente aborda si una contraseña base clave secreta cumplió 90 días o caduca, no toca S3." }
        ]
    },
    {
        question: "Un Cloud Practitioner está desarrollando un plan de recuperación ante desastres y tiene la intención de replicar datos entre varias áreas geográficas. ¿Cuál de los siguientes cumple con estos requisitos?",
        options: [
            { text: "AWS Accounts", isCorrect: false, explanation: "Aislamiento puramente lógico." },
            { text: "AWS Regions", isCorrect: true, explanation: "Separan de lado a lado del planeta (Por ejemplo Asia vs Europa continente ajeno)." },
            { text: "Availability Zones", isCorrect: false, explanation: "Solo dividen la ciudad (100km maximos), un terremoto inmenso afectaría toda una AZ junta por la naturaleza adyacente regional perimetral local física directa próxima geográfica unida local." },
            { text: "Edge locations", isCorrect: false, explanation: "Caché rápido provisional veloz temporal." }
        ]
    },
    {
        question: "¿Qué servicio o característica de AWS permite a un usuario escalar fácilmente la conectividad entre miles de VPC?",
        options: [
            { text: "VPC peering", isCorrect: false, explanation: "Formaría un espagueti gigantesco de túneles cruzados individuales imposibles complejos operativamente inescalables lógicos puramente directos red uno por uno." },
            { text: "AWS Transit Gateway", isCorrect: true, explanation: "Actúa como núcleo distribuidor router donde todas se adhieren y enrutan armónicamente centralizando todo el caos redil múltiple masivo nube regional conectores centralizados matriz red base nativa routing general." },
            { text: "AWS Direct Connect", isCorrect: false, explanation: "Enlace fibra privado On-premises." },
            { text: "AWS Global Accelerator", isCorrect: false, explanation: "Velocidad borde red." }
        ]
    },
    {
        question: "¿Qué panel de AWS muestra información relevante y oportuna para ayudar a los usuarios a administrar eventos en curso y proporciona notificaciones proactivas para ayudar a planificar las actividades programadas?",
        options: [
            { text: "AWS Service Health Dashboard", isCorrect: false, explanation: "Avisa estado general público masivo global Estados Unidos red." },
            { text: "AWS Personal Health Dashboard", isCorrect: true, explanation: "Te notifica si tus servidores personales únicos fallarán pronto." },
            { text: "AWS Trusted Advisor dashboard", isCorrect: false, explanation: "Mejoras." },
            { text: "Amazon CloudWatch dashboard", isCorrect: false, explanation: "Métricas ram red cpu gráficas." }
        ]
    },
    {
        question: "¿Qué servicio de almacenamiento híbrido de AWS permite que las aplicaciones locales de un usuario utilicen sin problemas el almacenamiento en la nube de AWS?",
        options: [
            { text: "AWS Backup", isCorrect: false, explanation: "Backups snapshot cloud automatizados." },
            { text: "Amazon Connect", isCorrect: false, explanation: "Telefonia virtual." },
            { text: ". AWS Direct Connect", isCorrect: false, explanation: "Cable red fibra privada." },
            { text: "AWS Storage Gateway", isCorrect: true, explanation: "Engaña sistemas locales actuando como Disco NAS pero sube asíncronamente archivos S3 nube puenteando ambos mundos servidor híbrido local virtual red corporativo empresa local data remoto local S3 puente nube enlace." }
        ]
    },
    {
        question: "¿Cuál de los siguientes actúa como un firewall virtual en el nivel de instancia de Amazon EC2 para controlar el tráfico de una o más instancias?",
        options: [
            { text: "Access keys", isCorrect: false, explanation: "Llaves identidad Api programación cliente usuario root cuenta." },
            { text: "Virtual private gateways", isCorrect: false, explanation: "Túneles empresas router." },
            { text: "Security groups", isCorrect: true, explanation: "Nativo primer estado barrera por maquina o servidor, abriendo o clausurando Puertos tcp udp ip origen exactos máquina EC2 barrera primera defensa local puerto maquina directo servidor cortafuego O.S nativo redil lógico instancia red AWS O.S EC2 instanciado." },
            { text: "Access Control Lists (ACL)", isCorrect: false, explanation: "Barrera secundaria externa al borde perimetral que actúa a nivel Subred (Subnet)." }
        ]
    },
    {
        question: "¿Cuál es la forma más eficiente de establecer conectividad de red desde las instalaciones a varias VPC en diferentes regiones de AWS?",
        options: [
            { text: "Use AWS Direct Connect", isCorrect: false, explanation: "Enrutamiento no cruza nube general directamente automático expansivo nativo orgánico multidireccional redil matriz malla interconexiones nube directa matriz routing router masivo malla virtual unificada hub VPC nube redil central inter redes general matriz base sin estrella." },
            { text: "Use AWS VPN", isCorrect: false, explanation: "Una IPsect VPN." },
            { text: "Use AWS Client VPN", isCorrect: false, explanation: "Usuarios aislados oficinas VPN." },
            { text: "Use an AWS Transit Gateway", isCorrect: true, explanation: "El router ideal consolidado conectando oficina, red local, regiones nube simultaneas ilimitadas expansivas unidas redil router expansivo unificado estrella VPC matriz." }
        ]
    },
    {
        question: "¿Qué servicio o característica de AWS ayuda a restringir los servicios, recursos y acciones de API individuales de AWS a los que pueden acceder los usuarios y roles en cada cuenta de miembro?",
        options: [
            { text: "Amazon Cognito", isCorrect: false, explanation: "Gestor identidad Apps Front web móvil login portal base cloud AWS nativo usuarios clientes portal identidad general login." },
            { text: "AWS Organizations", isCorrect: true, explanation: "Con sus políticas universales restringe (SCP) qué permisos gozan centenares cuentas afiliadas filiales simultáneamente nube gobernanza nativa masiva unificada permisos cuentas redil general control empresa macro root AWS." },
            { text: "AWS Shield", isCorrect: false, explanation: "Defensa cibernética redes." },
            { text: "AWS Firewall Manager", isCorrect: false, explanation: "Rige WAF cortafuegos aplicativos redes web portal." }
        ]
    },
    {
        question: "¿Qué clase de almacenamiento de Amazon S3 está optimizada para proporcionar acceso a datos con requisitos de resiliencia más bajos, pero acceso rápido cuando sea necesario, como copias de seguridad duplicadas?",
        options: [
            { text: "Amazon S3 Standard", isCorrect: false, explanation: "Costoso premium múltiple AZ local." },
            { text: "Amazon S3 Glacier Deep Archive", isCorrect: false, explanation: "Gélido lento extremo archivación anual." },
            { text: "Amazon S3 One Zone-Infrequent Access", isCorrect: true, explanation: "Abaratado. Conserva velocidad bajada pero se deposita única cuadra AZ frágil abolición tolerancia fallo AWS." },
            { text: "Amazon S3 Glacier", isCorrect: false, explanation: "Atraso y horas lentitud archivador auditorias nubes bóveda frías reposos." }
        ]
    }
];
