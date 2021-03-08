<template>
  <b-container fluid>
    <iq-card>
      <template v-slot:headerTitle>
        Lista de roles y habilidades
      </template>
      <template v-slot:headerAction>
        <b-button variant=" iq-bg-primary iq-waves-effect" v-b-modal.form-create-role size="lg">
          Crear rol
        </b-button>
      </template>
    </iq-card>

    <iq-card v-if="roles.length">
      <template v-slot:body>
        <b-table :fields="fields" :items="roles" hover responsive>
          <template v-slot:cell(abilities)="roles">
            <template v-for="abilitie in roles.item.abilities">
              <button class="btn btn-link btn-sm mr-1">{{ abilitie.title }}</button>
            </template>
          </template>
          <template v-slot:cell(actions)="roles">
            <b-button size="sm" variant="primary" @click="showModalEditRole(roles.item)">
              Editar
            </b-button>
          </template>
        </b-table>


        <b-modal hide-footer ref="form-edit-role" size="xl" title="Editar Rol">
          <form-edit-role @roleUpdated="hideModalEditRole" :role="role"></form-edit-role>
        </b-modal>

        <form-create-role></form-create-role>


      </template>
    </iq-card>
  </b-container>
</template>

<script>
import {core} from "../../../config/pluginInit";
import {mapActions, mapState} from "vuex";
import FormEditRole from "./FormEditRole";
import FormCreateRole from "./FormCreateRole";

export default {
  name: "RoleApp",
  created() {
    this.getRoles();
  },
  components: {
    'form-edit-role': FormEditRole,
    'form-create-role': FormCreateRole
  },
  data() {
    return {
      role: {},
      fields: [
        {key: "title", label: 'Titulo', sortable: true},
        {key: "abilities", label: 'Habilidades', sortable: true},
        {key: "actions", label: 'Acciones', sortable: true}
      ]
    }
  },
  methods: {
    ...mapActions('Role', ['getRoles', 'getAbilities']),
    showModalEditRole(role) {
      this.role = clone(role);
      this.$refs['form-edit-role'].show();
    },
    hideModalEditRole(updated) {
      this.$refs['form-edit-role'].hide();
    }

  },
  computed: {
    ...mapState('Role', ['roles'])
  },
  mounted() {
    core.index();
  }
}
</script>

<style scoped>

</style>
