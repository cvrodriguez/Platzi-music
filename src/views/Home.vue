<template>

      <div class="container columns">
        <div class="column box is-3 is-offset-5">
          <div class="column is-10 is-offset-1">
            <img alt="Vue logo" src="../assets/imagen.jpg" />
          </div>
          <h1 class="title is-4 ">Registro estacion Platzi</h1>
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Apellido</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Cargo</label>
            <div class="control">
              <input class="input" type="text" placeholder="Platzerito" />
            </div>
          </div>
          <div class="column  is-offset-8">
            <button class="button">ENVIAR</button>
          </div>
        </div>
      </div>

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
