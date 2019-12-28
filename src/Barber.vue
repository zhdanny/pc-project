<template>
    <div id="app">
        <header-nav></header-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import headerNav from './views/barber-shop/header';
export default {
  'name': 'app',
  'components': {headerNav},
  data() {
    return {};
  }
};
</script>

<style>
@import './style/_reset.scss';
#app {
  font-family: PingFangSC-Regular,"Microsoft YaHei",sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
    width: 100%;
    padding-right:0 !important;
}
</style>
