window.quizQuestions3 = [
    {
        question: "Bajo el modelo de responsabilidad compartida de AWS, ¿el cliente administra cuál de los siguientes? (Elija dos opciones).",
        options: [
            { text: "Desmantelamiento de dispositivos de almacenamiento físico", isCorrect: false, explanation: "La destrucción de discos físicos duros es exclusiva norma operativa privada directa Amazon AWS seguridad de instalaciones perimetrales." },
            { text: "Configuración de grupo de seguridad y ACL", isCorrect: true, explanation: "El cliente parametriza qué IPs ingresan o los puertos 80 web abiertos mediante Seguridad perimetral O.S red VPC." },
            { text: "Administración de parches de un sistema operativo de instancia de Amazon RDS", isCorrect: false, explanation: "RDS es motor manejado, AWS parchea base datos servidores operativos internos invisibles clientes nube automática amazónica gestor mantenimientos lógicos base PaaS." },
            { text: "Control de acceso físico a centros de datos", isCorrect: false, explanation: "Físico, cercos cortafuegos y biometría es absoluto cargo de AWS corporativo global datacenter seguridad pilar central redil instalaciones bases amazon." },
            { text: "Gestión de parches de un sistema operativo de instancia Amazon EC2", isCorrect: true, explanation: "En modelo IaaS virtual, el cliente monta Windows y asume entera carga de actualización y parches lógicos servidor virus software cliente amazon nube." }
        ]
    },
    {
        question: "¿Qué servicio de AWS es adecuado para una carga de trabajo basada en eventos?",
        options: [
            { text: "Amazon EC2", isCorrect: false, explanation: "Es un computador encendido continuamente 24/7." },
            { text: "AWS Elastic Beanstalk", isCorrect: false, explanation: "Orquestador de aplicaciones monolíticas siempre en ejecución activa." },
            { text: "AWS Lambda", isCorrect: true, explanation: "Ejecuta fragmentos de código milisegundos tras una perturbación, archivo subido S3 o Click sin tener servidores gestionables (Serverless event driven architecture)." },
            { text: "Amazon Lumberyard", isCorrect: false, explanation: "Motor gráfico 3D diseño videojuegos." }
        ]
    },
    {
        question: "¿Cuál es una propuesta de valor de la nube de AWS?",
        options: [
            { text: "AWS es responsable de la seguridad en la nube de AWS", isCorrect: false, explanation: "Falso AWS es responsable de la seguridad DE LA NUBE, no EN LA nube cliente." },
            { text: "No se requiere contrato a largo plazo", isCorrect: true, explanation: "Pago por consumo On-demand es el pilar libertador donde borras máquinas y evitas tarifas obligatorias cancelatorias nube AWS agilidad comercial Amazon red general beneficios nube." },
            { text: "Aprovisione nuevos servidores en días", isCorrect: false, explanation: "AWS es cuestión de Instantes y Segundos Velocidad agilidad nube amazónica virtual rápida provisiones inmediatas clicks rápidos escalado minutos tiempos veloces amazon despliegues agilidad nube provisiones red." },
            { text: "AWS administra las aplicaciones de los usuarios en la nube de AWS", isCorrect: false, explanation: "El desarrollador gestiona su código nodeJS y app Amazon ignora tus programaciones privadas código clientes nube IaaS." }
        ]
    },
    {
        question: "¿Cuál es una característica de la replicación entre regiones de Amazon S3?",
        options: [
            { text: "Tanto los depósitos S3 de origen como los de destino deben tener el control de versiones deshabilitado", isCorrect: false, explanation: "Exige estrictamente lo opuesto: Mantener el versionamiento habilitado para ambos baldes seguridad base operaciones S3 CRR." },
            { text: "Los depósitos S3 de origen y destino no pueden estar en diferentes regiones de AWS", isCorrect: false, explanation: "Precisamente el Cross Region Replication, su naturaleza obliga el cruce entre diferentes regiones AWS para ser tolerante al fallo geográfico extremo nube global Amazonas." },
            { text: "Los depósitos de S3 configurados para la replicación entre regiones pueden ser propiedad de una sola cuenta de AWS o de cuentas diferentes", isCorrect: true, explanation: "Efectivo para consolidar archivos entre empresas filiales o respaldo a otras billeteras ajenas cruzadas cuentas amazónicas corporativas seguridad S3 nube arquitecturas respaldos red multi account bases AWS." },
            { text: "El propietario del depósito S3 de origen debe tener las regiones de AWS de origen y destino deshabilitadas para su cuenta", isCorrect: false, explanation: "Absurdo ilógico, un recurso exige región encendida." }
        ]
    },
    {
        question: "¿De qué es responsable un usuario cuando ejecuta una aplicación en la nube de AWS?",
        options: [
            { text: "Administrar hardware físico", isCorrect: false, explanation: "AWS Physical Facility." },
            { text: "Actualización del hipervisor subyacente", isCorrect: false, explanation: "AWS hypervisor host físico Virtualización Amazon." },
            { text: "Proporcionar una lista de usuarios aprobados para el acceso al centro de datos", isCorrect: false, explanation: "Nadie ingresa físicamente AWS Seguridad física amazón datacenter centro bases Amazon O.S." },
            { text: "Gestión de actualizaciones de software de aplicaciones", isCorrect: true, explanation: "Las apps, Node js, bases de datos subidas manuales son mandato tuyo exclusivo mantención arquitectura nube responsabilidad cliente." }
        ]
    },
    {
        question: "Una empresa que hace negocios en línea necesita ofrecer rápidamente nuevas funciones de manera iterativa, minimizando el tiempo de comercialización. ¿Qué característica de la nube de AWS puede proporcionar esto?",
        options: [
            { text: "Elasticidad", isCorrect: false, explanation: "Manejar Picos tráfico Scale." },
            { text: "Alta disponibilidad", isCorrect: false, explanation: "Evitar Caídas Down Time." },
            { text: "Agilidad", isCorrect: true, explanation: "Agility propicia el Time TO Market desplegar e inventar código en 5 minutos versus 4 meses compras cableados infraestructura vieja innovación comercial veloces despliegues nube bases amazón arquitecturas red matriz." },
            { text: "Fiabilidad", isCorrect: false, explanation: "Resistencia infraestructura cortes fallos robustez resiliencia nube arquitecturas Amazon redes fallos nubes AWS O.S tolerantes confiable nube operativas estables amazonas." }
        ]
    },
    {
        question: "¿Qué características o servicios se pueden usar para monitorear los costos y gastos de una cuenta de AWS? (Escoge dos.)",
        options: [
            { text: "AWS Cost and Usage report", isCorrect: true, explanation: "Llamado CUR, genera CSV de Excel denso y granular del consumo contable masivo de la compañía AWS." },
            { text: "AWS product pages", isCorrect: false, explanation: "Página marketing corporativa web." },
            { text: "AWS Simple Monthly Calculator", isCorrect: false, explanation: "Calculadora de presupuestos futuros prospectivos proyectados, no histórico monitor gastado." },
            { text: "Billing alerts and Amazon CloudWatch alarms", isCorrect: true, explanation: "Dispara correos si facturación rebasó métricas de gastos prefijados Amazon." },
            { text: "AWS Price List API", isCorrect: false, explanation: "Lista cruda programación catálogo." }
        ]
    },
    {
        question: "Amazon Route 53 permite a los usuarios:",
        options: [
            { text: "cifrar datos en tránsito", isCorrect: false, explanation: "HTTPS KMS certificate SSL." },
            { text: "registrar nombres de dominio DNS", isCorrect: true, explanation: "Actúa de NameServer y registradora de páginas .com IP routing mundial AWS DNS nube amazon redil central internet dominios webs Amazon O.S integraciones base arquitecturas nube global port 53." },
            { text: "generar y administrar certificados SSL", isCorrect: false, explanation: "AWS Certificate Manager." },
            { text: "establecer una conexión de red dedicada a AWS", isCorrect: false, explanation: "AWS direct conect." }
        ]
    },
    {
        question: "¿Qué servicio de AWS ayuda a identificar actividades malintencionadas o no autorizadas en cuentas y cargas de trabajo de AWS?",
        options: [
            { text: "Amazon Rekognition", isCorrect: false, explanation: "Imágenes AI." },
            { text: "AWS Trusted Advisor", isCorrect: false, explanation: "Optimizador general best principles nube." },
            { text: "Amazon GuardDuty", isCorrect: true, explanation: "IA vigilando y encontrando Bitcoins minados ilegales o logins sospechosos rusia Logs Red DNS Cloudtrail nube protector Amazon inteligencia artificial seguridad perimetros amenazas analítica Amazon." },
            { text: "Amazon CloudWatch", isCorrect: false, explanation: "Grafica uso CPU ram O.S." }
        ]
    },
    {
        question: "Una empresa quiere probar una solución de comercio electrónico de terceros antes de decidir usarla a largo plazo. ¿Qué servicio o herramienta de AWS apoyará este esfuerzo?",
        options: [
            { text: "AWS Marketplace", isCorrect: true, explanation: "Catálogo universal de licencias Firewall Cisco o CMS comprables integrables con 1 clic de proveedores independientes AWS nubes base tienda software Amazon." },
            { text: "AWS Partner Network (APN)", isCorrect: false, explanation: "Firmas subcontratadas consultoras Amazon tercerizadas nube." },
            { text: "AWS Managed Services", isCorrect: false, explanation: "Empleados directos AWS controlando de fondo corporación tu infraestructura en base mensual operaciones delegadas." },
            { text: "AWS Service Catalog", isCorrect: false, explanation: "Menú interno del Administrador a sus Desarrolladores para frenar desfalcos nubes AWS arquitecturas plantillas Amazon." }
        ]
    },
    {
        question: "Bajo el modelo de responsabilidad compartida de AWS, la seguridad y parcheo del sistema operativo huésped es responsabilidad de:",
        options: [
            { text: "AWS Support", isCorrect: false, explanation: "Ayuda técnica." },
            { text: "the customer", isCorrect: true, explanation: "Tú operas el servidor nube IaaS instalas linux O.S tú eres amo y señor responsable parchearlo actualizarlo nube O.S." },
            { text: "AWS Systems Manager", isCorrect: false, explanation: "Es la herramienta que usa el cliente, NO la entidad legal personal amazónica nube." },
            { text: "AWS Config", isCorrect: false, explanation: "Auditoria historial nube O.S cambios configuraciones Amazon recursos." }
        ]
    },
    {
        question: "¿Qué servicio de AWS proporciona documentación de cumplimiento y seguridad de AWS a pedido?",
        options: [
            { text: "AWS Directory Service", isCorrect: false, explanation: "Active Directory Windows amazonas login redes empresariales nube identidades control accesos LDAP directos Microsoft integraciones bases." },
            { text: "AWS Artifact", isCorrect: true, explanation: "Descargas Los Informes oficiales PDF Security Auditorias ISO PCI HIPAA Contracts Rules Compliance confidencialidad auditor legal nube contratos amazónicos reporte auditorias." },
            { text: "AWS Trusted Advisor", isCorrect: false, explanation: "Panel Optimizar Check Best practice nube." },
            { text: "AWS Trusted Advisor", isCorrect: false, explanation: "Panel Optimizar nube." }
        ]
    },
    {
        question: "¿Cuál es uno de los principios básicos a seguir al diseñar una aplicación de alta disponibilidad en la nube de AWS?",
        options: [
            { text: "Diseño utilizando una arquitectura sin servidor", isCorrect: false, explanation: "A pesar de ser genial serverless Amazon Lambda no es un \"Principio núcleo\" estricto teóricos marco Amazon bases." },
            { text: "Suponga que todos los componentes dentro de una aplicación pueden fallar", isCorrect: true, explanation: "Decreto AWS (Design for Failure) crea zonas de disponibilidad multi AZ clonadas porque eventualmente los fierros colapsan resiliencia arquitecturas nubes tolerantes fallas base Amazonas." },
            { text: "Diseñe AWS Auto Scaling en cada aplicación", isCorrect: false, explanation: "No Toda App Requiere autoscaling por diseño estructural Amazon reglas bases arquitectónicas diseño generales O.S Amazon bases nube bases integraciones marco teórico." },
            { text: "Diseñe todos los componentes usando código abierto", isCorrect: false, explanation: "El Open Source AWS lo incentiva pero no dictamina alta disponibilidad Amazon ni arquitectura resiliencia O.S bases servidores integraciones teóricos AWS." }
        ]
    },
    {
        question: "¿Qué modelo de precios de Amazon EC2 debe usarse para cumplir con los requisitos de licencia de software por núcleo?",
        options: [
            { text: "Dedicated Hosts", isCorrect: true, explanation: "Hardware en rack desnudo Amazon (Bare Metal) tú visualizas y escoges cores, permitiendo pasar auditorías Oracle Windows nubes licencias amazon." },
            { text: "On-Demand Instances", isCorrect: false, explanation: "Inquilino Virtual aislado pero su Mac no es transparente para los peritos licencias legales amazon bases multinacionales nubes O.S." },
            { text: "Spot Instances", isCorrect: false, explanation: "Temporal efímera y fluctuante bases rebaja nube ahorros variables económicas base nubes limit." },
            { text: "Reserved Instances", isCorrect: false, explanation: "Modelos contratos finanzas compromisos ahorrativos Amazon años bases AWS finanzas nubes contratos descuentos O.S limit." }
        ]
    },
    {
        question: "¿Cuál de la infraestructura global de AWS se utiliza para almacenar en caché copias de contenido para una entrega más rápida a los usuarios de todo el mundo?",
        options: [
            { text: "AWS Regions", isCorrect: false, explanation: "Base general de los Datacenters servidores orígenes matriz." },
            { text: "Availability Zones", isCorrect: false, explanation: "Datacenters O.S conjuntos redundantes matrices bases AWS servidores físicos ladrillos amazónicos redundancias perimetrales." },
            { text: "Edge locations", isCorrect: true, explanation: "Points of Presence (PoPs), puntos de avanzada fronterizos mundiales CDN inyectando fotos veloces a los usuarios asiáticos y sudamericanos amazónicos borde AWS fronteras mundiales red veloz CDNs nube caché borde acelerador redes caché redil." },
            { text: "Data centers", isCorrect: false, explanation: "Son el lugar físico pero EDGE caching amazon infraestructura web AWS red mundial despliegues veloz O.S O.S nube redes." }
        ]
    },
    {
        question: "El uso de AWS Config para registrar, auditar y evaluar los cambios en los recursos de AWS para permitir la trazabilidad es un ejemplo de qué pilar del marco de buena arquitectura de AWS.",
        options: [
            { text: "Security", isCorrect: false, explanation: "Protecciones redes accesos Iam cifrados barrera perimetral confidencial nube O.S." },
            { text: "Operational excellence", isCorrect: true, explanation: "El pilar central de IAaC, configuraciones trazables documentadas AWS y flujos CI CD mejorando lo operativo iterativo DevOps nube bases excelencia operativa Amazon AWS nube matriz O.S general arquitecturas redes pilar fundamental Amazon bases O.S." },
            { text: "Performance efficiency", isCorrect: false, explanation: "Desempeño cpu lecturas base IOPS nube escalabilidad redes IO bases cloud O.S eficiencias redes amazon velocidades bases." },
            { text: "Cost optimization", isCorrect: false, explanation: "Cuidar billetera finanzas control recursos pasivos AWS." }
        ]
    },
    {
        question: "Un usuario necesita implementar rápidamente una base de datos no relacional en AWS. El usuario no desea administrar el hardware subyacente ni el software de la base de datos. ¿Qué servicio de AWS se puede utilizar para lograr esto?",
        options: [
            { text: "Amazon RDS", isCorrect: false, explanation: "Relacional nube SQL limit amazon." },
            { text: "Amazon DynamoDB", isCorrect: true, explanation: "Base de datos AWS clave valor, NoSQL, serverless automática gestionadora cero servidor matriz amazon O.S amazon nativos velocidad ms latencias milisegundos abstracta AWS operativas mantenidas nube AWS." },
            { text: "Amazon Aurora", isCorrect: false, explanation: "Relacional nube empresarial O.S AWS motores postgres amazon MySql bases." },
            { text: "Amazon Redshift", isCorrect: false, explanation: "Bodegón de datos Datawarehouse bases relacional columnas AWS analíticas O.S matrices Amazon SQL nubes consultadas generales grandes SQL." }
        ]
    },
    {
        question: "¿Qué características y beneficios ofrece el servicio de AWS Organizations? (Escoge dos.)",
        options: [
            { text: "Establecer comunicaciones en tiempo real entre los miembros de un equipo interno", isCorrect: false, explanation: "Slack amazon." },
            { text: "Facilitar el uso de bases de datos NoSQL", isCorrect: false, explanation: "DynamoDB AWS O.S." },
            { text: "Proporcionar controles de seguridad automatizados", isCorrect: false, explanation: "Seguridad cloudhub AWS amazon." },
            { text: "Implementación de la facturación consolidada", isCorrect: true, explanation: "Cuenta Pail Pagadora centraliza las hojas de cálculo todas filiales hija amazon unificada facturación corporación amazon multinivel." },
            { text: "Hacer cumplir la gobernanza de las cuentas de AWS", isCorrect: true, explanation: "SCP Guardrails niega levantar bases rusas o usar servidores no homologados AWS jerarquizadas gobernanzas empresa." }
        ]
    },
    {
        question: "¿Qué servicio de AWS se utiliza para automatizar la administración de la configuración mediante Chef y Puppet?",
        options: [
            { text: "AWS Config", isCorrect: false, explanation: "Bitácora historial nube trazabilidad fotográfica auditor Amazon." },
            { text: "AWS OpsWorks", isCorrect: true, explanation: "Examen AWS liga Opsworks con las palabras recetarios Chef u Puppet nube empujando archivos amazon." },
            { text: "AWS CloudFormation", isCorrect: false, explanation: "Crea redes YAML base puro Amazon IaC json." },
            { text: "AWS Systems Manager", isCorrect: false, explanation: "Parches EC2 masivas amazon." }
        ]
    },
    {
        question: "¿Qué herramienta es la más adecuada para combinar la facturación de cuentas de AWS que antes eran independientes entre sí?",
        options: [
            { text: "Detailed billing report", isCorrect: false, explanation: "CSV Amazon O.S." },
            { text: "Consolidated billing", isCorrect: true, explanation: "Billetera unificadora de facturas base agrupada multinivel filiales empresa descontadora volumen Amazonas organizaciones finanzas facturaciones integradas." },
            { text: "AWS Cost and Usage report", isCorrect: false, explanation: "Base csv CUR." },
            { text: "Cost allocation report", isCorrect: false, explanation: "Tags aws." }
        ]
    },
    {
        question: "La calculadora del costo total de propiedad (TCO) de AWS se utiliza para:",
        options: [
            { text: "Reciba informes que desglosan los costos de cómputo de la nube de AWS por duración, recurso o etiquetas.", isCorrect: false, explanation: "Cost Explorer AWS Amazon analíticas O.S gráficas finanzas pasadas desglose histórico visualizaciones nube Amazon." },
            { text: "estimar los ahorros al comparar la nube de AWS con un entorno local", isCorrect: true, explanation: "Reporte financiero C suite para vender la idea mudanza mostrando millones dolares ahorrados de la bodega local física vs Amazon virtual rentabilidad bases nube gerenciales corporativas AWS." },
            { text: "estimar una factura mensual por los recursos de la nube de AWS que se utilizarán", isCorrect: false, explanation: "Pricing Calculator proyecciones simulación precios O.S." },
            { text: "habilitar alertas de facturación para monitorear los costos reales de AWS en comparación con los costos estimados", isCorrect: false, explanation: "Budgets alarmas SMS correos." }
        ]
    },
    {
        question: "¿De qué es responsable el cliente de AWS según el modelo de responsabilidad compartida de AWS?",
        options: [
            { text: "Controles de acceso físico", isCorrect: false, explanation: "AWS datacenter Amazon control guardias edificios biométricos matrices bases lógicas perimetrales seguridad O.S O.S amazónicas redes físicas ladrillos." },
            { text: "Cifrado de datos", isCorrect: true, explanation: "Conectar tu Llave maestra KMS y ofuscar tu excel alojado tú debes clickearlo y accionarlo responsabilidades normativas tú dueño data privacidad nubes criptográficas amazon cliente rol base compliance empresariales." },
            { text: "Eliminación segura de dispositivos de almacenamiento", isCorrect: false, explanation: "Trituradoras AWS amazon basuras operativas ec2 Amazon físicas bases Amazon eliminadas discos O.S lógicas cumplimiento." },
            { text: "Gestión de riesgos ambientales", isCorrect: false, explanation: "Climas terremotos AWS Amazon." }
        ]
    },
    {
        question: "¿Cuál de los siguientes es un beneficio de usar la nube de AWS?",
        options: [
            { text: "La seguridad permisiva elimina la carga administrativa.", isCorrect: false, explanation: "Pésimo concepto Amazon fomenta el Minimo Privilegio no libertinaje vulnerable hackers." },
            { text: "Capacidad para enfocarse en actividades generadoras de ingresos.", isCorrect: true, explanation: "Undifferentiated Heavy Lifting. Si Amazon se encarga de electricidad y guardias de servidores tú te enfocas rentabilidad app programación tu core negocio Amazonas O.S Amazon matriz cloud beneficios empresa rentabilidades O.S lógicas arquitecturas nube general virtudes Amazonas base O.S Amazon nativas rentabilidad O.S beneficios matriz." },
            { text: "Control sobre el hardware de la red en la nube.", isCorrect: false, explanation: "Tú no enchufas el ruteador Cisco O.S físico datacenter Amazonas redes físicas AWS operativas nubes routers cortafuego Amazon." },
            { text: "Elección de proveedores de hardware de nube específicos.", isCorrect: false, explanation: "Salvo caso extremo hosts, la IaaS AWS abstrae los zócalos Intel general Amazonas O.S." }
        ]
    },
    {
        question: "Al realizar un análisis de costos que admita el aislamiento físico de una carga de trabajo del cliente, ¿qué modelo de hospedaje informático debe tenerse en cuenta en el costo total de propiedad (TCO)?",
        options: [
            { text: "Dedicated Hosts", isCorrect: true, explanation: "Server TCO puro metal bare hardware Compliance Amazon auditorias aislamientos carísimos exclusivos nube host físico Amazon zócalos procesador O.S corporativos finanzas hardware nativos bases Amazon corporación IaaS exclusivas TCO AWS arquitecturas matrices locales físicas normativas." },
            { text: "Reserved Instances", isCorrect: false, explanation: "Ahorros largos fijos amazon contratos AWS." },
            { text: "On-Demand Instances", isCorrect: false, explanation: "Flujo nube IaaS virtual variable elástica precios fijos Amazonas O.S AWS nube compartidos tenant amazonas multi virtuales bases amazon lógicas O.S nube arquitecturas regulares bases." },
            { text: "No Upfront Reserved Instances", isCorrect: false, explanation: "AWS contratos O.S Amazon cloud finanzas AWS matriz." }
        ]
    },
    {
        question: "¿Qué servicio de AWS permitirá a un usuario establecer límites de uso y costos personalizados y alertará cuando se excedan los umbrales?",
        options: [
            { text: "AWS Organizations", isCorrect: false, explanation: "Limites lógicos roles pero no alarmas operativas billetera facturación nube correos finanzas alarmas O.S limitación perimetrales Amazonas AWS IAM." },
            { text: "AWS Budgets", isCorrect: true, explanation: "Semejante tu banco envía push sms correos al topar tarjeta alarma finanzas amazon presupuestas mensuales O.S AWS control gasto topes." },
            { text: "Cost Explorer", isCorrect: false, explanation: "Tableros torta gastos históricos fin de mes AWS pasados Amazonas consumos reportajes O.S nubes matriz finanzas." },
            { text: "AWS Trusted Advisor", isCorrect: false, explanation: "Auditoria AWS check general ec2 idle nube Amazonas Amazon nube arquitecturas preventivo bases generales recomendaciones mejores." }
        ]
    },
    {
        question: "¿Cuál de los siguientes es un servicio de base de datos NoSQL rápido y confiable?",
        options: [
            { text: "Amazon Redshift", isCorrect: false, explanation: "SQL Data Warehouse gigante empresarial análisis amazon." },
            { text: "Amazon RDS", isCorrect: false, explanation: "SQL Relacional MySql Amazon O.S." },
            { text: "Amazon DynamoDB", isCorrect: true, explanation: "Velocidad brutal ms milisegundos clave valor No sql tabla Serverless nube Amazon matrices bases juegos O.S latencias ultrabajas Amazon nativas nube AWS arquitecturas generales O.S escaladas orgánicas Amazonas." },
            { text: "Amazon S3", isCorrect: false, explanation: "Object Storage archivos web O.S amazon." }
        ]
    },
    {
        question: "Una empresa tiene una aplicación con usuarios tanto en Australia como en Brasil. Actualmente, toda la infraestructura de la empresa está aprovisionada en la región de Asia Pacífico (Sídney) en Australia, y los usuarios brasileños experimentan una alta latencia. ¿Qué debe hacer la empresa para reducir la latencia?",
        options: [
            { text: "Implementar AWS Direct Connect para usuarios en Brasil", isCorrect: false, explanation: "Para internet civiles O.S amazon aws fibra oficinas es local Amazon." },
            { text: "Provisión de recursos en la Región de América del Sur (São Paulo) en Brasil", isCorrect: true, explanation: "Despliega Amazon ec2 o S3 en Region SA EAST 1 acercando geográficamente al cliente brasileño nube AWS arquitectura matriz regional Amazon bases veloces lógicas locales reduciendo O.S pings latencia viajes luz cables mundiales." },
            { text: "Utilice AWS Transit Gateway para enrutar rápidamente a los usuarios de Brasil a la aplicación", isCorrect: false, explanation: "VPC networking O.S aws." },
            { text: "Lanzar instancias adicionales de Amazon EC2 en Sídney para manejar la demanda", isCorrect: false, explanation: "Esfuerzo cpu O.S no soluciona demora del cruce cables mar O.S ping ms lejanía Brasil Australia O.S luz fibra océano Amazon nube matriz arquitecturas base nubes ecuador amazón amazon O.S AWS." }
        ]
    },
    {
        question: "¿Cuál es un ejemplo de agilidad en la nube de AWS?",
        options: [
            { text: "Acceso a múltiples tipos de instancias", isCorrect: false, explanation: "Flexibilidad O.S amazonas nube hw." },
            { text: "Acceso a servicios gestionados", isCorrect: false, explanation: "Operación PaaS delegadas O.S." },
            { text: "Uso de Facturación consolidada para producir una factura", isCorrect: false, explanation: "AWS Organizations O.S bill descuentos amazon nube." },
            { text: "Tiempo de adquisición reducido para nuevos recursos informáticos", isCorrect: true, explanation: "Tardabas tres meses comprando hardware vs 3 minutos clic aws O.S innovación nube agilidad ventajas competitivas AWS Amazon beneficios base arquitectónicas innovación rápida despliegues inmediatos veloces nube general base." }
        ]
    },
    {
        question: "¿Qué servicio debe usar un cliente para consolidar y administrar de forma centralizada varias cuentas de AWS?",
        options: [
            { text: "AWS IAM", isCorrect: false, explanation: "Identity roles base adentro de tu burbuja O.S." },
            { text: "AWS Organizations", isCorrect: true, explanation: "Gobierno gigante Master accounts unificadores O.S corporativos billing factura única SCP leyes raíz Amazon nube control multiniveles matriz amazon base redil macro AWS." },
            { text: "AWS Schema Conversion Tool", isCorrect: false, explanation: "Code SCT AWS O.S migraciones migradores O.S lógicos bases oráculos mysql nube." },
            { text: "AWS Config", isCorrect: false, explanation: "Log amazon O.S nube historial auditoria fotográfica amazon estados." }
        ]
    },
    {
        question: "¿Qué enfoque para transcodificar una gran cantidad de archivos de video individuales se adhiere a los principios de la arquitectura de AWS?",
        options: [
            { text: "Uso de muchas instancias en paralelo", isCorrect: true, explanation: "El mantra AWS O.S divide impera computación paralela asíncrona SQS scale out muchos minúsculos nodos O.S eficiencias horizontales AWS Amazon nube elásticas base arquitecturas." },
            { text: "Uso de una sola instancia grande durante las horas de menor actividad", isCorrect: false, explanation: "Monolítico scale up gigante fallido anti patrón amazon O.S nubes base matriz." },
            { text: "Uso de hardware dedicado", isCorrect: false, explanation: "Gasto innecesario TCO O.S AWS amazon." },
            { text: "Uso de un tipo de instancia de GPU grande", isCorrect: false, explanation: "Falla y pierdes todo monolito amazonas fallido." }
        ]
    },
    {
        question: "¿Sobre qué proceso de auditoría AWS es el único responsable?",
        options: [
            { text: "AWS IAM policies", isCorrect: false, explanation: "AWS IAM O.S tú creas tus policías accesos amazonas." },
            { text: "Physical security", isCorrect: true, explanation: "La base infraestructura guardias edificios y vallas Amazon Facility Security Physical O.S bases amazon modelo." },
            { text: "Amazon S3 bucket policies", isCorrect: false, explanation: "Baldes O.S aws tú pones reglas ip acceso." },
            { text: "AWS CloudTrail Logs", isCorrect: false, explanation: "Tú prendes la bitácora O.S amazon auditoria AWS." }
        ]
    },
    {
        question: "¿Qué característica de la nube de AWS admitirá el requisito de baja latencia de una empresa internacional para todos sus clientes?",
        options: [
            { text: "Tolerancia a fallos", isCorrect: false, explanation: "Caídas y recuperación O.S nubes." },
            { text: "Alcance global", isCorrect: true, explanation: "Centros amazon Edge y CDNs mundiales dispersos en Oceanía Asía Américas velocidad ping amazon acelerados ms cercanía latencias O.S bases Footprint global." },
            { text: "Precios de pago por uso", isCorrect: false, explanation: "Elasticidad financiera O.S." },
            { text: "Alta disponibilidad", isCorrect: false, explanation: "Multi AZ redes O.S." }
        ]
    },
    {
        question: "¿Cuál de las siguientes es responsabilidad del cliente según el modelo de responsabilidad compartida de AWS?",
        options: [
            { text: "Aplicación de parches a la infraestructura subyacente", isCorrect: false, explanation: "Hardware Xen KVM amazon O.S hipervisor base aws." },
            { text: "Seguridad física", isCorrect: false, explanation: "Amazon guardias y puertas blindadas." },
            { text: "Aplicación de parches a instancias de Amazon EC2", isCorrect: true, explanation: "En IaaS modelo Linux tú asumes la mantención de sistema O.S antivirus y windows update." },
            { text: "Parches de infraestructura de red", isCorrect: false, explanation: "Switch Amazon cableados aws operativos infra bases aws física networking amazon nube O.S." }
        ]
    },
    {
        question: "Un cliente está utilizando varias cuentas de AWS con facturación independiente. ¿Cómo puede el cliente aprovechar los descuentos por volumen con un impacto mínimo en los recursos de AWS?",
        options: [
            { text: "Cree una cuenta global de AWS y mueva todos los recursos de AWS a la cuenta.", isCorrect: false, explanation: "El proceso es mortal migrativo riesgoso O.S caídas arquitecturas matriz manual destructiva amazon O.S limit redes O.S AWS nube bases corporaciones O.S IaaS." },
            { text: "Regístrese para obtener tres años de precios de Instancia reservada por adelantado.", isCorrect: false, explanation: "Se trata de cuentas separadas problema billing general multinivel empresariales O.S amazon descuentos IaaS facturas." },
            { text: "Utilice la función de facturación consolidada de AWS Organizations.", isCorrect: true, explanation: "Reúne a todas como subsidiarias O.S Amazon factura única corporativa AWS y aprovecha el TIER de precios gran volumen generalizados amazonas beneficios." },
            { text: "Regístrese en el plan de soporte empresarial de AWS para obtener descuentos por volumen.", isCorrect: false, explanation: "Plan soporte no rebaja horas cpu O.S tickets ayuda amazon O.S base." }
        ]
    },
    {
        question: "¿Cuáles de las siguientes son características de Amazon CloudWatch Logs? (Escoge dos.)",
        options: [
            { text: "Resúmenes de Amazon Simple Notification Service (Amazon SNS)", isCorrect: false, explanation: "SNS mensajería celular correo Amazon base matriz O.S AWS integraciones asíncrono." },
            { text: "Análisis gratuitos de Amazon Elasticsearch Service", isCorrect: false, explanation: "Open Search analíticas búsquedas AWS Amazon O.S." },
            { text: "Proporcionado sin cargo", isCorrect: false, explanation: "Gigabytes almacenados logs O.S incurren gasto amazon." },
            { text: "Monitoreo en tiempo real", isCorrect: true, explanation: "Métricas fluyendo desde tu consola servidor log AWS O.S EC2 monitorización viva veloz." },
            { text: "Retención ajustable", isCorrect: true, explanation: "Borrados programados caducidades vida logs 5 dias 10 meses infinito expiraciones automáticas O.S configurables log retention temporales." }
        ]
    },
    {
        question: "¿Cuál de los siguientes es un servicio web del sistema de nombres de dominio (DNS) administrado por AWS?",
        options: [
            { text: "Amazon Route 53", isCorrect: true, explanation: "Tu portal de compra de páginas web .Com dns nameservers resolutores ruteador nube Amazon O.S aws redes integraciones bases ips matrices ruteo redil." },
            { text: "Amazon Neptune", isCorrect: false, explanation: "Grafo red social recomendador bases datos relaciones Amazon O.S algoritmos IA base cloud." },
            { text: "Amazon SageMaker", isCorrect: false, explanation: "I.A Machine learning robot entrenamiento amazon O.S nube." },
            { text: "Amazon Lightsail", isCorrect: false, explanation: "Opción base IaaS sencilla Wordpress VPS amazonas integradas amazon." }
        ]
    },
    {
        question: "Una empresa está buscando una solución de almacenamiento de datos escalable. ¿Cuál de las siguientes soluciones de AWS satisfaría las necesidades de la empresa?",
        options: [
            { text: "Amazon Simple Storage Service (Amazon S3)", isCorrect: true, explanation: "Bodegón general mundial objetos infinitos internet fotos videos archivos Amazon base resiliente y veloz." },
            { text: "Amazon DynamoDB", isCorrect: false, explanation: "Es un gestor clave valor App json transaccional, no almacena O.S AWS Amazon archivos ni mp4 documentales lógicos AWS matrices AWS base datos." },
            { text: "Amazon Kinesis", isCorrect: false, explanation: "Ingesta flujos video telemetría IoT bases O.S streams directos ruteador vivo no deposito amazon pasivo O.S aws." },
            { text: "Amazon Redshift", isCorrect: false, explanation: "Depósito análisis bases relacionales de Datawarehousing Amazon O.S reportes bases nubes matrices analiticas SQL." }
        ]
    }
];

window.quizQuestions = window.quizQuestions.concat(window.quizQuestions3);
