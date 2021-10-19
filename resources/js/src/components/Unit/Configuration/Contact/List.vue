<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex justify-content-end align-items-center">
              <b-button variant=" iq-bg-primary iq-waves-effect" v-b-modal.contact_form size="lg">
                Crear contacto
              </b-button>
            </div>
          </template>
        </iq-card>
      </b-col>


      <!--============================
             TABLA USUARIOS UNIDAD
      ==============================-->
      <b-col sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Usuarios asociados a la unidad</h4>
          </template>
          <template v-slot:body>
            <ag-grid-vue
                id="ag-grid"
                class="ag-theme-material border height-500"
                :columnDefs="columnDefs"
                :rowData="unitUsers"
                :floatingFilter="true"
                rowSelection="multiple">
            </ag-grid-vue>
          </template>
        </iq-card>
      </b-col>

    </b-row>


    <!--============================
          MODAL CREAR CONTACTO
    ==============================-->
    <form_contact></form_contact>


  </b-container>
</template>

<script>
import FormContact from './Form'
import {mapActions, mapState} from "vuex";
import "ag-grid-community/dist/styles/ag-grid.min.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import {AgGridVue} from "ag-grid-vue";
import ActionContact from "./Components/ActionContact";

export default {
  name: "ListContactUnit",
  components: {
    'form_contact': FormContact,
    AgGridVue,
    ActionContact
  },
  created() {
    this.getUnitUsers(this.$route.params.id);
  },

  data() {
    return {
      columnDefs: null
    }
  },
  methods: {
    ...mapActions('Unit', ['getUnitUsers'])
  },
  computed: {
    ...mapState('Unit', ['unitUsers'])
  },
  beforeMount() {
    this.columnDefs = [
      {headerName: "Nombre", field: "fullname", sortable: true, filter: true},
      {headerName: "Correo electronico", field: "email", sortable: true, filter: true},
      {headerName: "Tipo", field: "role", sortable: true, filter: true},
      {headerName: "Actions", cellRendererFramework: ActionContact}
    ];
  },

}
</script>

<style scoped>

</style>
