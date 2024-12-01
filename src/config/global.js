export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '1',
        titulo: 'Importancia de la educación para la paz',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Pensamiento Sistémico o lógico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Eficiencia de los algoritmos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '2',
        titulo:
          'Relación entre derechos humanos y resolución pacífica de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Derechos humanos como fundamento de la resolución pacífica de conflictos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Respeto por la diversidad como pilar de la resolución pacífica de conflictos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Estrategias basadas en los derechos humanos para la resolución pacífica de conflictos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '3',
        titulo: 'Herramientas colaborativas para la construcción de paz',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 3.',
        numero: '',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-file-download',
      //   titulo: 'Descargar PDF',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Barba, JB (1997). Educación para los derechos humanos: Los derechos humanos como educación valoral.',
      link: '',
    },
    {
      referencia:
        'Sánchez Cardona, M. (2016). Educación para la cultura de paz: Una aproximación psicopedagógica.',
      link: '',
    },
    {
      referencia:
        'Marín Ibáñez, R. (2000). Educación para la paz: El 2000, año internacional de la cultura de la paz.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (1995). Educación para una cultura de paz. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Círculos de diálogo',
      significado:
        'técnica colaborativa utilizada para fomentar la comunicación abierta y respetuosa entre los participantes de un grupo. Los círculos permiten que cada persona sea capaz de interactuar sin interrupciones, promoviendo la empatía y el entendimiento mutuo en la resolución de conflictos.',
    },
    {
      termino: 'Colaboración',
      significado:
        'situación de desacuerdo o confrontación entre individuos o grupos, que surge cuando existen intereses, necesidades o valores opuestos. Los conflictos pueden ser resueltos de manera pacífica a través de herramientas colaborativas.',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'conjunto de derechos fundamentales que garantizan la dignidad, libertad y equidad de todas las personas. Estos derechos, como el derecho a la vida, la igualdad y la justicia, son universales e inalienables, y son esenciales para la paz y la resolución de conflictos.',
    },
    {
      termino: 'Diálogo',
      significado:
        'método de comunicación en el que las partes implicadas intercambian ideas y perspectivas con el fin de comprenderse mutuamente y resolver sus diferencias. El diálogo se basa en la escucha activa y el respeto por las opiniones de los demás.',
    },
    {
      termino: 'Educación',
      significado:
        'proceso de enseñanza y aprendizaje que contribuye al desarrollo de habilidades, valores y conocimientos. En el contexto de la construcción de paz, la educación es clave para inculcar los valores de respeto, justicia y convivencia pacífica (UNESCO, 1995).',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de ponerse en el lugar del otro y comprender sus sentimientos y perspectivas. La empatía es clave para la resolución pacífica de conflictos, ya que promueve el entendimiento y la solidaridad entre las partes involucradas.',
    },
    {
      termino: 'Foros comunitarios',
      significado:
        'espacios de participación colectiva donde los miembros de una comunidad pueden discutir problemas, resolver conflictos y tomar decisiones de manera democrática. Los foros promueven el respeto mutuo y la inclusión.',
    },
    {
      termino: 'Justicia restaurativa',
      significado:
        'enfoque centrado en la reparación del daño causado por un conflicto, involucrando a la víctima, al infractor y a la comunidad en la búsqueda de soluciones que restauren las relaciones dañadas y promuevan la reconciliación (Marín Ibáñez, 2000).',
    },
    {
      termino: 'Mediación',
      significado:
        'proceso en el que un tercero imparcial facilita la resolución de un conflicto entre dos o más partes. La mediación se enfoca en ayudar a las partes a llegar a un acuerdo justo y equitativo, respetando los derechos de todos los involucrados.',
    },
    {
      termino: 'Negociación',
      significado:
        'estrategia de resolución de conflictos en la que las partes discuten sus diferencias con el objetivo de llegar a un acuerdo que beneficie a ambas. La negociación se basa en la cooperación y la búsqueda de soluciones que satisfagan las necesidades de todas las partes.',
    },
    {
      termino: 'Participación',
      significado:
        'involucramiento activo de las personas en los procesos de toma de decisiones. En la construcción de paz, la participación es fundamental para asegurar que las soluciones sean inclusivas y respeten los derechos de todos.',
    },
    {
      termino: 'Paz',
      significado:
        'estado de armonía y ausencia de violencia que se logra cuando los conflictos se resuelven de manera justa y equitativa. La paz no es solo la ausencia de conflicto, sino la presencia de justicia, respeto y cooperación entre las personas (UNESCO, 1995).',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
