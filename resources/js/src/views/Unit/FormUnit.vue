<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)">
      <iq-card>
        <template v-slot:body>
          <b-row>

            <!--            Errors validation-->
            <b-col md="12">
              <card-errors v-if="errors.length"/>
            </b-col>

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


            <b-form-group class="col-md-6" label="Bloque:" label-for="selectypeblock">
              <b-form-select plain v-model="unit.block_id" :options="optionsTypeBlock" id="selectypeblock">
                <template v-if="!blocks.length" v-slot:first>
                  <b-form-select-option :value="null">Aun no se han registrado ningun bloque
                  </b-form-select-option>
                </template>
              </b-form-select>


            </b-form-group>


            <b-col md="12" class="text-right mt-4">
              <b-button variant="primary" type="submit">Guardar</b-button>
            </b-col>
          </b-row>
        </template>

      </iq-card>
    </b-form>
  </ValidationObserver>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import 'vue-search-select/dist/VueSearchSelect.css'
import {ModelSelect} from 'vue-search-select';

export default {
  name: "FormUnit",
  props: ['unit'],
  components: {
    'model-select': ModelSelect,
  },
  methods: {
    onSubmit() {
      this.$emit('save', this.unit);
    }
  },
  computed: {
    ...mapState(['errors']),
    ...mapGetters('TypeUnits', ['optionsTypeUnits']),
    ...mapGetters('Block', ['optionsTypeBlock']),
    ...mapState('Block', ['blocks']),
    ...mapGetters('User', ['optionsRolePropietario']),
  }
}
</script>

<style scoped>

</style>
