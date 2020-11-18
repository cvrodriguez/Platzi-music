<template lang="pug">
    .container
        .content.has-text-centered
            beat-loader(:color="'#68d391'" :size="8")
            h1 Cargando...
</template>

<style lang="scss" scoped>
  .content{
    padding: 20px;
    min-height: 40vh;
  }

</style>
