<template>
  <div>
    <div>我是父元素，我的num的值是：{{num}}</div>
    <a-comp :event="bus" :num='num'></a-comp>
    <c-comp :event="bus" :num='num'></c-comp>
    <b-comp :event="bus"></b-comp>
  </div>
</template>
<script>
import Vue from 'vue';
import aComp from './a.vue';
import bComp from './b.vue';
import cComp from './c.vue';

const bus = new Vue();
export default {
  'name': 'example',
  data() {
    return {
      bus,
      'num': 1
    };
  },
  'components': {
    aComp,
    bComp,
    cComp
  }
};
</script>
