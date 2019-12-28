<template>
    <div class="main">
        <calendar></calendar>
    </div>
</template>

<script>
import calendar from './calendar/index';
import zInput from '../components/z-input';
export default {
  'name': 'uapp',
  'components': {
    calendar,
    zInput
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main{
    // margin: 20px auto;
    text-align: center;
    width: 1200px;
    .input-test{
      height: 30px;
      line-height: 30px;
      border: 1px solid #dedede;
    }
}
</style>
