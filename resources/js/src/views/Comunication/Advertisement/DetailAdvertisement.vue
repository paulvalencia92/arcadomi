<template>
  <b-container fluid>

    <b-col sm="12">
      <b-card
          :title="advertisement.title"
          :img-src="require('../../../assets/images/page-img/07.jpg')"
          img-alt="#"
          img-top
          class="iq-mb-3">
        <b-card-text v-html="advertisement.description">
        </b-card-text>
        <b-card-text>
          <small class="text-muted">
            publicado {{ advertisement.created_at|formatDate }} {{ advertisement.created_at|formatDateToTime }}
          </small>
        </b-card-text>
      </b-card>
    </b-col>

    <b-col v-if="user.id == advertisement.user_id" md="12" class="iq-mb-3">
      <b-card title="Acciones">
        <b-button v-b-modal.form-advertisement-category
                  @click="showModalEditAdvertisement(advertisement)"
                  variant="primary">
          Editar
        </b-button>
        <b-button @click="showModalDeleteAdvertisement(advertisement.id)" variant="danger">Eliminar</b-button>
      </b-card>
    </b-col>

    <b-col md="12">
      <comment-advertisement></comment-advertisement>
    </b-col>


    <!--===================================
     MODAL FORMULARIO EDITAR CATEGORIA
    =====================================-->
    <b-modal id="form-advertisement-category" centered size="xl" title="Editar anuncio" hide-footer>
      <form-advertisement :advertisement="advertisementEdit" :image="image"></form-advertisement>
    </b-modal>


  </b-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";
import CommentAdvertisement from "./CommentAdvertisement";
import FormAdvertisement from "./FormAdvertisement";

export default {
  name: "DetailAdvertisement",
  props: ['id'],
  components: {
    'comment-advertisement': CommentAdvertisement,
    'form-advertisement': FormAdvertisement,
  },
  data() {
    return {
      advertisementEdit: {},
      image: null,
    }
  },
  created() {
    this.findArvertisement(this.id);
  },
  methods: {
    ...mapActions('Advertisement', ['findArvertisement', 'deleteAdvertisement']),
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
            this.$router.push({name: 'comunication.advertisements'})
          })
        }
      });
    },
  },
  computed: {
    ...mapState('Auth', ['user']),
    ...mapState('Advertisement', ['advertisement']),
  },
  mounted() {
    core.index();
  },

}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
</style>
