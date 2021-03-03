<template>
  <b-container fluid>
<!--    <ValidationObserver v-slot="{ handleSubmit }">-->
<!--      <form @submit.prevent="handleSubmit(onSubmit)">-->
        <b-row>
          <!--============================
                     TABS
          ==============================-->
          <b-col lg="12">
            <iq-card body-class="p-0">
              <template v-slot:body>
                <div class="iq-edit-list">
                  <tab-nav :pills="true" class="iq-edit-profile d-flex">
                    <tab-nav-items
                        class="col-md-3 p-0"
                        :active="true"
                        href="#unit-general"
                        title="Configuracion general"/>
                    <tab-nav-items
                        class="col-md-3 p-0"
                        :active="false"
                        href="#unit-contacts"
                        title="Contactos"/>
                    <tab-nav-items
                        class="col-md-3 p-0"
                        :active="false"
                        href="#unit-vehicle"
                        title="Vehiculos"/>
                    <tab-nav-items
                        class="col-md-3 p-0"
                        :active="false"
                        href="#unit-pets"
                        title="Mascotas"/>
                  </tab-nav>
                </div>
              </template>
            </iq-card>
          </b-col>
          <!--============================
                    TAGS
          ==============================-->
          <b-col lg="12">
            <div class="iq-edit-list-data">
              <tab-content id="pills-tabContent-2">
                <tab-content-item :active="true" id="unit-general">
                  <h2>General</h2>
                </tab-content-item>
                <tab-content-item :active="false" id="unit-contacts">
                  <contact></contact>
                </tab-content-item>
              </tab-content>
            </div>
          </b-col>
        </b-row>
<!--      </form>-->
<!--    </ValidationObserver>-->
  </b-container>
</template>

<script>
import {core} from "../../config/pluginInit";
import Contact from '../../components/Unit/Configuration/Contact/List'

export default {
  name: "ConfigUnit",
  components: {
    'contact': Contact
    // 'contact': import(/* webpackChunkName:"unit-contact"*/'../../components/Unit/Configuration/Contact')
  },
  methods: {
    onSubmit() {

    }
  },
  mounted() {
    core.index();
  },
}
</script>

<style scoped>

</style>
