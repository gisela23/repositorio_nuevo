const mysql = require('mysql')

const db = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'apidb',
    
});

//arranque a la conexion
db.connect(function(err){
   
    if(err){
        console.log(err)
        return;

    }else{
        console.log('conexion on')
    }
})

module.exports = db;