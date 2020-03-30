<template>
  <el-form ref="form" :model="article" @submit.native.prevent="saveArticle" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
   
    
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    saveArticle() {
        this.$http.post('/articles',this.article).then(res=>{       // eslint-disable-line no-unused-vars
            // console.log(res.data)                               //res是响应对象，res.data是响应数据

             this.$message({
                message: '文章创建成功！',
                type: 'success'
            });
            this.$router.push('/articles/index')
        })
     
    }
  }
};
</script>