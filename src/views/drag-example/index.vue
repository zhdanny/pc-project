<template>
  <div style='display: flex;'>
    <div v-for="(item, index) in data" :key='index'  class="drag-content">
      <!-- <div>一级分类：{{item.title}}</div> -->
      <div class="drag-row">
        <!-- 二级分类： -->
        <draggable v-model="item.child" group="people" @start="drag=true" @end="drag=false">
          <div v-for="(val, i) in item.child" :key='i' class="row-li">
            {{val.title}}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  data(){
    return {
      data: [{
        "id": 1,
        "title": "入门阶段",
        "sort": 1,
        "image": "https://static.daojia.com/assets/project/tosimple-pic/tupian_1590135580406.png",
        "child": [{
          "id": 2,
          "title": "经典问题",
          "sort": 1
        }]
      },
      {
        "id": 3,
        "title": "大神阶段",
        "sort": 2,
        "image": "https://static.daojia.com/assets/project/tosimple-pic/tupian_1590135580406.png",
        "child": [{
            "id": 4,
            "title": "精英课程",
            "sort": 1
          },
          {
            "id": 5,
            "title": "实施课程",
            "sort": 2
          },
          {
            "id": 6,
            "title": "一月又一月",
            "sort": 3
          }
        ]
      }]
    }
  },
  components: {
    draggable,
  },  
}
</script>
<style lang="scss" scoped>
.drag-content{
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: left;
  margin-right: 10px;
  .drag-row{
    .row-li{
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      cursor: pointer;
    }
  }
}
</style>