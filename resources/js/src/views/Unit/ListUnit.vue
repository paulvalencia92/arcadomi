<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex justify-content-between align-items-center">
              <div class="todo-date d-flex mr-3">
                <i :class="`ri-home-4-line text-success mr-2`"></i>
                <span>{{ $t('units.title') }}</span>
              </div>
              <div class="todo-notification d-flex align-items-center">
                <b-button variant="primary">
                  <b-link :to="{name: 'unit.add'}" class="text-white">Crear unidad</b-link>
                </b-button>
              </div>
            </div>
          </template>
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
