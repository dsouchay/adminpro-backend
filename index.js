const express = require('express');
require ('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');
const { route } = require('./routes/usuarios.routes');


// Creando servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del Body
app.use( express.json());


//Base de datos
dbConnection();


//Rutas

app.get('/', (req, res)=>{
  res.json({
    ok: true,
    msg:"Hola Mundo"
  })

});
// Rutas

app.use ('/api/usuarios', require('./routes/usuarios.routes'));

app.listen(process.env.PORT,  (err) => {
  if (err) {
      return console.error(err);
  }
  return console.log(`server is listening on ${process.env.PORT}`);
})

process.once('SIGUSR2', function () {
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, 'SIGINT');
});
