<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex justify-content-between align-items-center">
              <div class="todo-date d-flex mr-3">
                <i :class="`ri-calendar-2-line text-success mr-2`"></i>
                <span>{{ $t('block.title') }}</span>
              </div>
              <div class="todo-notification d-flex align-items-center">
                <b-button variant=" iq-bg-primary iq-waves-effect" @click="modalAddBlock" v-b-modal.add_block size="lg">
                  {{ $t('block.blockAdd') }}
                </b-button>
                <BlockForm :block="block" :btnAction="btnAction" :modalTitle="modalTitle"/>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>

    <!--============================
           LIST BLOCKS
    ==============================-->
    <b-row v-if="blocks.length">
      <b-col md="4" v-for="block in blocks" :key="block.id">
        <b-card class="iq-mb-3" :header="block.name">
          <b-button @click="modalDeleteBlock(block.id)" variant="danger" size="sm">Eliminar</b-button>
          <b-button @click="modalEditBlock(block)" variant="primary" size="sm">Editar</b-button>
        </b-card>
      </b-col>
    </b-row>


  </b-container>
</template>

<script>
import {core} from "../../config/pluginInit";
import BlockForm from "./BlockForm";
import {mapActions, mapMutations, mapState} from "vuex";
import mapValues from "lodash/mapValues";

export default {
  name: "BlockApp",
  components: {BlockForm},
  mounted() {
    core.index();
    this.getBlocks();
  },
  data() {
    return {
      block: {
        id: '',
        name: '',
      },
      btnAction: '',
      modalTitle: '',
    }
  },
  methods: {
    ...mapMutations(['CLEAR_ERRORS']),
    ...mapActions('Block', ['getBlocks', 'deleteBlock']),
    modalAddBlock() {
      this.btnAction = 'Guardar';
      this.modalTitle = 'Crear bloque'
      this.block = mapValues(this.block, () => '');
      this.CLEAR_ERRORS();
      this.$bvModal.show('form_block');
    },
    modalEditBlock(block) {
      this.btnAction = 'Actualizar';
      this.modalTitle = 'Actualizar bloque'
      this.block = clone(block);
      this.CLEAR_ERRORS();
      this.$bvModal.show('form_block');
    },
    modalDeleteBlock(blockId) {
      this.$bvModal.msgBoxConfirm('Esta seguro que desea eliminar el bloque ?', {
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Eliminar',
        cancelTitle: 'Cancelar',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          this.deleteBlock(blockId).then(response => {
            core.showSnackbar("success", "El bloque ha sido eliminado correctamente");
          })
        }
      });
    },
  },
  computed: {
    ...mapState('Block', ['blocks'])
  }

}
</script>

<style scoped>

</style>
