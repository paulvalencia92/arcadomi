<template>
  <b-modal id="contact_form" ref="contact_form" title="Crear contacto" hide-footer size="xl">

    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <b-row>


          <b-col md="12">
            <card-errors v-if="errors.length"/>
          </b-col>

          <b-form-group class="col-md-6" label="Nombres:" label-for="fname">
            <ValidationProvider name="Nombres" rules="required" v-slot="{ errors }">
              <b-form-input
                  v-model="user.first_name"
                  type="text"
                  :class="(errors.length > 0 ? ' is-invalid' : '')">
              </b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>

          <b-form-group class="col-md-6" label="Apellidos:" label-for="lname">
            <ValidationProvider name="Apellidos" rules="required" v-slot="{ errors }">
              <b-form-input
                  v-model="user.last_name"
                  type="text"
                  :class="(errors.length > 0 ? ' is-invalid' : '')">
              </b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>

          <b-form-group class="col-md-6" label="Numero de celular:" label-for="mobno">
            <ValidationProvider name="Numero de celular" rules="required" v-slot="{ errors }">
              <b-form-input
                  v-model="user.movil_number"
                  type="text"
                  :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>


          <b-form-group class="col-sm-6" label="Genero:" label-class="d-block">
            <ValidationProvider name="Genero" rules="required" v-slot="{ errors }">
              <b-form-radio :class="(errors.length > 0 ? ' is-invalid' : '')" inline v-model="user.gender" value="male">
                Masculino
              </b-form-radio>
              <b-form-radio inline v-model="user.gender" value="female">Femenino</b-form-radio>
              <b-form-invalid-feedback><span>{{ errors[0] }}</span></b-form-invalid-feedback>
            </ValidationProvider>
          </b-form-group>


          <b-form-group class="col-md-6" label="Correo electronico:" label-for="uname">
            <ValidationProvider name="Correo electronico" rules="required|email" v-slot="{ errors }">
              <b-form-input
                  v-model="user.email"
                  type="text"
                  :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>


          <b-form-group class="col-md-6" label="Nombre de usuario:" label-for="uname">
            <ValidationProvider name="Nombre de usuario" rules="required" v-slot="{ errors }">
              <b-form-input
                  v-model="user.username"
                  type="text"
                  :class="(errors.length > 0 ? ' is-invalid' : '')">
              </b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>


          <div class="form-group col-sm-6">
            <label class="d-block" for="dob">Fecha de nacimiento - <span class="text-sm-left text-muted font-italic">opcional</span></label>
            <b-form-input type="date" v-model="user.date_of_birth" id="dob"></b-form-input>
          </div>

          <b-form-group class="col-md-6" label="Tipo de contacto" label-for="selectuserrole">
            <ValidationProvider name="Tipo de contacto" rules="required" v-slot="{ errors }">
              <b-form-select plain v-model="user.role" :options="optionsContact" id="selectuserrole"
                             :class="(errors.length > 0 ? ' is-invalid' : '')">
              </b-form-select>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>

          <b-form-group class="col-md-12 text-right mt-4">
            <b-button variant="primary" type="submit">Guardar</b-button>
          </b-form-group>
        </b-row>
      </form>
    </ValidationObserver>
  </b-modal>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {core} from "../../../../config/pluginInit";

export default {
  name: "FormContact",
  created() {
    this.getRoles();
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        file: null,
        movil_number: "",
        role: "",
        gender: "",
        date_of_birth: "",
        unit_id: this.$route.params.id
      },
    }
  },
  methods: {
    ...mapActions('Role', ['getRoles']),
    ...mapActions('Unit', ['createContactForUnit']),
    onSubmit() {
      this.createContactForUnit(this.user).then(response => {
        core.showSnackbar("success", "Usuario creado correctamente y asignado a la unidad");
        this.$refs['contact_form'].hide();

      });
    },
  },
  computed: {
    ...mapGetters('Role', ['optionsContact']),
    ...mapState(['errors']),
  }
}
</script>

<style scoped>

</style>
