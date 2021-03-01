<template>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" enctype="multipart/form-data">
        <b-row>
          <b-col lg="3">
            <iq-card>
              <template v-slot:body>
                <b-form-group>
                  <div class="add-img-user profile-img-edit">
                    <b-img
                        class="profile-pic height-150 width-150"
                        fluid
                        :src="imagePreview"
                        alt="profile-pic"/>
                    <input type="hidden" v-model="user.file"/>
                    <input type="hidden" v-model="user.file"/>
                    <div class="p-image">
                      <b-button
                          variant="none"
                          class="upload-button iq-bg-primary position-relative">
                        <input
                            type="file"
                            @change="previewImage"
                            class="h-100 position-absolute"
                            accept="image/*"
                            style="opacity: 0;"/>
                        Subir archivo
                      </b-button>
                    </div>
                  </div>
                  <div class="img-extension mt-3">
                    <div class="d-inline-block align-items-center">
                      <span>Unicamente</span>
                      <b-link href="javascript:void();">.jpg</b-link>
                      <b-link href="javascript:void();">.png</b-link>
                      <b-link href="javascript:void();">.jpeg</b-link>
                      <span>Permitidos</span>
                    </div>
                  </div>
                </b-form-group>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="9">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Información del nuevo usuario</h4>
              </template>
              <template v-slot:body>
                <div class="new-user-info">
                  <b-row>

                    <b-col md="12">
                      <card-errors v-if="errors.length"/>
                    </b-col>

                    <b-form-group class="col-md-6" label="Nombres:" label-for="fname">
                      <ValidationProvider name="Nombres" rules="required" v-slot="{ errors }">
                        <b-form-input
                            v-model="user.first_name"
                            type="text"
                            :class="(errors.length > 0 ? ' is-invalid' : '')">
                        </b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>

                    <b-form-group class="col-md-6" label="Apellidos:" label-for="lname">
                      <ValidationProvider name="Apellidos" rules="required" v-slot="{ errors }">
                        <b-form-input
                            v-model="user.last_name"
                            type="text"
                            :class="(errors.length > 0 ? ' is-invalid' : '')">
                        </b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>

                    <b-form-group class="col-md-6" label="Numero de celular:" label-for="mobno">
                      <ValidationProvider name="Numero de celular" rules="" v-slot="{ errors }">
                        <b-form-input
                            v-model="user.movil_number"
                            type="text"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>

                  </b-row>

                  <hr/>
                  <h5 class="mb-3">Seguridad</h5>
                  <b-row>
                    <b-form-group class="col-md-6" label="Nombre de usuario:" label-for="uname">
                      <ValidationProvider name="Nombre de usuario" rules="required" v-slot="{ errors }">
                        <b-form-input
                            v-model="user.username"
                            type="text"
                            :class="(errors.length > 0 ? ' is-invalid' : '')">
                        </b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>
                    <b-form-group class="col-md-6" label="Correo electronico:" label-for="uname">
                      <ValidationProvider name="Correo electronico" rules="required|email" v-slot="{ errors }">
                        <b-form-input
                            v-model="user.email"
                            type="text"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>

                    <b-form-group class="col-md-6" label="Rol:" label-for="selectuserrole">
                      <ValidationProvider name="Rol" rules="required" v-slot="{ errors }">
                        <b-form-select plain v-model="user.role" :options="optionsRoles" id="selectuserrole"
                                       :class="(errors.length > 0 ? ' is-invalid' : '')">
                        </b-form-select>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>


                    <b-form-group class="col-md-6" label="Contraseña:" label-for="pass">
                      <ValidationProvider
                          name="Password"
                          vid="repeat_password"
                          rules="required|min:8"
                          v-slot="{ errors }">
                        <b-form-input
                            v-model="user.password"
                            type="password"
                            :class="(errors.length > 0 ? ' is-invalid' : '')">
                        </b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>

                    <b-form-group class="col-md-6" label="Repetir contraseña:" label-for="rpass">
                      <ValidationProvider
                          name="Repetir contraseña"
                          rules="required|confirmed:repeat_password"
                          v-slot="{ errors }">
                        <b-form-input
                            v-model="user.repeat_password"
                            type="password"
                            placeholder="Repetir contraseña"
                            :class="(errors.length > 0 ? ' is-invalid' : '')">
                        </b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>
                  </b-row>
                  <b-button variant="primary" type="submit">Crear usuario</b-button>
                </div>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
</template>
<script>
import {core} from "../../config/pluginInit";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FormUser",
  mounted() {
    this.getRoles();
    core.index();
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        repeat_password: "",
        file: null,
        movil_number: "",
        role: "",
      },
      users: [],
      imagePreview: require("../../assets/images/user/user-11.png"),
    };
  },
  computed: {
    ...mapGetters('Role', ['optionsRoles']),
  },
  methods: {
    ...mapActions('Role', ['getRoles']),
    onSubmit() {
      const formData = this.buildFormData();
      this.$emit('onSubmit', this.user);
    },
    previewImage: function (event) {
      this.user.file = event.target.files[0];
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
      for (let prop in this.user) {
        if (this.user[prop] != null) {
          formData.append(prop, this.user[prop])
        }
      }
      return formData;
    },

  }
};
</script>
