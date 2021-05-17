require('./bootstrap');

window.Vue = require('vue');

// import 'vuejs-datatable/dist/themes/bootstrap-4.esm';
// import { VuejsDatatableFactory } from 'vuejs-datatable';
import { Vue } from 'vue-property-decorator';
import Grid from 'gridjs-vue'
Vue.use(Grid);
// Vue.use(VuejsDatatableFactory);

import DataTable from 'laravel-vue-datatable';
Vue.use(DataTable);


Vue.component('datatable-component', require('./components/DatatableComponent.vue').default);

const app = new Vue({
    el: '#app',
});