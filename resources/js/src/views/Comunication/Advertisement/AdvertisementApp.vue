<template>
    <advertisement-admin v-if="abilities.includes('*') || abilities.includes('admin-advertisement')"></advertisement-admin>
    <advertisement-read v-else></advertisement-read>
</template>

<script>
import {core} from "../../../config/pluginInit";
import {mapState} from "vuex";
import AdminAdvertisement from "./Abilities/AdvertisementAdmin";
import AdvertisementRead from "./Abilities/AdvertisementRead";

export default {
  name: "AdvertisementApp",
  components: {
    'advertisement-admin': AdminAdvertisement,
    'advertisement-read': AdvertisementRead,
  },
  created() {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState('Auth', ['abilities']),
  },
  mounted() {
    core.index();

  },

}
</script>

<style scoped>

</style>
