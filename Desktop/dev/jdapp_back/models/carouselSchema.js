const mongoose = require('mongoose')

const carouselSchema = new mongoose.Schema({
  img: String,
  img2: String,
  img3: String
})

const Carousel = mongoose.model('carousel', carouselSchema)

module.exports = Carousel
