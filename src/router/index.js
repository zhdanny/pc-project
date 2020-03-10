import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import error404 from '../components/error/404.vue';
import error500 from '../components/error/500.vue';
import errorForbid from '../components/error/forbid.vue';
import errorLose from '../components/error/lose.vue';
import errorNetless from '../components/error/netless.vue';
import uapp from '../views/index.vue';
import canvas1 from '../views/canvas/index.vue';
import example from '../views/example/index.vue';
import example2 from '../views/example2/parent.vue';
import example3 from '../views/example3/index.vue';


Vue.use(Router);


export default new Router({
  'routes': [
    {
      'path': '/',
      'name': 'Hello',
      'component': Hello
    },
    {
      'path': '/uapp',
      'name': 'uapp',
      'component': uapp
    },
    {
      'path': '/canvas',
      'name': 'canvas1',
      'component': canvas1
    },
    {
      'path': '/example',
      'name': 'example',
      'component': example
    },
    {
      'path': '/example2',
      'name': 'example2',
      'component': example2
    },
    {
      'path': '/example3',
      'name': 'example3',
      'component': example3
    },
    {
      'path': '/404',
      'name': '404',
      'component': error404
    },
    {
      'path': '/500',
      'name': '500',
      'component': error500
    },
    {
      'path': '/forbid',
      'name': 'forbid',
      'component': errorForbid
    },
    {
      'path': '/lose',
      'name': 'lose',
      'component': errorLose
    },
    {
      'path': '/netless',
      'name': 'netless',
      'component': errorNetless
    }
  ]
});
