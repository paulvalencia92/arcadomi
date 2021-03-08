<template>
  <b-modal id="form_block" centered :title="modalTitle" hide-footer>
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(onSubmit)">

        <b-col md="12">
          <card-errors v-if="errors.length"/>
        </b-col>

        <b-form-group class="form-group" label="Nombre del bloque" label-for="block_tile">
          <ValidationProvider name="nombre del bloque" rules="required" v-slot="{ errors }">
            <b-form-input name="block_title" v-model="block.name" id="block_tile"
                          :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
            <div class="invalid-feedback">
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </b-form-group>

        <b-form-group class="mt-4 text-right">
          <hr>
          <b-button variant="primary" type="submit">{{ btnAction }}</b-button>
        </b-form-group>
      </b-form>
    </ValidationObserver>
  </b-modal>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";

export default {
  name: "BlockForm",
  props: ['block', 'btnAction', 'modalTitle'],
  created() {
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('Block', ['createBlock', 'updateBlock']),
    onSubmit() {
      if (this.block.id) {
        this.updateBlock(this.block).then(response => {
          core.showSnackbar("success", "El bloque ha sido actualizado correctamente");
          this.$bvModal.hide('form_block');
        });
      } else {
        this.createBlock(this.block).then(response => {
          core.showSnackbar("success", "El bloque ha sido creado correctamente");
          this.$bvModal.hide('form_block');
        })
      }
    }
  },
  computed: {
    ...mapState(['errors']),
  }

}
</script>

<style scoped>

</style>
