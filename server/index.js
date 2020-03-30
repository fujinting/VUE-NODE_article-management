const express=require('express')    //引用express框架

const app=express()                 //实例化app，以express为框架

app.use(require('cors')())          //允许跨域，允许不同端口的来访问

app.use(express.json())             //让express识别客户端提交过来的json

const mongoose=require('mongoose')      //引用数据库

mongoose.connect('mongodb://localhost:27017/article-management',{          //连接mongodb，并创建article-management数据库
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true
})

const Article=mongoose.model('Article',new mongoose.Schema({                //数据操作(增删改查)模型，这里创建的是文章管理模型
    title:{type:String},                                                    //把数据表'Article'连同表头全都创建出来了
    body:{type:String}
}))


app.get('/',async (req,res)=>{
    res.send('index')
})


//提交文章
app.post('/api/articles',async(req,res)=>{                   //前端ArticleCreate:提交文章和标题，前端用post提交
    const article=await Article.create(req.body)             //使用了上面创建好的模型，将提交的信息创建出数据库
    res.send(article)   //可以让前端观察提交了的数据
})                                                          //上下post虽然公用一个地址，但是请求方式不同，接口不同

//得到全部文章
app.get('/api/articles',async(req,res)=>{                   //前端ArticleList:得到文章，前端用get请求
    const articles=await Article.find()                     //使用了上面创建好的模型，将提交的信息创建出数据库
    res.send(articles)
})

// 删除文章
app.delete('/api/articles/:id',async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id)          //req.params.id：客户端请求url参数的id
    res.send({
        status:true                                          //状态为true，返回给前端
    })
})

// 文章编辑详情
app.get('/api/articles/:id',async(req,res)=>{
   const article = await Article.findById(req.params.id)
    res.send(article)
})

//修改文章
app.put('/api/articles/:id',async(req,res)=>{
    const article = await Article.findByIdAndUpdate(req.params.id,req.body)
     res.send(article)
 }) 


app.listen(3000,()=>{
    console.log('http://localhost:3000');
    
})