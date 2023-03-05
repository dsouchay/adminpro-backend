/**
 * Ruta: /api/usuarios
 */

const { Router } = require('express');
const { check } = require('express-validator');

 const router = Router();
const { getUsuarios, crearUsuario } = require('../controllers/usuarios.controllers');


router.get('/', getUsuarios )
router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password es obligatorio').not().isEmpty(),
  check('email', 'Email no válido').isEmail(),

], crearUsuario )




 module.exports = router;
