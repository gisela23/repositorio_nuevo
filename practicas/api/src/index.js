const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//obtengo funcionalidad de express, depositada en la constante server
const server = express()

//especificamos el formato que va manipular nuestro servidor, es decir; la API.
server.use(express.json())

//permite comunicar cliente con servidor y viceversa.
server.use(cors())

//notifica en consola cada vez que se realice una petición HTTP (Put,delete,past,get)
server.use(morgan('dev'))

//seteamos puerto disponible en el sistema
server.set('port', process.env.PORT || 3002)
/*
poner rutas en funcionamiento
*/
server.use(require('./routes/cliente.route'))
server.use(require('./routes/producto.route'))

//arranque al servidor
server.listen ( server.get('port') )

console.log(`servidor corriendo en el puerto ${server.get('port')}`)
