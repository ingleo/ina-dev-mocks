//carga de archivo de configuración
require('./config/config')

const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const routerTst = express.Router()

//inicio de aplicación
const app = express()

//application/json
app.use(bodyParser.json())

app.use(morgan('dev'));

app.use(express.static('src/static'))
app.set('view engine', 'pug')
app.set('views', './src/views')


var routes_tst = require('./routes/routes_tst')
app.use('/', routes_tst)

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});