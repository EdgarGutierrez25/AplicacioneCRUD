const express=require('express');
const ruta=express.Router();
const {Noticia}=require('../conexion');
const noticia = require('../modelos/noticia');



ruta.get('/Postear',(req,res)=>{
    res.render('nuevaNoticia');
});

ruta.get('/modificar',(req,res)=>{
    res.render('modificar');
});

ruta.get('/opciones',(req,res)=>{
    res.render('seleccion');
});

ruta.get('/login',(req,res)=>{
    res.render('login');
});

ruta.get('/seleccionarId/:id',(req,res)=>{

    Noticia.findAll({
        where:{
            id:req.params.id
        }
    })
    .then((not)=>{
        res.render('modificar',{noticia:not})
    })
    .catch(()=>{
        res.status(400).send('Error al recuperar usuario'+err);
    });
});

ruta.post('/mod',(req,res)=>{
    const datos={
        titulo:req.body.titulom,
        descripcion:req.body.descripcionm,
        fecha:req.body.fecham,
        foto:req.body.fotom,
        link:req.body.linkm
    }
    Noticia.update(datos,{where:{id:req.body.idModificar}})
    .then(()=>{
        res.render('seleccion');
    })
    .catch((err)=>{
        console.log('Error al insertar usuario '+err);
    })
});

ruta.get('/',(req,res)=>{
    Noticia.findAll()
    .then((not)=>{
        res.render('mostrarNoticias',{noticia:not});
    })
    .catch((err)=>{
        res.status(400).send('Error al mostrar'+err);
    })
});



ruta.get('/select',(req,res)=>{
    Noticia.findAll()
    .then((not)=>{
        res.render('mostrarNoticias m o e',{noticia:not});
    })
    .catch((err)=>{
        res.status(400).send('Error al mostrar'+err);
    })
});


ruta.post('/nuevo',(req,res)=>{
    Noticia.create(req.body)
    .then(()=>{
        res.send('Registrado correctamente');
    })
    .catch((err)=>{
        console.log('Error al insertar usuario '+err);
    })
});

ruta.get('/borradoFisico/:id',(req,res)=>{
    Noticia.destroy({where:{id:req.params.id}})
    .then(()=>{
        res.redirect('/');
    })
    .catch(()=>{
        res.status(400).send("Error al borrar el registro");
    });
});
module.exports=ruta;