<template>
    <div>
        <canvas width="500px" height="300px" ref="cars" id="canvas"
        style="border: 1px solid #ededed;">不支持canvas</canvas>
    </div>
</template>
<script>
export default {
  'name': 'canvas1',
  data() {
    return {};
  },
  'methods': {
    createCanvas() {
      this.$refs.cars.getConText('2d');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
