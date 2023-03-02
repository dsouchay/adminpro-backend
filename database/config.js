const mongoose = require('mongoose');
require ('dotenv').config();



const dbConnection = async ()=> {
  try {
    main().catch(err => console.log(err));

    async function main() {
      await mongoose.connect(process.env.DB_CCN);
      console.log('BD online');

      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }

  } catch (error ){

    console.log(err);
    throw Error ('Error a la hora de iniciar la BD, ver logs');

  }

}

module.exports = {
  dbConnection
}




// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));