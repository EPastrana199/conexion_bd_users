const conexion_bd = require("../conexion_bd/conexion_bd");
const controles = {};

controles.index = (req, res) => {
  res.writeHead(301, { Location: "https://google.com/" });
  res.end();
};

controles.users = async (req, res) => {
  const body = req.body;

  const datos = {
    nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    fecha_de_nacimiento,
    email,
    telefono,
  } = body;
  
  console.log("***************************************");
  console.log(body);
  const respuesta = await conexion_bd.crear(datos);
  console.log(respuesta);
  res.send(body);
  console.log("***************************************");
};

module.exports = controles;
