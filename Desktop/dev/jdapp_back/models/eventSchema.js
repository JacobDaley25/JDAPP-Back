const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title:String,
  day: String,
  date: String,
  time: String
})
const Event = mongoose.model('events', eventSchema)

module.exports = Event
