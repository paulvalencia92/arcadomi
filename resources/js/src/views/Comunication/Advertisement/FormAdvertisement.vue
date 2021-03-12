<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)" enctype="multipart/form-data">
      <b-row>
        <!--errors-->
        <b-col md="12">
          <card-errors v-if="errors.length"/>
        </b-col>


        <b-form-group class="col-md-6" label="Titulo" label-for="title">
          <ValidationProvider name="Titulo" rules="required" v-slot="{ errors }">
            <b-form-input v-model="advertisement.title" id="title"
                          :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
            <div class="invalid-feedback">
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </b-form-group>


        <b-form-group class="col-md-6" label="Categoría" label-for="categories">
          <ValidationProvider name="permisos" rules="required" v-slot="{ errors }">
            <b-form-select plain v-model="advertisement.advertisement_category_id" :options="optionsCategories"
                           id="categories"
                           :class="(errors.length > 0 ? ' is-invalid' : '')">
            </b-form-select>
            <div class="invalid-feedback">
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </b-form-group>


        <div class="form-group col-md-6">
          <label class="d-block" for="description">Fecha de publicación -
            <span class="text-sm-left text-muted font-italic">opcional</span></label>
          <b-form-datepicker locale="es" size="md" id="example-datepicker" :min="minDate"
                             v-model="advertisement.publication_date" class="mb-2">
          </b-form-datepicker>
        </div>


        <div class="form-group col-md-6">
          <label class="d-block" for="description">Segmentar por bloques -
            <span class="text-sm-left text-muted font-italic">opcional</span></label>
          <b-form-select :options="optionsTypeBlock" v-model="advertisement.blocks_id" multiple :select-size="3"
                         id="blocks">
          </b-form-select>
        </div>


        <b-form-group class="col-md-3" label="Publicado" label-for="title">
          <template v-for="(item,index) in text">
            <div
                class="custom-control custom-switch custom-switch-text custom-control-inline custom-switch-color"
                :key="index">
              <div class="custom-switch-inner">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    :class="'bg-'+item.class"
                    :id="'is_published'+index"
                    v-model="advertisement.is_published"/>
                <label class="custom-control-label"
                       :for="'is_published'+index"
                       :data-on-label="item.activeLabel"
                       :data-off-label="item.inactiveLabel">
                </label>
              </div>
            </div>
          </template>
        </b-form-group>


        <b-form-group class="col-md-3" label="Destacado" label-for="title">
          <template v-for="(item,index) in text">
            <div
                class="custom-control custom-switch custom-switch-text custom-control-inline custom-switch-color"
                :key="index">
              <div class="custom-switch-inner">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    :class="'bg-'+item.class"
                    :id="'is_featured'+index"
                    v-model="advertisement.is_featured"/>
                <label class="custom-control-label"
                       :for="'is_featured'+index"
                       :data-on-label="item.activeLabel"
                       :data-off-label="item.inactiveLabel">
                </label>
              </div>
            </div>
          </template>
        </b-form-group>


        <b-form-group class="col-md-3" label="Bloquear comentarios" label-for="title">
          <template v-for="(item,index) in text">
            <div
                class="custom-control custom-switch custom-switch-text custom-control-inline custom-switch-color"
                :key="index">
              <div class="custom-switch-inner">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    :class="'bg-'+item.class"
                    :id="'block_comments'+index"
                    v-model="advertisement.block_comments"/>
                <label class="custom-control-label"
                       :for="'block_comments'+index"
                       :data-on-label="item.activeLabel"
                       :data-off-label="item.inactiveLabel">
                </label>
              </div>
            </div>
          </template>
        </b-form-group>


        <b-form-group class="col-md-3" label="Correo masivo" label-for="title">
          <template v-for="(item,index) in text">
            <div
                class="custom-control custom-switch custom-switch-text custom-control-inline custom-switch-color"
                :key="index">
              <div class="custom-switch-inner">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    :class="'bg-'+item.class"
                    :id="'massive_mail'+index"
                    v-model="advertisement.massive_mail"/>
                <label class="custom-control-label"
                       :for="'massive_mail'+index"
                       :data-on-label="item.activeLabel"
                       :data-off-label="item.inactiveLabel">
                </label>
              </div>
            </div>
          </template>
        </b-form-group>

        <div class="form-group col-md-12" label="Descripcion" label-for="title">
          <label class="d-block" for="description">Descripción -
            <span class="text-sm-left text-muted font-italic">opcional</span></label>
          <quill-editor v-model="advertisement.description" ref="myQuillEditor" :options="editorOption"></quill-editor>
        </div>

        <!--        <div class="col-md-12">-->
        <!--          <hr>-->
        <!--        </div>-->

        <!--        <div class="col-md-12">-->
        <!--          <p class="text-black"><b>Segmentar</b></p>-->
        <!--        </div>-->


        <div class="form-group">
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
        </div>


        <b-col md="12" class="text-right mt-4">
          <b-button variant="primary" type="submit">Guardar</b-button>
        </b-col>

      </b-row>
    </b-form>
  </ValidationObserver>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {core} from "../../../config/pluginInit";

export default {
  name: "FormAdvertisemenet",
  props: ['advertisement', 'image'],
  created() {
    this.getAdvertisementCategories();
    this.getBlocks();
    this.imagePreview = clone(this.image);
  },
  data() {
    return {
      text: [
        {
          activeLabel: "On",
          inactiveLabel: "Off",
          label: "Primary",
          class: "primary",
          checked: true
        },
      ],
      editorOption: {
        placeholder: 'Escribe lo que desees de interés aquí',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'align': []}],
            ['link', 'image', 'video']
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      },
      imagePreview: '',
    }
  },

  methods: {
    ...mapActions('AdvertisementCategory', ['getAdvertisementCategories']),
    ...mapActions('Advertisement', ['createAdvertisement', 'updateAdvertisement']),
    ...mapActions('Block', ['getBlocks']),
    onSubmit() {
      const data = this.buildFormData();
      if (data.get('id')) {
        this.updateAdvertisement(data).then(response => {
          core.showSnackbar("success", "El anuncio ha sido actualizado con éxito.");
          this.$bvModal.hide('form-advertisement-category');
        })
      } else {
        this.createAdvertisement(data).then(response => {
          core.showSnackbar("success", "El anuncio ha sido creado con éxito.");
          this.$router.push({name: 'comunication.advertisements'});
        })
      }
    },
    getImagePreview() {
      let urlImage = '';
      if (this.imagePreview) {
        urlImage = this.imagePreview;
      } else if (this.advertisement.image) {
        urlImage = `/storage/advertisements/${this.advertisement.image}`;
      } else {
        urlImage = require("../../../assets/images/page-img/37.png");
      }
      return urlImage;
    },

    previewImage: function (event) {
      this.advertisement.file = event.target.files[0];
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
      for (let prop in this.advertisement) {
        if (this.advertisement[prop] != '' && this.advertisement[prop] != null) {
          formData.append(prop, this.advertisement[prop])
        }
      }
      return formData;
    },

  },
  computed: {
    ...mapState(['errors']),
    ...mapGetters('AdvertisementCategory', ['optionsCategories']),
    ...mapGetters('Block', ['optionsTypeBlock']),
    minDate() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() + 0)
      minDate.setDate(now.getDate());
      return minDate;
    },
  }
}
</script>

<style scoped>
.ql-container.ql-snow {
  min-height: 120px !important;
}

/*ql-container ql-snow*/
</style>
