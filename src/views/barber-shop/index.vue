<template>
    <div class="main">
        <div class="search">
            <el-input
                placeholder="请输入会员号"
                prefix-icon="el-icon-search"
                clearable
                v-model="params.phone">
            </el-input>
        </div>
        <div class="list">
            <el-table
            :data="tableData"
            class="list-table"
            size="medium"
            style="width: 100%;">
                <el-table-column
                prop="phone"
                label="会员号"
                width="280">
                </el-table-column>
                <el-table-column
                prop="name"
                label="会员姓名"
                width="280">
                </el-table-column>
                <el-table-column
                prop="money"
                label="剩余金额">
                </el-table-column>
                <el-table-column
                prop="createTime"
                label="创建时间">
                </el-table-column>
                <el-table-column
                label="操作">
                <div slot-scope="scope">
                    <el-button
                    type="text" @click="consume(scope.row.id)">
                        消费
                    </el-button>
                    <el-button
                    type="text" @click="charge(scope.row.id)">
                        充值
                    </el-button>
                    <el-button
                    type="text" @click="deleteFn(scope.row.id)">
                        删除
                    </el-button>
                </div>
                </el-table-column>
            </el-table>
            <div class="footer">
                <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="params.currentPage"
                :page-size="10"
                layout="prev, pager, next, jumper"
                :total="100">
                </el-pagination>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  'name': 'home',
  data() {
    return {
      'params': {
        'phone': '',
        'currentPage': 1,
        'pageSize': 10
      },
      'tableData': [
        {
          'phone': '18737319893',
          'name': '朱唤唤',
          'money': '200.00元',
          'createTime': '2019-10-10',
          'id': 1
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        },
        {
          'phone': '18604696263',
          'name': '夏广泽',
          'money': '400.00元',
          'createTime': '2019-10-10',
          'id': 2
        }
      ]
    };
  },
  'methods': {
    consume(id) {
    // 消费
      console.log(id);
      this.$prompt('请输入消费的金额', '消费', {
        'confirmButtonText': '确定消费',
        'cancelButtonText': '取消',
        'inputPattern': /d/,
        'inputErrorMessage': '输入的金额格式不正确'
      }).then(({value}) => {
        console.log('value', value);
      }).catch(() => {});
    },
    charge(id) {
      // 充钱
      console.log(id);
      this.$prompt('请输入充值的金额', '充值', {
        'confirmButtonText': '确定充值',
        'cancelButtonText': '取消',
        'inputPattern': /d/,
        'inputErrorMessage': '输入的金额格式不正确'
      }).then(({value}) => {
        console.log('value', value);
      }).catch(() => {});
    },
    deleteFn(id) {
      // 删除 - 假删除
      console.log(id);
      this.$confirm('确认删除该会员信息？')
        .then(() => {
          // 假删除
        }).catch(() => {});
    },
    handleCurrentChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.main{
    padding: 0 50px;
    margin-bottom: 50px
}
.search{
    padding: 20px 0;
    width: 400px;
}
.list{
    padding: 10px 15px;
    border: 1px solid #EBEEF5;
    min-height:400px;
    position: relative;
    .list-table{
        margin-bottom: 50px;
    }
    .footer{
        position:absolute;
        bottom: 10px;
        text-align: center;
        width: 100%;
    }
}
</style>
