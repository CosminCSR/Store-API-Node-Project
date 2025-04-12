const mongoose = require('mongoose')

//function to connect my app to MongoDB that is used in app.js
const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB