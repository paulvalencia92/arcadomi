<template>
  <div class="user-actions" :id="this.params.data.id">
    <router-link :to="{name:'user.edit', params: {id: this.params.data.id} }">
      <button
          type="button"
          :attr="this.params.data.id"
          data-action-type="edit"
          class="btn btn-default text-success">
        <i class="fa fa-pencil"></i> Editar
      </button>
    </router-link>
    <button
        type="button"
        :attr="this.params.data.id"
        @click="showModalDeleteUser(params.data.id)"
        data-action-type="remove"
        class="btn btn-default text-danger">
      <i class="fa fa-trash"></i> Eliminar
    </button>
  </div>
</template>

<script>
import Vue from "vue";
import {core} from "../../../config/pluginInit";
import {mapActions} from "vuex";

export default Vue.extend({
  mixins: [
    {
      data() {
        return {};
      },
      methods: {
        ...mapActions('User', ['deleteUser']),
        removeData(id) {
          this.deleteUser(id).then(response => {
            core.showSnackbar("success", "El usuario ha sido eliminado con éxito");
          })
        },
        showModalDeleteUser(userId) {
          this.$bvModal.msgBoxConfirm('Esta seguro que desea eliminar el usuario ?', {
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'Eliminar',
            cancelTitle: 'Cancelar',
            hideHeaderClose: false,
            centered: true
          })
              .then(value => {
                if (value) {
                  this.removeData(userId)
                }
              });
        },
      }
    }
  ]
});
</script>
