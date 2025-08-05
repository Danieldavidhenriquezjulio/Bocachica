import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Anchor, Shield, Users, X } from 'lucide-react';
import Card from '../components/UI/Card';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
}



const Historia: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
   const [activeEvent, setActiveEvent] = useState<number | null>(null);

 const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const openModal = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const timelineEvents: TimelineEvent[] = [
    {
      year: 'a 1536',
      title: 'la presencia española en Tierrabomba: contexto indígena y primeros contactos',
      description: 'Primer avistamiento por exploradores europeos',
      details: `Antes de la llegada de los conquistadores españoles, la isla de Tierrabomba, ubicada frente a la actual bahía de Cartagena de Indias, estaba habitada por grupos indígenas de filiación caribe, organizados en cacicazgos independientes. En la zona sur de la isla, se encontraba el cacique Carex, una figura reconocida en las crónicas tempranas de la conquista como uno de los jefes locales con mayor autoridad en el archipiélago costero, que también incluía islas como Barú, Abanico y Tierra Bomba.


En el año 1533, el conquistador Pedro de Heredia arribó con su expedición a la región con el propósito de establecer un asentamiento español permanente. En su avance hacia el interior de la bahía, Heredia sostuvo enfrentamientos con varias comunidades indígenas, entre ellas las dirigidas por el cacique Carex. Según fuentes coloniales como las crónicas de Juan de Castellanos, Carex fue capturado por los españoles y obligado a entregar un importante tributo en oro —que, según algunas crónicas, habría superado los 60,000 pesos— como condición para su liberación. Aunque estos relatos deben leerse con precaución debido al estilo propagandístico de los cronistas de la época, reflejan el violento proceso de sometimiento indígena que acompañó la fundación de Cartagena.

Poco después del establecimiento de la ciudad, la población indígena local disminuyó drásticamente debido a enfermedades, trabajos forzados y desplazamientos, lo que llevó a los colonos españoles a importar mano de obra esclavizada desde África. Cartagena se consolidó rápidamente como uno de los principales puertos esclavistas de América Latina durante el período colonial. Los esclavos africanos fueron empleados intensamente en las labores de construcción y extracción de materiales en Tierrabomba, especialmente en las canteras de piedra coralina, esenciales para edificar las primeras murallas, caminos, y fortificaciones defensivas de la ciudad y sus accesos marítimos.

Este proceso de conquista, ocupación y transformación de Tierrabomba por parte de los españoles marcó el inicio de su importancia geoestratégica, que más tarde se consolidaría con la fortificación del canal de Bocachica, convertido desde mediados del siglo XVII en la entrada principal a la bahía de Cartagena.`,
     icon: Clock,
      image: '../public/cl2.jpg',
      imagenes: [
        '../public/cl1.jpg',
        '../public/cl2.jpg',
        '../public/cl3.jpg',
        '../public/cl4.jpg'
      ],
      fuentes: [
      'Friede, Juan. Los chibchas bajo la dominación española (Banco de la República, 1974).',
      'Fals Borda, Orlando. Historia doble de la costa (1979).',
      'Archivo General de Indias (AGI), Sección Cartagena.',
      'Galán García, Ángel Luis. Cartagena de Indias: fortificación y ciudad (2003).',
      'Meisel, Adolfo. La esclavitud en Cartagena de Indias (Banco de la República, 2010).',
      'Castellanos, Juan de. Elegías de varones ilustres de Indias (siglo XVI).'
    ]
    },
    {
      year: '1536',
      title: 'Fundación Española',
      description: 'Establecimiento del primer asentamiento',
      details: `Contexto histórico del asentamiento español en el canal sur de la bahía de Cartagena

Durante el siglo XVI, la ciudad de Cartagena de Indias emergió como uno de los puertos más importantes del Imperio español en el Caribe. Fundada en 1533 por Pedro de Heredia, su ubicación estratégica —protegida por un sistema de bahías interconectadas y rodeada de islas— ofrecía condiciones excepcionales para la defensa, el comercio y la navegación. Desde muy temprano, el control de los accesos marítimos a Cartagena se volvió prioritario para la Corona.

Uno de esos accesos era el canal de Bocachica, ubicado entre la isla de Tierrabomba y la isla Barú. Aunque en sus primeros años el paso principal era el canal de Bocagrande, los cambios naturales en la costa, como sedimentaciones y bancos de arena, hicieron que Bocachica se convirtiera en un punto cada vez más frecuentado por las embarcaciones que intentaban ingresar o salir del puerto cartagenero.

A lo largo del siglo XVII, y particularmente en su primera mitad, el Imperio español comenzó a prestar mayor atención a este canal del sur. Diversos factores lo explican:

El aumento de la piratería y las incursiones extranjeras en el Caribe, especialmente por parte de ingleses, franceses y holandeses.

La congestión y el deterioro natural del canal de Bocagrande, que llevó a un redireccionamiento del tráfico naval hacia Bocachica.

La necesidad de asegurar el monopolio comercial y militar sobre una de las principales rutas de salida de oro, plata, esclavos y mercancías entre América y Europa.

Frente a este panorama, la Corona Española tomó la decisión de establecer una presencia permanente en la entrada de Bocachica, con el fin de vigilar y controlar el flujo marítimo hacia Cartagena. Esta decisión implicó no solo la vigilancia ocasional, sino la fundación de un asentamiento estable, con presencia militar, técnica y administrativa. Así nació lo que hoy reconocemos como la fundación española de Bocachica: no como una ciudad o villa, sino como un puesto estratégico de control y observación imperial.

Este asentamiento se consolidó con la llegada de contingentes de soldados, técnicos, marineros, esclavos africanos y personal de apoyo, quienes comenzaron a habitar y transformar el entorno del canal. La instalación de campamentos, almacenes, caminos y pequeños núcleos de vida cotidiana marcó el inicio de una presencia institucionalizada que se mantendría y evolucionaría durante los siglos siguientes.

Aunque en sus primeros años no contaba con construcciones formales de gran escala, la fundación española de Bocachica sentó las bases para lo que más adelante se convertiría en una pieza central del sistema defensivo de Cartagena y del Caribe colonial.

🧭 Importancia histórica de esta fundación
A diferencia de otras fundaciones coloniales basadas en motivaciones evangelizadoras o agrícolas, Bocachica fue una fundación netamente estratégica, pensada para garantizar el control marítimo del virreinato y proteger uno de los principales enclaves del comercio atlántico español. Desde allí se vigilaba el paso de galeones, se advertían amenazas extranjeras y se aseguraba el tránsito de mercancías vitales para la economía imperial.

Este enclave se convirtió, con el tiempo, en el primer punto de contacto o defensa frente a cualquier intento de ingreso a la ciudad, y sería clave en numerosos episodios bélicos y logísticos en los siglos XVII y XVIII.`,
      icon: Anchor,
      image: '../public/f1.jpg',
      imagenes: [
        '../public/f1.jpg',
        '../public/f2.jpg',
        '../public/f3.jpg',
        '../public/f4.jpg'
      ],
      fuentes: [
      'Friede, Juan. Los chibchas bajo la dominación española (Banco de la República, 1974).',
      'Fals Borda, Orlando. Historia doble de la costa (1979).',
      'Archivo General de Indias (AGI), Sección Cartagena.',
      'Galán García, Ángel Luis. Cartagena de Indias: fortificación y ciudad (2003).',
      'Meisel, Adolfo. La esclavitud en Cartagena de Indias (Banco de la República, 2010).',
      'Castellanos, Juan de. Elegías de varones ilustres de Indias (siglo XVI).'
    ]
    },

    {
      year: '1697',
      title: 'Construcción del Fuerte San Luis',
      description: 'Inicio de las grandes fortificaciones',
      details: `La fundación estratégica de Bocachica, a mediados del siglo XVII, pronto derivó en una necesidad urgente: fortificar militarmente el canal para impedir el ingreso no autorizado a la bahía de Cartagena. Este paso se volvió crítico después de que el canal de Bocagrande quedara parcialmente obstruido por sedimentos y naufragios hacia 1640, lo que consolidó a Bocachica como la principal entrada marítima a la ciudad.

Fue en este contexto que la Corona Española autorizó la construcción de la primera gran obra defensiva en el sector: el Castillo de San Luis de Bocachica, una de las primeras fortificaciones en ocupar de manera permanente el estrecho canal sur de la bahía.

⚒️ Inicios de la obra: visión y estrategia
La construcción del castillo comenzó en el año 1646, bajo las órdenes del gobernador Luis Fernández de Córdoba, y fue ejecutada por el ingeniero militar Juan de Somovilla, uno de los encargados del sistema de fortificaciones de Cartagena.

Su diseño respondía a los principios de la ingeniería militar de la época, influenciada por la escuela renacentista italiana y adaptada a las condiciones tropicales del Caribe. El castillo fue edificado sobre una elevación rocosa en el extremo sur de la isla de Tierrabomba, dominando completamente el canal de Bocachica. Su ubicación permitía detectar, monitorear y repeler cualquier intento de ingreso a la bahía, convirtiéndose en la primera línea de defensa activa ante flotas enemigas.

Aunque fue una fortificación relativamente modesta en sus inicios, San Luis fue concebido como una plataforma de artillería costera, dotada de cañones, cuarteles, almacenes de pólvora y barracones para la guarnición. Su fuego de largo alcance debía disuadir o retrasar a los enemigos el tiempo suficiente para preparar la defensa en la ciudad interior.

🔥 Participación en conflictos y evolución
La primera gran prueba del castillo ocurrió en 1697, durante el ataque franco-pirata liderado por el barón de Pointis, cuando fuerzas francesas atacaron Cartagena con una flota de más de 20 buques. Aunque el castillo de San Luis ofreció resistencia, fue superado y capturado, lo que dejó en evidencia sus limitaciones estructurales frente a un asalto naval de gran escala.

Este episodio, junto con posteriores intentos de incursión, llevó a la Corona a rediseñar y fortalecer el sistema defensivo de Bocachica durante el siglo XVIII, con la construcción del fuerte de San Fernando, la batería de San José (en el islote opuesto), y mejoras en las infraestructuras existentes.

A pesar de estas transformaciones posteriores, el Castillo de San Luis de Bocachica debe ser reconocido como la primera fortificación permanente que marcó el inicio del control militar estructurado sobre el canal, y con ello, la consagración de Bocachica como enclave fortificado dentro del sistema de defensa imperial del Caribe.

🧱 Características clave del castillo original
Nombre completo: Castillo de San Luis de Bocachica

Fecha de inicio: 1646

Ingeniero responsable: Juan de Somovilla

Ubicación: Extremo sur de la isla de Tierrabomba, frente al canal de Bocachica

Función: Controlar el acceso marítimo a Cartagena; primera línea de artillería costera

Materiales: Piedra coralina y ladrillo, con técnicas de mampostería adaptadas al clima tropical

Dotación estimada: Artillería pesada, cuarteles para tropas, depósitos de pólvora

🧭 Legado e importancia
La construcción del Castillo de San Luis representa el punto de inflexión entre la presencia estratégica española en Bocachica y su consolidación como bastión militar permanente. A partir de esta obra, se desarrolló un sistema articulado de defensa en profundidad, que convirtió a Cartagena de Indias en una de las ciudades mejor fortificadas del continente americano.

Aunque hoy en día San Luis está en ruinas —destruido finalmente en 1741 durante el ataque del almirante inglés Edward Vernon—, su legado permanece como testimonio de los inicios del poder militar colonial español en Bocachica, y como símbolo de la capacidad de respuesta del imperio ante las amenazas que asediaban el Caribe.`,
      icon: Shield,
      image: '../public/sanl3.jpg',
      imagenes: [
        '../public/sanl1.png',
        '../public/sanl2.jpg',
        '../public/sanl3.jpg',
        '../public/sanl4.jpg'

      ],
      fuentes: [
      'Archivo General de Indias (Sección Cartagena).',
      'Galán García, Ángel Luis. Cartagena de Indias: fortificación y ciudad.',
      'Meisel, Adolfo. Cartagena colonial y su economía.',
      'De Castellanos, Juan. Elegías de varones ilustres de Indias.',
      'UNESCO. Sistema de Fortificaciones de Cartagena de Indias.'
    ]
    },
    {
      year: '1697',
      title: 'Ataque francés a Cartagena — Captura de Bocachica',
      description: 'Captura de Bocachica',
      details: `Contexto internacional
A finales del siglo XVII, Europa estaba envuelta en una serie de guerras por el control colonial y el comercio marítimo. En particular, la Guerra de los Nueve Años (1688–1697) enfrentó a Francia contra una coalición europea liderada por Inglaterra, España, el Sacro Imperio y otras potencias. En este contexto, el Caribe se convirtió en un escenario secundario pero estratégico de la disputa.

Francia, bajo el reinado de Luis XIV, buscaba debilitar la presencia española en América y obtener riquezas a través de incursiones militares y corsarias. Una de las principales operaciones en esta línea fue el ataque a Cartagena de Indias, una de las ciudades más fortificadas y ricas del Nuevo Mundo español.

⚓ Planificación del ataque
El asalto fue liderado por Jean-Bernard Desjean, Barón de Pointis, un experimentado almirante francés. Contó con el apoyo del infame corsario Jean-Baptiste Ducasse, gobernador de la colonia francesa de Saint-Domingue (actual Haití), quien reunió una flota de bucaneros del Caribe para participar en la ofensiva.

La flota combinada francesa-bucanera contaba con alrededor de:

7 navíos de guerra franceses, bien armados.

Más de 20 barcos auxiliares y de apoyo logístico.

Unos 5.000 hombres entre marineros, soldados y corsarios.

Su objetivo: atacar Cartagena por el canal de Bocachica, tomar la ciudad y obtener un botín considerable.

🏰 Defensa de Bocachica
En ese momento, la defensa de la entrada sur a la bahía de Cartagena se concentraba en el Castillo de San Luis de Bocachica, construido en 1646. Aunque era una fortificación sólida, su diseño estaba anticuado frente a las nuevas técnicas de artillería naval europeas.

El castillo estaba guarnecido por una pequeña guarnición española, en su mayoría mal equipada y sin refuerzos inmediatos disponibles. A pesar de su valentía, no podían resistir un asalto prolongado por mar y tierra.

🔥 Desarrollo del ataque (mayo de 1697)
Los franceses desembarcaron tropas en las costas de Tierrabomba y Barú, rodeando el canal de Bocachica desde ambos lados.

Comenzaron un bombardeo sistemático contra el castillo de San Luis, apoyado por artillería terrestre y disparos navales.

La guarnición española resistió varios días, pero eventualmente fue superada por el número y la potencia de fuego del enemigo.

El castillo fue capturado, y con él, Bocachica quedó bajo control francés, abriendo el paso directo hacia la bahía interna.

💰 Saqueo de Cartagena
Con la entrada liberada, los franceses navegaron hacia la ciudad y atacaron Cartagena directamente. Sin refuerzos adecuados y con las defensas internas superadas, la ciudad cayó rápidamente.

Se produjo un saqueo masivo: oro, plata, joyas, bienes eclesiásticos y mercancías fueron confiscados.

Las órdenes religiosas y la nobleza local sufrieron grandes pérdidas.

Muchos ciudadanos fueron tomados como rehenes para exigir rescate.

La flota francesa, tras unas semanas de ocupación, se retiró cargada de botín. Sin embargo, una parte importante del saqueo fue perdida por los bucaneros en el camino de regreso, debido a tormentas, enfermedades y traiciones internas.

⚠️ Consecuencias
Humillación para España: El asalto demostró la vulnerabilidad de sus colonias más ricas.

Debilitamiento de Cartagena: Aunque se recuperó con el tiempo, la ciudad quedó en ruinas parcial durante meses.

Revisión del sistema defensivo: A raíz de esta derrota, se dio inicio a una reforma profunda del sistema militar de Cartagena, especialmente en Bocachica, que desembocaría en el siglo XVIII en obras como la Batería de San José y posteriormente el Castillo de San Fernando de Bocachica.

Separación entre franceses y corsarios: El Barón de Pointis traicionó a los bucaneros, negándoles parte del botín, lo que generó represalias y conflictos incluso durante la retirada.

🧭 En resumen
El ataque de 1697 fue una de las peores derrotas sufridas por Cartagena en la época colonial. La caída de Bocachica permitió el paso de las fuerzas francesas y dejó en evidencia la urgente necesidad de modernizar las defensas del canal sur. Este evento se convirtió en una lección clave para los ingenieros militares españoles, quienes años después rediseñarían todo el sistema defensivo de la ciudad.`,
      icon: Shield,
      image: '../public/ataque1.jpg',
      imagenes: [
        '../public/ataque1.jpg',
        '../public/ataque2.jpg',
        
      ],
      fuentes: [
      'Galán García, Ángel Luis. Cartagena de Indias: fortificación y ciudad.',
      'De la Fuente, Santiago. Historia general de Cartagena de Indias.',
      'Archivo General de Indias – Sección Cartagena.',
      'UNESCO. Sistema de fortificaciones de Cartagena de Indias (1994).',
      'Fernández Duro, Cesáreo. La Armada Española: Historia Naval del Imperio.'
    ]
    },
    {
      year: '1741',
      title: 'Sitio de Vernon',
      description: 'La defensa heroica contra los ingleses',
      details: `El ataque británico a Bocachica
En marzo de 1741, la flota del almirante Edward Vernon —con más de 180 naves y 27.000 hombres— se concentró en Bocachica.

Comenzaron un bombardeo masivo sobre el castillo de San Luis y el fuerte de San José.

La guarnición defensora, compuesta por apenas unos cientos de soldados españoles, criollos y esclavizados africanos, resistió durante varios días bajo fuego constante.

El comandante español Blas de Lezo, que dirigía toda la defensa de Cartagena, ordenó defender la posición hasta el último momento y luego volar las fortificaciones antes de rendirlas, para que no cayeran intactas en manos enemigas.

1741: El papel estratégico de Bocachica en el Sitio de Cartagena
Durante el gran sitio de Cartagena de Indias en 1741, la zona de Bocachica —el canal sur de acceso a la bahía interna— se convirtió en el primer objetivo militar de la flota británica. Su control era esencial para que los invasores pudieran ingresar al interior de la bahía y rodear completamente la ciudad. De esta manera, la defensa o pérdida de Bocachica representaba la llave del destino de Cartagena.

🔎 ¿Por qué Bocachica era tan importante?
Desde mediados del siglo XVII, el canal de Bocachica había reemplazado al de Bocagrande como la única entrada navegable para grandes embarcaciones a la bahía. Por ello, las autoridades coloniales habían construido allí un sistema defensivo clave:

Castillo de San Luis de Bocachica, ubicado en la isla de Tierrabomba.

Fuerte de San José, en la isla de Barú, justo al frente.

Baterías flotantes y cadenas sumergidas, diseñadas para bloquear el paso de barcos enemigos.

Este conjunto formaba una especie de embudo armado, pensado para destruir o frenar cualquier escuadra que intentara entrar.

 Caída de Bocachica
Tras intensos combates, los británicos lograron tomar el castillo de San Luis de Bocachica y el fuerte de San José hacia finales de marzo.

Aunque fue una victoria para Vernon, le costó tiempo, vidas y municiones.

Además, la destrucción de las fortificaciones por parte de los defensores españoles retrasó aún más el avance británico hacia la ciudad.

🎯 Consecuencias estratégicas
La toma de Bocachica fue un triunfo táctico británico, pero también marcó el inicio de su desgaste.

El retraso en el avance permitió que Blas de Lezo fortaleciera las defensas internas, especialmente en el castillo de San Felipe y las murallas.

La resistencia feroz en Bocachica impidió que los británicos tomaran Cartagena por sorpresa o con rapidez, lo que fue determinante para el fracaso final del sitio.

🧱 Reconstrucción posterior
Después del sitio, la Corona Española inició una campaña de reconstrucción y modernización de Bocachica, que incluyó:

La construcción del castillo de San Fernando de Bocachica, más moderno y robusto que el antiguo San Luis.

Reforzamiento de la isla de Barú y la colocación de nuevas baterías costeras.

Esto convirtió a Bocachica en una de las zonas más fuertemente fortificadas del Caribe durante el resto del período colonial.


`,
      icon: Shield,
      image: '../public/as1.jpg',
      imagenes: [
        '../public/as1.jpg',
        '../public/as2.jpg',
        '../public/as3.jpg',
        '../public/as4.jpg',
        '../public/as5.jpg',
        '../public/as6.jpg',
        '../public/as7.jpg'
      ],
      fuentes: [
      'Archivo General de Indias (AGI) – Sección Cartagena.',
      'Relación de los Sucesos de Cartagena en el año de 1697.',
      'Correspondencia del Barón de Pointis.'
    ]
    },
    {
      year: '1760',
      title: 'Construcción del Castillo de San Fernando',
      description: 'La fortaleza que nació tras la victoria',
      details: `El castillo de San Fernando de Bocachica fue construido entre 1753 y 1759, como reemplazo del destruido castillo de San Luis de Bocachica, que fue volado por las propias fuerzas españolas durante el sitio británico de 1741. Esta nueva fortificación formó parte del ambicioso plan de reconstrucción y modernización del sistema defensivo de Cartagena de Indias, ordenado por la Corona española.

📍 Ubicación estratégica
El castillo se encuentra en la isla de Tierrabomba, exactamente en el canal de Bocachica, uno de los dos únicos accesos marítimos a la bahía interna de Cartagena. Esta posición era vital para controlar el paso de embarcaciones desde el mar Caribe hacia el puerto interior.

🧱 Arquitectura militar
Diseñado bajo los principios de la ingeniería militar europea del siglo XVIII, especialmente el estilo del ingeniero Vauban, el castillo presenta una estructura compacta, simétrica y perfectamente adaptada a la defensa costera.

Características clave del Castillo de San Fernando de Bocachica:

Planta: El castillo tiene una planta de forma rectangular, con baluartes salientes en las esquinas que permitían una defensa cruzada desde diferentes ángulos.

Materiales: Su construcción se realizó con piedra coralina, calicanto y ladrillo, todos reforzados con mortero de cal, lo que le daba gran solidez y resistencia frente a los ataques y el clima costero.

Murallas: Las murallas son altas y gruesas, diseñadas para resistir el impacto de la artillería. Están equipadas con parapetos para el emplazamiento de cañones y troneras para facilitar la defensa.

Foso: El castillo estaba rodeado por un foso seco, que actuaba como una barrera adicional contra asaltos por tierra.

Puerta principal: La entrada principal se encontraba protegida por un puente levadizo y garitas de vigilancia, lo que reforzaba el control del acceso.

Plaza de armas: En el centro del castillo se ubicaba una amplia plaza de armas, utilizada para la organización de tropas, ejercicios militares y actividades logísticas.

Bóvedas subterráneas: El castillo contaba con bóvedas subterráneas destinadas al almacenamiento de municiones, agua y víveres esenciales para la guarnición.

Capilla: En su interior se encontraba una capilla dedicada a San Fernando, patrono del castillo, donde se celebraban actos religiosos para los soldados y oficiales.

🎯 Función militar
El castillo tenía como objetivo:

Controlar el canal de Bocachica para evitar incursiones navales.

Servir como primera línea de defensa ante invasiones.

Comunicar visualmente con otras fortificaciones, como el fuerte de San José en Barú, mediante señales de humo y banderas.

Alojar tropas, oficiales y artillería pesada, con capacidad para más de 300 hombres.

🔥 Armamento
Durante su apogeo, el castillo albergó:

Más de 20 cañones de diversos calibres, orientados hacia el canal.

Morteros para disparos parabólicos hacia embarcaciones enemigas.

Polvorines subterráneos, cuidadosamente aislados para evitar explosiones accidentales.

🕰️ Historia posterior
Durante el siglo XVIII y XIX, el castillo fue clave en la defensa de Cartagena, aunque no volvió a enfrentarse a un sitio de la magnitud del de 1741.

Fue utilizado por tropas realistas y patriotas durante las guerras de independencia.

En el siglo XX fue parcialmente abandonado, pero fue restaurado a partir de la década de 1980 como parte del conjunto de fortificaciones declarado Patrimonio de la Humanidad por la UNESCO en 1984.

🏛️ Estado actual
Hoy el castillo de San Fernando de Bocachica es:

Un monumento histórico nacional de Colombia.

Parte del Sistema de Fortificaciones de Cartagena, bajo protección del Instituto de Patrimonio y Cultura (IPCC) y el Ministerio de Cultura.

Accesible por lancha desde Cartagena, siendo uno de los puntos turísticos históricos más visitados por su valor arquitectónico y simbólico.`,
      icon: Shield,
      image: '../public/sanf1.jpg',
      imagenes: [
        '../public/sanf1.jpg',
        '../public/sanf2.jpg',
        '../public/sanf3.jpg',
        '../public/sanf4.jpg',
        '../public/sanf5.jpg',
        '../public/sanf6.jpg',
        '../public/sanf7.jpg'
      ],
    },
    {
      year: 'siglo XVII',
      title: 'Bocachica en la época colonial',
      description: 'Sistema de haciendas y predios agropecuarios',
      details: `durante la época colonial el territorio de **Bocachica —parte sur de la isla de Tierrabomba— también formó parte de un sistema de haciendas y predios agropecuarios, aunque con características distintas a los grandes latifundios. Su historia como hacienda está vinculada principalmente a la denominada "Tierra de Indios de Bocachica".

🏝️ 1. Origen colonial y vocación agro-productiva
A mediados del siglo XVII y XVIII, parte del área de Bocachica fue asignada como “Tierra de Indios”, un tipo de predio reservado para comunidades indígenas o mestizas, con destino agrícola y abastecedor .

Estas tierras sirvieron para suministrar alimentos a Cartagena, aprovechando la posición estratégica cercana a la ciudad pero fuera del control directo de los grandes hacendados criollos 
Semana.

👑 2. Relación con las haciendas principales de Tierrabomba
Tierra Bomba también estaba dividida en principal hacienda de “Tierrabomba” y otra conocida como hacienda “Carex”, mientras que Bocachica funcionaba como zona productiva comunitaria vinculada a estos predios más grandes 


Estos predios estaban registrados en catastros coloniales como haciendas contiguas o anexas, donde Bocachica ocupaba un rol secundario pero funcional.

👨‍🌾 3. Evolución hacia propiedad local
En la evolución postcolonial, estas tierras comunales o gremiales fueron gradualmente ocupadas por familias afrodescendientes y pobladores ancestrales, quienes las administraban por generaciones.

A partir del siglo XX y especialmente con la Resolución 4102 del Incoder en 2015, los nativos de Bocachica obtuvieron formalmente el reconocimiento legal de esos predios, confirmando su posesión ancestral y coexistencia con parcelas privadas legalizadas 
.

📌 Panorama actual de Bocachica como antiguo predio
No se trata de una hacienda privada de gran escala, sino de un sector agrícola y habitacional con vocación mixta donde convivían predios coloniales, tierras colectivas y actividad local.

Actualmente, el corregimiento de Bocachica es el hogar de cerca de 11.000 habitantes, en mayoría descendientes de esas familias que históricamente administraron y habitaron esas tierras, con identidad comunitaria propia 

.

✅ En resumen
Bocachica no fue una hacienda privada tradicional, sino parte de la "Tierra de Indios de Bocachica", con función agropecuaria comunitaria durante la colonia.

Estuvo vinculada a las haciendas principales de Tierrabomba (Tierrabomba y Carex).

Las tierras pasaron a manos de pobladores locales por ocupación ancestral, legitimadas en parte por la resolución del Incoder de 2015.

Hoy es una comunidad reconocida con fuerte arraigo cultural y propiedad colectiva o familiar formalizada.
`,
      icon: Users,
      image: '../public/ac1.jpg',
      imagenes: [
        '../public/boca1.jpg',
        '../public/boca2.jpg',
        '../public/boca3.jpg',
        '../public/boca4.jpg'
      ],
      fuentes: [
      'Archivo General de Indias (AGI) – Sección Cartagena.',
      'Galán García, Ángel Luis. Cartagena de Indias: fortificación y ciudad.',
      'Meisel, Adolfo. Cartagena colonial y su economía.',
      'De Castellanos, Juan. Elegías de varones ilustres de Indias.',
      'UNESCO. Sistema de Fortificaciones de Cartagena de Indias.'
    ]
    },
    {
      year: '1815',
      title: 'Época de Independencia',
      description: 'Transición hacia la libertad',
      details: `Durante la Época de Independencia (1815), Bocachica tuvo un rol importante pero dramáticamente transformado dentro del contexto del asedio a Cartagena de Indias por parte de las fuerzas realistas al mando de Pablo Morillo, general español enviado por la corona para recuperar las colonias insurgentes del Nuevo Reino de Granada y Venezuela.

📍 Bocachica en el sitio de Cartagena (1815)
Contexto geoestratégico:
Aunque para ese momento ya no tenía la misma importancia militar que en el siglo anterior, Bocachica seguía siendo uno de los accesos marítimos a la bahía y, por tanto, un punto obligado de paso para cualquier flota atacante que pretendiera bloquear o sitiar la ciudad.

El bloqueo naval de Morillo:
En mayo de 1815, Pablo Morillo desplegó una escuadra de más de 50 embarcaciones y alrededor de 10.000 hombres. Bocachica fue uno de los puntos primero ocupados, permitiendo a los realistas cerrar el paso marítimo y aislar completamente a Cartagena del exterior.

Estado de las fortificaciones:
El Castillo de San Fernando de Bocachica, aunque aún en pie, ya mostraba signos de deterioro debido a décadas de abandono y falta de mantenimiento. Sin embargo, fue usado por las tropas realistas como puesto de avanzada y control durante el sitio.

Reacción patriota:
Las tropas independentistas, en inferioridad numérica y mal abastecidas, no pudieron sostener una defensa efectiva en Bocachica, y los realistas tomaron el canal sin gran resistencia, cerrando definitivamente el cerco.

Consecuencias:
La toma de Bocachica selló el destino de la ciudad, que quedó completamente bloqueada por mar y tierra. Tras 106 días de asedio, Cartagena capituló el 6 de diciembre de 1815. La población sufrió hambre extrema, enfermedades y miles de muertes.

📌 Bocachica en la independencia: un punto clave para el bloqueo
Aunque no fue escenario de una batalla de gran escala como en 1741, Bocachica desempeñó un papel táctico esencial para permitir la entrada de las tropas realistas, bloquear el paso a los patriotas y aislar la ciudad. Este evento marcó uno de los capítulos más dolorosos de la historia cartagenera.`,
      icon: Users,
      image: '../public/ind1.jpg',
      imagenes: [
        '../public/ind1.jpg',
        '../public/ind2.jpg',
        
      ],
      fuentes: [
      'Galán García, Ángel Luis. Cartagena de Indias: fortificación y ciudad.',
      'De la Fuente, Santiago. Historia general de Cartagena de Indias.',
      'Archivo General de Indias – Sección Cartagena.',
      'UNESCO. Sistema de fortificaciones de Cartagena de Indias (1994).',
      'Fernández Duro, Cesáreo. La Armada Española: Historia Naval del Imperio.',
      'Méndez, Alfredo. Blas de Lezo: el héroe olvidado de Cartagena.'
    ]

    },
    {
      year: '1848',
      title: 'Bocachica como Hacienda Privada',
      description: 'Origen como propiedad privada',
      details: `Durante el siglo XIX, específicamente en 1848, Bocachica fue tratada como parte de una hacienda privada con plena legalidad.

📅 28 de junio de 1848: Las tierras de Bocachica y Carex fueron rematadas por el Estado y compradas por Manuel Fernández Dorado, como parte del proceso de venta de bienes nacionales.

📄 El título de propiedad incluía:

Las tierras insulares.

Casas, hornos, corrales, almacenes y otras estructuras.

Derechos y censos asociados (capellanías, donaciones a hospitales, etc.).

📅 08 de mayo de 1849: Fernández Dorado nombra a Juan José Pita para tomar posesión de la hacienda ante el juez parroquial de Bocachica.

📅 25 de junio de 1849: La hacienda es vendida a Juan Bautista Trucco, un comerciante reconocido en Cartagena.

🧑‍🌾 Administración local
Aunque la propiedad fue vendida, la gestión quedó en manos de personas residentes en la isla, como mayordomos. Este modelo implicaba una presencia continua de habitantes locales bajo dominio privado.

🔓 Proceso de Liberación: Ley de 1863
⚖️ Ley del 3 de enero de 1863 del Estado Soberano de Bolívar
Esta ley marcó un punto de inflexión legal para Bocachica y otras parroquias en Bolívar.

¿Qué decía la ley?
Todo distrito debía tener un casco urbano “libre” (no en manos de hacendados).

Se liberaba un radio de 500 metros desde el centro de la parroquia para uso común.

Si ese terreno estaba en manos privadas (como Bocachica), debía expropiarse, pagar indemnización, y repartir el costo entre los vecinos mediante contribución directa.

¿Cómo afectó a Bocachica?
Al ser una parroquia insular, Bocachica entró en la lista de territorios donde se debía liberar el área central.

Parte del territorio ocupado como hacienda pasó a dominio común o municipal.

Este acto puede entenderse como el inicio del tránsito de Bocachica de hacienda privada a núcleo comunitario.

📚 Fuentes primarias utilizadas
Archivo Histórico de Cartagena:

Protocolo notarial de 1848 y 1849.

Escrituras de remate, venta y poderes (Fernández Dorado, Trucco, Pita).

Gaceta del Estado Soberano de Bolívar, 1863.

Publicación oficial de la ley de liberación de cascos urbanos.

Archivo General de la Nación (AGN) y Archivo General de Indias (AGI).

Investigaciones secundarias:

Meisel, Adolfo. La esclavitud en Cartagena.

Fals Borda, Orlando. Historia doble de la costa.

Manuel Ezequiel Corrales. Geografía general y compendio histórico del Estado de Bolívar (1863).`,
      icon: Users,
      image: '../public/ac2.jpg',
      imagenes: [
        '../public/hacienda1.jpg',
        '../public/hacienda2.jpg',
        '../public/hacienda3.jpg',
        '../public/hacienda4.jpg'
      ],
      fuentes: [
        'Archivo Histórico de Cartagena, Protocolo Notarial 1848-1849.',
        'Gaceta del Estado Soberano de Bolívar, 1863.',
        'Meisel, Adolfo. La esclavitud en Cartagena.',
        'Fals Borda, Orlando. Historia doble de la costa.'
      ]
    },
    {
      year: '1950',
      title: 'Patrimonio Nacional',
      description: 'Reconocimiento y conservación',
      details: 'El gobierno colombiano declara las fortificaciones de Bocachica como Monumento Nacional, reconociendo su valor histórico y arquitectónico. Se inician los primeros trabajos de restauración y conservación, transformando estas estructuras militares en sitios de memoria y patrimonio cultural. Esta decisión marca el inicio de Bocachica como destino turístico y cultural.',
      icon: Clock,
      image: '../public/sanf3.jpg'
    },
    {
      year: '1984',
      title: 'Patrimonio de la Humanidad',
      description: 'Reconocimiento mundial UNESCO',
      details: 'Las fortificaciones de Cartagena, incluyendo las de Bocachica, son declaradas Patrimonio de la Humanidad por la UNESCO. Este reconocimiento internacional resalta la importancia universal de estas estructuras como ejemplo excepcional de arquitectura militar colonial española en América. Bocachica se convierte oficialmente en un tesoro de la humanidad.',
      icon: Users,
      image: '../public/sanf2.avif'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.observe-animation');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToEvent = (index: number) => {
    setActiveEvent(index);
    if (timelineRef.current) {
      const eventElement = timelineRef.current.children[index] as HTMLElement;
      eventElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  };

  const nextEvent = () => {
    const nextIndex = (activeEvent + 1) % timelineEvents.length;
    scrollToEvent(nextIndex);
  };

  const prevEvent = () => {
    const prevIndex = activeEvent === 0 ? timelineEvents.length - 1 : activeEvent - 1;
    scrollToEvent(prevIndex);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-black observe-animation opacity-0">
              Historia de Bocachica
            </h1>
            
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed observe-animation opacity-0">
            Un viaje a través de cinco siglos de historia, desde las primeras 
            fortificaciones españolas hasta su reconocimiento como Patrimonio de la Humanidad
          </p>
        </div>
      </section>

      {/* Timeline Navigation */}
     <main className="flex flex-1 justify-center py-16 px-4 bg-gray-50 min-h-screen">
      <div className="flex flex-col max-w-[960px] flex-1">
       
        
        <div className="relative px-2 sm:px-4">
          {/* Vertical Timeline Line solo en desktop */}
          <div className="hidden sm:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 -translate-x-1/2"></div>
          <div className="space-y-12 sm:space-y-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col sm:block">
                  {/* Timeline Dot */}
                  <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-white border-4 border-gray-400 z-10 shadow-lg"></div>
                  {/* Mobile: una sola columna */}
                  <div className="sm:grid sm:grid-cols-2 sm:gap-x-8">
                    <div className={
                      isLeft
                        ? 'sm:flex sm:justify-end sm:pr-8'
                        : 'sm:col-start-2 sm:flex sm:justify-start sm:pl-8'
                    }>
                      <div
                        className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl mx-auto"
                        onClick={() => openModal(event)}
                        style={{ marginBottom: '0.5rem' }}
                      >
                        <img
                          alt={event.title}
                          className="w-full h-48 object-cover"
                          src={event.image}
                        />
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                              <IconComponent size={16} className="text-white" />
                            </div>
                            <h3 className="font-serif text-lg font-bold text-gray-900">{event.title}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4 font-semibold">{event.year}</p>
                          <div className="mb-4">
                            <button className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        
      </div>

      {/* Modal Window */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <selectedEvent.icon size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-gray-900 mb-1">{selectedEvent.year}</div>
                  <div className="text-xl font-semibold text-gray-700">{selectedEvent.title}</div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="whitespace-pre-wrap text-gray-700 leading-relaxed text-lg">
                  {selectedEvent.details}
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      )}
      
    </main>
      {/* Juegos interactivos */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Juegos sobre Bocachica</h2>
          <p className="text-lg text-gray-700 mb-8">
            Pon a prueba tus conocimientos y diviértete aprendiendo sobre la historia de Bocachica con estos juegos interactivos:
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="/trivia"
              className="inline-block w-64 h-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-lg text-center"
            >
              Trivia
            </a>
            <a
              href="/OrdenaTimeline"
              className="inline-block w-64 h-16 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-lg text-center"
            >
              Ordena la Línea de Tiempo
            </a>
            <a
              href="/VerdaderoFalso"
              className="inline-block w-64 h-16 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-lg text-center"
            >
              Verdadero o Falso
            </a>
            <a
              href="/EncuentraElError"
              className="inline-block w-64 h-16 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-lg text-center"
            >
              Encuentra el Error
            </a>
          </div>
        </div>
      </section>

      {/* Historical Quote */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
            "Bocachica ha sido el centinela silencioso de nuestra historia, 
            testigo de batallas épicas y guardián de nuestro patrimonio cultural."
          </blockquote>
          <cite className="text-lg opacity-80">
            — Crónicas de la Fundación Patrimonio Histórico de Cartagena
          </cite>
        </div>
      </section>
    </div>
  );
};

export default Historia;