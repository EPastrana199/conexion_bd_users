const mysql = require("mysql");
const moment = require("moment");
const consulta_sql = require("./consultas");

const conexion = mysql.createConnection({
  host: "data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com",
  user: "testing",
  password: "Pruebas%ALI%2020",
  database: "testing_ali_fullstack",
});

// Funciones internas //

//CREA USUARIO EN LA TABLA 'users_test_Emanuel_Pastrana'.
const agregar_user = (agregar_cliente) => {
  return new Promise((resolve, reject) => {
    conexion.query(agregar_cliente, (error, rows, fields) => {
      if (error) {
        console.log("ERROR AL CREAR USER");
        console.log(error);
        return reject(false);
      }

      console.log("¡User CREADO!");
      return resolve(true);
    });
  });
};


// Funciones a exportar //
const crear = async (datos) => {
  try{

    const fueAgregadoWebhook = await agregar_user(consulta_sql.consulta.crear_usuario(datos));
  
  }catch(err){
    console.log("Error en (fn)CREAR");
    console.log(err);
  }
};

module.exports.crear = crear;
