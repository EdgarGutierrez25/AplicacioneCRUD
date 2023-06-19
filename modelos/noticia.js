const Sequelize=require('Sequelize');

module.exports=(conexion)=>{
    const NoticiasSchema=conexion.define('Noticia',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type:Sequelize.STRING
        },
        descripcion:{
            type:Sequelize.STRING
        },
        foto:{
            type:Sequelize.STRING
        },
        link:{
            type:Sequelize.STRING
        },
        fecha:{
            type:Sequelize.DATE
        }
    });
    return NoticiasSchema;
}