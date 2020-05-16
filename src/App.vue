<template>
  <div id="app">
    <div class="nav-content">
      <router-link to='/uapp'>日历</router-link>
      <router-link to='/canvas'>canvas</router-link>
      <router-link to='/example'>$emit/$on</router-link>
      <router-link to='/example2'>$parent/$children</router-link>
      <router-link to='/example3'>provide/inject</router-link>
      <router-link to='/css-example'>css-example</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  'name': 'app',
  'components': {Hello},
  data() {
    return {
      'value1': '',
      'input': ''
    };
  }
};
</script>

<style>
@import './style/_reset.scss';
#app {
  font-family: PingFangSC-Regular,"Microsoft YaHei",sans-serif;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.nav-content{
  font-size: 14px;
  padding: 10px;
  font-size: #666;
}
</style>
