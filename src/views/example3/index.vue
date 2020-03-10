<template>
  <div>
    <com-a></com-a>
  </div>
</template>
<script>
import ComA from './a';
// ComA.vue
export default {
  'name': 'home',
  'components': {ComA},
  provide() {
    return {
      'a': 'Hello',
      'show': val => !val
    };
  }
};
</script>
