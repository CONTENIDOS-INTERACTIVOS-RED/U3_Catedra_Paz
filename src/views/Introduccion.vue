<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(
        :titulo="'Unidad 3. Educación para la paz y los derechos humanos'" 
        :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-right") En esta unidad, se describe la conexión entre la educación para la paz y los derechos humanos, dos pilares esenciales para construir una sociedad más justa y equitativa. En un entorno tan diverso y multicultural como el nuestro, es crucial que comprendamos el papel transformador que puede tener la enseñanza en la creación de espacios de convivencia pacífica. Según Mariela Sánchez Cardona (2016), la educación para la paz no se limita a transmitir conocimientos, sino que también fomenta valores y habilidades necesarias para vivir en armonía con los demás. Esto nos permitirá desempeñar un rol activo en la promoción de una cultura de paz.

          p(data-aos="fade-right") Al finalizar la unidad, podremos identificar, además de la mencionada relación, algunas estrategias que facilitan la convivencia pacífica y el respeto por la diversidad en diferentes contextos. Este aprendizaje no solo nos aporta una comprensión teórica, sino que también podremos aplicarlo en nuestra vida cotidiana y en nuestro desarrollo profesional. 
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mt-4.mt-lg-0


      .bg-color-1.p-4(data-aos="fade-left").mb-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 José Bonifacio Barba (1997) destaca que la pedagogía en derechos humanos no es solo una herramienta académica, sino un proceso formativo que promueve el respeto y la dignidad de las personas. Este enfoque nos ayudará a fortalecer nuestras competencias y contribuir de manera significativa a nuestro entorno social. 

      p(data-aos="fade-right") Nuestra participación será clave para el éxito de esta unidad. Es importante que nos involucremos en las actividades propuestas y además que nos mantengamos abiertos a la reflexión crítica, analizando cada tema a la luz de nuestras propias experiencias y del contexto que nos rodea. Este proceso no solo enriquecerá nuestra comprensión, sino que también nos permitirá adquirir las competencias necesarias para actuar como agentes de cambio en nuestro entorno inmediato.

    
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
