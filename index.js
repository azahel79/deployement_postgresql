const express = require("express");
const app = express();
const {Sequelize} = require("sequelize");


app.set('port',process.env.PORT  || 4000);

app.use(express.json());
app.use(express.urlencoded({extended:true}));



const conectarDB = async()=>{

   try {
    const coneccion = new Sequelize({
        username: 'postgres',
        password: 'azahel',
        database: "test",
        port: '5432',
        dialect: "postgres"
        
    })
  
    await  coneccion.authenticate();
    console.log("conectado ala base de datos");
   } catch (error) {
      console.log(error);   
   }
}

conectarDB();



app.listen(app.get('port'),()=>{
    console.log('Server in port ' + app.get('port'));
})