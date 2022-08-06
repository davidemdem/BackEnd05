const express= require('express');
const app=express();


// seteamos ejs como motor de plantillas 
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(require('./routes/products.js'))
 


app.listen(3000,()=>console.log('Servidor iniciado en puerto 3000'));
