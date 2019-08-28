<template>
  <div id="calendar">
    <div class="e-input">
      <el-input
      placeholder="请选择日期"
      prefix-icon="el-icon-date"
      clearable
      @clear="clear"
      @click.native="selectDate"
      v-model="val">
      </el-input>
    </div>
    <div class="calendar-content" v-show="calendarShow" >
        <div class="year-btn">
            <div class="date-content">
              <span
              class="el-icon-d-arrow-left icon-select icon-left"
              @click="yearLeft"
              ></span>
              <span class="el-icon-arrow-left icon-select icon-left"
              @click="monthLeft" v-show="dayShow"></span>
              <span class="year-text" v-if="yearShow">{{yearArr[0].name}} 年 - {{yearArr[yearArr.length-1].name}} 年</span>
              <span class="year-text" @click="yearSelect" v-else>{{year}} 年</span>
              <span class="year-text" @click="monthSelect" v-show="dayShow">{{month}} 月</span>
              <span class="el-icon-d-arrow-right icon-select icon-right"
              @click="yearRight"
              ></span>
              <span class="el-icon-arrow-right icon-select icon-right"
              @click="monthRight"
              v-show="dayShow"></span>
            </div>
            <div v-show="yearShow" class="year-content">
                <span v-for="(item, index) in yearArr" :key="index"
                :class="item.select? 'select-year': ''"
                class="year-li"
                @click="yearConfirm(item.name, item.value)">{{item.name}}</span>
            </div>
            <div v-show="monthShow" class="month-content">
                <span v-for="(item, index) in monthArr" :key="index"
                :class="item.select? 'select-month': ''"
                class="month-li"
                @click="yearConfirm(item.name, item.value)">{{item.name}}</span>
            </div>
            <div v-show="dayShow" class="day-content">
                <span v-for="(item, index) in dayArr" :key="index"
                :class="item.select? 'select-day': ''"
                class="day-li"
                @click="dayConfirm(item.name, item.value)">{{item.name}}</span>
            </div>
        </div>
    </div>
  </div>

</template>
<script>
/* eslint-disable no-magic-numbers*/
/* eslint-disable no-nested-ternary*/
/* eslint-disable no-plusplus*/
/* eslint complexity: ["error", 12]*/
/* eslint max-len: ["error", { "code": 300 }]*/
/* eslint-disable prefer-destructuring*/
const m = 1;

export default{
  'name': 'calendar',
  data() {
    return {
      'calendarShow': false,
      'year': new Date().getFullYear(),
      'yearShow': false,
      'yearArr': [],
      'month': new Date().getMonth() + m,
      'day': new Date().getDate(),
      // 'divName': '',
      'dayShow': true,
      'dayArr': [],
      'val': '',
      'monthShow': false,
      'monthArr': []
    };
  },
  'watch': {
    calendarShow() {
      if (!this.calendarShow) {
        this.clear();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log('document.querySelector(body)', document.querySelector('body'));
      document.querySelector('body').addEventListener('click', this.blurEvent);
    });
  },
  'methods': {
    selectDate() {
      this.calendarShow = !this.calendarShow;
      this.dayShow = true;
      if (this.val) {
        const a = this.val.split('-');
        this.day = Number(a[2]);
        this.month = Number(a[1]);
        this.year = Number(a[0]);
      }
      this.daySelect();
    },
    yearSelect() {
      this.dayShow = false;
      this.monthShow = false;
      this.yearShow = true;
      if (this.yearShow) {
        const arr1 = [];
        const arr2 = [];
        let a = this.year - 0;
        let b = this.year - 0;
        const minYear = 0;
        let len1 = 5;
        let len2 = 6;
        if (this.year - minYear <= 6) {
          len1 = this.year - minYear;
          len2 = 11 - len1;
        }
        for (let i = 0; i <= len2; i++) {
          arr1.push({
            'select': a === this.year,
            'name': a,
            'value': 'year'
          });
          a += 1;
        }
        for (let i = 0; i < len1; i++) {
          b -= 1;
          arr2.push({
            'name': b,
            'select': b === this.year,
            'value': 'year'
          });
        }
        arr2.reverse();
        this.yearArr = [
          ...arr2,
          ...arr1
        ];
      }
    },
    yearConfirm(name, value) {
      this[value] = name;
      if (value === 'month') {
        // 选择月，清空日期
        this.day = '';
        this.dayShow = true;
        this.daySelect();
      } else {
        this.month = '';
        this.yearShow = false;
        this.monthSelect();
      }
    },
    monthSelect() {
      this.dayShow = false;
      this.yearShow = false;
      this.monthShow = true;
      if (this.monthShow) {
        const a = 12;
        this.monthArr = [];
        for (let i = 1; i <= a; i++) {
          this.monthArr.push({
            'select': i === this.month,
            'name': i,
            'value': 'month'
          });
        }
      }
    },
    daySelect() {
      this.yearShow = false;
      this.monthShow = false;

      /*
       * 最大日期，1，3，5，7，8，10，12是31天
       * 4，6，9，11是30天
       * 2月 闰年是29天，平年是28天
       * 普通年能被4整除且不能被100整除的为闰年
       * 世纪年能被400整除的是闰年
       */
      if (this.dayShow) {
        this.dayArr = [];
        const largeMonth = [
          1,
          3,
          5,
          7,
          8,
          10,
          12
        ];
        const smallMonth = [
          4,
          6,
          9,
          11
        ];
        const flag = (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
        const maxDay = largeMonth.indexOf(this.month) > -1 ? 31 : smallMonth.indexOf(this.month) > -1 ? 30 : flag ? 29 : 28;
        for (let i = 1; i <= maxDay; i++) {
          this.dayArr.push({
            'select': i === this.day,
            'name': i,
            'value': 'day'
          });
        }
      }
    },
    dayConfirm(name, value) {
      this[value] = name;
      this.calendarShow = false;
      this.val = `${this.year}-${this.month}-${this.day}`;
    },
    clear() {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth() + m;
      this.day = new Date().getDate();
    },
    blurEvent(event) {
      console.log('22', event.path);
      let flag = false;
      event.path.forEach(element => {
        console.log(element.id);
        if (element.id === 'calendar') {
          flag = flag || true;
        }
      });
      if (!flag) {
        this.calendarShow = false;
      }

      /*
       * SetTimeout(() => {
       *   this.calendarShow = false;
       * }, 200);
       */
    },
    yearLeft() {
      if (this.yearShow) {
        // 年份的上一页
        this.year = this.year - 12;
        if (this.year <= 100) {
          this.year = 2000;
        }
        this.yearSelect();
      } else {
        // 上一年
        this.year = this.year - 1;
      }
    },
    yearRight() {
      // 年份的下一页
      if (this.yearShow) {
        // 年份的下一页
        this.year = this.year + 12;
        this.yearSelect();
      } else {
        // 下一年
        this.year = this.year + 1;
      }
    },
    monthLeft() {
      // 上一月
      this.day = '';
      if (this.month === 1) {
        this.month = 12;
        this.year = this.year - 1;
      } else {
        this.month = this.month - 1;
      }
      this.daySelect();
    },
    monthRight() {
      // 下一月
      this.day = '';
      if (this.month === 12) {
        this.month = 1;
        this.year = this.year + 1;
      } else {
        this.month = this.month + 1;
      }
      this.daySelect();
    }

  },
  beforeDestroy() {
    document.querySelector('body').removeEventListener('click', this.blurEvent);
  }
};
</script>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
</style>
<style scoped lang="scss">

#calendar{
  width: 300px;
}
.e-input{
  width: 300px;
}
.calendar-content{
    color: #3a3838;
    font-size: 14px;
    width: 300px;
    // height: 300px;
    // padding: 10px;
    cursor: pointer;
}
.year-btn{
    padding: 5px 16px;
    border: 1px solid #ededed;
    border-radius: 4px;
    width: 300px;
    box-sizing: border-box;
    .icon-select{
      color: rgb(128, 130, 136);
      height: 30px;
      line-height: 30px;
    }
    .icon-left{
      float: left;
      margin-right: 10px;
    }
    .icon-right{
      float: right;
      margin-left: 10px;
    }
    .date-content{
      position: relative;

    }
}
.year-text{
    display: inline-block;
    // border-radius: 4px;
    // width: 80px;
    // height: 30px;
    line-height: 30px;
    text-align: center;
    // border: 1px solid #dedede;
    background: #fff;
}
.year-content, .month-content{
    // width:300px;
    // height: 300px;
    margin-top: 20px;
    text-align: left;
    // border: 1px solid #deeded;
    // border-radius: 4px;
    .year-li, .month-li{
        display: inline-block;
        vertical-align: middle;
        width: 68px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 5px 10px;
        &:hover{
            background: #ecf5ff;
            border-radius: 20px;
        }
    }
    .select-year, .select-month{
        background: #e1edfa;
        border-radius: 20px;
    }
}
.day-content{
  margin-top: 20px;
  text-align: left;
  // border: 1px solid #deeded;
  // border-radius: 4px;
  .day-li{
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin: 7px;
        &:hover{
            background: #ecf5ff;
            border-radius: 20px;
        }
    }
    .select-day{
        background: #e1edfa;
        border-radius: 20px;
    }
}
</style>
