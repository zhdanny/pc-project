<template>
    <div class="main">
        <calendar></calendar>
    </div>
</template>

<script>
import calendar from './calendar/index';
export default {
  'name': 'uapp',
  'components': {calendar},
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
}
</style>
