<template>
<div>
  <header>
        <div class="left">
            <img src="../../assets/logo2.png" alt="logo" width="30px">
            <!-- <span>理发店系统后台</span> -->
        </div>
        <div class="middle">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#000"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
                <el-menu-item
                v-for="(item, index) in homeNav"
                :key="index"
                :index="item.url">
                    {{item.name}}
                </el-menu-item>
            </el-menu>
        </div>
        <div class="right" @click="addUserDialog = true">
            添加会员
        </div>
    </header>
    <el-dialog title="添加会员"
        @close="closeDialog"
        center
        :visible.sync="addUserDialog" width="500px">
          <el-form :model="form" :rules="rules" ref="form" label-width="120px" >
            <el-form-item label="会员号" prop="phone">
              <el-input v-model="form.phone" placeholder="请填写手机号" clearable></el-input>
            </el-form-item>
            <el-form-item label="会员姓名" prop="name">
              <el-input v-model="form.name" placeholder="请填写会员姓名" clearable></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addUserDialog = false">取 消</el-button>
            <el-button type="primary" @click="addUser">添 加</el-button>
          </div>
        </el-dialog>
</div>

</template>
<script>
const homeNav = [
  {
    'name': '首页',
    'url': '/'
  },
  {
    'name': '操作记录',
    'url': '/logs'
  }
];
export default {
  'name': 'headerNav',
  data() {
    return {
      homeNav,
      'addUserDialog': false,
      'form': {
        'phone': '',
        'name': ''
      },
      'rules': {
        'phone': [
          {
            'required': true,
            'message': '请输入会员手机号',
            'trigger': 'blur'
          },
          {
            'pattern': /^1\d{10}$/,
            'message': '请输入正确的手机号码',
            'trigger': 'blur'
          }
        ],
        'name': [
          {
            'required': true,
            'message': '请输入会员姓名',
            'trigger': 'blur'
          },
          {
            'max': 50,
            'message': '最多50个字哦~ ',
            'trigger': 'blur'
          }
        ]
      }
    };
  },
  'computed': {
    activeIndex() {
      return this.$route.path;
    }
  },
  'methods': {
    addUser() {
      // 添加会员按钮
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('form', this.form);
          this.addUserDialog = false;
        }
      });
    },
    closeDialog() {
      this.form = {
        'phone': '',
        'name': ''
      };
    }
  }
};
</script>
<style lang="scss" scoped>
header{
    background: #000;
    height: 60px;
    color: #fff;
    font-weight: 600px;
    font-size: 14px;
    .left{
        float: left;
        margin: 15px 100px 0 50px;
    }
    .middle{
        float: left;
        line-height: 60px;
        height: 60px;
        li{
            padding: 0 20px;
        }
        .li-active{
            font-weight: bold;
        }
    }
    .right{
        float: right;
        line-height: 60px;
        margin-right: 50px;
        font-weight: 800px;
        cursor: pointer;
    }
}
</style>
