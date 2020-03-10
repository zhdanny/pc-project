<template>
  <div class="b-content">
    <div>我是父组件</div>
    <child-comp></child-comp>
  </div>
</template>
<script>
import childComp from './child';

export default {
  'name': 'parentComp',
  data() {
    return {'parentMsg': '来自父组件的呵呵'};
  },
  'components': {childComp},
  mounted() {
    // 读取子组件数据，注意$children子组件的排序是不安全的
    console.log(this.$children[0].childMsg);
    // 来自子元素的呐喊
  }
};
</script>
