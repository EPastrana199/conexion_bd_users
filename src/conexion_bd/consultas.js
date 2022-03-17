const consulta = {};

consulta.crear_usuario = (datos) => {
  return `INSERT INTO users_test_Emanuel_Pastrana 
      (
        nombre,
        segundo_nombre,
        apellido_paterno,
        apellido_materno,
        fecha_de_nacimiento,
        email,
        telefono
      ) VALUES
      (
        '${datos.nombre}',
        '${datos.segundo_nombre}',
        '${datos.apellido_paterno}',
        '${datos.apellido_materno}', 
        '${datos.fecha_de_nacimiento}', 
        '${datos.email}', 
        '${datos.telefono}'
      )`;
};


module.exports.consulta = consulta;
