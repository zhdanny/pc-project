<template>
  <div class="a-content">
    我是组件A，
    <el-button type="primary" @click="send">点击我向B发送东西</el-button>
  </div>
</template>
<script>
export default {
  'name': 'aComp',
  'props': [
    'event',
    'num'
  ],
  data() {
    return {'nb': 0};
  },
  created() {
    this.nb = this.num;
  },
  'methods': {
    send() {
      this.nb = this.nb + 1;
      this.event.$emit('phone-a', '我是组件A啊', this.nb);
    }
  }
};
</script>
<style lang="scss" scoped>
.a-content{
  margin: 10px;
}
</style>>
