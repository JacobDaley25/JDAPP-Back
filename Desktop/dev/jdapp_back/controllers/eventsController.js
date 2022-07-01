const express = require('express')
const events = express.Router()
const Events = require('../models/eventSchema.js')

events.get('/', (req,res)=>{
  Events.find({}, (error, foundEvents)=>{
    res.json(foundEvents)
  })
})

events.get('/:_id', (req,res)=>{
  Events.findById(req.params._id, (error, foundEvent)=> {
    res.json(foundEvent)
  })
})
events.delete('/:_id', (req,res)=> {
  Events.findByIdAndRemove(req.params._id, (error, deletedEvent)=>{
    res.json(deletedEvent)
  })
})
events.put('/:_id', (req,res)=>{
  Events.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedEvent)=> {
    res.json(updatedEvent)

  })
})
events.post('/', (req,res)=>{
  Events.create(req.body, (error, createdEvent)=>{
    res.json(createdEvent)
  })
})

module.exports = events
