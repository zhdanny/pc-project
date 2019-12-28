<template>
  <div id="app">
    <router-link to='/uapp'>日历</router-link>
    <router-link to='/canvas'>canvas</router-link>
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
</style>
