// Base de datos de preguntas
const questionDatabase = [
    {
        "id": 1,
        "id": 1,
        "question": "¿Cuáles son los tres principios fundamentales de la seguridad informática?",
        "options": ["Autenticación, No repudio y Privacidad.", "Confidencialidad, Integridad y Disponibilidad.", "Cifrado, Auditoría y Control."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "El modelo clásico se conoce como la tríada CID."
    },
    {
        "id": 2,
        "question": "¿Qué mecanismo asegura que los datos no se alteran sin autorización?",
        "options": ["Confidencialidad.", "Disponibilidad.", "Integridad."],
        "correct": 2,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Es uno de los vértices del triángulo CID."
    },
    {
        "id": 3,
        "question": "El cifrado de disco BitLocker actúa principalmente sobre el vértice de:",
        "options": ["Confidencialidad.", "Integridad.", "Disponibilidad."],
        "correct": 0,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "BitLocker protege la confidencialidad de los datos en el disco."
    },
    {
        "id": 4,
        "question": "Las copias de seguridad (backups) garantizan principalmente la:",
        "options": ["Confidencialidad.", "Disponibilidad.", "Autenticidad."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Los backups permiten restaurar los datos y servicios tras un incidente."
    },
    {
        "id": 5,
        "question": "¿Qué principio exige que el emisor de un mensaje no pueda negar su autoría?",
        "options": ["Integridad.", "No repudio.", "Confidencialidad."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Es un principio de seguridad que va más allá de la tríada CID básica."
    },
    {
        "id": 6,
        "question": "Una vulnerabilidad física se deriva de:",
        "options": ["Errores en el código del software.", "El entorno material o físico del sistema.", "Manipulación psicológica."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Piensa en riesgos relacionados con el hardware, el acceso a salas de servidores, etc."
    },
    {
        "id": 7,
        "question": "¿Cuál es un ejemplo de vulnerabilidad humana?",
        "options": ["Contraseñas débiles o reutilizadas.", "Puertos abiertos sin uso.", "Ausencia de SAI."],
        "correct": 0,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "La vulnerabilidad más común y difícil de controlar es el factor humano."
    },
    {
        "id": 8,
        "question": "En seguridad, el enfoque de 'Confianza Cero' implica:",
        "options": ["Confiar solo en los usuarios internos.", "Verificar explícitamente cada solicitud y aplicar menor privilegio.", "No usar firewalls de host."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "El modelo Zero Trust asume que la amenaza puede estar tanto dentro como fuera de la red."
    },
    {
        "id": 9,
        "question": "¿Qué técnica de ingeniería social consiste en ofrecer un 'cebo' (como un USB abandonado)?",
        "options": ["Phishing.", "Baiting.", "Pretexting."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "El nombre en inglés (Baiting) se relaciona con 'poner un cebo'."
    },
    {
        "id": 10,
        "question": "El ataque que utiliza mensajes SMS falsos se denomina:",
        "options": ["Vishing.", "QRishing.", "Smishing."],
        "correct": 2,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Proviene de 'SMS' + 'Phishing'."
    },
    {
        "id": 11,
        "question": "¿Qué herramienta en Linux se usa para auditar intentos de acceso por SSH?",
        "options": ["`manage-bde`.", "`journalctl -u ssh`.", "`lsblk -f`."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Journalctl consulta los logs del sistema, y la opción -u permite filtrar por unidad (servicio)."
    },
    {
        "id": 12,
        "question": "El 'Shadowing' en el diseño de reglas de firewall se refiere a:",
        "options": ["Reglas que permiten el tráfico cifrado.", "Conflictos de prioridad donde una regla queda invalidada por otra anterior.", "El registro de logs en modo oculto."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Es un error de diseño común en políticas de firewall."
    },
    {
        "id": 13,
        "question": "Un análisis forense busca:",
        "options": ["Instalar herramientas de protección.", "Reconstruir hechos tecnológicos con rigor técnico y legal.", "Configurar el balanceador de carga."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "La forense digital es una ciencia aplicada a la investigación de incidentes."
    },
    {
        "id": 14,
        "question": "¿Cuál es la primera fase del análisis post-incidente?",
        "options": ["Adquisición.", "Preparación.", "Identificación."],
        "correct": 1,
        "category": "UT1",
        "modes": ["ut1"],
        "tip": "Antes de actuar, hay que preparar el entorno y los procedimientos."
    },
    {
        "id": 15,
        "question": "¿Qué tipo de malware tiene la capacidad de autorreplicarse de forma autónoma por la red?",
        "options": ["Virus.", "Gusanos (Worms).", "Troyanos."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "A diferencia de los virus, los gusanos no necesitan infectar un archivo anfitrión para propagarse."
    },
    {
        "id": 16,
        "question": "El malware que cifra los datos y pide un rescate es el:",
        "options": ["Adware.", "Spyware.", "Ransomware."],
        "correct": 2,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": 'El nombre viene de "ransom" (rescate).'
    },
    {
        "id": 17,
        "question": "¿Qué es un ataque 'fileless'?",
        "options": ["Un ataque que borra archivos del sistema.", "Aquel que opera en memoria sin dejar artefactos en el disco.", "Un ataque físico al hardware."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Es una técnica de evasión que dificulta la detección por antivirus tradicionales."
    },
    {
        "id": 18,
        "question": "La técnica de usar utilidades legítimas del sistema (como PowerShell) para fines maliciosos se llama:",
        "options": ["Phishing.", "Living-off-the-land.", "Spoofing."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Su acrónimo es LOLBins (Living Off the Land Binaries)."
    },
    {
        "id": 19,
        "question": "¿Para qué se utiliza el archivo 'eicar'?",
        "options": ["Para cifrar comunicaciones.", "Para validar el funcionamiento del antivirus sin usar malware real.", "Para configurar el IDS."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Es un archivo de prueba estándar, no es malware."
    },
    {
        "id": 20,
        "question": "Un sistema IDS de tipo 'Host-based' (HIDS):",
        "options": ["Inspecciona el tráfico de toda la red.", "Monitoriza eventos e integridad dentro de un equipo específico.", "Controla el acceso físico a la sala."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Se centra en el host, no en la red."
    },
    {
        "id": 21,
        "question": "¿Qué protocolo inalámbrico introduce SAE para resistir ataques de diccionario?",
        "options": ["WEP.", "WPA2.", "WPA3."],
        "correct": 2,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "WPA3 reemplaza el PSK de WPA2 por SAE (Simultaneous Authentication of Equals)."
    },
    {
        "id": 22,
        "question": "El 'Sniffing' es una técnica de:",
        "options": ["Captura de tráfico de red.", "Inyección de código SQL.", "Borrado seguro de discos."],
        "correct": 0,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Herramientas como Wireshark o tcpdump realizan sniffing."
    },
    {
        "id": 23,
        "question": "¿Qué herramienta se usa comúnmente para el descubrimiento de servicios expuestos en red?",
        "options": ["Nmap.", "ClamAV.", "Wireshark."],
        "correct": 0,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Es un escáner de puertos y servicios muy popular."
    },
    {
        "id": 24,
        "question": "El modo de operación 'DPI' (Deep Packet Inspection) en firewalls permite:",
        "options": ["Filtrado rápido por IP.", "Analizar el contenido de la aplicación (L7).", "Bloquear el acceso físico."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Va más allá del encabezado del paquete y analiza la carga útil (payload)."
    },
    {
        "id": 25,
        "question": "Suricata es un ejemplo de:",
        "options": ["Cortafuegos de host.", "NIDS/IPS de código abierto.", "Servidor Proxy."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Es una alternativa de código abierto a soluciones comerciales como Snort."
    },
    {
        "id": 26,
        "question": "Un 'falso positivo' en un IDS ocurre cuando:",
        "options": ["Un ataque real no es detectado.", "El sistema genera una alerta por una actividad legítima.", "El sistema se apaga por sobrecarga."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Es un error que genera ruido y puede saturar al equipo de seguridad."
    },
    {
        "id": 27,
        "question": "La herramienta `freshclam` en Linux se utiliza para:",
        "options": ["Escanear un directorio.", "Actualizar las firmas del antivirus ClamAV.", "Reiniciar el servidor proxy."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "ClamAV es un antivirus de código abierto muy utilizado en servidores."
    },
    {
        "id": 28,
        "question": "¿Qué fase del ataque se centra en la recopilación de información pública (OSINT)?",
        "options": ["Entrega.", "Reconocimiento.", "Explotación."],
        "correct": 1,
        "category": "UT2",
        "modes": ["ut2"],
        "tip": "Es la primera fase del ciclo de vida de un ciberataque."
    },
    {
        "id": 29,
        "question": "¿Qué puerto utiliza estándar el protocolo SSH?",
        "options": ["80.", "443.", "22."],
        "correct": 2,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Es el puerto TCP bien conocido para Secure Shell."
    },
    {
        "id": 30,
        "question": "Para robustecer SSH, se recomienda deshabilitar el acceso al usuario:",
        "options": ["Invitado.", "Root.", "Administrador."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Es una práctica de 'menor privilegio'. Se accede con un usuario normal y luego se usa sudo."
    },
    {
        "id": 31,
        "question": "¿Qué protocolo de VPN es conocido por ser moderno, rápido y usar claves públicas ligeras?",
        "options": ["IPsec.", "L2TP.", "WireGuard."],
        "correct": 2,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Es más sencillo y tiene menos líneas de código que IPsec u OpenVPN."
    },
    {
        "id": 32,
        "question": "Una zona DMZ se utiliza para:",
        "options": ["Almacenar la base de datos principal.", "Albergar servicios expuestos a Internet (web, correo).", "Guardar copias de seguridad offline."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Es una red desmilitarizada (perimetral) que aísla los servicios públicos de la red interna."
    },
    {
        "id": 33,
        "question": "El protocolo RADIUS se utiliza principalmente para:",
        "options": ["Cifrar el disco duro.", "Autenticación y contabilidad de accesos remotos.", "Balanceo de carga web."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Es un protocolo cliente/servidor muy usado en redes corporativas y WiFi empresarial."
    },
    {
        "id": 34,
        "question": "¿Qué es un 'Ataque MITM'?",
        "options": ["Un ataque de denegación de servicio masivo.", "Interceptación y manipulación de la comunicación entre dos partes.", "El robo físico de un servidor."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Man-in-the-Middle. Las VPN y el HTTPS ayudan a prevenirlo."
    },
    {
        "id": 35,
        "question": "El acceso de administradores a equipos críticos debería realizarse mediante:",
        "options": ["Jump hosts / Bastion hosts.", "Conexión directa por RDP.", "Telnet."],
        "correct": 0,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Son equipos fortificados que sirven como único punto de entrada controlado."
    },
    {
        "id": 36,
        "question": "¿Qué significa MFA?",
        "options": ["Cifrado de archivos múltiples.", "Autenticación Multifactor.", "Acceso Remoto por Firewall."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Requiere combinar dos o más factores de autenticación (algo que sabes, tienes o eres)."
    },
    {
        "id": 37,
        "question": "El protocolo SFTP corre sobre el protocolo:",
        "options": ["FTP.", "HTTP.", "SSH."],
        "correct": 2,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "SFTP = SSH File Transfer Protocol. No confundir con FTPS (FTP sobre SSL)."
    },
    {
        "id": 38,
        "question": "Para evitar el 'split-brain' en un clúster se utiliza:",
        "options": ["Quorum.", "Raid 5.", "Cifrado AES."],
        "correct": 0,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "El quorum es un mecanismo de votación que evita que los nodos tomen decisiones contradictorias."
    },
    {
        "id": 39,
        "question": "La autenticación EAP-TLS se basa en el uso de:",
        "options": ["Contraseñas simples.", "Certificados digitales.", "Direcciones MAC."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Es uno de los métodos EAP más seguros, ya que requiere certificados tanto en el servidor como en el cliente."
    },
    {
        "id": 40,
        "question": "¿Qué herramienta de Linux permite ver las interfaces de red inalámbricas?",
        "options": ["`ifconfig -wifi`.", "`ip link show`.", "`lsusb`."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "El comando `ip` es la herramienta moderna que reemplaza a `ifconfig`."
    },
    {
        "id": 41,
        "question": "¿Cuál es el plazo máximo para notificar una brecha de seguridad a la AEPD según el RGPD?",
        "options": ["24 horas.", "48 horas.", "72 horas."],
        "correct": 2,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "72 horas desde que se tenga constancia de la brecha."
    },
    {
        "id": 42,
        "question": "En un túnel VPN de sitio a sitio (site-to-site) se conectan:",
        "options": ["Un usuario y una oficina.", "Dos oficinas o redes entre sí.", "Dos usuarios de la misma red."],
        "correct": 1,
        "category": "UT3",
        "modes": ["ut3"],
        "tip": "Conecta redes completas, no usuarios individuales."
    },
    {
        "id": 43,
        "question": "La política de firewall recomendada por defecto es:",
        "options": ["Permisiva (permitir todo).", "Restrictiva (deny-by-default).", "Aleatoria."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Se debe denegar todo el tráfico y permitir solo lo estrictamente necesario."
    },
    {
        "id": 44,
        "question": "El comando en PowerShell para listar las reglas del firewall de Windows es:",
        "options": ["`Show-FirewallRules`.", "`Get-NetFirewallRule`.", "`Net-ListRules`."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Los cmdlets de red en PowerShell suelen empezar por 'Get-Net'."
    },
    {
        "id": 45,
        "question": "En `iptables`, la tabla que se usa para redirección y NAT es:",
        "options": ["filter.", "mangle.", "nat."],
        "correct": 2,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "La tabla 'nat' es específica para traducción de direcciones de red."
    },
    {
        "id": 46,
        "question": "El nivel de filtrado 'Stateful' se diferencia del filtrado por paquetes porque:",
        "options": ["Es más rápido.", "Mantiene el contexto y el estado de la conexión.", "Analiza el contenido de los correos."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Recuerda las conexiones establecidas para permitir el tráfico de retorno automáticamente."
    },
    {
        "id": 47,
        "question": "El comando `sudo iptables -A INPUT -p tcp --dport 1234 -j DROP` sirve para:",
        "options": ["Permitir el tráfico al puerto 1234.", "Bloquear el tráfico entrante al puerto TCP 1234.", "Redirigir el tráfico al puerto 1234."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "-A añade una regla a la cadena INPUT. -j DROP la descarta."
    },
    {
        "id": 48,
        "question": "¿Qué herramienta ofrece una interfaz web para gestionar firewalls de red completos?",
        "options": ["UFW.", "Iptables.", "pfSense."],
        "correct": 2,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Es una distribución de firewall basada en FreeBSD, muy popular."
    },
    {
        "id": 49,
        "question": "La microsegmentación es especialmente útil en entornos de:",
        "options": ["Virtualización y Cloud.", "Redes locales sin switches.", "Almacenamiento en cintas."],
        "correct": 0,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Permite crear zonas de seguridad granulares dentro de la propia red de centro de datos o cloud."
    },
    {
        "id": 50,
        "question": "Un WAF (Web Application Firewall) protege contra:",
        "options": ["Robo de hardware.", "Ataques lógicos como SQLi y XSS.", "Fallos de red eléctrica."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Opera en la capa de aplicación (L7) y entiende el protocolo HTTP."
    },
    {
        "id": 51,
        "question": "El comando `sudo ufw allow 22/tcp` en Ubuntu permite:",
        "options": ["El tráfico web.", "El acceso por SSH.", "El acceso por FTP."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "UFW (Uncomplicated Firewall) es un frontend sencillo para iptables. El puerto 22 es SSH."
    },
    {
        "id": 52,
        "question": "La 'inspección profunda de paquetes' se asocia con:",
        "options": ["DPI / Capa 7.", "Direccionamiento IP.", "Cableado estructurado."],
        "correct": 0,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Deep Packet Inspection (DPI) analiza el contenido de los paquetes, no solo las cabeceras."
    },
    {
        "id": 53,
        "question": "Es una buena práctica de mantenimiento de firewalls:",
        "options": ["No documentar los cambios.", "Realizar revisiones periódicas de reglas y backups de configuración.", "Desactivar los logs para mejorar el rendimiento."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "La documentación y las revisiones son clave para la seguridad y la solución de problemas."
    },
    {
        "id": 54,
        "question": "¿Qué comando de Linux permite ver las reglas actuales de `iptables` con detalle?",
        "options": ["`iptables -S`.", "`sudo iptables -L -v -n`.", "`iptables -show`."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "-L lista, -v es verbose (detalle), -n evita la resolución DNS (muestra IPs)."
    },
    {
        "id": 55,
        "question": "El comando `netsh advfirewall export` en Windows se usa para:",
        "options": ["Bloquear una IP.", "Exportar la configuración del firewall para respaldo.", "Borrar todas las reglas."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "Es útil para hacer copias de seguridad o replicar configuraciones."
    },
    {
        "id": 56,
        "question": "¿Qué función cumple el 'Fencing' (STONITH) en un clúster?",
        "options": ["Acelera la velocidad de los discos.", "Aislar un nodo defectuoso para evitar corrupción de datos.", "Cifrar las comunicaciones del clúster."],
        "correct": 1,
        "category": "UT4",
        "modes": ["ut4"],
        "tip": "STONITH = Shoot The Other Node In The Head. Es una medida de aislamiento forzoso."
    },
    {
        "id": 57,
        "question": "Un servidor Proxy que se sitúa frente a los servidores para balancear y proteger aplicaciones es un:",
        "options": ["Proxy directo.", "Proxy inverso.", "Proxy transparente."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Los usuarios finales no suelen saber que están detrás de un proxy inverso."
    },
    {
        "id": 58,
        "question": "¿Qué puerto utiliza por defecto el servidor Squid?",
        "options": ["80.", "443.", "3128."],
        "correct": 2,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "3128 es el puerto TCP bien conocido para proxies como Squid."
    },
    {
        "id": 59,
        "question": "La cabecera HTTP que se usa para identificar la IP original del cliente tras un proxy es:",
        "options": ["User-Agent.", "X-Forwarded-For.", "Cache-Control."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Es una cabecera estándar de facto para este propósito."
    },
    {
        "id": 60,
        "question": "Un proxy transparente se caracteriza por:",
        "options": ["Requerir configuración manual en el navegador.", "Interceptar el tráfico sin que el cliente lo configure explícitamente.", "No realizar funciones de caché."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Se implementa a nivel de red (router/firewall), no a nivel de aplicación (navegador)."
    },
    {
        "id": 61,
        "question": "¿Qué beneficio aporta la caché en un servidor proxy?",
        "options": ["Aumenta la seguridad física.", "Mejora el rendimiento y reduce el consumo de ancho de banda.", "Cifra los archivos del usuario."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Almacena copias locales de recursos web solicitados frecuentemente."
    },
    {
        "id": 62,
        "question": "El parámetro `http_access allow localnet` en Squid sirve para:",
        "options": ["Permitir el acceso a la red local definida en una ACL.", "Bloquear el acceso a Internet.", "Configurar la autenticación LDAP."],
        "correct": 0,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "'localnet' sería una ACL predefinida que contiene las IPs de la red interna."
    },
    {
        "id": 63,
        "question": "La herramienta `ldapsearch` es útil para:",
        "options": ["Configurar el firewall.", "Probar la conectividad y consultas contra un servidor LDAP.", "Escanear virus en el proxy."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Es un cliente de línea de comandos para realizar consultas a un directorio LDAP."
    },
    {
        "id": 64,
        "question": "El 'hit ratio' en un proxy indica:",
        "options": ["El número de ataques detenidos.", "El porcentaje de peticiones servidas desde la caché.", "La latencia total del sistema."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Un 'hit' es un acierto de caché. Un 'miss' es un fallo."
    },
    {
        "id": 65,
        "question": "¿Qué software es ampliamente usado como proxy inverso de alto rendimiento?",
        "options": ["Squid.", "Nginx.", "ClamAV."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Aunque Nginx es un servidor web, es muy popular como proxy inverso y balanceador de carga."
    },
    {
        "id": 66,
        "question": "Una limitación del proxy transparente es:",
        "options": ["Es difícil de desplegar.", "La gestión de tráfico HTTPS sin interceptación SSL.", "No guarda logs."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Para inspeccionar HTTPS, el proxy necesitaría realizar un MITM con un certificado propio, lo que plantea problemas de seguridad y privacidad."
    },
    {
        "id": 67,
        "question": "Para filtrar contenidos web por categorías en Squid se pueden usar:",
        "options": ["ACLs con archivos de texto o regex.", "Cables de red especiales.", "Comandos de BitLocker."],
        "correct": 0,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Las ACLs (Access Control Lists) son el mecanismo principal de control de acceso en Squid."
    },
    {
        "id": 68,
        "question": "¿Qué comando recarga la configuración de Squid en Linux sin detener el servicio?",
        "options": ["`sudo systemctl stop squid`.", "`sudo systemctl reload squid`.", "`sudo squid -k`."],
        "correct": 1,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "`reload` aplica los cambios del archivo de configuración sin interrumpir las conexiones activas."
    },
    {
        "id": 69,
        "question": "El archivo `access.log` del proxy permite:",
        "options": ["Auditar las peticiones realizadas por los usuarios.", "Cambiar la IP del servidor.", "Configurar el RAID."],
        "correct": 0,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Es un log fundamental para el análisis de uso, troubleshooting y auditoría de seguridad."
    },
    {
        "id": 70,
        "question": "¿Qué herramienta gráfica se usa para visualizar métricas de logs (como Kibana)?",
        "options": ["ELK (Elasticsearch, Logstash, Kibana).", "pfSense.", "Putty."],
        "correct": 0,
        "category": "UT5",
        "modes": ["ut5"],
        "tip": "Kibana es la capa de visualización del stack ELK/Elastic."
    },
    {
        "id": 71,
        "question": "La redundancia hardware mínima para evitar fallos por suministro eléctrico es:",
        "options": ["Usar RAID 1.", "Fuentes de alimentación duales.", "Enlaces de red dobles."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Las PSUs (Power Supply Units) redundantes son clave en servidores."
    },
    {
        "id": 72,
        "question": "El nivel de RAID que ofrece redundancia mediante paridad y requiere al menos 3 discos es:",
        "options": ["RAID 0.", "RAID 1.", "RAID 5."],
        "correct": 2,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "RAID 5 distribuye la paridad entre todos los discos, ofreciendo redundancia y buen rendimiento de lectura."
    },
    {
        "id": 73,
        "question": "El tiempo máximo tolerable que un servicio puede estar caído tras un incidente es el:",
        "options": ["RPO.", "RTO.", "SLA."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "RTO = Recovery Time Objective. El RPO (Recovery Point Objective) se refiere a la pérdida de datos."
    },
    {
        "id": 74,
        "question": "La tecnología que permite mover una VM de un host a otro sin apagarla es:",
        "options": ["Snapshot.", "Migración en caliente (Live Migration).", "Clonación."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Hypervisors como VMware vSphere y KVM/Xen permiten esta funcionalidad."
    },
    {
        "id": 75,
        "question": "Un clúster de tipo 'Activo/Pasivo' se caracteriza por:",
        "options": ["Todos los nodos atienden peticiones simultáneamente.", "Un nodo atiende la carga y el otro está en espera (standby).", "No tener almacenamiento compartido."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "También se llama clúster de conmutación por error (failover). El nodo pasivo se activa si el principal falla."
    },
    {
        "id": 76,
        "question": "¿Qué orquestador de contenedores proporciona 'auto-healing' y escalado dinámico?",
        "options": ["Docker.", "Kubernetes.", "VirtualBox."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Kubernetes puede reiniciar contenedores fallidos y escalar el número de réplicas automáticamente."
    },
    {
        "id": 77,
        "question": "El balanceador de carga utiliza el algoritmo 'Round-robin' para:",
        "options": ["Enviar la petición al servidor con menos carga.", "Repartir las peticiones de forma cíclica y equitativa.", "Enviar la petición siempre al mismo servidor según la IP."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Es un algoritmo simple que distribuye las peticiones por turnos."
    },
    {
        "id": 78,
        "question": "Las soluciones SAN operan a nivel de:",
        "options": ["Archivo (File-level).", "Bloque (Block-level).", "Aplicación."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "SAN (Storage Area Network) proporciona almacenamiento de bloques, mientras que NAS proporciona archivos."
    },
    {
        "id": 79,
        "question": "¿Qué comando de Kubernetes se usa para ver los nodos del clúster?",
        "options": ["`kubectl get pods`.", "`kubectl get nodes`.", "`kubectl show clusters`."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "`kubectl` es la herramienta de línea de comandos para gestionar Kubernetes."
    },
    {
        "id": 80,
        "question": "El concepto de '99.999%' de disponibilidad se conoce popularmente como:",
        "options": ["El triángulo CID.", "Los cinco nueves.", "El límite de RAID 10."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Equivale a unos 5 minutos de inactividad por año."
    },
    {
        "id": 81,
        "question": "Los 'Snapshots' son ideales para:",
        "options": ["Sustituir un backup completo a largo plazo.", "Capturar estados previos antes de realizar actualizaciones críticas.", "Aumentar la velocidad de la red."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Son una instantánea en un momento dado, pero no son un respaldo seguro si el medio físico falla."
    },
    {
        "id": 82,
        "question": "¿Qué significa RPO?",
        "options": ["Objetivo de tiempo de recuperación.", "Objetivo de punto de recuperación (pérdida de datos máxima).", "Orden de recuperación periódica."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "RPO = Recovery Point Objective. Determina la antigüedad máxima de los datos que se pueden perder (ej: 1 hora)."
    },
    {
        "id": 83,
        "question": "HAProxy es una herramienta especializada en:",
        "options": ["Cifrado de discos.", "Balanceo de carga avanzado (L4/L7).", "Gestión de bases de datos."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Es un balanceador de carga de código abierto muy potente y popular."
    },
    {
        "id": 84,
        "question": "Un sistema de archivos distribuido común es:",
        "options": ["NTFS.", "Ext4.", "Ceph o GlusterFS."],
        "correct": 2,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "Permiten que varios servidores accedan a un mismo almacenamiento compartido a nivel de archivos."
    },
    {
        "id": 85,
        "question": "El comando `mdadm --detail /dev/md0` en Linux muestra:",
        "options": ["La temperatura de la CPU.", "El estado detallado de un array RAID por software.", "Los logs del firewall."],
        "correct": 1,
        "category": "UT6",
        "modes": ["ut6"],
        "tip": "`mdadm` es la utilidad para gestionar RAID por software en Linux."
    },
    {
        "id": 86,
        "question": "¿Cuál es el rol de la persona que supervisa el cumplimiento del RGPD en una empresa?",
        "options": ["Responsable del tratamiento.", "Delegado de Protección de Datos (DPO/DPD).", "Encargado del tratamiento."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "El DPO actúa como un supervisor independiente."
    },
    {
        "id": 87,
        "question": "El derecho de un usuario a recibir sus datos en un formato electrónico estructurado es el:",
        "options": ["Derecho de acceso.", "Derecho a la portabilidad.", "Derecho de supresión."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Facilita que el interesado transfiera sus datos de un proveedor a otro."
    },
    {
        "id": 88,
        "question": "¿Qué normativa española regula el uso de cookies y comunicaciones comerciales?",
        "options": ["ENS.", "LSSI-CE.", "LOPD."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Ley de Servicios de la Sociedad de la Información y Comercio Electrónico."
    },
    {
        "id": 89,
        "question": "El Esquema Nacional de Seguridad (ENS) es de aplicación obligatoria para:",
        "options": ["Solo empresas privadas multinacionales.", "El sector público español y sus proveedores.", "Usuarios domésticos."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es la normativa de seguridad para las Administraciones Públicas en España."
    },
    {
        "id": 90,
        "question": "La 'Responsabilidad Proactiva' (Accountability) significa:",
        "options": ["Que no hay que documentar nada si no hay multas.", "Que la organización debe ser capaz de demostrar que cumple la ley.", "Que el usuario es responsable de su seguridad."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es un principio clave del RGPD: no basta con cumplir, hay que poder demostrarlo."
    },
    {
        "id": 91,
        "question": "Un 'Encargado del Tratamiento' es:",
        "options": ["El dueño de la empresa.", "Un tercero (proveedor) que trata datos por cuenta del responsable.", "El usuario final."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Por ejemplo, una empresa de hosting que aloja los datos para su cliente."
    },
    {
        "id": 92,
        "question": "¿Qué norma internacional define un Sistema de Gestión de Seguridad de la Información (SGSI)?",
        "options": ["LSSI.", "ISO/IEC 27001.", "RGPD."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es la norma más reconocida para certificar un SGSI."
    },
    {
        "id": 93,
        "question": "La seudonimización es una técnica que:",
        "options": ["Borra los datos para siempre.", "Reduce el riesgo de identificar directamente a una persona.", "Cifra los archivos del sistema."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es una medida de protección de datos que facilita el cumplimiento del RGPD."
    },
    {
        "id": 94,
        "question": "El ciclo PDCA de mejora continua significa:",
        "options": ["Planificar, Hacer, Verificar, Actuar.", "Proteger, Detectar, Corregir, Avisar.", "Parar, Documentar, Cifrar, Archivar."],
        "correct": 0,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Plan-Do-Check-Act. Es la base de las normas ISO como la 27001."
    },
    {
        "id": 95,
        "question": "Las Evaluaciones de Impacto (EIPD/DPIA) se realizan cuando:",
        "options": ["El tratamiento es de bajo riesgo.", "El tratamiento entraña un alto riesgo para los derechos y libertades.", "Se instala un antivirus."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "DPIA = Data Protection Impact Assessment. Es obligatoria en ciertos casos según el RGPD."
    },
    {
        "id": 96,
        "question": "El derecho de supresión también es conocido como:",
        "options": ["Derecho de acceso.", "Derecho al olvido.", "Derecho de portabilidad."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Permite al interesado solicitar la eliminación de sus datos personales."
    },
    {
        "id": 97,
        "question": "¿Qué comando de Linux permite contar las solicitudes de derechos en un log JSON?",
        "options": ["`cat log.json`.", "`jq '.requests | length' log.json`.", "`wc -l log.json`."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "`jq` es un procesador de JSON muy potente para la línea de comandos."
    },
    {
        "id": 98,
        "question": "En un escenario de brecha, la 'Contención' busca:",
        "options": ["Avisar a la prensa.", "Aislar el sistema afectado para detener la fuga.", "Borrar los logs."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es una fase crítica de la respuesta a incidentes, previa a la erradicación y recuperación."
    },
    {
        "id": 99,
        "question": "Un 'Vendor Security Assessment' se realiza para:",
        "options": ["Evaluar la seguridad de un proveedor antes de contratarlo.", "Instalar un firewall.", "Cambiar las contraseñas."],
        "correct": 0,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es una evaluación de riesgos de terceros (third-party risk assessment)."
    },
    {
        "id": 100,
        "question": "Los registros de consentimiento de cookies deben persistir con:",
        "options": ["La contraseña del usuario.", "Timestamps e identificadores que permitan demostrar la aceptación.", "La IP del servidor DNS."],
        "correct": 1,
        "category": "UT7",
        "modes": ["ut7"],
        "tip": "Es necesario poder demostrar quién, cuándo y qué consintió, según la LSSI y el RGPD."
    },
    {
        "id": 101,
        "question": "En el enfoque de 'Confianza Cero' (Zero Trust), ¿cuál es la premisa fundamental?",
        "options": ["Confiar en todos los usuarios dentro del perímetro físico.", "Asumir que el compromiso es potencial y verificar cada solicitud.", "Eliminar la necesidad de usar firewalls de host."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "El perímetro se ha diluido (teletrabajo, SaaS, IoT), por lo que se debe verificar explícitamente y aplicar el menor privilegio [1]."
    },
    {
        "id": 102,
        "question": "¿Qué comando de Windows permite verificar si BitLocker está activo y el estado del cifrado?",
        "options": ["bitlocker -check", "manage-bde -status", "get-cipherstatus"],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Este comando muestra si la unidad está cifrada al 100% y el método de protección usado [2], [3]."
    },
    {
        "id": 103,
        "question": "Dentro del triángulo CID, el mecanismo de 'journaling' en sistemas de archivos (como NTFS o ext4) protege principalmente la:",
        "options": ["Confidencialidad.", "Integridad.", "Disponibilidad."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "El journaling garantiza que los datos no se alteren de forma inconsistente ante fallos repentinos, asegurando su integridad [4]."
    },
    {
        "id": 104,
        "question": "¿Qué fase del análisis forense se encarga de clonar discos con 'write-blockers' para evitar escrituras accidentales?",
        "options": ["Identificación/Triage.", "Adquisición/Preservación.", "Análisis."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "En esta fase se crean representaciones bit a bit con integridad garantizada por hashes para no contaminar el original [5], [6]."
    },
    {
        "id": 105,
        "question": "La técnica de ingeniería social conocida como 'Baiting' consiste en:",
        "options": ["Suplantar a un técnico de soporte por teléfono.", "Ofrecer un 'cebo' físico o digital (como un USB abandonado) para provocar una acción maliciosa.", "Enviar correos masivos imitando a una entidad bancaria."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Se apoya en la curiosidad o el deseo de obtener algo gratuito para que la víctima ejecute el vector malicioso [7]."
    },
    {
        "id": 106,
        "question": "¿Qué caracteriza a un ataque de tipo 'fileless'?",
        "options": ["Borra todos los archivos del disco duro.", "Opera directamente en la memoria RAM sin dejar artefactos persistentes en el disco.", "Solo afecta a archivos comprimidos en formato .zip."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Al no dejar rastro en disco, estos ataques son más difíciles de detectar por antivirus basados en firmas tradicionales [8], [9]."
    },
    {
        "id": 107,
        "question": "En la anatomía de un ataque, ¿cuál es el objetivo primordial de la fase de 'Persistencia'?",
        "options": ["Recopilar información pública (OSINT).", "Garantizar que el acceso malicioso se mantenga incluso tras reiniciar el sistema.", "Cifrar los archivos para pedir un rescate económico."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Se logra mediante tareas programadas, servicios nuevos o modificaciones en el registro de arranque [10], [11]."
    },
    {
        "id": 108,
        "question": "El protocolo WPA3 mejora la seguridad inalámbrica respecto a WPA2 principalmente mediante:",
        "options": ["El uso obligatorio de cables blindados.", "La introducción de SAE (Simultaneous Authentication of Equals) contra ataques de diccionario.", "La eliminación de la necesidad de usar contraseñas."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "WPA3 ofrece mayor resistencia al cracking offline y ataques de fuerza bruta [12], [13]."
    },
    {
        "id": 109,
        "question": "¿Qué diferencia fundamental hay entre un NIDS y un HIDS?",
        "options": ["El NIDS es hardware y el HIDS es siempre software.", "El NIDS inspecciona el tráfico de red general, mientras que el HIDS monitoriza eventos locales en un host específico.", "El HIDS solo funciona en Windows y el NIDS solo en Linux."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "El HIDS analiza logs locales e integridad de ficheros, mientras el NIDS busca patrones de ataque en el flujo de paquetes de red [14]."
    },
    {
        "id": 110,
        "question": "La técnica 'Living-off-the-land' se refiere a:",
        "options": ["Ataques realizados desde zonas rurales.", "El uso de utilidades legítimas del sistema (como PowerShell o WMI) para fines maliciosos.", "El robo de hardware físico en centros de datos."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Esta técnica permite evadir firmas al usar herramientas que el propio sistema considera seguras [15], [9]."
    },
    {
        "id": 111,
        "question": "Para robustecer un servidor SSH, ¿cuál de estas directivas es una mejor práctica crítica en el archivo sshd_config?",
        "options": ["PermitRootLogin yes", "PasswordAuthentication no", "Port 80"],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Deshabilitar la autenticación por contraseña fuerza el uso de claves públicas, mucho más seguras [16], [17]."
    },
    {
        "id": 112,
        "question": "¿Cuál es la función principal de una zona DMZ?",
        "options": ["Guardar los servidores de Active Directory para acceso público.", "Albergar servicios expuestos a Internet para aislarlos de la red interna sensible.", "Conectar directamente los equipos de los usuarios a la base de datos."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Actúa como una zona intermedia para que un compromiso en un servidor web no dé acceso directo a la red interna [18], [19]."
    },
    {
        "id": 113,
        "question": "¿Qué protocolo de VPN destaca por ser minimalista, estar integrado en el kernel de Linux y ser altamente eficiente?",
        "options": ["IPsec.", "WireGuard.", "L2TP."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "WireGuard usa criptografía moderna y tiene una superficie de código mucho menor que otros protocolos [20], [21]."
    },
    {
        "id": 114,
        "question": "El protocolo RADIUS se utiliza comúnmente en accesos remotos para:",
        "options": ["Cifrar el disco duro del servidor.", "Centralizar la autenticación, autorización y contabilidad (AAA) de los usuarios.", "Acelerar la velocidad de navegación mediante caché."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Permite que el servidor VPN delegue la gestión de credenciales a un backend como Active Directory o LDAP [22], [23]."
    },
    {
        "id": 115,
        "question": "En la gestión de cortafuegos, la política de 'Deny-by-default' implica que:",
        "options": ["Todo el tráfico está permitido salvo que una regla lo prohíba.", "Todo el tráfico está bloqueado salvo que una regla lo permita explícitamente.", "El firewall decide automáticamente qué bloquear basándose en la IA."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Es la base para aplicar el principio de mínimo privilegio en el tráfico de red [24], [25]."
    },
    {
        "id": 116,
        "question": "En Iptables, ¿qué tabla se utiliza específicamente para realizar redirección de puertos y NAT?",
        "options": ["filter", "nat", "mangle"],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "La tabla 'nat' gestiona reglas de PREROUTING y POSTROUTING para cambiar destinos u orígenes [26], [27]."
    },
    {
        "id": 117,
        "question": "¿Cuál es la función principal de un WAF (Web Application Firewall)?",
        "options": ["Bloquear virus en archivos adjuntos de correo.", "Proteger aplicaciones web contra ataques lógicos como Inyección SQL o XSS.", "Aumentar la velocidad de la conexión Wi-Fi."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "A diferencia de un firewall de red, el WAF entiende el protocolo HTTP y detecta ataques a nivel de aplicación (L7) [28], [29]."
    },
    {
        "id": 118,
        "question": "Un firewall 'Stateful' se diferencia de uno de 'filtrado por paquetes' simple en que:",
        "options": ["Es más económico.", "Mantiene el contexto y el estado de las conexiones activas.", "Analiza el color de los cables de red."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Esto le permite saber si un paquete entrante es respuesta a una solicitud interna legítima [30], [31]."
    },
    {
        "id": 119,
        "question": "¿Cuál es la ventaja principal de un Proxy Inverso?",
        "options": ["Permitir que los empleados naveguen por redes sociales.", "Publicar servicios internos de forma segura, ofreciendo balanceo y terminación SSL.", "Ocultar la IP del servidor de Google."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Se sitúa frente a los servidores para protegerlos y optimizar la entrega de contenido [32], [33]."
    },
    {
        "id": 120,
        "question": "El modo de 'Proxy Transparente' se caracteriza por:",
        "options": ["Obligar al usuario a poner la IP del proxy en su navegador.", "Interceptar el tráfico sin necesidad de configurar los equipos clientes.", "Ser invisible para el administrador del sistema."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Se suele implementar mediante reglas de redirección NAT en el gateway de la red [34], [35]."
    },
    {
        "id": 121,
        "question": "¿Para qué sirve la cabecera HTTP 'X-Forwarded-For' en un entorno con proxy?",
        "options": ["Para cifrar la contraseña del usuario.", "Para identificar la dirección IP original del cliente que se conecta a través del proxy.", "Para indicar la versión de Squid que se está usando."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Es fundamental para que el servidor final pueda saber quién hizo la petición realmente [36], [37]."
    },
    {
        "id": 122,
        "question": "En Squid, el parámetro 'cache_mem' define:",
        "options": ["El tamaño total del disco duro asignado.", "La cantidad de memoria RAM dedicada a almacenar objetos de caché.", "El número de usuarios máximos permitidos."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Se debe dimensionar según la carga para mejorar la velocidad de respuesta [38], [39]."
    },
    {
        "id": 123,
        "question": "Un sistema RAID 5 requiere como mínimo la siguiente cantidad de discos:",
        "options": ["2 discos.", "3 discos.", "4 discos."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "RAID 5 usa paridad distribuida y necesita al menos tres unidades para funcionar [40], [41]."
    },
    {
        "id": 124,
        "question": "En alta disponibilidad, ¿qué significa el término 'RPO' (Recovery Point Objective)?",
        "options": ["El tiempo que tardamos en levantar el servicio tras una caída.", "La cantidad máxima de datos (medida en tiempo) que la organización se permite perder.", "El porcentaje de disponibilidad mensual prometido al cliente."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Por ejemplo, un RPO de 1 hora significa que si hay un fallo, se pueden perder hasta los últimos 60 minutos de datos [42], [43]."
    },
    {
        "id": 125,
        "question": "¿Qué función cumple el mecanismo de 'Fencing' o 'STONITH' en un clúster?",
        "options": ["Acelerar el rendimiento de la base de datos.", "Aislar o apagar un nodo defectuoso para evitar que corrompa el almacenamiento compartido.", "Cifrar las comunicaciones entre los nodos del clúster."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Evita el escenario de 'split-brain' donde dos nodos intentan escribir en el mismo disco a la vez [44], [45]."
    },
    {
        "id": 126,
        "question": "En orquestación de contenedores (Kubernetes), el 'Auto-healing' permite:",
        "options": ["Curar virus informáticos automáticamente.", "Detectar contenedores fallidos y reiniciarlos para mantener el estado deseado.", "Actualizar el hardware del servidor sin apagarlo."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Garantiza la disponibilidad de la aplicación mediante 'liveness probes' [46], [47]."
    },
    {
        "id": 127,
        "question": "Bajo el principio de 'Responsabilidad Proactiva' (Accountability) del RGPD:",
        "options": ["El usuario debe demostrar que la empresa lo atacó.", "La organización debe ser capaz de demostrar que cumple con la normativa mediante evidencias.", "No es necesario documentar nada si no hay inspecciones."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Exige mantener registros de actividades, evaluaciones de impacto y evidencias de controles técnicos [48], [49]."
    },
    {
        "id": 128,
        "question": "¿Cuál es el plazo máximo para notificar una brecha de seguridad de datos personales a la AEPD?",
        "options": ["24 horas desde la detección.", "72 horas desde que se tenga conocimiento de la misma.", "7 días naturales."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Es una de las obligaciones más críticas del RGPD tras un incidente de seguridad [50], [51]."
    },
    {
        "id": 129,
        "question": "El derecho de los usuarios a recibir sus datos en un formato estructurado y legible por máquina es el:",
        "options": ["Derecho de acceso.", "Derecho a la portabilidad.", "Derecho de oposición."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Facilita que el usuario mueva sus datos de un proveedor a otro de forma sencilla [52], [53]."
    },
    {
        "id": 130,
        "question": "El Esquema Nacional de Seguridad (ENS) en España es de obligado cumplimiento para:",
        "options": ["Solo las empresas que cotizan en bolsa.", "El sector público español y las entidades privadas que le prestan servicios.", "Cualquier persona física que tenga un blog."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Establece los requisitos mínimos de seguridad para la administración pública y sus proveedores [54], [55]."
    },
    {
        "id": 131,
        "question": "Dentro del triángulo CID, ¿qué ocurre si se refuerza un vértice sin equilibrio?",
        "options": ["Los demás vértices se refuerzan automáticamente.", "Se puede degradar el nivel de los otros vértices.", "No afecta al sistema siempre que haya redundancia."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Por ejemplo, una confidencialidad extrema con múltiples capas de cifrado puede frenar drásticamente la disponibilidad del servicio [1]."
    },
    {
        "id": 132,
        "question": "En el análisis forense, ¿qué acción se recomienda habitualmente antes de apagar un equipo de usuario?",
        "options": ["Borrar los archivos temporales para limpiar el disco.", "Desconectar físicamente el equipo de la red.", "Reiniciar el sistema para aplicar parches de seguridad."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Esto permite ganar minutos de observación sobre procesos y conexiones activas antes de proceder a la adquisición de evidencias [2, 3]."
    },
    {
        "id": 133,
        "question": "La técnica de ataque 'Living-off-the-land' se basa en:",
        "options": ["Instalar malware de tipo gusano en toda la red local.", "Utilizar utilidades legítimas del sistema (como PowerShell) para fines maliciosos.", "Realizar ataques físicos mediante la manipulación del hardware."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Esta técnica dificulta la detección ya que emplea herramientas que el sistema considera seguras por defecto [4, 5]."
    },
    {
        "id": 134,
        "question": "¿Qué mejora introduce el protocolo WPA3 en redes abiertas mediante OWE?",
        "options": ["Obliga a usar contraseñas de al menos 20 caracteres.", "Mejora la protección de datos transmitidos en redes inalámbricas abiertas.", "Permite que cualquier usuario sea administrador de la red."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "WPA3 introduce Opportunistic Wireless Encryption (OWE) y SAE para resistir mejor los ataques de diccionario [6]."
    },
    {
        "id": 135,
        "question": "Para la administración remota de servidores críticos, se recomienda el uso de:",
        "options": ["Acceso directo por RDP expuesto a Internet.", "Jump hosts o Bastion hosts con MFA.", "Cuentas de usuario sin contraseña para mayor rapidez."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Estas pasarelas actúan como puntos de entrada controlados y auditados para la gestión de infraestructura [7, 8]."
    },
    {
        "id": 136,
        "question": "¿Cuál es un beneficio clave de segmentar las VPNs por tipo de usuario?",
        "options": ["Permite que todos los usuarios tengan acceso a la base de datos.", "Reduce el radio de impacto (blast radius) y limita la lateralidad en caso de compromiso.", "Aumenta la velocidad de conexión al eliminar el cifrado."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Separar el acceso de usuarios finales del acceso de administradores o proveedores es una práctica de seguridad crítica [9, 10]."
    },
    {
        "id": 137,
        "question": "En la planificación de un cortafuegos, ¿por qué es vital evitar el 'Single Point of Failure'?",
        "options": ["Para que el administrador tenga menos trabajo.", "Para garantizar que el fallo del firewall no deje a toda la organización sin servicio.", "Porque las reglas de iptables no funcionan sin redundancia."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Todas las ubicaciones críticas del firewall deben contemplar redundancia y alta disponibilidad [11]."
    },
    {
        "id": 138,
        "question": "¿Qué capacidad adicional aportan los cortafuegos de nueva generación (NGFW)?",
        "options": ["Control de acceso físico mediante cámaras CCTV.", "Inspección de aplicaciones, control por identidad y feeds de reputación.", "Aumento del ancho de banda contratado con el ISP."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Los NGFW extienden el filtrado tradicional con análisis de comportamiento y prevención de intrusiones [12, 13]."
    },
    {
        "id": 139,
        "question": "En la monitorización de un servidor proxy, el 'hit ratio' indica:",
        "options": ["El número de ataques detenidos por el WAF.", "El porcentaje de peticiones servidas directamente desde la caché local.", "La velocidad de la conexión de red del servidor."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Un hit ratio alto indica una caché eficiente que reduce el consumo de ancho de banda externo [14, 15]."
    },
    {
        "id": 140,
        "question": "Al configurar un proxy inverso, ¿qué cabecera HTTP es crítica para preservar la IP del cliente?",
        "options": ["Cache-Control.", "X-Forwarded-For.", "User-Agent."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Esta cabecera permite que el servidor final conozca la identidad real del origen de la petición [16, 17]."
    },
    {
        "id": 141,
        "question": "Para medir el cumplimiento de un SLA, la metodología debe especificar:",
        "options": ["Solo el nombre del técnico responsable.", "Qué se monitoriza, desde dónde y con qué frecuencia.", "El coste total del hardware utilizado."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Los SLAs deben ser cuantificables y medibles con instrumentación precisa como métricas de uptime y latencia [18, 19]."
    },
    {
        "id": 142,
        "question": "En un clúster con almacenamiento compartido, el 'Fencing' (STONITH) sirve para:",
        "options": ["Aislar o apagar un nodo defectuoso para evitar que corrompa los datos.", "Aumentar la capacidad de almacenamiento de los discos.", "Cifrar la comunicación entre el cliente y el servidor."],
        "correct": 0,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Evita que un nodo que cree estar activo intente escribir en el disco compartido al mismo tiempo que otro [20, 21]."
    },
    {
        "id": 143,
        "question": "Bajo el RGPD, el principio de 'Responsabilidad Proactiva' exige que la organización:",
        "options": ["No haga nada hasta que ocurra un incidente.", "Sea capaz de demostrar que cumple con la normativa mediante evidencias documentadas.", "Delegue toda la seguridad en los usuarios finales."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Implica tener registros de actividades, evaluaciones de impacto y evidencias de que los controles funcionan [22, 23]."
    },
    {
        "id": 144,
        "question": "Según la normativa sobre cookies, los scripts no esenciales deben:",
        "options": ["Ejecutarse siempre para asegurar el funcionamiento web.", "Permanecer bloqueados hasta obtener el consentimiento informado del usuario.", "Ocultarse para que el usuario no los vea."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Esto se gestiona mediante plataformas de gestión de consentimiento o CMPs [24, 25]."
    },
    {
        "id": 145,
        "question": "La técnica de ingeniería social 'QRishing' consiste en:",
        "options": ["Suplantar a un directivo por correo electrónico.", "Manipular códigos QR para redirigir a los usuarios a sitios web maliciosos.", "Llamar por teléfono simulando ser el soporte técnico."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Suele implicar pegar códigos QR falsos sobre carteles o anuncios legítimos [26, 27]."
    },
    {
        "id": 146,
        "question": "En un sistema IDS, el proceso de 'tuning' o afinar reglas busca principalmente:",
        "options": ["Aumentar el número de alertas generadas.", "Reducir los falsos positivos y evitar la fatiga operativa.", "Desactivar la monitorización de red."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Ajustar umbrales y usar listas blancas ayuda a que las alertas sean realmente accionables [28, 29]."
    },
    {
        "id": 147,
        "question": "Comparando protocolos VPN, ¿qué ventaja ofrece OpenVPN frente a IPsec en redes domésticas?",
        "options": ["Es un protocolo de nivel de enlace más antiguo.", "Es más 'NAT-friendly' y flexible para atravesar routers domésticos.", "No utiliza cifrado, lo que lo hace más rápido."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Las VPN basadas en SSL/TLS como OpenVPN suelen tener menos problemas de conectividad en redes con NAT [30, 31]."
    },
    {
        "id": 148,
        "question": "El principio de 'Deny-by-default' en un cortafuegos significa que:",
        "options": ["Todo el tráfico está permitido salvo que una regla diga lo contrario.", "Todo el tráfico está bloqueado salvo que esté explícitamente permitido por una regla.", "El firewall decide qué bloquear basándose en el historial de navegación."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Es la base para aplicar el privilegio mínimo en el tráfico de red [32, 33]."
    },
    {
        "id": 149,
        "question": "En Squid, el parámetro 'cache_mem' ajusta la memoria dedicada a:",
        "options": ["El almacenamiento de la base de datos de usuarios.", "Almacenar objetos de caché frecuentemente accedidos en la RAM.", "La ejecución de reglas de firewall del sistema operativo."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Se debe dimensionar correctamente para mejorar la velocidad de respuesta sin agotar la RAM del servidor [34, 35]."
    },
    {
        "id": 150,
        "question": "¿Qué patrón de alta disponibilidad implementa Kubernetes para sus aplicaciones?",
        "options": ["Uso exclusivo de almacenamiento en local de cada nodo.", "Replicasets y sondas de salud (probes) para autorecuperación.", "Eliminación de la necesidad de balanceadores de carga."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Esto permite que si un contenedor falla, el orquestador lo reinicie automáticamente para mantener el estado deseado [36]."
    },
    {
        "id": 151,
        "question": "La figura del Delegado de Protección de Datos (DPO) debe contar con:",
        "options": ["Dependencia absoluta de las órdenes del CEO.", "Independencia funcional para supervisar el cumplimiento.", "Acceso solo a los datos de recursos humanos."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "El DPO debe informar directamente al más alto nivel de dirección pero actuar con autonomía [37, 38]."
    },
    {
        "id": 152,
        "question": "El ataque 'Smishing' se realiza a través de:",
        "options": ["Mensajes de voz por teléfono.", "Mensajes cortos de texto (SMS) falsos.", "Correos electrónicos corporativos."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Busca engañar al usuario para que acceda a webs fraudulentas desde su dispositivo móvil [26, 27]."
    },
    {
        "id": 153,
        "question": "¿Qué técnica de persistencia de malware implica modificar las tareas programadas del sistema?",
        "options": ["Reconocimiento OSINT.", "Instalación y Persistencia.", "Entrega de Payload."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Las tareas programadas permiten que el código malicioso se ejecute automáticamente de forma recurrente [39, 40]."
    },
    {
        "id": 154,
        "question": "Para evitar ataques de fuerza bruta en SSH, se recomienda:",
        "options": ["Mantener el puerto 22 abierto a todas las IPs de Internet.", "Deshabilitar login de root y usar autenticación por clave pública.", "Usar contraseñas cortas fáciles de recordar."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Forzar el uso de claves elimina el riesgo de ataques por adivinación de contraseñas [41, 42]."
    },
    {
        "id": 155,
        "question": "Un WAF (Web Application Firewall) es un cortafuegos especializado en:",
        "options": ["Protección de redes Wi-Fi domésticas.", "Protección contra ataques lógicos en la capa de aplicación (HTTP/HTTPS).", "Cifrado de discos duros en servidores."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Es capaz de detectar patrones de Inyección SQL (SQLi) o Cross-Site Scripting (XSS) [43, 44]."
    },
    {
        "id": 156,
        "question": "¿Cuál es una ventaja principal del uso de un Proxy Inverso frente a servidores web?",
        "options": ["Permite ocultar la estructura interna de la red y ofrece terminación SSL.", "Obliga a los usuarios a instalar un software en su ordenador.", "Elimina la necesidad de tener una base de datos."],
        "correct": 0,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Al centralizar la gestión SSL, reduce la carga de procesamiento en los servidores backend [45, 46]."
    },
    {
        "id": 157,
        "question": "En el almacenamiento redundante, ¿qué nivel de RAID utiliza paridad para tolerar el fallo de un disco?",
        "options": ["RAID 0.", "RAID 1.", "RAID 5."],
        "correct": 2,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "RAID 5 distribuye la paridad entre todos los discos del array y requiere al menos 3 unidades [47]."
    },
    {
        "id": 158,
        "question": "El ROPA (Registro de Actividades de Tratamiento) es obligatorio para:",
        "options": ["Solo las empresas tecnológicas de Silicon Valley.", "Las organizaciones según lo especificado en el RGPD para documentar sus tratamientos.", "Los usuarios que navegan por Internet."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Debe incluir la finalidad, base legal, categorías de datos y medidas de seguridad aplicadas [48, 49]."
    },
    {
        "id": 159,
        "question": "En políticas de biometría, ¿dónde deben almacenarse preferiblemente las plantillas de huella o rostro?",
        "options": ["En una base de datos pública en la nube.", "Cifradas localmente dentro de hardware seguro como un chip TPM.", "En un archivo de texto en el escritorio del usuario."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Esto protege la privacidad y evita que una filtración masiva exponga datos biométricos [50]."
    },
    {
        "id": 160,
        "question": "¿Qué permite la técnica de 'Live Migration' en virtualización?",
        "options": ["Mover una máquina virtual de un host físico a otro sin apagarla ni interrumpir el servicio.", "Borrar todas las máquinas virtuales para liberar espacio en disco.", "Cambiar la contraseña de todos los usuarios a la vez."],
        "correct": 0,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Es una herramienta fundamental para realizar mantenimiento de hardware sin afectar la disponibilidad [51]."
    },
    {
        "id": 161,
        "question": "¿En qué consiste la técnica de persistencia de malware denominada 'Living-off-the-land'?",
        "options": ["En instalar un sistema operativo secundario oculto.", "En utilizar utilidades legítimas del sistema como PowerShell o WMI para fines maliciosos.", "En ocultar el código malicioso dentro de archivos de imagen."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Esta técnica dificulta la detección porque las herramientas usadas son consideradas seguras por el sistema [1, 2]."
    },
    {
        "id": 162,
        "question": "Según la UT6, ¿qué nivel de RAID ofrece redundancia mediante doble paridad y permite el fallo de hasta dos discos?",
        "options": ["RAID 5.", "RAID 6.", "RAID 10."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "A diferencia del RAID 5 que solo tolera un fallo, el RAID 6 protege contra fallos simultáneos de dos unidades [3]."
    },
    {
        "id": 163,
        "question": "En una infraestructura de clúster, ¿cuál es la función del mecanismo 'Fencing' (también llamado STONITH)?",
        "options": ["Cifrar los datos en tránsito entre los nodos.", "Aislar o apagar un nodo defectuoso para evitar que corrompa el almacenamiento compartido.", "Repartir la carga de trabajo de forma equitativa entre los servidores."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Es vital para evitar el escenario de 'split-brain', donde dos nodos intentan escribir en el mismo disco a la vez [4]."
    },
    {
        "id": 164,
        "question": "¿Qué comando de PowerShell se utiliza para añadir una regla de bloqueo a un puerto específico en el firewall de Windows?",
        "options": ["Set-NetFirewallRule -Action Block", "New-NetFirewallRule -Action Block", "Add-FirewallBlock -Port"],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "El cmdlet New-NetFirewallRule permite crear nuevas reglas indicando dirección, puerto y acción [5]."
    },
    {
        "id": 165,
        "question": "En el contexto del RGPD, ¿qué figura legal actúa como enlace entre la organización, los interesados y la autoridad de control (AEPD)?",
        "options": ["El Responsable del Tratamiento.", "El Encargado del Tratamiento.", "El Delegado de Protección de Datos (DPO/DPD)."],
        "correct": 2,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "El DPO asesora y supervisa el cumplimiento de forma independiente [6, 7]."
    },
    {
        "id": 166,
        "question": "Al realizar un análisis forense, ¿por qué se recomienda desconectar la red antes de apagar el equipo ante una sospecha de malware en memoria?",
        "options": ["Para que el equipo se apague más rápido.", "Para ganar minutos de observación sobre procesos activos y sockets antes de perder la volatilidad de la RAM.", "Porque el firewall de host no funciona sin conexión."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Apagar el equipo inmediatamente borra las pistas del malware residente en la RAM [8, 9]."
    },
    {
        "id": 167,
        "question": "¿Cuál es la cabecera HTTP estándar que un servidor proxy debe incluir para que el servidor final conozca la dirección IP original del cliente?",
        "options": ["User-Agent.", "X-Forwarded-For.", "Proxy-Authenticate."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Esta cabecera preserva la trazabilidad de la identidad real del origen de la petición [10, 11]."
    },
    {
        "id": 168,
        "question": "En Iptables, ¿cuál es la función de la tabla 'nat' y su cadena 'PREROUTING'?",
        "options": ["Filtrar paquetes entrantes por puerto.", "Modificar paquetes antes de que se tome la decisión de enrutamiento, útil para redirección de puertos.", "Controlar el tráfico que sale del servidor local."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Se usa comúnmente para implementar proxies transparentes redirigiendo el tráfico del puerto 80 al 3128 [12, 13]."
    },
    {
        "id": 169,
        "question": "¿Qué protocolo de VPN se basa en pares de claves públicas ligeras integradas en el kernel de Linux y destaca por su alta eficiencia?",
        "options": ["IPsec.", "OpenVPN.", "WireGuard."],
        "correct": 2,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "WireGuard ofrece mejor rendimiento y una configuración mucho más simple que los protocolos tradicionales [14, 15]."
    },
    {
        "id": 170,
        "question": "Bajo la LSSI-CE, ¿qué es obligatorio para los prestadores de servicios en relación con las cookies no esenciales?",
        "options": ["Informar y obtener consentimiento informado antes de su instalación.", "Instalarlas por defecto y permitir que el usuario las borre luego.", "Ocultar la lista de cookies para no confundir al usuario."],
        "correct": 0,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Se requiere un sistema de gestión de consentimiento (CMP) que bloquee los scripts hasta que el usuario acepte [16, 17]."
    },
    {
        "id": 171,
        "question": "En un sistema IDS, ¿qué indica una alta tasa de 'falsos positivos'?",
        "options": ["Que el sistema no detecta ataques reales.", "Que el sistema genera alertas innecesarias ante actividades legítimas, causando fatiga operativa.", "Que el hardware del servidor está fallando."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Requiere un proceso de 'tuning' o ajuste de reglas para que las alertas sean accionables [18]."
    },
    {
        "id": 172,
        "question": "¿Qué comando de Linux permite calcular el hash SHA-256 de un archivo para verificar su integridad tras una descarga?",
        "options": ["md5sum", "sha256sum", "verify-hash"],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Es una práctica forense y de seguridad básica para garantizar que el archivo no ha sido alterado [19, 20]."
    },
    {
        "id": 173,
        "question": "En el orquestador Kubernetes, ¿cuál es la función de las 'Liveness Probes'?",
        "options": ["Escalar el número de pods según la carga de CPU.", "Detectar contenedores fallidos y reiniciarlos automáticamente para mantener la disponibilidad.", "Cifrar las comunicaciones entre los servicios del clúster."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Es una de las piezas clave del patrón de 'auto-healing' o autorecuperación [21]."
    },
    {
        "id": 174,
        "question": "Según el RGPD, ¿cuál es el plazo máximo para notificar una brecha de seguridad de datos personales a la AEPD?",
        "options": ["24 horas.", "72 horas desde que se tenga conocimiento.", "7 días naturales."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "La notificación debe ser diligente para mitigar riesgos sobre los derechos y libertades de las personas [22, 23]."
    },
    {
        "id": 175,
        "question": "En el diseño de reglas de firewall, ¿a qué se refiere el término 'Shadowing'?",
        "options": ["A una regla que monitoriza el tráfico de forma oculta.", "A un conflicto donde una regla nunca se ejecuta porque otra regla anterior de mayor jerarquía ya ha tomado la decisión.", "Al registro de logs en un servidor secundario."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "El orden de las reglas es crítico para evitar que una política restrictiva sea ignorada por una permisiva previa [24]."
    },
    {
        "id": 176,
        "question": "¿Qué herramienta integrada en Windows permite gestionar y auditar el cifrado de unidad BitLocker desde la consola?",
        "options": ["bitlocker.exe", "manage-bde", "cipher.exe"],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "El comando 'manage-bde -status' es esencial para verificar que el disco está cifrado al 100% [25, 26]."
    },
    {
        "id": 177,
        "question": "Dentro de un túnel VPN, ¿qué modo de operación de IPsec cifra tanto la carga útil como el encabezado IP original, creando un nuevo paquete?",
        "options": ["Modo Transporte.", "Modo Túnel.", "Modo Red."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "El modo túnel es el utilizado para conexiones de red a red (site-to-site) [27]."
    },
    {
        "id": 178,
        "question": "En la monitorización de Squid, el parámetro 'hit ratio' mide:",
        "options": ["El número de intentos de ataque bloqueados por el proxy.", "El porcentaje de peticiones que fueron servidas directamente desde la memoria caché sin ir a Internet.", "La velocidad media de descarga de los usuarios."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Un hit ratio alto indica que la caché es eficiente y ahorra ancho de banda [28, 29]."
    },
    {
        "id": 179,
        "question": "¿Qué vulnerabilidad lógica consiste en intentar desbordar la memoria asignada a una aplicación para ejecutar código malicioso?",
        "options": ["SQL Injection.", "Buffer Overflow (Desbordamiento de búfer).", "Cross-Site Scripting (XSS)."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Es una técnica clásica para tomar el control de procesos del sistema [30]."
    },
    {
        "id": 180,
        "question": "En alta disponibilidad, ¿qué diferencia al RPO del RTO?",
        "options": ["RTO es tiempo de recuperación y RPO es pérdida de datos tolerable medida en tiempo.", "Son el mismo concepto aplicados a hardware y software.", "RPO es para backups y RTO para clústeres."],
        "correct": 0,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Si el RPO es de 1 hora, no podemos permitirnos perder más de los últimos 60 minutos de transacciones [31, 32]."
    },
    {
        "id": 181,
        "question": "¿Qué directiva de 'sshd_config' en Linux se debe configurar como 'no' para impedir que el administrador acceda directamente por SSH?",
        "options": ["RootAccess no", "PermitRootLogin no", "AllowAdminLogin no"],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Es una de las medidas de endurecimiento (hardening) más importantes para SSH [33, 34]."
    },
    {
        "id": 182,
        "question": "Bajo la normativa ENS (Esquema Nacional de Seguridad), ¿quiénes están obligados a cumplir sus requisitos?",
        "options": ["Solo las empresas que facturan más de 50 millones de euros.", "El sector público español y las entidades privadas que le prestan servicios.", "Cualquier sitio web que use cookies publicitarias."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "El ENS establece los principios y requisitos de seguridad para la administración electrónica en España [35, 36]."
    },
    {
        "id": 183,
        "question": "¿Qué comando de Linux permite monitorizar en tiempo real las conexiones de red y los procesos (PID) que las han abierto?",
        "options": ["ip addr", "ss -tulpn", "ifconfig -a"],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Es fundamental para identificar 'beacons' de malware conectándose a servidores de comando y control [37, 38]."
    },
    {
        "id": 184,
        "question": "En el contexto de la biometría, ¿qué significa el término 'Liveness Detection' (Detección de vida)?",
        "options": ["Que el sensor de huellas funciona bajo el agua.", "Un mecanismo para asegurar que el rasgo biométrico proviene de una persona real y no de una foto o réplica.", "Que el usuario está logueado en ese momento."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Previene ataques de suplantación (spoofing) con imágenes o moldes [39, 40]."
    },
    {
        "id": 185,
        "question": "Al configurar un proxy inverso con Nginx, ¿para qué sirve la directiva 'proxy_pass'?",
        "options": ["Para habilitar el cifrado de la contraseña del usuario.", "Para indicar la dirección del servidor interno (backend) al que se debe reenviar la petición.", "Para bloquear ataques de denegación de servicio."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Es la directiva central que define hacia dónde fluye el tráfico desde el proxy [11, 41]."
    },
    {
        "id": 186,
        "question": "En el análisis forense, ¿qué tipo de evidencia tiene la mayor volatilidad y debe ser recolectada primero?",
        "options": ["El sistema de archivos del disco duro.", "La memoria RAM y el estado de las conexiones de red.", "Los registros de logs persistentes en el SIEM."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "Según la jerarquía de volatilidad, la RAM contiene procesos inyectados y claves temporales que se pierden al apagar el equipo [1]."
    },
    {
        "id": 187,
        "question": "¿Cuál es la característica principal que distingue a un 'Gusano' (Worm) de un virus convencional?",
        "options": ["Necesita adjuntarse a un archivo ejecutable para propagarse.", "Tiene capacidad de autorreplicación y propagación autónoma por la red.", "Solo se activa mediante ingeniería social telefónica."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Los gusanos explotan vulnerabilidades en servicios como SMB para infectar otros sistemas sin intervención del usuario [2]."
    },
    {
        "id": 188,
        "question": "Al configurar una VPN, ¿qué implica habilitar el 'Split-tunneling'?",
        "options": ["Cifrar todo el tráfico del cliente, incluyendo la navegación general a Internet.", "Permitir que solo el tráfico corporativo vaya por el túnel, mientras el resto usa la conexión local.", "Dividir la conexión en dos túneles IPsec paralelos para redundancia."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "El split-tunneling reduce la latencia del cliente pero puede introducir riesgos si no se controla el tráfico que queda fuera del túnel [3]."
    },
    {
        "id": 189,
        "question": "¿Qué comando de Linux se utiliza para restaurar las reglas de filtrado guardadas previamente en un archivo?",
        "options": ["sudo iptables -L", "sudo iptables-restore < archivo.rules", "sudo ufw reload"],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Este comando es esencial para el mantenimiento y para aplicar configuraciones de firewall de forma masiva y sin errores [4]."
    },
    {
        "id": 190,
        "question": "En la configuración de Squid, ¿para qué sirve el parámetro 'refresh_pattern'?",
        "options": ["Para definir cuánto tiempo se considera válido un objeto en la caché antes de verificarlo con el servidor original.", "Para reiniciar el servicio automáticamente cada 24 horas.", "Para actualizar la lista negra de dominios desde una URL externa."],
        "correct": 0,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Ajustar este parámetro es vital para balancear el ahorro de ancho de banda con la frescura de los datos servidos [5]."
    },
    {
        "id": 191,
        "question": "¿Qué nivel de RAID combina la duplicación de datos (mirroring) con la segmentación (striping) para ofrecer alto rendimiento y redundancia?",
        "options": ["RAID 5.", "RAID 6.", "RAID 10."],
        "correct": 2,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "El RAID 10 es un 'strip of mirrors' que requiere al menos 4 discos y ofrece una recuperación más rápida que el RAID 5 [6]."
    },
    {
        "id": 192,
        "question": "Bajo el RGPD, ¿qué figura legal es la que decide 'los fines y los medios' del tratamiento de los datos personales?",
        "options": ["El Encargado del Tratamiento.", "El Responsable del Tratamiento.", "El Delegado de Protección de Datos (DPO)."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "El Responsable es quien asume la obligación principal de cumplimiento y la rendición de cuentas [7]."
    },
    {
        "id": 193,
        "question": "¿Cuál es una ventaja clave del reconocimiento facial 3D frente al 2D en biometría?",
        "options": ["Es mucho más económico de implementar.", "Ofrece mayor resistencia al 'spoofing' mediante fotos o pantallas al detectar profundidad.", "Funciona mejor en condiciones de oscuridad total."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "La detección de vida (liveness detection) es intrínseca a los sistemas 3D, elevando la seguridad [8]."
    },
    {
        "id": 194,
        "question": "En la anatomía de un ataque, ¿en qué consiste la fase de 'Weaponization'?",
        "options": ["En el escaneo de puertos y servicios del objetivo.", "En la preparación de un payload malicioso adaptado a una vulnerabilidad específica.", "En la exfiltración final de los datos comprometidos."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Es la etapa donde el atacante combina un exploit con un backdoor para crear el paquete que será entregado a la víctima [9]."
    },
    {
        "id": 195,
        "question": "¿Qué directiva en el archivo 'sshd_config' permite restringir el acceso SSH solo a una lista específica de usuarios?",
        "options": ["AllowUsers", "PermitUserList", "RestrictedLogon"],
        "correct": 0,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "Usar AllowUsers es una medida de endurecimiento que reduce drásticamente la superficie de ataque por fuerza bruta [10, 11]."
    },
    {
        "id": 196,
        "question": "¿Cuál es la diferencia fundamental entre un Firewall de red y un WAF (Web Application Firewall)?",
        "options": ["El firewall de red es físico y el WAF es siempre una nube.", "El WAF entiende el protocolo HTTP/S y detecta ataques lógicos como Inyección SQL.", "El firewall de red no puede bloquear direcciones IP."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Mientras el firewall de red filtra por puertos (L4), el WAF inspecciona el contenido de la aplicación (L7) [12, 13]."
    },
    {
        "id": 197,
        "question": "Al configurar un proxy inverso con Nginx, ¿qué directiva se usa para definir el servidor interno al que se reenvía la petición?",
        "options": ["proxy_pass", "upstream_server", "forward_to"],
        "correct": 0,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Esta es la directiva central que conecta el frontal expuesto con el backend de la aplicación [14]."
    },
    {
        "id": 198,
        "question": "En la gestión de niveles de servicio (SLA), ¿qué representa el término 'Cinco Nueves'?",
        "options": ["Una disponibilidad del 99.999%, lo que permite menos de 6 minutos de caída al año.", "Que el sistema tiene 5 nodos de respaldo activos.", "Que el tiempo de respuesta del soporte técnico es de 9 minutos."],
        "correct": 0,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "Alcanzar los 'cinco nueves' exige una infraestructura extremadamente redundante y distribuida [15]."
    },
    {
        "id": 199,
        "question": "El Esquema Nacional de Seguridad (ENS) clasifica los sistemas en tres categorías. ¿Cuáles son?",
        "options": ["Público, Privado y Restringido.", "Básica, Media y Alta.", "Interna, DMZ y Exterior."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Esta clasificación determina el rigor y la cantidad de medidas de seguridad obligatorias que se deben aplicar [16]."
    },
    {
        "id": 200,
        "question": "¿Qué utilidad tiene el comando 'sha256sum' en un procedimiento forense en Linux?",
        "options": ["Cifrar los archivos de evidencia.", "Generar una huella digital única para garantizar que la evidencia no ha sido alterada.", "Listar los procesos que están ocupando el disco."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "El cálculo del hash es la base para mantener la integridad en la cadena de custodia [17]."
    },
    {
        "id": 201,
        "question": "¿Qué ventaja técnica ofrece Suricata frente a Snort 2.x como sistema NIDS?",
        "options": ["Es más antiguo y tiene más firmas.", "Su arquitectura es multi-hilo (multi-threaded), aprovechando mejor los procesadores modernos.", "Solo funciona en redes inalámbricas."],
        "correct": 1,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "Esto permite a Suricata procesar mayores volúmenes de tráfico de red sin pérdida de paquetes [18]."
    },
    {
        "id": 202,
        "question": "En un túnel VPN IPsec, ¿qué diferencia al 'Modo Transporte' del 'Modo Túnel'?",
        "options": ["El modo transporte es más rápido pero no usa cifrado.", "El modo túnel cifra tanto la carga útil como el encabezado IP original, creando un nuevo encabezado.", "El modo transporte solo se usa para conexiones entre routers."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "El modo túnel es el estándar para VPNs de red a red (site-to-site) porque oculta la topología interna [19]."
    },
    {
        "id": 203,
        "question": "¿Qué comando permite verificar en tiempo real si el firewall UFW en Ubuntu está activo y qué reglas tiene aplicadas?",
        "options": ["sudo ufw status verbose", "sudo iptables -L", "systemctl status firewall"],
        "correct": 0,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Este comando muestra de forma sencilla la política por defecto y las excepciones configuradas [20, 21]."
    },
    {
        "id": 204,
        "question": "Para que Squid funcione en modo 'Intercept' (transparente), ¿qué puerto suele configurarse además del estándar?",
        "options": ["El puerto 8080.", "Se añade el modificador 'intercept' a la directiva http_port.", "El puerto 443."],
        "correct": 1,
        "category": "UT5",
        "modes": ["general", "ut5"],
        "tip": "Esto indica a Squid que debe procesar el tráfico que le llega redirigido por NAT en el gateway [22]."
    },
    {
        "id": 205,
        "question": "En Kubernetes, ¿cuál es la función de las 'Readiness Probes'?",
        "options": ["Reiniciar el contenedor si este deja de funcionar.", "Determinar si un contenedor está listo para empezar a recibir tráfico del balanceador.", "Cifrar el tráfico entre pods."],
        "correct": 1,
        "category": "UT6",
        "modes": ["general", "ut6"],
        "tip": "A diferencia de las Liveness Probes, estas solo controlan si el servicio está disponible para el usuario [23]."
    },
    {
        "id": 206,
        "question": "Según la normativa de cookies (LSSI-CE), ¿cuáles pueden instalarse sin consentimiento previo del usuario?",
        "options": ["Las cookies de personalización y marketing.", "Solo las cookies estrictamente necesarias para el funcionamiento técnico de la web.", "Ninguna, todas requieren consentimiento explícito."],
        "correct": 1,
        "category": "UT7",
        "modes": ["general", "ut7"],
        "tip": "Las cookies de sesión o las que permiten el carrito de compra son ejemplos de cookies exceptuadas [24, 25]."
    },
    {
        "id": 207,
        "question": "¿Qué propiedad criptográfica asegura que, aunque una clave de servidor se vea comprometida en el futuro, las comunicaciones pasadas sigan siendo seguras?",
        "options": ["Cifrado simétrico.", "Perfect Forward Secrecy (PFS).", "Hashing SHA-512."],
        "correct": 1,
        "category": "UT1",
        "modes": ["general", "ut1"],
        "tip": "PFS genera claves de sesión efímeras que no dependen de la clave persistente del servidor [26]."
    },
    {
        "id": 208,
        "question": "¿Qué técnica utiliza el malware avanzado para generar miles de dominios de C2 diferentes y así evadir el bloqueo por IP fija?",
        "options": ["DGA (Domain Generation Algorithm).", "SQL Injection.", "Phishing masivo."],
        "correct": 0,
        "category": "UT2",
        "modes": ["general", "ut2"],
        "tip": "El uso de algoritmos de generación de dominios obliga a los defensores a usar listas de reputación dinámicas [27]."
    },
    {
        "id": 209,
        "question": "¿Cuál es la función principal de un servidor RADIUS en una infraestructura VPN?",
        "options": ["Cifrar los paquetes de datos que viajan por el túnel.", "Centralizar la autenticación y la contabilidad (accounting) de las sesiones de los usuarios.", "Actuar como servidor DNS para los clientes remotos."],
        "correct": 1,
        "category": "UT3",
        "modes": ["general", "ut3"],
        "tip": "RADIUS permite que la VPN consulte una base de datos central como Active Directory para validar credenciales [28]."
    },
    {
        "id": 210,
        "question": "En la planificación de un proxy transparente, ¿qué técnica de red se suele usar en el router para enviar el tráfico al proxy?",
        "options": ["Port Forwarding simple.", "Policy-based routing o WCCP.", "VLAN Trunking."],
        "correct": 1,
        "category": "UT4",
        "modes": ["general", "ut4"],
        "tip": "Estas técnicas permiten interceptar el tráfico de los clientes de forma invisible para ellos [29]."
    }
];

// Variables de estado
let visibleQuestions = [];
let userAnswers = [];
let questionsPerExam = 30; // UPDATED to 30
let currentMode = 'general';

let generalExamState = {
    currentExamIndex: 0,
    totalExams: 5,
    examResults: [],
    score: 0,
    consecutiveIncorrect: 0,
    correct: 0,
    incorrect: 0
};

let singleModeState = {
    active: false,
    score: 0,
    consecutiveIncorrect: 0,
    correct: 0,
    incorrect: 0
};

// Referencias DOM
const examContainer = document.getElementById('exam-container');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const finalResultsScreen = document.getElementById('final-results-screen');
const questionsContainer = document.getElementById('questions-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitExamBtn = document.getElementById('submit-exam-btn');
const exitBtn = document.getElementById('exit-btn');
const reviewExamBtn = document.getElementById('review-exam-btn');
const nextExamBtn = document.getElementById('next-exam-btn');
const restartBtn = document.getElementById('restart-btn');
const currentExamEl = document.getElementById('current-exam');
const scoreEl = document.getElementById('score');
const settingsBtn = document.getElementById('settings-btn');
const settingsDropdown = document.getElementById('settings-dropdown');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sepiaModeToggle = document.getElementById('sepia-mode-toggle');
const sepiaSlider = document.getElementById('sepia-slider');
const sepiaControls = document.getElementById('sepia-controls');
const scrollTopBtn = document.getElementById('scroll-top-btn');

function init() {
    loadSettings();
    setupEventListeners();
    setupSettings();
    showStartScreen();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function saveSettings() {
    const settings = {
        darkMode: darkModeToggle.checked,
        sepiaMode: sepiaModeToggle.checked,
        sepiaIntensity: sepiaSlider.value
    };
    localStorage.setItem('exam_settings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('exam_settings');
    if (!saved) return;

    try {
        const settings = JSON.parse(saved);

        if (settings.darkMode) {
            darkModeToggle.checked = true;
            document.body.classList.add('dark-mode');
        }

        if (settings.sepiaMode) {
            sepiaModeToggle.checked = true;
            document.body.classList.add('sepia-mode');
            sepiaControls.classList.remove('hidden');
        }

        if (settings.sepiaIntensity) {
            sepiaSlider.value = settings.sepiaIntensity;
            document.body.style.setProperty('--sepia-amount', settings.sepiaIntensity / 100);
        }
    } catch (e) {
        console.error("Error loading settings", e);
    }
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mode = e.currentTarget.dataset.mode;
            startMode(mode);
        });
    });

    prevBtn.addEventListener('click', () => navigateQuestion(-1));
    nextBtn.addEventListener('click', () => navigateQuestion(1));

    // Exit Button
    exitBtn.addEventListener('click', () => {
        if (confirm("¿Seguro que quieres salir? Perderás el progreso actual.")) {
            showStartScreen();
        }
    });

    submitExamBtn.addEventListener('click', finishCurrentExam);
    reviewExamBtn.addEventListener('click', reviewExam);
    nextExamBtn.addEventListener('click', nextGeneralExamStep);
    restartBtn.addEventListener('click', fullRestart);

    // Settings Dropdown
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsDropdown.classList.toggle('active');
    });

    // Close Dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (!settingsDropdown.contains(e.target) && e.target !== settingsBtn) {
            settingsDropdown.classList.remove('active');
        }
    });

    // Scroll to Top
    window.addEventListener('scroll', toggleScrollTopBtn);
    scrollTopBtn.addEventListener('click', scrollToTop);
}

function toggleScrollTopBtn() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function setupSettings() {
    // Dark Mode
    darkModeToggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        document.body.classList.toggle('dark-mode', isChecked);

        // If enabling Dark Mode, disable Sepia Mode
        if (isChecked && sepiaModeToggle.checked) {
            sepiaModeToggle.checked = false;
            document.body.classList.remove('sepia-mode');
            sepiaControls.classList.add('hidden');
        }
        saveSettings();
    });

    // Sepia Mode
    sepiaModeToggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        document.body.classList.toggle('sepia-mode', isChecked);
        sepiaControls.classList.toggle('hidden', !isChecked);

        // If enabling Sepia Mode, disable Dark Mode
        if (isChecked && darkModeToggle.checked) {
            darkModeToggle.checked = false;
            document.body.classList.remove('dark-mode');
        }
        saveSettings();
    });

    // Sepia Slider
    sepiaSlider.addEventListener('input', (e) => {
        const val = e.target.value / 100;
        document.body.style.setProperty('--sepia-amount', val);
        saveSettings();
    });
}

function showStartScreen() {
    window.scrollTo(0, 0); // Scroll to top
    hideAllSections();
    startScreen.classList.add('active');
    resetStats();
}

function startMode(mode) {
    window.scrollTo(0, 0); // Scroll to top
    currentMode = mode;
    hideAllSections();
    examContainer.classList.add('active');

    if (mode === 'general') {
        startGeneralExamSequence();
    } else {
        startSingleTopicExam(mode);
    }
}

function startGeneralExamSequence() {
    generalExamState = {
        currentExamIndex: 0,
        totalExams: 1, // UPDATED: Just 1 exam of 30 questions
        examResults: [],
        score: 0,
        consecutiveIncorrect: 0,
        correct: 0,
        incorrect: 0
    };
    singleModeState.active = false;
    currentExamEl.textContent = `General`;
    startNextGeneralExam();
}

function startNextGeneralExam() {
    window.scrollTo(0, 0); // Scroll to top
    let questions = getQuestionsByMode('general', 30); // UPDATED to 30
    visibleQuestions = questions;
    userAnswers = new Array(visibleQuestions.length).fill(null);
    renderQuestions(visibleQuestions);
    updateStatsDisplay();
}

function nextGeneralExamStep() {
    generalExamState.currentExamIndex++;
    if (generalExamState.currentExamIndex < generalExamState.totalExams) {
        currentExamEl.textContent = `${generalExamState.currentExamIndex + 1}/${generalExamState.totalExams}`;
        hideAllSections();
        examContainer.classList.add('active');
        startNextGeneralExam();
    } else {
        showFinalResults();
    }
}

function startSingleTopicExam(mode) {
    singleModeState = {
        active: true,
        score: 0,
        consecutiveIncorrect: 0,
        correct: 0,
        incorrect: 0
    };

    let questions = getQuestionsByMode(mode, 15);
    if (questions.length === 0) {
        alert("No hay preguntas suficientes para este modo aún.");
        showStartScreen();
        return;
    }

    visibleQuestions = questions;
    userAnswers = new Array(visibleQuestions.length).fill(null);
    currentExamEl.textContent = `Tema: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
    renderQuestions(visibleQuestions);
    updateStatsDisplay();
}

function getQuestionsByMode(mode, count) {
    let pool = questionDatabase.filter(q => q.modes.includes(mode));
    shuffleArray(pool);

    let selected = pool.slice(0, count);

    // Shuffle options and update correct answer index for each question
    return selected.map(q => {
        // Clone the question to avoid modifying the original database
        let clonedQ = JSON.parse(JSON.stringify(q));
        let options = [...clonedQ.options];
        let correctText = options[clonedQ.correct];

        // Shuffle the options
        shuffleArray(options);

        // Find the new index of the correct answer
        clonedQ.options = options;
        clonedQ.correct = options.indexOf(correctText);

        return clonedQ;
    });
}

function renderQuestions(questions) {
    questionsContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const qEl = document.createElement('div');
        qEl.className = 'question-card fade-in';
        if (index !== 0) qEl.style.display = 'none';
        qEl.dataset.index = index;

        qEl.innerHTML = `
            <div class="question-header">
                <span class="question-number">#${index + 1}</span>
                <span class="question-text">${q.question}</span>
            </div>
            <div class="options" role="radiogroup" aria-label="Opciones de respuesta">
                ${q.options.map((opt, i) => `
                    <div class="option" data-idx="${i}" tabindex="0" role="button" aria-label="Opción ${i + 1}: ${opt}">
                        ${opt}
                    </div>
                `).join('')}
            </div>
            <div class="feedback" id="feedback-${index}" aria-live="polite"></div>
            <div class="hint-container">
                <button class="btn-hint" id="hint-btn-${index}">💡 Ver pista</button>
                <div class="hint-content hidden" id="hint-content-${index}">${q.tip}</div>
            </div>
        `;

        // Attach event listeners programmatically (CSP Compliant)
        const hintBtn = qEl.querySelector(`#hint-btn-${index}`);
        const hintContent = qEl.querySelector(`#hint-content-${index}`);
        hintBtn.addEventListener('click', () => {
            hintContent.classList.toggle('hidden');
            hintBtn.textContent = hintContent.classList.contains('hidden') ? '💡 Ver pista' : '🙈 Ocultar pista';
        });

        const opts = qEl.querySelectorAll('.option');
        opts.forEach((opt, i) => {
            opt.addEventListener('click', () => selectOption(index, i));
            // Accessibility: allow selecting with keyboard
            opt.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectOption(index, i);
                }
            });
        });

        questionsContainer.appendChild(qEl);
    });
    updateNavigation(0);
}

function selectOption(qIndex, optIndex) {
    // Prevent changing answer if already answered (Lock mechanics)
    if (userAnswers[qIndex] !== null && userAnswers[qIndex] !== undefined) return;

    userAnswers[qIndex] = optIndex;
    const currentQ = visibleQuestions[qIndex];
    const isCorrect = (optIndex === currentQ.correct);

    const card = questionsContainer.children[qIndex];
    const opts = card.querySelectorAll('.option');

    const selectedOpt = opts[optIndex];
    selectedOpt.classList.add('selected');

    // Immediate Feedback Logic
    if (isCorrect) {
        selectedOpt.classList.add('correct');
    } else {
        selectedOpt.classList.add('incorrect');
        // Highlight the correct answer so user knows
        opts[currentQ.correct].classList.add('correct');
    }

    // Show Feedback Div immediately
    const feedbackEl = card.querySelector('.feedback');
    feedbackEl.innerHTML = isCorrect ?
        `<strong>¡Correcto!</strong>` :
        `<strong>Incorrecto</strong><br>La respuesta correcta era: "<strong>${currentQ.options[currentQ.correct]}</strong>"`;

    feedbackEl.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

    // Auto-show hint on incorrect answer if not already visible
    const hintContent = card.querySelector('.hint-content');
    const hintBtn = card.querySelector('.btn-hint');
    if (!isCorrect) {
        hintContent.classList.remove('hidden');
        hintBtn.textContent = '🙈 Ocultar pista';
    }

    // Disable further interactions on this question
    opts.forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.style.cursor = 'default';
    });

    // --- REAL-TIME SCORING UPDATE ---
    let currentState = singleModeState.active ? singleModeState : generalExamState;

    if (isCorrect) {
        currentState.correct++;
        currentState.score += 0.33;
        currentState.consecutiveIncorrect = 0;
    } else {
        currentState.incorrect++;
        currentState.consecutiveIncorrect++;

        // Penalty for every 3rd incorrect answer
        if (currentState.consecutiveIncorrect >= 3) {
            currentState.score -= 0.33;
            currentState.consecutiveIncorrect = 0;
        }
    }

    // Clamp score to 0 if negative
    if (currentState.score < 0) currentState.score = 0;

    updateStatsDisplay();
}

function navigateQuestion(direction) {
    const currentCard = Array.from(questionsContainer.children).find(c => c.style.display !== 'none');
    let currIdx = parseInt(currentCard.dataset.index);
    let nextIdx = currIdx + direction;

    if (nextIdx >= 0 && nextIdx < visibleQuestions.length) {
        currentCard.style.display = 'none';
        questionsContainer.children[nextIdx].style.display = 'block';
        updateNavigation(nextIdx);
    }
}

function updateNavigation(index) {
    prevBtn.style.display = index === 0 ? 'none' : 'block';

    if (index === visibleQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitExamBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitExamBtn.style.display = 'none';
    }
}

function finishCurrentExam() {
    let correct = 0;
    let incorrect = 0;
    let examScore = 0;

    // Usar puntero al estado correcto
    let currentState = singleModeState.active ? singleModeState : generalExamState;

    visibleQuestions.forEach((q, i) => {
        const ans = userAnswers[i];
        const isCorrect = (ans === q.correct);

        if (isCorrect) {
            correct++;
            examScore += 0.33;
            // Note: Consecutive incorrect tracking for *examScore* calculation here would be complex if we wanted to replicate the exact per-exam score logic distinct from the global one.
            // But since we are accumulating globally, we just want to know how well they did on *this* specific set for the log.
            // For simplicity in the log, we track raw correct/incorrect.
            // If we wanted to track points specifically for this exam including penalties, we'd need a local consecutive tracking.
        } else {
            incorrect++;

            // Local tracking for this exam's specific score calculation
            // We can't reuse currentState.consecutiveIncorrect because that's global/live.
        }
    });

    // We used to update tracking state here. Now we ONLY handle the logging/UI transition.
    // The currentState.score is ALREADY updated by selectOption.

    if (singleModeState.active) {
        // Score is already up to date.
        // We pass the global score or the exam specific score?
        // showSingleExamResults usually shows the score achieved.
        // Let's pass the *current total score* as requested by the function signature usually used for "final score".
        showSingleExamResults(correct, incorrect, singleModeState.score);
    } else {
        // generalExamState.score is already updated.
        // We push the *stats for this specific exam* to results. 
        // Note: 'examScore' calculated above in the loop is slightly inaccurate now because it doesn't track consecutive penalties strictly per-exam if it spans exams (though general exam is just 1 now).
        // Let's just push correct/incorrect counts which are accurate.
        generalExamState.examResults.push({ correct, incorrect, score: generalExamState.score });

        showSingleExamResults(correct, incorrect, generalExamState.score);
    }
}

function showSingleExamResults(correct, incorrect, score) {
    window.scrollTo(0, 0); // Scroll to top
    hideAllSections();
    resultsScreen.classList.add('active');

    const percentage = Math.round((correct / visibleQuestions.length) * 100);
    const circle = document.getElementById('score-circle');
    circle.textContent = `${percentage}%`;

    circle.className = 'score-circle';
    if (percentage >= 80) circle.classList.add('score-excellent');
    else if (percentage >= 50) circle.classList.add('score-good');
    else circle.classList.add('score-poor');

    document.getElementById('final-score').textContent = score.toFixed(2);

    const list = document.getElementById('results-list');
    list.innerHTML = '';
    visibleQuestions.forEach((q, i) => {
        const item = document.createElement('div');
        item.className = 'result-item';
        const isCorrect = userAnswers[i] === q.correct;
        item.style.borderLeft = isCorrect ? '5px solid var(--success-color)' : '5px solid var(--danger-color)';

        item.innerHTML = `
            <div><strong>${i + 1}. ${q.question}</strong></div>
            <div style="color: ${isCorrect ? 'green' : 'red'}">
                Tu respuesta: ${q.options[userAnswers[i]] || 'Sin responder'} 
                ${isCorrect ? '✅' : '❌'}
            </div>
            ${!isCorrect ? `<div style="font-size: 0.9em; margin-top: 5px; color: #666;">Tip: ${q.tip}</div>` : ''}
        `;
        list.appendChild(item);
    });

    // Always offer "Back to Menu" now that General is single-exam
    nextExamBtn.textContent = "Volver al Menú";
    nextExamBtn.onclick = showStartScreen;
}

function reviewExam() {
    window.scrollTo(0, 0); // Scroll to top
    hideAllSections();
    examContainer.classList.add('active');

    Array.from(questionsContainer.children).forEach((card, i) => {
        card.style.display = i === 0 ? 'block' : 'none';

        const feedback = card.querySelector('.feedback');
        const isCorrect = userAnswers[i] === visibleQuestions[i].correct;
        feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = isCorrect ? '¡Correcto!' : `Incorrecto. ${visibleQuestions[i].tip}`;

        const opts = card.querySelectorAll('.option');
        opts.forEach((opt, idx) => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            if (idx === visibleQuestions[i].correct) opt.classList.add('correct');
            if (idx === userAnswers[i] && !isCorrect) opt.classList.add('incorrect');
        });
    });

    updateNavigation(0);
    submitExamBtn.style.display = 'block';
    submitExamBtn.textContent = "Volver a Resultados";
    submitExamBtn.onclick = () => {
        hideAllSections();
        resultsScreen.classList.add('active');
        submitExamBtn.onclick = finishCurrentExam;
    };
}

function showFinalResults() {
    hideAllSections();
    finalResultsScreen.classList.add('active');

    document.getElementById('total-final-score').textContent = generalExamState.score.toFixed(2);

    const summary = document.getElementById('exams-summary');
    summary.innerHTML = generalExamState.examResults.map((res, i) => `
        <div class="result-item">
            <strong>Examen ${i + 1}:</strong> ${res.score.toFixed(2)} pts
        </div>
    `).join('');

    document.getElementById('improvement-areas').innerHTML = "<p>¡Buen trabajo! Sigue practicando.</p>";
}

function fullRestart() {
    showStartScreen();
}

function hideAllSections() {
    document.querySelectorAll('.exam-section').forEach(el => el.classList.remove('active'));
}

function resetStats() {
    scoreEl.textContent = '0.00';
    currentExamEl.textContent = '-';
    // Reset stats display
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('incorrect-count').textContent = '0';
}

function updateStatsDisplay() {
    let s = singleModeState.active ? singleModeState : generalExamState;
    scoreEl.textContent = s.score.toFixed(2);
    document.getElementById('correct-count').textContent = s.correct;
    document.getElementById('incorrect-count').textContent = s.incorrect;
}

init();