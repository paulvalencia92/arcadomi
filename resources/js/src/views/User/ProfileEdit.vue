<template>
  <b-container fluid>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <b-row>
          <b-col lg="12">
            <iq-card body-class="p-0">
              <template v-slot:body>
                <div class="iq-edit-list">
                  <tab-nav :pills="true" class="iq-edit-profile d-flex">
                    <tab-nav-items
                        class="col-md-3 p-0"
                        :active="true"
                        href="#personal-information"
                        title="Personal Information"/>
                    <!--                    <tab-nav-items-->
                    <!--                        class="col-md-3 p-0"-->
                    <!--                        :active="false"-->
                    <!--                        href="#chang-pwd"-->
                    <!--                        title=" Change Password"-->
                    <!--                    />-->
                    <!--                    <tab-nav-items-->
                    <!--                        class="col-md-3 p-0"-->
                    <!--                        :active="false"-->
                    <!--                        href="#emailandsms"-->
                    <!--                        title="Email and SMS"-->
                    <!--                    />-->
                    <!--                    <tab-nav-items-->
                    <!--                        class="col-md-3 p-0"-->
                    <!--                        :active="false"-->
                    <!--                        href="#manage-contact"-->
                    <!--                        title="Manage Contact"-->
                    <!--                    />-->
                  </tab-nav>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="12">
            <div class="iq-edit-list-data">
              <tab-content id="pills-tabContent-2">
                <tab-content-item :active="true" id="personal-information">
                  <iq-card>
                    <template v-slot:headerTitle>
                      <h4 class="card-title">Información Personal</h4>
                    </template>
                    <template v-slot:body>
                      <b-form-group class="row align-items-center">

                        <b-col md="12">
                          <card-errors v-if="errors.length"/>
                        </b-col>



                        <b-col md="12">
                          <div class="profile-img-edit">
                            <!--                                :src="imagePreview ? imagePreview :  user.image ? `/storage/users/${user.image}` : imageDefault"-->

                            <b-img
                                :src="getImagePreview"
                                class="profile-pic height-150 width-150"
                                alt="profile-pic"/>
                            <input type="hidden" v-model="user.image"/>
                            <div class="p-image">
                              <div class="position-relative">
                                <i class="ri-pencil-line upload-button"></i>
                                <b-form-file
                                    class="h-100 position-absolute"
                                    accept="image/*"
                                    style="opacity: 0;"
                                    @change="previewImage"></b-form-file>
                              </div>
                            </div>
                          </div>
                        </b-col>
                      </b-form-group>
                      <b-row align-v="center">
                        <b-form-group class="col-md-6" label="First Name" label-for="fname">
                          <ValidationProvider
                              name="First name"
                              rules="required"
                              v-slot="{ errors }">
                            <b-form-input
                                v-model="user.first_name"
                                type="text"
                                placeholder="First Name"
                                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-md-6" label="Last Name" label-for="lname">
                          <ValidationProvider name="Last name" rules="required" v-slot="{ errors }">
                            <b-form-input
                                v-model="user.last_name"
                                type="text"
                                placeholder="Last Name"
                                :class="(errors.length > 0 ? ' is-invalid' : '')">
                            </b-form-input>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>

                        <b-form-group class="col-md-6" label="Username" label-for="uname">
                          <ValidationProvider name="User name" rules="required" v-slot="{ errors }">
                            <b-form-input
                                v-model="user.username"
                                type="text"
                                placeholder="Username"
                                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                            <div class="invalid-feedback">
                              <span>{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </b-form-group>


                        <b-form-group class="col-md-6" label="Correo electronico:" label-for="email">
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

                        <b-form-group class="col-sm-6" label="Gender:" label-class="d-block">
                          <b-form-radio inline v-model="user.gender" value="male">Male</b-form-radio>
                          <b-form-radio inline v-model="user.gender" value="female">Female</b-form-radio>
                        </b-form-group>
                        <b-form-group class="col-sm-6" label="Date Of Birth:" label-for="dob">
                          <b-form-input type="date" v-model="user.date_of_birth" id="dob"></b-form-input>
                        </b-form-group>
                      </b-row>
                      <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
                      <b-button type="reset" variant="none" class="iq-bg-danger">Cancel</b-button>
                    </template>
                  </iq-card>
                </tab-content-item>
                <!--                <tab-content-item :active="false" id="chang-pwd">-->
                <!--                  <iq-card>-->
                <!--                    <template v-slot:headerTitle>-->
                <!--                      <h4 class="card-title">Change Password</h4>-->
                <!--                    </template>-->
                <!--                    <template v-slot:body>-->
                <!--                      <b-form-group>-->
                <!--                        <label for="cpass">Current Password:</label>-->
                <!--                        <b-link href="javascripe:void();" class="float-right">Forgot Password</b-link>-->
                <!--                        <b-form-input-->
                <!--                            @focusout="changePassword()"-->
                <!--                            type="password"-->
                <!--                            id="cpass"-->
                <!--                            v-model="currentPassword"-->
                <!--                        ></b-form-input>-->
                <!--                      </b-form-group>-->
                <!--                      <b-form-group class="col-md-6" label="New Password:" label-for="pass">-->
                <!--                        <ValidationProvider-->
                <!--                            name="Password"-->
                <!--                            rules="confirmed:repeat_password"-->
                <!--                            v-slot="{ errors }"-->
                <!--                        >-->
                <!--                          <b-form-input-->
                <!--                              v-model="user.password"-->
                <!--                              type="password"-->
                <!--                              placeholder="Password"-->
                <!--                              :class="(errors.length > 0 ? ' is-invalid' : '')"-->
                <!--                          ></b-form-input>-->
                <!--                          <div class="invalid-feedback">-->
                <!--                            <span>{{ errors[0] }}</span>-->
                <!--                          </div>-->
                <!--                        </ValidationProvider>-->
                <!--                      </b-form-group>-->
                <!--                      <b-form-group class="col-md-6" label="Repeat Password:" label-for="rpass">-->
                <!--                        <ValidationProvider-->
                <!--                            vid="repeat_password"-->
                <!--                            name="Repeat Password"-->
                <!--                            rules="required"-->
                <!--                            v-slot="{ errors }"-->
                <!--                        >-->
                <!--                          <b-form-input-->
                <!--                              v-model="user.repeat_password"-->
                <!--                              type="password"-->
                <!--                              placeholder="Repeat Password"-->
                <!--                              :class="(errors.length > 0 ? ' is-invalid' : '')"-->
                <!--                          ></b-form-input>-->
                <!--                          <div class="invalid-feedback">-->
                <!--                            <span>{{ errors[0] }}</span>-->
                <!--                          </div>-->
                <!--                        </ValidationProvider>-->
                <!--                      </b-form-group>-->
                <!--                      <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>-->
                <!--                      <b-button type="reset" variant="none" class="iq-bg-danger">Cancel</b-button>-->
                <!--                    </template>-->
                <!--                  </iq-card>-->
                <!--                </tab-content-item>-->
                <!--                <tab-content-item :active="false" id="emailandsms">-->
                <!--                  <iq-card>-->
                <!--                    <template v-slot:headerTitle>-->
                <!--                      <h4 class="card-title">Email and SMS</h4>-->
                <!--                    </template>-->
                <!--                    <template v-slot:body>-->
                <!--                      <div class="form-group row align-items-center">-->
                <!--                        <label class="col-md-3" for="emailnotification">Email Notification:</label>-->
                <!--                        <div class="col-md-9 custom-control custom-switch">-->
                <!--                          <input-->
                <!--                              type="checkbox"-->
                <!--                              class="custom-control-input"-->
                <!--                              id="emailnotification"-->
                <!--                              checked-->
                <!--                          />-->
                <!--                          <label class="custom-control-label" for="emailnotification"></label>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <div class="form-group row align-items-center">-->
                <!--                        <label class="col-md-3" for="smsnotification">SMS Notification:</label>-->
                <!--                        <div class="col-md-9 custom-control custom-switch">-->
                <!--                          <input-->
                <!--                              type="checkbox"-->
                <!--                              class="custom-control-input"-->
                <!--                              id="smsnotification"-->
                <!--                              checked-->
                <!--                          />-->
                <!--                          <label class="custom-control-label" for="smsnotification"></label>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <div class="form-group row align-items-center">-->
                <!--                        <label class="col-md-3" for="npass">When To Email</label>-->
                <!--                        <div class="col-md-9">-->
                <!--                          <div class="custom-control custom-checkbox">-->
                <!--                            <input type="checkbox" class="custom-control-input" id="email01"/>-->
                <!--                            <label-->
                <!--                                class="custom-control-label"-->
                <!--                                for="email01"-->
                <!--                            >You have new notifications.</label>-->
                <!--                          </div>-->
                <!--                          <div class="custom-control custom-checkbox">-->
                <!--                            <input type="checkbox" class="custom-control-input" id="email02"/>-->
                <!--                            <label-->
                <!--                                class="custom-control-label"-->
                <!--                                for="email02"-->
                <!--                            >You're sent a direct message</label>-->
                <!--                          </div>-->
                <!--                          <div class="custom-control custom-checkbox">-->
                <!--                            <input-->
                <!--                                type="checkbox"-->
                <!--                                class="custom-control-input"-->
                <!--                                id="email03"-->
                <!--                                checked-->
                <!--                            />-->
                <!--                            <label-->
                <!--                                class="custom-control-label"-->
                <!--                                for="email03"-->
                <!--                            >Someone adds you as a connection</label>-->
                <!--                          </div>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <div class="form-group row align-items-center">-->
                <!--                        <label class="col-md-3" for="npass">When To Escalate Emails</label>-->
                <!--                        <div class="col-md-9">-->
                <!--                          <div class="custom-control custom-checkbox">-->
                <!--                            <input type="checkbox" class="custom-control-input" id="email04"/>-->
                <!--                            <label class="custom-control-label" for="email04">Upon new order.</label>-->
                <!--                          </div>-->
                <!--                          <div class="custom-control custom-checkbox">-->
                <!--                            <input type="checkbox" class="custom-control-input" id="email05"/>-->
                <!--                            <label-->
                <!--                                class="custom-control-label"-->
                <!--                                for="email05"-->
                <!--                            >New membership approval</label>-->
                <!--                          </div>-->
                <!--                          <div class="custom-control custom-checkbox">-->
                <!--                            <input-->
                <!--                                type="checkbox"-->
                <!--                                class="custom-control-input"-->
                <!--                                id="email06"-->
                <!--                                checked-->
                <!--                            />-->
                <!--                            <label class="custom-control-label" for="email06">Member registration</label>-->
                <!--                          </div>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                      <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>-->
                <!--                      <b-button type="reset" variant="none" class="iq-bg-danger">Cancel</b-button>-->
                <!--                    </template>-->
                <!--                  </iq-card>-->
                <!--                </tab-content-item>-->
                <!--                <tab-content-item :active="false" id="manage-contact">-->
                <!--                  <iq-card>-->
                <!--                    <template v-slot:headerTitle>-->
                <!--                      <h4 class="card-title">Manage Contact</h4>-->
                <!--                    </template>-->
                <!--                    <template v-slot:body>-->
                <!--                      <b-form>-->
                <!--                        <b-form-group>-->
                <!--                          <label for="contact_no">Contact Number:</label>-->
                <!--                          <b-form-input id="contact_no" type="text" v-model="user.mobile_no"></b-form-input>-->
                <!--                        </b-form-group>-->
                <!--                        <b-form-group>-->
                <!--                          <label for="email">Email:</label>-->
                <!--                          <b-form-input id="email" type="text" v-model="user.email"></b-form-input>-->
                <!--                        </b-form-group>-->
                <!--                        <b-form-group>-->
                <!--                          <label for="url">Url:</label>-->
                <!--                          <b-form-input id="url" type="text" v-model="user.url"></b-form-input>-->
                <!--                        </b-form-group>-->
                <!--                        <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>-->
                <!--                        <b-button type="reset" variant="none" class="iq-bg-danger">Cancel</b-button>-->
                <!--                      </b-form>-->
                <!--                    </template>-->
                <!--                  </iq-card>-->
                <!--                </tab-content-item>-->
              </tab-content>
            </div>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
  </b-container>
</template>
<script>
import {core} from "../../config/pluginInit";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "ProfileEdit",
  props: ['id'],
  created() {
    this.findUser(this.id).then(response => {
      this.user = clone(response);
    });

    this.getRoles();
  },
  data() {
    return {
      imagePreview: null,
      imageDefault: require("../../assets/images/user/user-11.png"),
      user: {},
      currentPassword: "",
    };
  },
  methods: {
    ...mapActions('User', ['findUser', 'updateUser']),
    ...mapActions('Role', ['getRoles']),
    onSubmit() {
      const formData = this.buildFormData();
      this.updateUser(formData).then(response => {
        core.showSnackbar("success", "User has been updated successfully.");
        this.$router.replace("/user/user-list");
      })


    },
    previewImage: function (event) {
      this.user.image = event.target.files[0];
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
      formData.append('_method', 'PUT')
      for (let prop in this.user) {
        if (this.user[prop] != null) {
          formData.append(prop, this.user[prop])
        }
      }
      return formData;
    },

  },
  computed: {
    ...mapGetters('Role', ['optionsRoles']),
    ...mapState(['errors']),
    getImagePreview() {
      // imagePreview ? imagePreview :  user.image ? `/storage/users/${user.image}` : imageDefault
      let urlImage = '';
      if (this.imagePreview) {
        urlImage = this.imagePreview;
      } else if (this.user.image) {
        urlImage = `/storage/users/${this.user.image}`;
      } else {
        urlImage = this.imageDefault;
      }
      return urlImage;
    }
  },
  mounted() {
    core.index();
  },
};
</script>
