<template>
    <div>
      <div>鼠标滑过划线</div>
      <canvas width="500px" height="300px" id="canvas1" ref='canvas1' style="border: 1px solid #ededed;">不支持canvas</canvas>
      <div>鼠标按下划线</div>
      <canvas width="500px" height="300px" id="canvas2" ref='canvas2' style="border: 1px solid #ededed;">不支持canvas</canvas>
    </div>
</template>
<script>
export default {
  'name': 'CanvasContent',
  data() {
    return {
    };
  },
  mounted(){
    // this.createCanvas()
    this.createCanvasMouse()
    this.createCanvasMove()
  },
  'methods': {
    // 画线
    createCanvas() {
      let canvas = this.$refs.canvas1
      let ctx = canvas.getContext('2d')
      //设置线宽
      ctx.lineWidth=2;
      //设置线的颜色
      ctx.strokeStyle="#B0A4E3";
      
      //将画笔移动到00点
      ctx.moveTo(0,0);
      //画线到800，600的坐标
      ctx.lineTo(100,0);
      ctx.lineTo(100,100);
      ctx.lineTo(0,100);
      ctx.lineTo(0,0);
      
      //执行画线
      ctx.stroke();
    },
    // 鼠标滑过划线
    createCanvasMouse() {
      let canvas = this.$refs.canvas1
      let ctx = canvas.getContext('2d')
      //设置线宽
      ctx.lineWidth=2;
      //设置线的颜色
      ctx.strokeStyle="#B0A4E3";

      canvas.onmousemove = function(e){
        // console.log('e', e);
        // ctx.lineTo(e.clientX-left,e.clientY);
        ctx.lineTo(e.offsetX,e.offsetY);
        //执行画线
        ctx.stroke();
      }
      
    },
    createCanvasMove(){
      let that = this
      let canvas = this.$refs.canvas2
      let ctx = canvas.getContext('2d')
      //设置线宽
      ctx.lineWidth=2
      //设置线的颜色
      ctx.strokeStyle="#B0A4E3"
      canvas.onmousedown = function (e){
        ctx.moveTo(e.offsetX, e.offsetY);
        canvas.addEventListener("mousemove", mouseMove, true);
      }
      canvas.onmouseup = function (e){
        canvas.removeEventListener('mousemove', mouseMove, true)
      }
      /**
       * removeEventListener 移除不了匿名函数，只能移除外部函数
      */
      function mouseMove(e){
        ctx.lineTo(e.offsetX,e.offsetY);
        //执行画线
        ctx.stroke();
      }
    },

  }
};
</script>

<style lang="scss" scoped>

</style>
