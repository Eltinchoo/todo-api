const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    last_name: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email: {
        type:DataTypes.STRING,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        unique:true
    },
    birthday:{
        type:DataTypes.DATEONLY,
        unique:true,
        defaultValue: false
    }
})

