const mysql = require ('mysql2');

// crea una conexion
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'boletin_digital'
    });

    //verificar la conexion
    connection.connect ((err) => {
        if (err){
            console.error('Error de conexion a la base de datos', err.stack)
            return;
        }
        console.log ('Conectado con exito a la base de datos' + connection.threadId);
    });
    module.exports = connection;