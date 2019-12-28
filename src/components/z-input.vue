<template>
  <div>
    <input type="text" @input="input" @blur="blur" :value='value'>
  </div>
</template>

<script>
export default {
  'name': 'zInput',
  data() {
    return {'value': ''};
  },
  'methods': {
    input(value) {
      console.log('input', value);
    },
    blur(value) {
      console.log('blur', value);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
