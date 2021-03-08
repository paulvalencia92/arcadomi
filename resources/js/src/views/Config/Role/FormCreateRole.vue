<template>
  <b-modal hide-footer ref="form-create-role" id="form-create-role" size="md" title="Crear Rol">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(onSubmit)">
        <!--errors-->
        <b-col md="12">
          <card-errors v-if="errors.length"/>
        </b-col>

        <!--titulo-->
        <b-form-group>
          <ValidationProvider name="titulo" rules="required" v-slot="{ errors }">
            <b-form-input v-model="role.title" placeholder="titulo" type="text"
                          :class="(errors.length > 0 ? ' is-invalid' : '')"/>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </ValidationProvider>
        </b-form-group>

        <b-form-group class="mt-4 text-right">
          <hr>
          <b-button variant="primary" type="submit">Guardar</b-button>
        </b-form-group>


      </b-form>
    </ValidationObserver>
  </b-modal>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";

export default {
  name: "FormCreateRole",
  data() {
    return {
      role: {
        title: ''
      }
    }
  },
  methods: {
    ...mapActions('Role', ['createRole']),
    onSubmit() {
      this.createRole(this.role).then(response => {
        core.showSnackbar("success", "El rol ha sido creado exitosamente");
        this.$refs['form-create-role'].hide();
      });
    }
  },
  computed: {
    ...mapState(['errors']),
  }
}
</script>

<style scoped>

</style>
