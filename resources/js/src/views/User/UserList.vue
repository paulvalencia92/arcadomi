<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">User List</h4>
          </template>
          <template v-slot:headerAction>
            <b-button variant="primary" :to="{ name: 'user.add' }">Add User</b-button>
          </template>
          <template v-slot:body>
            <b-table :items="userList" hover></b-table>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {core} from "../../config/pluginInit";
import ActionUser from "./Components/ActionUser";
import {mapActions, mapState} from 'vuex';

export default {
  name: "UserList",
  mounted() {
    core.index();
  },
  created() {
    this.getUsers();
  },
  data() {
    return {
      columnDefs: null,
      rowData: []
    };
  },
  components: {
    ActionUser
  },
  beforeMount() {
    this.columnDefs = [
      {headerName: "Nombre", field: "fullname", sortable: true, filter: true},
      {headerName: "Correo electronico", field: "email", sortable: true, filter: true},
      {headerName: "Rol", field: "role", sortable: true, filter: true},
      {headerName: "Actions", cellRendererFramework: ActionUser}
    ];
  },
  methods: {
    ...mapActions('User', ['getUsers'])
  },
  computed: {
    ...mapState('User', ['userList'])
  }
};
</script>
