<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(
      :titulo="'Unidad 3. Educación para la paz y los derechos humanos'"
      :subTitulo="'Síntesis'"
    )
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 3 "Educación para la paz y los derechos humanos", explora la conexión entre estos pilares fundamentales para la construcción de una sociedad equitativa y pacífica. Se analizan estrategias educativas que promueven valores como el respeto, la justicia social y la convivencia pacífica, a través de un enfoque transformador que fomenta el cambio en actitudes y estructuras sociales. Este enfoque, respaldado por organismos como la UNESCO, no solo busca resolver conflictos actuales, sino prevenirlos mediante la promoción de los derechos humanos y la inclusión. Con este aprendizaje, los estudiantes estarán preparados para actuar como agentes de cambio en diversos contextos, fortaleciendo sus competencias y contribuyendo al bienestar social.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
