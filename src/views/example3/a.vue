<template>
  <div>
    <el-button @click="showFn(textShow)">点击我切换下面文字展示及隐藏</el-button>
    <div v-if="textShow">我是一段随意被操控的文字{{a}}</div>
  </div>
</template>
<script>
export default {
  'name': 'ComA',
  data() {
    return {'textShow': true};
  },
  'inject': [
    'a',
    'show'
  ],
  'methods': {
    showFn(val) {
      this.textShow = this.show(val);
    }
  }
};
</script>
