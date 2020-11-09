<template lang="pug">
.container.columns
  .column.box.is-3.is-offset-5
    .column.is-10.is-offset-1
      img(alt="Vue logo", src="../assets/imagen.jpg")
      h1.title.is-4 Estacion Platzi

    .field
      label.has-text-weight-bold.is-size-7 Nombre
      .control
        input.input(type="text")

    .field
      label.label Apellido
      .control
        input.input(type="text")

    .field
      label.label Nombre
      .control
        input.input(type="text")

    .column.is-offset-8
      button.button ENVIAR

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
<style lang="scss" scoped>
@import "../scss/my-style.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
.container{
  color: #212121;
  font-family: 'Roboto', sans-serif;
}
h1{
  color: #00BFD6 ;
}

 label {
 color: $naranja-platzi;
 font-size:  0.75rem;
}
button{
  background: #00BFD6 ;
  color: white;
}

</style>
