<template>
  <b-container fluid>
    <b-row>
      <b-col md="8">
        <form-unit :unit="unit" @save="addUnit">
        </form-unit>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {core} from "../../config/pluginInit";
import {mapActions, mapGetters, mapState} from "vuex";
import FormUnit from "./FormUnit";

export default {
  name: "AddUnit",
  components: {
    'form-unit': FormUnit
  },
  created() {
    this.getTypeUnits();
    this.getUsers();
    this.getBlocks();

  },
  data() {
    return {
      unit: {
        type_unit_id: '',
        number: '',
        user_id: '',
        block_id: '',
      }
    }
  },
  methods: {
    ...mapActions('TypeUnits', ['getTypeUnits']),
    ...mapActions('Unit', ['createUnit']),
    ...mapActions('User', ['getUsers']),
    ...mapActions('Block', ['getBlocks']),

    addUnit(unit) {
      this.createUnit(unit).then(response => {
        core.showSnackbar("success", "Unidad creada correctamente");
        this.$router.replace("/unit/list-unit");
      });
    }
  },
  computed: {
    ...mapState(['errors']),
    ...mapGetters('TypeUnits', ['optionsTypeUnits']),
    ...mapGetters('User', ['optionsRolePropietario']),
  },
  mounted() {
    core.index();
  },

}
</script>

<style scoped>

</style>
