const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  date: String,
  image: String,
  image2:String,
  image3: String,
  image4:String,
  title: String,
  header: String,
  body: String,
  header2:String,
  body2: String,
  header3: String,
  body3: String,
  header4: String,
  body4: String,
  desc: String,
  author: String,
  tags:[]
})
const Article = mongoose.model('articles', articleSchema)

module.exports = Article
