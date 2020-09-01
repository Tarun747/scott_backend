const express = require('express')
const winston = require('winston')
const fs = require('fs')
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

require('./services/connections/MongoDbConnection')

if (!fs.existsSync(process.env.LOG_DIR)) {
  fs.mkdirSync(process.env.LOG_DIR)
}
winston.add(
  new winston.transports.File({
    filename: path.join(process.env.LOG_DIR, `process.log`),
    handleExceptions: true
  })
)
winston.add(new winston.transports.Console())
process.on('unhandledRejection', ex => {
  throw ex
})

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())
app.use(helmet())
app.use(compression())

app.use('/v1', require('./routes/v1/v1'))
app.use('/', require('./routes/v1/v1'))

app.use(require('./middlewares/errorMiddlewares').errorLogger)
app.use(require('./middlewares/errorMiddlewares').errorHandler)

const port = process.env.PORT
app.listen(port, () => {
  winston.info(`App is running on port ${port}`)
})
