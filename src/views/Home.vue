<template lang="pug">
.container.columns
  .column.box.is-3.is-offset-5
    .column.is-10.is-offset-1
      img(alt="Vue logo", src="../assets/imagen.jpg")
      h1.title.is-4 Estacion Platzi

    .field
      label.label Nombre
      .control
        input.input(type="text",placeholder="Text input")

    .field
      label.label Apellido
      .control
        input.input(type="text",placeholder="Text input")

    .field
      label.label Nombre
      .control
        input.input(type="text",placeholder="Text input")

    .column.is-offset-8
      .button ENVIAR

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
.container{
  color: #212121;
font-family: 'Roboto', sans-serif;
}
h1{
  color: #00BFD6 ;
}
input{
  border: none;
  border-bottom-color: lawngreen;
  box-shadow: none;
  border-bottom: solid #FF9300 .01em ;
  border-radius: 0;
  padding-bottom: 0rem;
  padding-top: 0rem;

}
label {
  color: #FF9300;
  font-size: 0.7rem;
  margin-bottom: 0em;
}
button{
  background: #00BFD6 ;
  color: white;
}

</style>
