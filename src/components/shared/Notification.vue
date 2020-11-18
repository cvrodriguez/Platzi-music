<template lang="pug">
    .container
      .columns
        .column.is-5.is-offset-4
          .notification.is-success(v-if="typeNotification")
            p Estos son los Resultados
          .notification.is-danger(v-if="!typeNotification")
            p No se encuentran resultados

</template>
<script>
export default {
  props: ['typeNotification']
}
</script>
<style lang="scss" scoped>
.notification{
  margin: 10px;
}

</style>
