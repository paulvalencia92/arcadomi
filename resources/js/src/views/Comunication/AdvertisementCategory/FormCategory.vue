<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)" enctype="multipart/form-data">

      <!--errors-->
      <card-errors v-if="errors.length"/>

      <b-form-group class="form-group" label="Nombre" label-for="name">
        <ValidationProvider name="nombre del bloque" rules="required" v-slot="{ errors }">
          <b-form-input v-model="category.name" id="name"
                        :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </b-form-group>


      <b-form-group label="Permisos" label-for="optionsPermissions">
        <ValidationProvider name="permisos" rules="required" v-slot="{ errors }">
          <b-form-select plain v-model="category.permission" :options="optionsPermissions" id="optionsPermissions"
                         :class="(errors.length > 0 ? ' is-invalid' : '')">
          </b-form-select>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </b-form-group>


      <div class="form-group">
        <label class="d-block" for="description">Descripción - <span
            class="text-sm-left text-muted font-italic">opcional</span></label>
        <b-form-textarea
            id="description"
            v-model="category.description"
            rows="3"
            max-rows="6">
        </b-form-textarea>
      </div>


      <b-form-group class="mt-3">
        <div class="add-img-user profile-img-edit">
          <b-img
              class="profile-pic height-150 width-150"
              fluid
              :src="getImagePreview()"
              alt="profile-pic"/>
          <div class="p-image">
            <b-button size="sm"
                      variant="outline-primary">
              <input
                  type="file"
                  @change="previewImage"
                  class="h-100 position-absolute"
                  accept="image/*"
                  style="opacity: 0;"/>
              Subir imagen
            </b-button>
          </div>
        </div>
      </b-form-group>


      <b-form-group class="mt-4 text-right">
        <hr>
        <b-button variant="primary" type="submit">Guardar</b-button>
      </b-form-group>
    </b-form>
  </ValidationObserver>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {core} from "../../../config/pluginInit";

export default {
  name: "FormCategory",
  props: ['category', 'modalTitle', 'image'],
  created() {
    this.imagePreview = clone(this.image);
  },
  data() {
    return {
      optionsPermissions: [
        {text: 'Libre: Los residentes pueden publicar libremente.', value: 1},
        {text: 'Administrado: Los residentes pueden publicar y el administrador debe aprobar.', value: 2},
        {text: 'Solo administrador: Solo el administrador puede publicar.', value: 3},
      ],
      imagePreview: '',

    }
  },
  methods: {
    ...mapActions('AdvertisementCategory', ['createAdvertisementCategories', 'updateAdvertisementCategories']),
    onSubmit() {
      const data = this.buildFormData();
      if (data.get('id')) {
        this.updateAdvertisementCategories(data).then(response => {
          core.showSnackbar("success", "La categoria ha sido actualizada con éxito.");
          this.$bvModal.hide('form-advertisement-category');
        })
      } else {
        this.createAdvertisementCategories(data).then(response => {
          core.showSnackbar("success", "La categoria ha sido creado con éxito.");
          this.$bvModal.hide('form-advertisement-category');
        });

      }
    },
    previewImage: function (event) {
      this.category.file = event.target.files[0];
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    buildFormData() {
      const formData = new FormData();
      for (let prop in this.category) {
        if (this.category[prop] != '' && this.category[prop] != null) {
          formData.append(prop, this.category[prop])
        }
      }
      return formData;
    },
    getImagePreview() {
      let urlImage = '';
      if (this.imagePreview) {
        urlImage = this.imagePreview;
      } else if (this.category.image) {
        urlImage = `/storage/advertisement_categories/${this.category.image}`;
      } else {
        urlImage = require("../../../assets/images/user/user-11.png");
      }
      return urlImage;
    }
  },
  computed: {
    ...mapState(['errors']),
  }
}
</script>

<style scoped>

</style>
