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
    </b-row>


    <!--============================
          MODAL CREAR CONTACTO
    ==============================-->
    <form_contact></form_contact>


  </b-container>
</template>

<script>
import FormContact from './Form'

export default {
  name: "ListContactUnit",
  components: {
    'form_contact': FormContact
  }
}
</script>

<style scoped>

</style>
