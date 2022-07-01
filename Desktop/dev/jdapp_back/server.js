const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')
const saltRounds = 10
const bodyParser = require('body-parser')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const dotenv = require('dotenv')
const corsOptions = require('./config/corsOptions.js')
const db = mongoose.connection
const PORT = process.env.PORT || 3001
const mongoURI = String(process.env.MONGODBURI)
const articlesController = require('./controllers/articlesController.js')
const sessionsController = require('./controllers/sessions_controller.js')
const carouselController = require('./controllers/carouselController.js')
const userController = require('./controllers/user_controller.js')
const eventController = require('./controllers/eventsController')
const collaboratorController = require('./controllers/collaboratorController.js')


//MIDDLEWARE
app.use(cors(corsOptions))
app.use(express.json())
app.use('/articles', articlesController)
app.use('/events', eventController)
app.use('/sessions', sessionsController)
app.use('/admin', userController)
app.use('/collaborators', collaboratorController)
app.use('/carousel', carouselController)

//ROUTES
app.listen(PORT, ()=> {
  console.log('listening...');
})

mongoose.connect(mongoURI)
mongoose.connection.once('open', ()=> {
  console.log('connected to mongod');
})
