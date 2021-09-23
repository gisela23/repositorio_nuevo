//se crean las nuevas rutas para la nueva tabla en este archivo

const express = require('express')
const enrutador = express.Router()

const db = require('../database')

//lista la tabla producto
enrutador.get('/producto', (req, res) => {
    db.query('select * from producto', (err,rows) =>{
        if(!err){
            res.json(rows);
        }else{
            res.json('error al traer los datos de la tabla producto')
        }
    });

})

//obtencion de un producto
enrutador.get('/producto/:codigo', async (req, res) => {
    //se obtiene el id del producto y lo lista en pantalla
    const id = req.params.codigo;

    await db.query('select * from producto where id_producto = ?', [id], (err, rows) => {

        if (err) {
            return console.log(`algo sucedio al realizar la consulta`)
        } else {
            res.json(rows)
        }

    })

});

//eliminar producto
enrutador.delete('/producto/:codigo', (req, res) => {

    var id = req.params.codigo; //se obtiene el codigo id del producto
    db.query('delete from producto where id_producto = ?', [id]); //segun el id se elimina 
    //y confirma en pantalla
    res.json("se elimino un producto");
});

//guardar producto
enrutador.post('/producto', (req, res) => {

    const nuevoProducto = req.body; //se obtiene el producto enviado en formato json

    db.query('insert into producto set ?', [nuevoProducto]) //se almacena/inserta en la tabla producto

    //confirma en pantalla
    res.json('se almaceno un nuevo producto en la base')
});

//actualizar producto
enrutador.put('/producto/:codigo', async (req, res) => {

    //primer paso; capturar codigo
    const id = req.params.codigo
    //2° paso; capturar body, (datos del producto)
    const productoActualizado = req.body;
    //3° paso: se actualiza el  producto segun el id
    await db.query('update producto set ? where id_producto = ?', [productoActualizado, id], (err, result) => {

        if (err) {
            return console.log('algo ocurrio.')
        } else {
            console.log('operacion triunfo')
            res.json('se actualizo el producto')
        }
        /*muetra en consola si la operacion falla, caso contrario; 
           muestra que la operacion fue exitosa en la consola y
           en el cliente
       */
    });


})

/*se exporta el enrutador 
al archivo index.js para que sea 
detectado por el servidor*/

module.exports = enrutador;


