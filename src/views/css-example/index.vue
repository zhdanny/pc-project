<template>
  <div class="main">
    <el-row>
      <el-col :span="4"><span class="title">三角形 - 正三角</span></el-col>
      <el-col :span="12"><div class="z-triangle"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span class="title">三角形 - 倒三角</span></el-col>
      <el-col :span="12"><div class="d-triangle"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><span class="title">虚线</span></el-col>
      <el-col :span="12"><div class="d-dash">把酒祝东风，且共从容。垂杨紫陌洛城东。总是当时携手处，游遍芳丛。
聚散苦匆匆，此恨无穷。今年花胜去年红。可惜明年花更好，知与谁同。</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">文字超出省略号</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">单行文字超出省略号</div></el-col>
      <el-col :span="12"><div class="singleEllipsis">花似伊。柳似伊。花柳青春人别离。低头双泪垂。 长江东。长江西。两岸鸳鸯两处飞。相逢知几时。</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">多行文字超出省略号</div></el-col>
      <el-col :span="12"><div class="moreEllipsis">
        庭院深深深几许？杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。
        雨横风狂三月暮，门掩黄昏，无计留春住。泪眼问花花不语，乱红飞过秋千去。
        庭院深深深几许。萧瑟寒烟，梧桐协细雨。楼前芳草自凝绿，行人更在天涯处。
        远山漠漠不见树。花落潇湘，寂寞终黄土。皆道留春春不住，烂柯归来秋已暮。
        莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
料峭春风吹酒醒，微冷。山头斜照却相迎，回首向来萧瑟处，归去，也无风雨也无晴。
        庭院深深深几许？杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。
        雨横风狂三月暮，门掩黄昏，无计留春住。泪眼问花花不语，乱红飞过秋千去。
        庭院深深深几许。萧瑟寒烟，梧桐协细雨。楼前芳草自凝绿，行人更在天涯处。
        远山漠漠不见树。花落潇湘，寂寞终黄土。皆道留春春不住，烂柯归来秋已暮。
    </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">滚动条</div></el-col>
      <el-col :span="12"><div class="scroll-container">
        莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
料峭春风吹酒醒，微冷。山头斜照却相迎，回首向来萧瑟处，归去，也无风雨也无晴。
        庭院深深深几许？杨柳堆烟，帘幕无重数。玉勒雕鞍游冶处，楼高不见章台路。
        雨横风狂三月暮，门掩黄昏，无计留春住。泪眼问花花不语，乱红飞过秋千去。
        庭院深深深几许。萧瑟寒烟，梧桐协细雨。楼前芳草自凝绿，行人更在天涯处。
        远山漠漠不见树。花落潇湘，寂寞终黄土。皆道留春春不住，烂柯归来秋已暮。
    </div></el-col>
    </el-row>
    
    <el-row>
      <el-col :span="4"><div class="title">卡券效果</div></el-col>
      <el-col :span="12">
        <div class='hollow-one-circle'>
          <div class='coupon-content'>
            <div class='coupon-value'>
              <div class='value'>
                <span>200</span>
                <span class='unit'>元</span>
              </div>
            </div>
            <div class='coupon-info'>
              <div class='name'>新人满减券</div>
              <div class='tip'>满800元可用</div>
              <div class='date'>有效期至2020.06.30</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">阴影</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">常见阴影</div></el-col>
      <el-col :span="12"><div class="shadow-content">
        <div class="shadow1 shadow">无偏移投影</div>
        <div class="shadow2 shadow">下侧投影</div>
        <div class="shadow3 shadow">右侧投影</div>
        <div class="shadow4 shadow">双侧投影</div>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">不规则形状阴影</div></el-col>
      <el-col :span="12"><div class="shadow-content">
        <!-- <div class="shadow-dotted shadow-sq">虚线投影</div> -->
        <div class="shadow-triangle shadow-sq"></div>
        <div class="circle-square shadow-sq"></div>
        <div class="tip shadow-sq"></div>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="title">时间轴</div></el-col>
      <el-col :span="16">
        <div class="timeline-content">
          <div v-for='(item, index) in timeLine' :key='index' class="time-line">
            <div :class="`state-${item.state} state-icon`"></div>
            <div class="timeline-title">{{item.title}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  'name': 'cssExample',
  data(){
    return {
      timeLine: [{
        title: '节点：提交审核',
        state: '1',
      },{
        title: '节点：审核失败-提交资料有误，请重新上传',
        state: '2',
      },{
        title: '节点：再次提交审核',
        state: '1',
      },{
        title: '节点：审核通过-同意，已批',
        state: '3',
      }]
    }
  }
};
</script>

<style lang="scss">
.el-row {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
<style lang="scss" scoped>
.main{
  // padding: 40px;
  text-align: left;
}

.title{
  font-size:14px;
  color: #666;

}
/** 正三角 */
.z-triangle{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 40px 25px;
  border-color: transparent transparent rgb(245, 129, 127) transparent;
}

/** 倒三角 */
.d-triangle{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 25px 0 25px;
  border-color:  rgb(245, 129, 127) transparent transparent transparent;
}

/** 虚线 */
.d-dash{
  padding: 10px;
  border: 1px dashed transparent;
  background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
}

/** 单行文本省略号 */
.singleEllipsis{
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/** 多行文本省略号 */
.moreEllipsis {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
}

/** 滚动条 */
.scroll-container {
 height: 50px;
 border: 1px solid #ddd;
 padding: 15px;
 overflow: auto;
 .row {
   margin: 0;
   line-height: 1.5;
 }

 &::-webkit-scrollbar {
   width: 8px;
   background: white;
 }
 &::-webkit-scrollbar-corner, /* 滚动条角落 */
 &::-webkit-scrollbar-thumb,
 &::-webkit-scrollbar-track {
   border-radius: 4px;
 }
 &::-webkit-scrollbar-corner,
 &::-webkit-scrollbar-track {
   /* 滚动条轨道 */
   background-color: rgba(180, 160, 120, 0.1);
   box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
 }
 &::-webkit-scrollbar-thumb {
   /* 滚动条手柄 */
   background-color: #EE7D37;
 }
}

/** 卡券效果 */
.hollow-one-circle{
  margin-left: 200px;
  height: 100px;
  padding: 22px 15px 22Px 28px;
  width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background: #FFFFFF;
  border-radius: 4px;
  // background: radial-gradient(circle at right bottom, transparent 12px, #ffffff 0) top right / 51% 100px no-repeat,
  // radial-gradient(circle at left bottom, transparent 12px, #ffffff 0) top left / 51% 100px no-repeat,
  // radial-gradient(circle at right top, transparent 12px, #ffffff 0) bottom right / 51% 100px no-repeat,
  // radial-gradient(circle at left top, transparent 12px, #ffffff 0) bottom left / 51% 100px no-repeat;
  // filter: drop-shadow(0px 4px 20px rgba(107,107,107,0.12));

  background: radial-gradient(circle at right bottom, transparent 10px, #ffffff 0) top right /50% 51px no-repeat,
    radial-gradient(circle at left bottom, transparent 10px, #ffffff 0) top left / 50% 51px no-repeat,
    radial-gradient(circle at right top, transparent 10px, #ffffff 0) bottom right / 50% 51px no-repeat,
    radial-gradient(circle at left top, transparent 10px, #ffffff 0) bottom left / 50% 51px no-repeat;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));
   .coupon-content {
    display: flex;
    flex-direction: row;
  }

  .coupon-value {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    // margin-right: 80px;
    width: 100px;
    font-family: PingFangSC-Semibold;
    font-size: 35px;
    color: #FA5856;
    letter-spacing: 0;
    line-height: 40px;

    .unit {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FA5856;
      letter-spacing: 0;
      text-align: center;
      // margin-left: 4px;
    }

  }


  .coupon-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .name {
      margin-bottom: 10px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      line-height: 16px;
    }
    .tip {
      margin-bottom: 6px;
    }
    .date, .tip {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      line-height: 12px;
    }
  }
}

/** 阴影 */
.shadow-content{
  display: flex;
  align-items: center;
  .shadow { 
    width: 100px;
    height: 50px;
    background: #EE7D37;
    margin: 10px 20px;
    line-height: 50px;
    text-align: center;
  }
  // 无偏移投影
  .shadow1 {
    box-shadow: 0 0 12px rgba(238, 125, 55, 0.8);
  }
  // 下侧投影
  .shadow2 {
    box-shadow: 0px 6px 12px -4px rgba(238, 125, 55, 0.8);
  }
  // 右侧投影
  .shadow3 {
    box-shadow: 6px 6px 12px -5px rgba(238, 125, 55, 0.8);
  }
  // 双侧投影
  .shadow4 {
    box-shadow: 6px 0 12px -5px rgba(238, 125, 55, 0.8), -6px 0 12px -5px rgba(238, 125, 55, 0.8);
  }
  // 菜单投影
  .shadow5 {
    box-shadow: 0 3px 12px rgba(238, 125, 55, 0.8);
  }
  // 投影边框
  .shadow6 {
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    line-height: 50px;
    box-shadow: 0 0 0 1px rgba(238, 125, 55, 0.8);
  }

  .shadow-sq{
    margin: 10px;
    text-align: center;
  }
  // 虚线阴影
  .shadow-dotted{
    width:100px;
    height:50px;
    border: 4px dotted #EE7D37;
    filter: drop-shadow(2px 2px 2px rgba(238, 125, 55,.9));
  }

  // 三角形阴影
  .shadow-triangle{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50px 50px 50px;
    border-color: transparent transparent rgb(245, 129, 127) transparent;
    filter:drop-shadow(10px 0px 10px  rgba(238, 125, 55,0.5));
    margin-right: 50px;
    margin-left: 100px;
  }

  // 右缺圆角阴影
  .circle-square{
    width:100px;
    height:50px;
    line-height: 50px;
    background: radial-gradient(circle at bottom right, transparent 20px, rgb(245, 129, 127) 15px);
    filter: drop-shadow(2px 2px 2px rgba(238, 132, 66, 0.9));
    margin-right: 50px;
  }

  // 信息窗口
  .tip {
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(245, 129, 127);
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    filter: drop-shadow(0px 2px 4px rgba(245, 129, 127, 0.9));
    &::before {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #fff transparent;
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 2;
    }
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent rgb(245, 129, 127) transparent;
      position: absolute;
      top: -11px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
    }
  }
}

/** 时间轴 */
.timeline-content{
  display: flex;
  .time-line{
    padding: 10px 10px 10px 20px;
    position: relative;
    &::before{
      content: '';
      height: 1px;
      width: calc(100% - 34px);
      background: #EBEBEB;
      position: absolute;
      left: 24px;
      top: 0;
    }
  }
  .state-icon{
    width: 20px;
    height: 20px;
    position: absolute;
    top: -12px;
    left: 0;
  }
  .state-1{
    background: url('https://static.daojia.com/assets/project/tosimple-pic/fen-zu-7-copy-6bei-fen_1589266208621.png') no-repeat;
    background-size: cover;
  }
  .state-2{
    background: url('https://static.daojia.com/assets/project/tosimple-pic/12_1589266226040.png') no-repeat;
    background-size: cover;
  }
  .state-3{
    background: url('https://static.daojia.com/assets/project/tosimple-pic/fen-zu-7-copy-3_1589266140087.png') no-repeat;
    background-size: cover;
  }
}
</style>
