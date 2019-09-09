const Team = require('../team/model')
const City = require('../city/model')
const Sequelize = require('sequelize')
const db = require('../db')


const Player = db.define('player', {
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
})

Player.belongsTo(Team)
Player.belongsTo(City)

module.exports = Player