<template>
  <b-container fluid>
    <b-row>
      <b-col class="pointer" @click="showAdvertisementByCategory(category)" sm="2"
             v-for="category in advertisementCategories"
             :key="category.id">
        <b-card
            bg-variant="dark"
            text-variant="white"
            :title="category.name"
            overlay
            :img-src="`/storage/advertisement_categories/${category.image}`"
            img-alt="#"
            img-bottom
            class="iq-mb-3 card-advertisement-category">
        </b-card>
      </b-col>
    </b-row>

    <pre><code></code></pre>


    <!--============================
         LISTA DE ANUNCIOS
    ==============================-->
    <b-row v-if="advertisements.length">
      <template v-if="filteredAdvertisements.length">
        <b-col lg="8" v-for="item in filteredAdvertisements" :key="item.id">
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
                  <small class="text-muted">{{ item.advertisement_category.name }}</small>
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
      </template>
      <b-alert v-else show variant="primary">
        No encontramos anuncios publicados en la categoría {{ filter.name }}.
      </b-alert>
    </b-row>
    <b-alert v-else show variant="primary">
      No hay anuncios registrados
    </b-alert>


  </b-container>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "AdvertisementRead",
  created() {
    this.getAdvertisementCategories();
    this.getPublishedAdvertisements();
  },
  methods: {
    ...mapActions('Advertisement', ['getPublishedAdvertisements']),
    ...mapMutations('Advertisement', ['SET_FILTER']),
    ...mapActions('AdvertisementCategory', ['getAdvertisementCategories']),
    showAdvertisementByCategory(category) {
      this.SET_FILTER(category);
    }
  },
  computed: {
    ...mapState('Advertisement', ['advertisements', 'filter']),
    ...mapGetters('Advertisement', ['filteredAdvertisements']),
    ...mapState('AdvertisementCategory', ['advertisementCategories']),
  }
}
</script>

<style scoped>
.card-advertisement-category h4.card-title {
  color: white !important;
  padding: 2px 5px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.pointer {
  cursor: pointer;
}
</style>
