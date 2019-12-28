import Vue from 'vue';
import Router from 'vue-router';
import home from '../views/barber-shop/index.vue';
import logs from '../views/barber-shop/logs.vue';

Vue.use(Router);


export default new Router({
  'routes': [
    {
      'path': '/',
      'name': 'home',
      'component': home
    },
    {
      'path': '/logs',
      'name': 'logs',
      'component': logs
    }
  ]
});
