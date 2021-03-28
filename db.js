var mongoose = require("mongoose")

var url = process.env.DB_URI || 'mongodb+srv://chetan:6GCtONOVlYckmrz5@cluster0.9qwlf.mongodb.net/syook?retryWrites=true&w=majority'

const initDB = async () => {
  await mongoose.connect(url, { useNewUrlParser: true })
  console.log("DB connection successful")
}

module.exports = initDB
