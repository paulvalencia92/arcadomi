<template>
  <b-card title="Comentarios">
    <b-row>
      <b-col md="2">
        <img class="rounded-circle" src="../../../assets/images/user/user-01.jpg">
      </b-col>
      <b-col md="10">
        <div class="form-group">
          <textarea v-model="message" type="text" placeholder="Escribe un comentario" class="rounded form-control">
          </textarea>
        </div>
      </b-col>
    </b-row>

    <div class="row">
      <div class="col m-0 float-md-right pb-3">
        <button class="btn btn-primary float-right" @click="addComment()">Enviar</button>
      </div>
    </div>


    <b-row>
      <b-col class="mt-4" md="12" v-for="comment in advertisement.comments" :key="comment.id">
        <b-row>
          <b-col md="2">
            <img class="rounded-circle" src="../../../assets/images/user/user-01.jpg">
          </b-col>
          <b-col md="10">
            <div class="media-support-info mt-2">
              <h5 class="mb-0">
                <b-link href="#" class="">{{ comment.body }}</b-link>
              </h5>
              <p class="mb-0 text-secondary">{{ comment.created_at | formatDateToTime }}</p>
              <p class="mb-0 text-secondary">Autor: {{ comment.user.fullname }}
                <i v-if="comment.user_id == user.id"
                   @click="showModalDeleteCommentAdvertisement(comment.id)"
                   class="ri-delete-bin-7-fill ri-sm text-secondary pointer"/>
              </p>

            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>


  </b-card>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";
export default {
  name: "CommentAdvertisement",
  data() {
    return {
      message: ''
    }
  },
  methods: {
    ...mapActions('Advertisement', ['createComment', 'deleteCommentAdvertisement']),
    addComment() {
      this.createComment({message: this.message, advertisementId: this.advertisement.id}).then(response => {
        this.message = '';
      });
    },
    showModalDeleteCommentAdvertisement(commentId) {
      this.$bvModal.msgBoxConfirm('¿Estás seguro? ¡No podras recuperar el comentario eliminado!', {
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Eliminar',
        cancelTitle: 'Cancelar',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          this.deleteCommentAdvertisement(commentId).then(response => {
            core.showSnackbar("success", "El comentario ha sido eliminado con éxito.");
          })
        }
      });
    }
  },
  computed: {
    ...mapState('Auth', ['user']),
    ...mapState('Advertisement', ['advertisement']),
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

</style>
