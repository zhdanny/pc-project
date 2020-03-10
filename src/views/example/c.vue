<template>
  <div>
    我是组件C，
    <el-button type="primary" @click="send">点击我向B发送东西</el-button>
  </div>
</template>
<script>
export default {
  'name': 'cComp',
  'props': [
    'event',
    'num'
  ],
  data() {
    return {};
  },
  'methods': {
    send() {
      console.log(this.num);
      this.event.$emit('phone-c', `我是组件C啊${this.num}`);
    }
  }
};
</script>
