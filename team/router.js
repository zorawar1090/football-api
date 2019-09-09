const { Router } = require('express')
const Team =  require('./model')
const City = require('../city/model')

const router = new Router()

router.get('/team', (req, res, next) => {
  Team
    .findAll({include: [City]})
    .then((team) => res.send(team))
    .catch(next)
})

router.post('/team', (req, res, next) => {
  Team
    .create(req.body)
    .then((team) => res.send(team))
    .catch(next)
})

router.get('/team/:id', (req, res, send) => {
  Team
    .findByPk(req.params.id, { include: [City] })
    .then((team) => res.send(team))
})

router.put('/team/:id', (req, res, next) => {
  Team
    .findByPk(req.params.id)
    .then((team) => {
      return team.update(req.body)
    })
    .then((team) => res.send(team))
    .catch(next)
})

router.delete('/team/:id', (req, res, next) => {
  Team
    .destroy({
      where:{
        id: req.params.id
      }
    })
    .then((deletedTeamsCount) => res.send({deletedTeamsCount}))
    .catch(next)
})

module.exports = router
