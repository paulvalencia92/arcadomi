<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12 text-right mb-4">
        <b-button variant="primary">
          <b-link to="/unit/add-unit" class="text-white">Crear unidad</b-link>
        </b-button>
      </b-col>

      <b-col md="4" v-for="(item, index) in units" :key="index">
        <detail-unit :unit="item"></detail-unit>
      </b-col>
    </b-row>




  </b-container>
</template>

<script>
import {core} from "../../config/pluginInit";
import {mapActions, mapState} from "vuex";
import DetailUnit from "./DetailUnit";

export default {
  name: "ListUnit",
  components: {
    'detail-unit': DetailUnit
  },
  mounted() {
    this.getUnits();
    core.index();
  },
  methods: {
    ...mapActions('Unit', ['getUnits']),
  },
  computed: {
    ...mapState('Unit', ['units']),
  }
}
</script>

<style scoped>

</style>
