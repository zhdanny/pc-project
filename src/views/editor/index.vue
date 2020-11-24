<template>
  <div class="editor">
    <div id="monaco">
    </div>
    <el-button @click="save" class="editor-save">获取输入的内容</el-button>
  </div>
  
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';
import 'monaco-editor/esm/vs/editor/contrib/folding/folding.js'

const str =  `
CREATE TABLE dbo.EmployeePhoto
(
    EmployeeId INT NOT NULL PRIMARY KEY,
    Photo VARBINARY(MAX) FILESTREAM NULL,
    MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL
                    UNIQUE DEFAULT NEWID()
);
`
export default {
  name: 'editor',
  components: {
  },
  data(){
    return {
      monacoInstance: null,
      value: str
    }
  },
  created(){

  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      this.monacoInstance = monaco.editor.create(document.getElementById("monaco"),{
        value: this.value,
        language:"sql",
        fontSize: '14',
        foldingStrategy: 'indentation',
        folding: true,
        overviewRulerBorder: true, // 不要滚动条的边框
        autoClosingBrackets: true,
        automaticLayout: true, // 自适应布局
        scrollBeyondLastLine: false, // 取消代码后面一大段空白
        tabSize: 2, // tab 缩进长度
      })
    },
    save(){
      let value = this.monacoInstance.getValue()
      console.log(value)
      alert(value)
    },
  },
  destroyed(){
    this.monacoInstance.dispose();//使用完成销毁实例
  }
}
</script>

<style lang="scss" scoped>
.editor{
  text-align: left;
  .editor-save{
    margin-top: 20px;
  }
}
#monaco{
  height: 500px;
  width: 800px;
  text-align: left;
  padding: 10px 0;
  border: 1px solid #A78E44;
  border-radius: 4px;

}
</style>