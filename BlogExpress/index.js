const express = require("express")
const exphbs = require("express-handlebars");
const app = express()
const path = require("path")

const blogroutes = require("./routes/blog.js")
const blogJSON = require("./data/blogs.js")

//console.log(exphbs);
const handlebars = exphbs.create()

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")))
app.use(blogroutes)
//app.use(blogJSON)


app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})  