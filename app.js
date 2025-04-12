require('express-async-errors')
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
require('dotenv').config()


//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/products">products route</a>')
})

app.use('/products', productsRouter)

//products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 4444

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Port ${port} works!`))
  } catch (error) {
    console.log(error)
  }
}

start()