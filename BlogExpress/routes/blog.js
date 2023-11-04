const express = require("express")
const routes = express.Router()
const path = require("path")
const blogs = require("../data/blogs")


routes.get("/",(req,res)=>{
    //res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render('home');
})

routes.get("/blog",(req,res)=>{
    // blogs.forEach(element => {
    //     console.log(element.title)
    // })
    //res.sendFile(path.join(__dirname,"../templates/bloghome.html"))
    res.render('blogHome',{
        blogs: blogs
    });
})

routes.get("/blogpost/:slug",(req,res)=>{
    Blog = blogs.filter((e)=>{
        return e.slug = req.params.slug
    })
    //res.sendFile(path.join(__dirname,"../templates/blogpage.html"))
    res.render('blogPage',{
        title: Blog[0].title,
        content: Blog[0].content
    })
})

module.exports = routes