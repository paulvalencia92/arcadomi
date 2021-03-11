<template>
  <b-container fluid>

    <iq-card>
      <template v-slot:headerTitle>
        <i class="ri-user-settings-line mr-2 text-success"></i>
        <span>Categorías</span>
      </template>
      <template v-slot:headerAction>
        <b-button variant="primary" v-b-modal.form-advertisement-category @click="showModalCreateAdvertisementCategory">
          Crear categoría
        </b-button>
      </template>
    </iq-card>


    <iq-card v-if="advertisementCategories.length">
      <template v-slot:body>
        <b-table :fields="fields" :items="advertisementCategories" responsive>
          <template v-slot:cell(actions)="data">
            <b-dropdown variant="primary" id="accion-unit" text="Acciones" class="m-md-2">
              <b-dropdown-item variant="primary" v-b-modal.form-advertisement-category
                               @click="showModalEditAdvertisementCategory(data.item)"><i class="ri-edit-box-line"/>
                Editar
              </b-dropdown-item>
              <b-dropdown-item variant="danger" @click="showModalDeleteAdvertisementCategory(data.item.id)"><i
                  class="fa fa-trash"/> Eliminar
              </b-dropdown-item>
            </b-dropdown>
          </template>
        </b-table>
      </template>
    </iq-card>

    <!--============================
        FORMULARIO CATEGORIA
    ==============================-->
    <b-modal id="form-advertisement-category" centered size="lg" :title="modalTitle" hide-footer>
      <form_category :category="category" :image="imagePreview"></form_category>
    </b-modal>


  </b-container>
</template>

<script>
import {core} from "../../../config/pluginInit";
import {mapActions, mapState} from "vuex";
import FormCategory from "./FormCategory";
import mapValues from 'lodash/mapValues';

export default {
  name: "CategoryApp",
  created() {
    this.getAdvertisementCategories();
  },
  components: {
    'form_category': FormCategory
  },
  data() {
    return {
      category: {
        name: '',
        permission: '',
        description: '',
        image: '',
        file: '',
      },
      modalTitle: '',
      imagePreview: require("../../../assets/images/user/user-11.png"),
      fields: [
        {key: "name", label: 'Nombre', sortable: true},
        {key: "permissions", label: 'Permisos', sortable: true},
        {key: "actions", label: 'Acciones', sortable: true}
      ],

    }
  },
  methods: {
    ...mapActions('AdvertisementCategory', ['getAdvertisementCategories', 'deleteAdvertisementCategories']),
    showModalCreateAdvertisementCategory() {
      this.category = mapValues(this.category, () => '');
      this.modalTitle = "Crear categoria";

    },
    showModalEditAdvertisementCategory(category) {
      this.category = clone(category);
      this.modalTitle = "Editar categoria";
      this.imagePreview = null;
    },
    showModalDeleteAdvertisementCategory(categoryId) {
      this.$bvModal.msgBoxConfirm('Esta seguro que desea eliminar la categoria ?', {
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Eliminar',
        cancelTitle: 'Cancelar',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          this.deleteAdvertisementCategories(categoryId).then(response => {
            core.showSnackbar("success", "La categoria ha sido eliminada con éxito.");
          })
        }
      });
    }
  },
  computed: {
    ...mapState('AdvertisementCategory', ['advertisementCategories'])
  },
  mounted() {
    core.index();

  }
}
</script>

<style scoped>

</style>
