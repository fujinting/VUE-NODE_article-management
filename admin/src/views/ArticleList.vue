<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="body" label="内容" width="720"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">

        <template slot-scope="scope">        <!--scope表示范围-->
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button> <!--scope.row表示当前这一行的数据对象-->
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button><!--scope.row._id,需要给函数传参，把本id传过去，在传到后台进行删除-->
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
      fetch(){
         this.$http.get("articles").then(res => {
         this.articles = res.data;                      //后台发送过来的数据赋给数组articles
         });
      },
      edit(id){                                         // eslint-disable-line no-unused-vars
            this.$router.push(`/articles/${id}/edit`)                               //跳转到某个页面        
      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(res=>{             // eslint-disable-line no-unused-vars
             this.$message({                                        //把参数放到url上了 
                message: '删除成功',                
                type: 'success'
            });
              this.fetch()
        })
      }
  },
  created() {
      this.fetch()
  }
};
</script>