import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import error404 from '../components/error/404.vue';
import error500 from '../components/error/500.vue';
import errorForbid from '../components/error/forbid.vue';
import errorLose from '../components/error/lose.vue';
import errorNetless from '../components/error/netless.vue';
import uapp from '../views/index.vue';
import canvas from '../views/canvas/index.vue';
import example from '../views/example/index.vue';
import example2 from '../views/example2/parent.vue';
import example3 from '../views/example3/index.vue';
import cssExample from '../views/css-example/index.vue';

Vue.use(Router);


export default new Router({
  'routes': [{
      'path': '/',
      'name': 'Hello',
      'component': Hello,
      redirect: {
        path: '/example'
      }
    },
    {
      'path': '/uapp',
      'name': 'uapp',
      'component': uapp
    },
    {
      'path': '/canvas',
      'name': 'CanvasContent',
      'component': canvas
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
      'path': '/css-example',
      'name': 'css-example',
      'component': cssExample
    },
    {
      path: '/drag-example',
      name: 'drag-example',
      component: () =>
        import ('../views/drag-example')
    },
    {
      path: '/editor',
      name: 'editor',
      component: ()=>import('../views/editor')
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
