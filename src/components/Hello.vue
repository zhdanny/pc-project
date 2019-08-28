<template>
  <div class="hello">
    <router-link to='/uapp'>日历</router-link>
  </div>
</template>

<script>
export default {
  'name': 'hello',
  data() {
    return {'msg': '欢迎使用vue-pc模板'};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin: 10px;
  font-size:14px;
}
</style>
