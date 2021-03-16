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

    <b-col md="12">
      <comment-advertisement></comment-advertisement>
    </b-col>


  </b-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";
import CommentAdvertisement from "./CommentAdvertisement";

export default {
  name: "DetailAdvertisement",
  props: ['id'],
  components: {
    'comment-advertisement': CommentAdvertisement
  },
  created() {
    this.findArvertisement(this.id);
  },
  methods: {
    ...mapActions('Advertisement', ['findArvertisement'])
  },
  computed: {
    ...mapState('Advertisement', ['advertisement'])
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
