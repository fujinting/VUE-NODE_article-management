import Vue from 'vue'
import VueRouter from 'vue-router'



// 文章
import ArticleCreate from "../views/ArticleCreate.vue"          // eslint-disable-line no-unused-vars
import ArticleList from "../views/ArticleList.vue"              // eslint-disable-line no-unused-vars
import ArticleEdit from "../views/ArticleEdit.vue"          // eslint-disable-line no-unused-vars


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    redirect:'/articles/index'
  },
  {
      path:'/articles/create',
      name:'article-create',
      component: ArticleCreate
  },
  {
    path:'/articles/index',
    name:'article-list',
    component: ArticleList
},
{
    path:'/articles/:id/edit',
    name:'article-edit',
    component: ArticleEdit
}

]

const router = new VueRouter({
  routes
})

export default router
