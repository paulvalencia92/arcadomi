<template>

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


      <!--habilidades-->
      <b-form-group>
        <b-row>
          <b-col class="col-md-3"
                 v-for="abilitie in abilities"
                 :key="abilitie.id">
            <b-form-checkbox
                v-model="role.abilities"
                :name="`abilities${abilitie.name}`"
                :value="abilitie.id">
              {{ abilitie.title }}
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group class="mt-4 text-right">
        <hr>
        <b-button variant="primary" type="submit">Guardar</b-button>
      </b-form-group>

    </b-form>
  </ValidationObserver>


</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";

export default {
  name: "FormEditRole",
  props: ['role'],
  created() {
    const abilities = this.role.abilities.map(abilitie => abilitie.id);
    this.role.abilities = abilities;
    this.getAbilities();
  },
  methods: {
    ...mapActions('Role', ['getAbilities', 'updateRole']),
    onSubmit() {
      this.updateRole(this.role).then(response => {
        core.showSnackbar("success", "El rol ha sido actualizado");
        this.$emit('roleUpdated',true);
      });
    }
  },
  computed: {
    ...mapState(['errors']),
    ...mapState('Role', ['abilities']),
  },

}
</script>

<style scoped>

</style>
