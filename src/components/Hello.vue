<template>
  <div class="hello">
    <img src="../assets/logo.png" width="200">
    <ul>
      <li>
        <a
          href="http://confluence.daojia-inc.com/pages/viewpage.action?pageId=85299819"
          target="_blank"
        >VUE-PC模板说明文档</a>
      </li>
      <li>
       <a href="http://confluence.daojia-inc.com/display/techFE/dj-axios"
       target="_blank">dj-axios使用文档</a>
      </li>
      <li>
        <a
          href="http://element-cn.eleme.io/#/zh-CN/component/installation"
          target="_blank"
        >Element-ui使用文档</a>
      </li>
      <li>
        <a
          href="http://confluence.daojia-inc.com/pages/viewpage.action?pageId=82796794"
          target="_blank"
        >utils 工具函数方法</a>
      </li>
      <li>
        <a
          href="http://confluence.daojia-inc.com/pages/viewpage.action?pageId=79026978"
          target="_blank"
        >iconfont使用流程</a>
      </li>
    </ul>
    <el-button >element-ui 按钮</el-button>
  </div>
</template>

<script>
export default {
  'name': 'hello',
  data() {
    return {'msg': '欢迎使用vue-pc模板'};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
  margin: 10px;
  font-size:18px;
}

a {
  color: #42b983;
}
</style>
