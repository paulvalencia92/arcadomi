<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:body>
            <h2>Categorias</h2>
          </template>
        </iq-card>
      </b-col>
    </b-row>


    <!--============================
         LISTA DE ANUNCIOS
    ==============================-->
    <b-row v-if="advertisements.length">
      <b-col lg="8" v-for="item in advertisements" :key="item.id">
        <b-card no-body class="iq-mb-3">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img :src="require('../../../../assets/images/page-img/08.jpg')"></b-card-img>
            </b-col>
<!--            <b-col md="8" class="bg-success">-->
              <b-card-body :title="item.title" class="col-md-8 px-3 d-flex flex-column justify-content-between">
                <b-card-text>
                  <p class="text-muted">Autor: {{ item.user.fullname }}</p>
                  <small class="text-muted">publicado {{ item.created_at|formatDate }}</small>
                  <small class="text-muted"> {{ item.created_at|formatDateToTime }}</small>
                </b-card-text>
                <b-card-text>
                  <b-button variant="primary" :to="{name: 'comunication.detail-advertisement',params: {id: item.id}}">
                    Ver detalle
                  </b-button>
                </b-card-text>
                <b-card-text class="align-self-end d-flex">
                  <p class="mr-1">{{ item.comments_count }}</p>
                  <i class="ri-chat-1-fill ri-1x"/>
                </b-card-text>
              </b-card-body>
<!--            </b-col>-->
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-alert v-else show variant="primary">
      No hay anuncios registrados
    </b-alert>


  </b-container>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "AdvertisementRead",
  created() {
    this.getPublishedAdvertisements();
  },
  methods: {
    ...mapActions('Advertisement', ['getPublishedAdvertisements']),
  },
  computed: {
    ...mapState('Advertisement', ['advertisements'])
  }
}
</script>

<style scoped>

</style>
