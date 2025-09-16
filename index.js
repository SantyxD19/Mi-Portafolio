const express = require("express");  //improtamos express
const app = express();   //creamos una aplicacion express
const PORT = 3000;       //Definimos el puerto

//MiddleWare: Sirve archivos estaticos desde la carperta "public"
app.use(express.static('public'));

app.get('/',(req, res )=>{
    res.send('Bienvenido a mi portafolio');
})

//Iniciamos el servidor

app.listen(PORT, () => {
    console.log('servidor corriendo en http://lcoalhost:${PORT}');
});