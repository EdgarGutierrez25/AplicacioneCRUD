const Sequelize=require('Sequelize');

module.exports=(conexion)=>{
    const UsuariosSchema=conexion.define('Usuario',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.STRING
        },
        usuario:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        foto:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.STRING
        }
    });
    return UsuariosSchema;
}