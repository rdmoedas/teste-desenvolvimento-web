const Sequelize = require('sequelize');
const configDatabase = require('../config/database');
const db = new Sequelize(configDatabase);
/*
const Pokemons = db.define('teste', {
    /*id: {
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.DataTypes.STRING
    },
    power: {
        type: Sequelize.DataTypes.INTEGER,
    },
    isActive: {
        type: Sequelize.DataTypes.BOOLEAN
    }
})
*/
/*
const Teste = db.define('Teste', {
    
})
*/
module.exports = {
    readDbData: async function readDbData() {
        const response = await db.query(
            'SELECT * FROM teste WHERE isActive = TRUE;', {
            type: Sequelize.QueryTypes.SELECT
        })
        return response
    },
    createDbData: async function createDbData(name, power) {
        const addPokemon = await db.query(
            'INSERT INTO teste (name, power) VALUES (:name, :power);',
            {
                type: Sequelize.QueryTypes.INSERT,
                replacements: {
                    name: name,
                    power: power
                }
            }
        )
    },
    softDelete: async function softDelete(id) {
        const removePokemon = await db.query(
            'UPDATE teste SET isActive = false WHERE id = :id', 
        {
            type: Sequelize.QueryTypes.UPDATE,
            replacements: {
                id: id
            }
        })
    },
    editDbData: async function editDbData(
            id, 
            name, 
            power
            ){
        const editPokemon = await db.query(
            'UPDATE teste SET name = :name, power = :power WHERE id = :id', 
        {
            type: Sequelize.QueryTypes.UPDATE,
            replacements: {
                id: id,
                name: name,
                power: power
            }
        })
    }
}