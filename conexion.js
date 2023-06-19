const Sequelize=require('sequelize');
const UsuarioModelo=require('./modelos/Usuario');
const NoticiaModelo=require('./modelos/noticia');
const conexion=new Sequelize('AplicacionCRUD','root','',{
    host:'localhost',
    dialect:'mariadb'
});

const Usuario=UsuarioModelo(conexion);
const Noticia=NoticiaModelo(conexion);

conexion.sync({force:false})
.then(()=>{
    console.log('Conectado A maria db');
})
.catch((err)=>{
    console.log('Fallo al conectar maria db: '+err);
});

module.exports={
    Usuario,
    Noticia
}