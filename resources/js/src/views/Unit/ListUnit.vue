<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card>
          <div class="row">
            <b-col md="10">
              <BreadCrumb/>
            </b-col>
            <b-col md="2" class="d-flex align-items-center">
              <b-button pill variant="primary" block class="mr-3">
                <b-link :to="{name: 'unit.add'}" class="text-white">Crear unidad</b-link>
              </b-button>
            </b-col>
          </div>
        </iq-card>
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
