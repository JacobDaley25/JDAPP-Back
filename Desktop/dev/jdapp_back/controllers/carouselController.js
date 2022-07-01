const express = require('express')
const carousel = express.Router()
const mongoose = require('mongoose')
const Carousel = require('../models/carouselSchema.js')

carousel.get('/', (req,res)=>{
  Carousel.find({}, (error,foundCarousels)=>{
    res.json(foundCarousels)
  })
})

carousel.get('/:id', (req,res)=>{
  Carousel.findById(req.params.id, (error, foundCarousel)=>{
    res.json(foundCarousel)
  })
})

carousel.delete('/:_id', (req,res)=>{
  Carousel.findByIdAndRemove(req.params._id,(error, deletedCarousel)=>{
    res.json(deletedCarousel)
  })
})

carousel.put('/:_id', (req,res)=>{
  Carousel.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedCarousel)=>{
    res.json(updatedCarousel)
  })
})

carousel.post('/', (req,res)=>{
  Carousel.create(req.body, (error, createdCarousel)=>{
    res.json(createdCarousel)
  })
})
module.exports = carousel
