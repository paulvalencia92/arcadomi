(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1162:function(e,t,r){"use strict";r.r(t);var a=r(25),n=r(21);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"FormContact",created:function(){this.getRoles()},data:function(){return{user:{first_name:"",last_name:"",username:"",email:"",password:"",repeatPassword:"",file:null,movil_number:"",role:"",gender:"",date_of_birth:"",unit_id:this.$route.params.id}}},methods:o(o(o({},Object(n.b)("Role",["getRoles"])),Object(n.b)("Unit",["createContactForUnit"])),{},{onSubmit:function(){var e=this;this.createContactForUnit(this.user).then((function(t){a.c.showSnackbar("success","Usuario creado correctamente y asignado a la unidad"),e.$refs.contact_form.hide()}))}}),computed:o(o({},Object(n.c)("Role",["optionsContact"])),Object(n.e)(["errors"]))},c=r(14),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{ref:"contact_form",attrs:{id:"contact_form",title:"Crear contacto","hide-footer":"",size:"xl"}},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[r("b-row",[r("b-col",{attrs:{md:"12"}},[e.errors.length?r("card-errors"):e._e()],1),e._v(" "),r("b-form-group",{staticClass:"col-md-6",attrs:{label:"Nombres:","label-for":"fname"}},[r("ValidationProvider",{attrs:{name:"Nombres",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{class:a.length>0?" is-invalid":"",attrs:{type:"text"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}}),e._v(" "),r("div",{staticClass:"invalid-feedback"},[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-6",attrs:{label:"Apellidos:","label-for":"lname"}},[r("ValidationProvider",{attrs:{name:"Apellidos",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{class:a.length>0?" is-invalid":"",attrs:{type:"text"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}}),e._v(" "),r("div",{staticClass:"invalid-feedback"},[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-6",attrs:{label:"Numero de celular:","label-for":"mobno"}},[r("ValidationProvider",{attrs:{name:"Numero de celular",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{class:a.length>0?" is-invalid":"",attrs:{type:"text"},model:{value:e.user.movil_number,callback:function(t){e.$set(e.user,"movil_number",t)},expression:"user.movil_number"}}),e._v(" "),r("div",{staticClass:"invalid-feedback"},[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Genero:","label-class":"d-block"}},[r("ValidationProvider",{attrs:{name:"Genero",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-radio",{class:a.length>0?" is-invalid":"",attrs:{inline:"",value:"male"},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[e._v("\n              Masculino\n            ")]),e._v(" "),r("b-form-radio",{attrs:{inline:"",value:"female"},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[e._v("Femenino")]),e._v(" "),r("b-form-invalid-feedback",[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-6",attrs:{label:"Correo electronico:","label-for":"uname"}},[r("ValidationProvider",{attrs:{name:"Correo electronico",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{class:a.length>0?" is-invalid":"",attrs:{type:"text"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),r("div",{staticClass:"invalid-feedback"},[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-6",attrs:{label:"Nombre de usuario:","label-for":"uname"}},[r("ValidationProvider",{attrs:{name:"Nombre de usuario",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-input",{class:a.length>0?" is-invalid":"",attrs:{type:"text"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e._v(" "),r("div",{staticClass:"invalid-feedback"},[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("div",{staticClass:"form-group col-sm-6"},[r("label",{staticClass:"d-block",attrs:{for:"dob"}},[e._v("Fecha de nacimiento - "),r("span",{staticClass:"text-sm-left text-muted font-italic"},[e._v("opcional")])]),e._v(" "),r("b-form-input",{attrs:{type:"date",id:"dob"},model:{value:e.user.date_of_birth,callback:function(t){e.$set(e.user,"date_of_birth",t)},expression:"user.date_of_birth"}})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-6",attrs:{label:"Tipo de contacto","label-for":"selectuserrole"}},[r("ValidationProvider",{attrs:{name:"Tipo de contacto",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("b-form-select",{class:a.length>0?" is-invalid":"",attrs:{plain:"",options:e.optionsContact,id:"selectuserrole"},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}}),e._v(" "),r("div",{staticClass:"invalid-feedback"},[r("span",[e._v(e._s(a[0]))])])]}}],null,!0)})],1),e._v(" "),r("b-form-group",{staticClass:"col-md-12 text-right mt-4"},[r("b-button",{attrs:{variant:"primary",type:"submit"}},[e._v("Guardar")])],1)],1)],1)]}}])})],1)}),[],!1,null,"58816e63",null).exports,d=(r(638),r(639),r(460)),f=r(37);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=r.n(f).a.extend({mixins:[{data:function(){return{}},methods:m(m(m({},Object(n.d)("Unit",["REMOVE_UNIT_USERS"])),Object(n.b)("User",["deleteUser"])),{},{removeData:function(e){var t=this;this.deleteUser(e).then((function(r){t.REMOVE_UNIT_USERS(e),a.c.showSnackbar("success","El usuario ha sido eliminado con éxito")}))},showModalDeleteUser:function(e){var t=this;this.$bvModal.msgBoxConfirm("Esta seguro que desea eliminar el usuario ?",{buttonSize:"sm",okVariant:"danger",okTitle:"Eliminar",cancelTitle:"Cancelar",hideHeaderClose:!1,centered:!0}).then((function(r){r&&t.removeData(e)}))}})}]}),_=Object(c.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-actions",attrs:{id:this.params.data.id}},[r("router-link",{attrs:{to:{name:"user.edit",params:{id:this.params.data.id}}}},[r("button",{staticClass:"btn btn-default text-success",attrs:{type:"button",attr:this.params.data.id,"data-action-type":"edit"}},[r("i",{staticClass:"ri-edit-box-line"})])]),e._v(" "),r("button",{staticClass:"btn btn-default text-danger",attrs:{type:"button",attr:this.params.data.id,"data-action-type":"remove"},on:{click:function(t){return e.showModalDeleteUser(e.params.data.id)}}},[r("i",{staticClass:"fa fa-trash"})])],1)}),[],!1,null,null,null).exports;function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={name:"ListContactUnit",components:{form_contact:u,AgGridVue:d.AgGridVue,ActionContact:_},created:function(){this.getUnitUsers(this.$route.params.id)},data:function(){return{columnDefs:null}},methods:g({},Object(n.b)("Unit",["getUnitUsers"])),computed:g({},Object(n.e)("Unit",["unitUsers"])),beforeMount:function(){this.columnDefs=[{headerName:"Nombre",field:"fullname",sortable:!0,filter:!0},{headerName:"Correo electronico",field:"email",sortable:!0,filter:!0},{headerName:"Tipo",field:"role",sortable:!0,filter:!0},{headerName:"Actions",cellRendererFramework:_}]}},C={name:"ConfigUnit",props:["id"],components:{contact:Object(c.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("iq-card",{scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{staticClass:"d-flex justify-content-end align-items-center"},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact_form",modifiers:{contact_form:!0}}],attrs:{variant:" iq-bg-primary iq-waves-effect",size:"lg"}},[e._v("\n              Crear contacto\n            ")])],1)]},proxy:!0}])})],1),e._v(" "),r("b-col",{attrs:{sm:"12"}},[r("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[e._v("Usuarios asociados a la unidad")])]},proxy:!0},{key:"body",fn:function(){return[r("ag-grid-vue",{staticClass:"ag-theme-material border height-500",attrs:{id:"ag-grid",columnDefs:e.columnDefs,rowData:e.unitUsers,floatingFilter:!0,rowSelection:"multiple"}})]},proxy:!0}])})],1)],1),e._v(" "),r("form_contact")],1)}),[],!1,null,"118cf446",null).exports},methods:{onSubmit:function(){}},mounted:function(){a.c.index()}},j=Object(c.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("iq-card",{attrs:{"body-class":"p-0"},scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{staticClass:"iq-edit-list"},[r("tab-nav",{staticClass:"iq-edit-profile d-flex",attrs:{pills:!0}},[r("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!0,href:"#unit-general",title:"Configuracion general"}}),e._v(" "),r("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!1,href:"#unit-contacts",title:"Contactos"}}),e._v(" "),r("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!1,href:"#unit-vehicle",title:"Vehiculos"}}),e._v(" "),r("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!1,href:"#unit-pets",title:"Mascotas"}})],1)],1)]},proxy:!0}])})],1),e._v(" "),r("b-col",{attrs:{lg:"12"}},[r("div",{staticClass:"iq-edit-list-data"},[r("tab-content",{attrs:{id:"pills-tabContent-2"}},[r("tab-content-item",{attrs:{active:!0,id:"unit-general"}},[r("h2",[e._v("General")])]),e._v(" "),r("tab-content-item",{attrs:{active:!1,id:"unit-contacts"}},[r("contact")],1)],1)],1)])],1)],1)}),[],!1,null,"ce40a0ae",null);t.default=j.exports}}]);
//# sourceMappingURL=config-unit.0d01e90b576197a24c85.js.map