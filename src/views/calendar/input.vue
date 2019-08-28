<template>
<div class="e-input">
    <el-input
    placeholder="请选择日期"
    prefix-icon="el-icon-date"
    clearable
    @clear="clear"
    v-model="value">
    </el-input>
</div>
</template>
<script>
export default {
  'name': 'input',
  'props': ['value']
};
</script>
<style lang="scss" scoped>
.e-input{
    width: 300px;
}
</style>
