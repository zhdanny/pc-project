<template>
  <div id="app">
    <!-- <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份">
    </el-date-picker>
    <el-input type="password" placeholder="请输入密码" v-model="input"
     :show-password="true"></el-input> -->
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
