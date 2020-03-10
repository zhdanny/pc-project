<template>
  <div class="b-content">
    <div>我是组件B，我会接收组件A及组件C</div>
    <div>
      A: {{a}}
    </div>
    <div>
      B: {{c}}
    </div>
  </div>
</template>
<script>
export default {
  'name': 'bComp',
  data() {
    return {
      'a': '',
      'c': ''
    };
  },
  'props': ['event'],
  mounted() {
    this.event.$on('phone-a', (a, num) => {
      this.a = `${a},我在改变父元素传过来的值num: ${num}`;
    });
    this.event.$on('phone-c', c => {
      this.c = c;
    });
  }
};
</script>
<style lang="scss" scoped>
.b-content{
  margin: 10px auto;
  text-align: left;
  width: 300px;

  div{
    margin: 10px;
  }
}
</style>
