<template lang="pug">
    .container
      .columns
        .column.is-5.is-offset-4
          .notification.is-danger
            slot(name="body") Algo anduvo mal
          .notification.is-success
            slot(name="body1") Estos son los Resultados

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
