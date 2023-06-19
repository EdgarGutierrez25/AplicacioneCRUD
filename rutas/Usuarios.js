const express=require('express');
const ruta=express.Router();
const {Usuario}=require('../conexion');
const usuario = require('../modelos/Usuario');

ruta.get('/registrar',(req,res)=>{
    res.render('login');
})

ruta.post('/datosu',(req,res)=>{
    var datos={
        nombre: req.body.nombre,
        correo: req.body.correo,
        celular: req.body.celular
    };
    console.log(datos);
    res.redirect('/registrar');
})
module.exports=ruta;
