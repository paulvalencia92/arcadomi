<template>
  <b-container fluid>
    <b-row>
      <b-col md="8">
        <ValidationObserver v-slot="{ handleSubmit }">
          <b-form @submit.prevent="handleSubmit(onSubmit)">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Información de la nueva unidad</h4>
              </template>
              <template v-slot:body>
                <b-row>
                  <b-col md="12">
                    <card-errors v-if="errors.length"/>
                  </b-col>

                  <b-form-group class="col-md-6" label="Tipo de unidad:" label-for="selectypeunit">
                    <ValidationProvider name="Rol" rules="required" v-slot="{ errors }">
                      <b-form-select plain v-model="unit.type_unit_id" :options="optionsTypeUnits" id="selectypeunit"
                                     :class="(errors.length > 0 ? ' is-invalid' : '')">
                      </b-form-select>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>

                  <b-form-group class="col-md-6" label="Numero de unidad:" label-for="mobno">
                    <ValidationProvider name="Numero de unidad" rules="required" v-slot="{ errors }">
                      <b-form-input
                          v-model="unit.number"
                          type="text"
                          :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>

                  <b-form-group class="col-md-6" label="Asignar propietario:" label-for="mobno">
                    <ValidationProvider name="Propietario" rules="required" v-slot="{ errors }">
                      <model-select v-model="unit.user_id" :options="optionsRolePropietario"
                                    :class="(errors.length > 0 ? ' is-invalid' : '')">
                      </model-select>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </b-form-group>

                  <b-col md="12" class="text-right">
                    <b-button variant="primary" type="submit">Guardar</b-button>
                  </b-col>
                </b-row>
              </template>

            </iq-card>
          </b-form>
        </ValidationObserver>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {core} from "../../config/pluginInit";
import {mapActions, mapGetters, mapState} from "vuex";
import 'vue-search-select/dist/VueSearchSelect.css'
import {ModelSelect} from 'vue-search-select';

export default {
  name: "AddUnit",
  components: {
    'model-select': ModelSelect
  },
  mounted() {
    core.index();
    this.getTypeUnits();
    this.getUsers();
  },
  data() {
    return {
      unit: {
        type_unit_id: '',
        number: '',
        user_id: ''
      }
    }
  },
  methods: {
    ...mapActions('TypeUnits', ['getTypeUnits']),
    ...mapActions('Unit', ['createUnit']),
    ...mapActions('User', ['getUsers']),
    onSubmit() {
      this.createUnit(this.unit).then(response => {
        console.log(response);
        core.showSnackbar("success", "Unidad creada correctamente");
      });
    }
  },
  computed: {
    ...mapState(['errors']),
    ...mapGetters('TypeUnits', ['optionsTypeUnits']),
    ...mapGetters('User', ['optionsRolePropietario']),
  }

}
</script>

<style scoped>

</style>
