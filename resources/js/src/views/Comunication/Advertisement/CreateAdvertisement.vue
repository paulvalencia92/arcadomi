<template>
  <b-container fluid>
    <iq-card>
      <template v-slot:body>
        <form-advertisement :advertisement="advertisement" :image="imagePreview"></form-advertisement>
      </template>
    </iq-card>
  </b-container>
</template>

<script>
import FormAdvertisement from "./FormAdvertisement";
import {core} from "../../../config/pluginInit";


export default {
  name: "CreateAdvertisement",
  components: {
    'form-advertisement': FormAdvertisement
  },
  data() {
    return {
      advertisement: {
        title: '',
        advertisement_category_id: '',
        blocks_id: [],
        publication_date: '',
        is_published: true,
        is_featured: false,
        block_comments: false,
        massive_mail: false,
        description: '',
        image: '',
        file: ''
      },
      draft: {},
      modalTitle: '',
      imagePreview: require("../../../assets/images/page-img/37.png"),
    }
  },
  mounted() {
    core.index();
  }

}
</script>

<style scoped>

</style>
