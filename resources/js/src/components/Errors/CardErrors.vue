<template>
  <b-alert show variant="danger">
    <ul>
      <li><b>ERRORES:</b></li>
      <li v-for="(error,index) in errorsCollection" :key="index">
        <i class="ri-close-circle-fill"/> {{ error }}
      </li>
    </ul>
  </b-alert>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "index",
  computed: {
    ...mapGetters(['errorsCollection']),
    ...mapState(['errors']),
  },
}
</script>

<style scoped>

</style>
