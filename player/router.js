const { Router } = require('express')
const Player =  require('./model')
const Team = require('../team/model')
const City = require('../city/model')

const router = new Router()

router.get('/player', (req, res, next) => {
  Player
    .findAll({include: [Team, City]})
    .then((players) => res.send(players))
    .catch(next)
})

router.post('/player', (req, res, next) => {
  Player
    .create(req.body)
    .then((player) => res.send(player))
    .catch(next)
})

router.get('/player/:id', (req, res, send) => {
  Player
    .findByPk(req.params.id, { include: [Team, City] })
    .then((player) => res.send(player))
})

router.put('/player/:id', (req, res, next) => {
  Player
    .findByPk(req.params.id)
    .then((player) => {
      return player.update(req.body)
    })
    .then((player) => res.send(player))
    .catch(next)
})

router.delete('/player/:id', (req, res, next) => {
  Player
    .destroy({
      where:{
        id: req.params.id
      }
    })
    .then((deletedPlayersCount) => res.send({deletedPlayersCount}))
    .catch(next)
})

router.get('/player/team/:teamId', (req, res, next) => {
  Player
    .findAll({
      where: {
        teamId: req.params.teamId
      },
      include: [Team, City]
    })
    .then(players => res.send(players))
    .catch(next)
})

router.get('/player/city/:cityId', (req, res, next) => {
  Player
    .findAll({
      where: {
        cityId: req.params.cityId
      },
      include: [Team, City]
    })
    .then(players => res.send(players))
    .catch(next)
})

module.exports = router
