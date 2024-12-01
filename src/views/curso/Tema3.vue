<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 3. Educación para la paz y los derechos humanos'"
    :subTitulo="'3. Herramientas colaborativas para la construcción de paz'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    p(data-aos="fade-left").mb-5 En la búsqueda de entornos pacíficos y armoniosos, las herramientas colaborativas se han convertido en una pieza clave para resolver conflictos y promover la convivencia. A lo largo de la historia, las sociedades han aprendido que las soluciones basadas en el diálogo, la participación y la cooperación son más efectivas que aquellas que se imponen por la fuerza. En este contexto, las herramientas colaborativas se destacan por su capacidad de fomentar el respeto mutuo, la empatía y la justicia, elementos fundamentales para la construcción de una paz duradera.

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left")  En contextos donde las diferencias culturales, sociales o econmicas pueden generar tensiones, las herramientas colaborativas permiten encontrar puntos en común y construir acuerdos que respeten la diversidad. Un ejemplo claro de esto son los círculos de diálogo, una técnica que fomenta la participación equitativa de todos los involucrados y asegura que cada persona tenga la oportunidad de expresar sus puntos de vista sin interrupciones. Este tipo de dinámica es fundamental para la creación de confianza y la prevención de futuros conflictos. Barba (1997) subraya que “la colaboración es la clave para transformar los conflictos en oportunidades de crecimiento colectivo, donde cada individuo puede aportar desde su experiencia y perspectiva” (p. 60).

        p(data-aos="fade-left") A continuación, conoceremos las siguientes herramientas:


    AcordionA(tipo="b").mb-5
      .div(titulo="Círculos de diálogo")
        .px-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Se refiere a una herramienta colaborativa poderosa que promueve la participación equitativa y el respeto mutuo entre los miembros de un grupo.
            li 
              i.lista-ul__vineta
              | Originados en prácticas comunitarias ancestrales, esta metodología facilita que todas las personas involucradas en un conflicto o discusión puedan expresar sus ideas y sentimientos en un entorno seguro, sin interrupciones ni juicios.
            li 
              i.lista-ul__vineta
              | En los círculos, cada participante tiene un turno para hablar, lo que asegura que todas las voces sean escuchadas con la misma importancia.
            li 
              i.lista-ul__vineta
              | El principal objetivo es generar confianza y fomentar la empatía entre los participantes. Esta herramienta se basa en el principio de que el entendimiento mutuo y la construcción de relaciones son esenciales para resolver conflictos de manera pacífica.
            li 
              i.lista-ul__vineta
              | Además de ser utilizados en entornos escolares, comunitarios o laborales, son efectivos en la construcción de paz, ya que fomentan una cultura de respeto y cooperación, fortaleciendo el tejido social a largo plazo.


      .div(titulo="Negociación")
        .px-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Este es un instrumento clave para la resolución pacífica de conflictos, centrada en encontrar soluciones que satisfagan los intereses de todas las partes involucradas. A diferencia de los enfoques confrontativos, la negociación colaborativa se basa en la cooperación y el respeto mutuo, buscando acuerdos en los que todas las partes obtengan beneficios.
            li 
              i.lista-ul__vineta
              | Este enfoque promueve un diálogo abierto y equitativo, en el que las partes pueden discutir sus necesidades, preocupaciones y expectativas de manera justa.
            li 
              i.lista-ul__vineta
              | La clave de una negociación exitosa radica en el principio de equidad, donde ninguna parte debe sentirse desfavorecida o ignorada. Según Sánchez Cardona (2016), "la negociación efectiva no busca ganar a toda costa, sino construir acuerdos que reflejen el respeto mutuo y la equidad entre las partes" (p. 67).
            li 
              i.lista-ul__vineta
              | Este enfoque colaborativo genera soluciones más sostenibles, ya que las partes involucradas sienten que sus intereses han sido considerados de manera justa.
            li 
              i.lista-ul__vineta
              | La negociación es especialmente útil en conflictos en los que los intereses de las partes son opuestos o cuando hay un desequilibrio de poder. Al buscar un acuerdo basado en el respeto por los derechos humanos y la equidad, la negociación fomenta relaciones más justas y pacíficas, lo que contribuye a la estabilidad y la cohesión social a largo plazo.

      .div(titulo="Justicia restaurativa")
        .px-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Este es un enfoque que se centra en la reparación del daño causado por un conflicto o delito, buscando no solo castigar al infractor, sino restaurar las relaciones rotas y fortalecer la cohesión comunitaria, se involucra activamente a la víctima, al infractor y, en ocasiones, a la comunidad en general, con el fin de reconocer el daño y acordar formas justas de reparación.
            li 
              i.lista-ul__vineta
              | A través de este proceso, se busca la reconciliación, la reparación emocional y el restablecimiento del bienestar social. Marín Ibáñez (2000) afirma que "la justicia restaurativa trasciende la idea de castigo y ofrece una alternativa de reconciliación que promueve la restauración de las relaciones dañadas y la cohesión social" (p. 122).
            li 
              i.lista-ul__vineta
              | La justicia restaurativa es profundamente colaborativa, ya que requiere que todas las partes participen en la búsqueda de una solución que repare el daño y restaure el bienestar.
            li 
              i.lista-ul__vineta
              | Este enfoque fomenta la empatía, la comprensión mutua y el reconocimiento de la responsabilidad. La UNESCO (1995) subraya que "la justicia restaurativa es clave para promover una cultura de paz, ya que transforma el conflicto en una oportunidad para el crecimiento y el aprendizaje colectivo" (p. 34).
            li 
              i.lista-ul__vineta
              | Al centrarse en la reparación y la restauración, la justicia restaurativa no solo resuelve el conflicto inmediato, sino que también contribuye a la construcción de una paz duradera.

      .div(titulo="Foros comunitarios")
        .px-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Los foros comunitarios son espacios de participación colectiva que permiten a los miembros de una comunidad reunirse, discutir problemas, resolver conflictos y tomar decisiones de manera democrática.
            li 
              i.lista-ul__vineta
              | En estos foros, se fomenta la igualdad de participación, asegurando que todas las voces sean escuchadas y respetadas. Esta herramienta colaborativa es especialmente útil en contextos donde los conflictos afectan a la comunidad en su conjunto, y es necesario encontrar soluciones que reflejen el interés común.
            li 
              i.lista-ul__vineta
              | Por lo tanto, "los foros comunitarios son una herramienta esencial para la construcción de paz, ya que promueven el diálogo inclusivo y fortalecen los lazos sociales" (Ibáñez, 2000, p. 78).
            li 
              i.lista-ul__vineta
              | Estos espacios no solo se enfocan en resolver conflictos, sino que también son plataformas para la toma de decisiones colectivas. Al incluir a todos los miembros de la comunidad en el proceso, se asegura que las soluciones sean equitativas y representen los intereses de todos.
            li 
              i.lista-ul__vineta
              | La UNESCO (1995) destaca que "los foros comunitarios son fundamentales para el fortalecimiento de la paz y la justicia social, ya que fomentan la cooperación y el respeto mutuo" (p. 56). Además, permiten que la comunidad se empodere y tome un papel activo en la resolución de sus propios problemas, lo que contribuye a una mayor cohesión y sostenibilidad de las soluciones alcanzadas.

    p(data-aos="fade-left").mb-5  Las herramientas colaborativas son fundamentales para crear entornos pacíficos y resolver conflictos de manera efectiva y justa. Estrategias como los círculos de diálogo, la negociación, justicia restaurativa y los foros comunitarios permiten que las personas involucradas en un conflicto puedan participar activamente en su resolución, fomentando el respeto mutuo y la comprensión. Estas herramientas no solo abordan el conflicto en el momento, sino que también fortalecen las relaciones y promueven una cultura de paz a largo plazo.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-7
        .bg-color-1.px-4.py-5(data-aos="fade-left").h-100
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El enfoque colaborativo permite que todas las voces sean escuchadas y valoradas, asegurando que las soluciones no solo benefician a una parte, sino que reflejan el bienestar de la comunidad en su conjunto. Al centrarse en el diálogo, la cooperación y el respeto por las diferencias, estas herramientas transforman los conflictos en oportunidades para construir relaciones más fuertes y cohesivas. En última instancia, el uso de estas herramientas no solo resuelve problemas inmediatos, sino que también sienta las bases para una paz duradera. Al fomentar la participación y el respeto por los derechos de todos, se crean comunidades más solidarias, justas y capaces de enfrentar los desafíos de manera pacífica y colaborativa. 
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 Material complementario
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Incluye libros impresos, digitales, electrónicos, ebook, artículos de revistas impresas, electrónicas, informes, seminarios, congresos, ponencias, presentaciones o diapositivas online, etc.  Desde el 2019 en adelante excepto casos excepcionales.  Bases de datos (licenciadas por la institución), bases de datos  libres, videos bajo licenciamiento creative commons
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Barba, JB (1997). Educación para los derechos humanos: Los derechos humanos como educación valoral.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Sánchez Cardona, M. (2016). Educación para la cultura de paz: Una aproximación psicopedagógica.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Marín Ibáñez, R. (2000). Educación para la paz: El 2000, año internacional de la cultura de la paz.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span UNESCO. (1995). Educación para una cultura de paz. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
