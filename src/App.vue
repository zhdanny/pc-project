<template>
  <div id="app">
    <div class="nav-content">
      <el-menu
        :default-active="routePath"
        class="el-menu-vertical-demo"
        @select="selectMenu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div v-for='(item, index) in list' :key='index'>
          <el-submenu :index='item.url' v-if='item.children'>
            <template slot="title">
              <span>{{item.name}}</span>
            </template>
            <el-menu-item  v-for="(val, i) in item.children" :key='i' :index='val.url'>{{val.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item :index='item.url' v-else>{{item.name}}</el-menu-item>
        </div>
      </el-menu>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  'name': 'app',
  'components': {Hello},
  data() {
    return {
      list: [{
        url: '/example',
        name: 'Vue组件通信例子',
        children: [{
          url: '/example',
          name: '$emit/$on'
        },{
          url: '/example2',
          name: '$parent/$children'
        },{
          url: '/example3',
          name: 'provide/inject'
        }]
      },{
        url: '/css-example',
        name: 'css3样式技巧',
      },{
        url: '/uapp',
        name: '日历组件',
      },{
        url: '/canvas',
        name: 'canvas鼠标画图'
      },{
        url: '/drag-example',
        name: '拖拽插件例子'
      },{
        url: '/editor',
        name: 'sql编辑器例子'
      }]
    };
  },
  computed: {
    routePath(){
      return this.$route.path
    }
  },
  methods: {
    handleOpen(){

    },
    handleClose(){

    },
    selectMenu(index, indexPath){
      console.log('index', index, indexPath)
      this.$router.push({
        path: index
      })

    }
  }
};
</script>

<style>
.el-menu{
  border-right: solid 1px rgb(84, 92, 100) !important;
}
@import './style/_reset.scss';
body{
  margin: 0;
}
#app {
  font-family: PingFangSC-Regular,"Microsoft YaHei",sans-serif;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;

}
.nav-content{
  width: 230px;
  min-height: 100vh;
  background: rgb(84, 92, 100);
  display: inline-block;
}
.main-content{
  width: 1000px;
  padding: 20px;
  display: inline-block;

}
</style>
