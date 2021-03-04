<template>
  <b-container>
    <iq-card bodyClass="pro-bg-card" class="bg-transparent shadow-none" headerClass="bg-primary">
      <template v-slot:headerTitle>
        <h5 class="text-white">Nombre <b>{{ unit.name }}</b></h5>
      </template>
      <template v-slot:headerAction>
        <i class="ri-delete-bin-line mr-0 font-size-18 mr-2 clickeable" @click.stop="modalDeleteUnit"/>
        <i class="ri-ball-pen-line mr-0 font-size-18 clickeable" @click.stop="modalEditUnit"/>
      </template>
      <template v-slot:body>
        <p>Tipo de unidad: {{ unit.type_unit.name }}</p>
        <p>Numero: {{ unit.number }}</p>
        <p v-if="unit.block">Bloque: {{ unit.block.name }}</p>
        <p>Usuarios: {{ unit.users_count }}</p>


        <b-dropdown variant="primary" id="accion-unit" text="Acciones" class="m-md-2">
          <b-dropdown-item>Ver como unidad</b-dropdown-item>
          <b-dropdown-item :to="`/unit/${unit.id}/configuration`">Configuración</b-dropdown-item>
        </b-dropdown>

      </template>
    </iq-card>

    <!--============================
         MODAL EDITAR UNIDAD
    ==============================-->
    <b-modal size="lg" ref="edit_unit" centered title="Editar unidad" hide-footer>
      <form-unit-edit :unit="drafUnit" @save="editUnit"></form-unit-edit>
    </b-modal>

  </b-container>
</template>

<script>
import FormUnitEdit from "./FormUnitEdit";
import {mapActions} from "vuex";
import {core} from "../../config/pluginInit";

export default {
  name: "ItemUnit",
  components: {
    'form-unit-edit': FormUnitEdit
  },
  props: ['unit'],
  data() {
    return {
      drafUnit: {}
    }
  },
  methods: {
    ...mapActions('Unit', ['updateUnit', 'deleteUnit']),
    modalEditUnit() {
      this.drafUnit = clone(this.unit);
      this.$refs['edit_unit'].show();
    },
    editUnit(unitEdit) {
      this.updateUnit(unitEdit).then(response => {
        core.showSnackbar("success", "Unidad actualizada correctamente");
        this.$refs['edit_unit'].hide();
      });
    },
    modalDeleteUnit() {
      this.$bvModal.msgBoxConfirm('¿ Esta seguro que desea eliminar la unidad ?', {
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Eliminar',
        cancelTitle: 'Cancelar',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
        if (value) {
          this.deleteUnit(this.unit.id).then(response => {
            core.showSnackbar("success", "La unidad ha sido eliminada correctamente");
          })
        }
      });
    },
  }
}
</script>

<style scoped>
.clickeable {
  cursor: pointer;
}

</style>
