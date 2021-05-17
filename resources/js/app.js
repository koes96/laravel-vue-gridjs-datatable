require('./bootstrap');

window.Vue = require('vue');

import { Vue } from 'vue-property-decorator';
// import ModalWizard from 'vue-modal-wizard'
// Vue.component('Modal', VueModal)
import Grid from 'gridjs-vue'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(ModalWizard)
Vue.use(Grid);

Vue.component('datatable-component', require('./components/DatatableComponent.vue').default);

const app = new Vue({
    el: '#app',
});