const express= require('express')
const articles = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
//STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({
//     dest: 'uploads/',
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
//ROUTING
const Articles = require('../models/articleSchema.js')

articles.get('/', (req,res)=>{
  Articles.find({}, (error, foundArticles)=>{
    res.json(foundArticles)
  })
})


articles.get('/:_id', (req,res)=>{
  Articles.findById(req.params._id, (error, foundArticle)=>{
    res.json(foundArticle)
  })
})
articles.delete('/:_id', (req, res)=> {
  Articles.findByIdAndRemove(req.params._id, (error, deletedArticle)=>{
    res.json(deletedArticle)
  })
})
articles.put('/:_id', (req,res)=> {
  Articles.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedArticle)=> {
    res.json(updatedArticle)
  })
})

articles.post('/', (req,res)=> {
    Articles.create(req.body, (error, createdArticle)=> {
      res.json(createdArticle)
    })

})
module.exports = articles
