const express = require('express')
const pah = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.create({
    defaultLayout: 'main',
    extends: '.hbs'
}).engine
)
app.set('view engine', '.hbs')

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

// Rutas
app.use(require('./routes/index'))

// Archivos esáticos
app.use('/public', express.static(path.join(__dirname, 'public')))

module.exports = app