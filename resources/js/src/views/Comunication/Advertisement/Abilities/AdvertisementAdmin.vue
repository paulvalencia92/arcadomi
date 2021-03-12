<template>
  <b-container fluid>
    <iq-card>
      <template v-slot:headerTitle>
        <i class="ri-article-line mr-2 text-success"></i>
        <span>Anuncios</span>
      </template>
      <template v-slot:headerAction>
        <b-button variant="primary">
          <b-link :to="{name: 'comunication.create-advertisement'}" class="text-white">Crear anuncio</b-link>
        </b-button>
      </template>
    </iq-card>

    <!--============================
                TABLA
    ==============================-->
    <iq-card v-if="advertisements.length">
      <template v-slot:body>

        <b-table :fields="fields" :items="advertisements" responsive>

          <template v-if="abilities.includes('*') || abilities.includes('admin-advertisement')"
                    v-slot:cell(is_published_arcdo)="data">
            <div @click="changeStatus(data.item)">
              <i v-if="data.item.is_published" class="ri-checkbox-circle-fill text-success ri-2x"
                 style="cursor: pointer"></i>
              <i v-else class="ri-checkbox-blank-circle-fill text-danger ri-2x" style="cursor: pointer"></i>
            </div>
          </template>


          <template v-slot:cell(created_at)="data">
            {{ data.item.created_at | formatDate }} <br>
            {{ data.item.created_at | formatDateToTime }}
          </template>

          <template v-slot:cell(actions)="data">
            <b-dropdown variant="primary" id="accion-unit" text="Acciones" class="m-2">
              <b-dropdown-item variant="primary"
                               v-b-modal.form-advertisement-category
                               @click="showModalEditAdvertisement(data.item)">
                <i class="ri-edit-box-line"/>Editar
              </b-dropdown-item>
              <b-dropdown-item variant="danger" @click="showModalDeleteAdvertisement(data.item.id)">
                <i class="fa fa-trash"/> Eliminar
              </b-dropdown-item>
            </b-dropdown>
          </template>
        </b-table>
      </template>
    </iq-card>


    <!--============================
         FORMULARIO CATEGORIA
    ==============================-->
    <b-modal id="form-advertisement-category" centered size="xl" title="Editar anuncio" hide-footer>
      <form-advertisement :advertisement="advertisementEdit" :image="image"></form-advertisement>
    </b-modal>

  </b-container>
</template>

<script>

import {mapActions, mapState} from "vuex";
import FormAdvertisement from "../FormAdvertisement";

export default {
  name: "AdvertisementAdmin",
  components: {
    'form-advertisement': FormAdvertisement
  },
  created() {
    this.getAdvertisements();
  },
  data() {
    return {
      fields: [
        {key: "title", label: 'Título', sortable: true},
        {key: "user.fullname", label: 'Autor', sortable: true},
        {key: "advertisement_category.name", label: 'Categoria', sortable: true},
        {key: "is_published_arcdo", label: 'Aprobado', sortable: true},
        {key: "created_at", label: 'Creado', sortable: true},
        {key: "actions", label: 'Acciones', sortable: true}
      ],
      advertisementEdit: {},
      image: null,
    }
  },
  methods: {
    ...mapActions('Advertisement', ['getAdvertisements', 'deleteAdvertisement', 'toggleStatus']),
    showModalEditAdvertisement(item) {
      this.advertisementEdit = clone(item);
    },
    showModalDeleteAdvertisement(advertisementId) {
      this.$bvModal.msgBoxConfirm('Esta seguro que desea eliminar el anuncio ?', {
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Eliminar',
        cancelTitle: 'Cancelar',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          this.deleteAdvertisement(advertisementId).then(response => {
            core.showSnackbar("success", "El anuncio ha sido eliminado con éxito.");
          })
        }
      });
    },
    changeStatus(advertisement) {
      this.toggleStatus(advertisement).then(response => {
        if (response) {
          core.showSnackbar("success", "El anuncio ha sido publicado con éxito.");
        } else {
          core.showSnackbar("success", "El anuncio ha sido ocultado.");
        }

      });
    }
  },
  computed: {
    ...mapState('Auth', ['abilities']),
    ...mapState('Advertisement', ['advertisements'])
  },

}
</script>

<style scoped>

</style>
