
const { response } = require('express');
const Usuario = require('../models/usuarios.model');

const getUsuarios = async (req, res) => {

  const usuario = await Usuario.find({}, "nombre password rol google");
  res.json({
    ok: true,
    msg: 'Get Usuario',
    usuario
  });
}
const crearUsuario = async (req, res = response) => {

  const { nombre, password, email } = req.body || {};
  try {

    const exiteEmail = await Usuario.findOne({ email });

    if (exiteEmail) {
      return res.status(400).json({
        ok: false,
        msg: ' El correo ya está registrado'
      })

    }



    const usuario = new Usuario(req.body);
    await usuario.save();

    res.json({
      ok: true,
      usuario
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: ' Error inesperado,... revisar logs'
    })

  }
}




module.exports = { getUsuarios, crearUsuario }

