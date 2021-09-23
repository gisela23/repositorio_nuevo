const express = require('express')
const enrutador = express.Router()

const db = require('../database')

//lista la tabla cliente
enrutador.get('/clientes', (req, res) => {
    db.query('select * from cliente', (err,rows) =>{
        if(!err){
            res.json(rows);
        }else{
            res.json('error al traer los datos de la tabla cliente')
        }
    });

})



//obtencion de un cliente
enrutador.get('/clientes/:codigo', async (req,res) => {
    //realizamos consulta a la BS, es decir una query.
   // res.json('se muestra ruta a traves del metodo get');
   //capturamos parametro 
   const id = req.params.codigo;
    
    await db.query('select * from cliente where id_cliente = ?',[id], (err,rows) => {
        

        /*
            Entregamos como respuestas 
            los datos del cliente 
            
            en formato json.
        */
       if(err){
          return console.log(`algo sucedio al realizar la consulta`)
       }else{
          res.json(rows)
       }
      
    })

});

//eliminacion de cliente
enrutador.delete('/clientes/:codigo', (req,res) => {
    
    var id = req.params.codigo;
    db.query('delete from cliente where id_cliente = ?', [id]);
    res.json("se elimina un cliente");
});

//guardar cliente
enrutador.post('/clientes', (req,res) =>{

    const unCliente = req.body; //se obtiene el cliente desde insomnia en formato json

    db.query('insert into cliente set ?', [unCliente])

    res.json('se almaceno un cliente en la base')
});

//actualizar cliente
enrutador.put('/clientes/:codigo', async (req,res)=> {
    
    //primer paso; capturar codigo
    const id = req.params.codigo
    //2° paso; capturar body, (datos del cliente)
    const clienteModificado = req.body;

    await db.query('update cliente set ? where id_cliente = ?',[clienteModificado,id], (err,result) => {

        if(err){
           return console.log('ocurrio algo.')
        }else{
            console.log('operacion triunfo')
            res.json([0])
        }
    });
    //res.json('actualizar cliente');

})

module.exports = enrutador;