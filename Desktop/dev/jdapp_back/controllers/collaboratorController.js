const express = require('express')
const collaborators = express.Router()
const mongoose = require('mongoose')
const Collaborators = require('../models/collaboratorSchema.js')

collaborators.get('/', (req,res)=>{
  Collaborators.find({}, (error, foundCollaborators)=>{
    res.json(foundCollaborators)
  })
})

collaborators.get('/:_id', (req,res)=>{
  Collaborators.findById(req.params._id, (error, foundCollaborator)=>{
    res.json(foundCollaborator)
  })
})

collaborators.delete('/:_id', (req,res)=>{
  Collaborators.findByIdAndRemove(req.params._id,(error, deletedCollaborator)=>{
    res.json(deletedCollaborator)
  })
})

collaborators.put('/:_id', (req,res)=>{
  Collaborators.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedCollaborator)=>{
    res.json(updatedCollaborator)
  })
})

collaborators.post('/', (req,res)=>{
  Collaborators.create(req.body, (error, createdCollaborator)=>{
    res.json(createdCollaborator)
  })
})
module.exports = collaborators
