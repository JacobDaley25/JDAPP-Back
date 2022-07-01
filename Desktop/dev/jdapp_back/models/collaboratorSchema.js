const mongoose = require('mongoose')

const collaboratorSchema = new mongoose.Schema({
  profileImg: String,
  name: String,
  about: String
})

const Collaborator = mongoose.model('collaborators', collaboratorSchema)

module.exports = Collaborator
