<template>
  <b-container fluid>
  </b-container>
</template>

<script>
import {core} from "../../config/pluginInit";

export default {
  name: "DefaultApp",
  created() {
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {
    core.index();

  }
}
</script>

<style scoped>

</style>
