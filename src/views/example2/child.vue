<template>
  <div class="b-content">
    <div>我是子组件</div>
    <span>{{msgText}}</span>
  </div>
</template>
<script>
export default {
  'name': 'childComp',
  data() {
    return {
      'msgText': '',
      'childMsg': '来自子元素的呐喊'
    };
  },
  created() {
    this.msgText = this.$parent.parentMsg;
    // MsgText: 来自父组件的呵呵
  }
};
</script>
