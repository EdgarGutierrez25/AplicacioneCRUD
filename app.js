const express=require('express');
const path=require('path');
const session=require('express-session');
const usuarios=require('./rutas/Usuarios');
const Noticias=require('./rutas/Noticias');
const app=express();
//ruta
app.use('/estatico',express.static(path.join(__dirname,'public')));

//motor de vistas
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

//inicio de sesiones
app.use(session({
    //encripta sesiones
    
    secret:'lo que sea',
    //variable de sesion guardada
    resave:true,
    //usuario recordado
    saveUninitialized:true
}));

//ruta
app.use('/',usuarios);
app.use('/',Noticias);

//servidor
app.listen(3002,()=>{
    console.log('servidor escuchando en el puerto 3002')
});

