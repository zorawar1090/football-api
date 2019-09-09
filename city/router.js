const { Router } = require('express')
const City = require('./model')
// const City =  require('./model')
// const Team = require('../team/model')

const router = new Router()

router.get('/city', (req, res, next) => {
  City
    .findAll()
    .then((cities) => res.send(cities))
    .catch(next)
})

router.post('/city', (req, res, next) => {
  City
    .create(req.body)
    .then((city) => res.send(city))
    .catch(next)
})

router.get('/city/:id', (req, res, send) => {
  City
    .findByPk(req.params.id)
    .then((city) => res.send(city))
})

router.put('/city/:id', (req, res, next) => {
  City
    .findByPk(req.params.id)
    .then((city) => {
      return city.update(req.body)
    })
    .then((city) => res.send(city))
    .catch(next)
})

router.delete('/player/:id', (req, res, next) => {
  City
    .destroy({
      where:{
        id: req.params.id
      }
    })
    .then((deletedCitiesCount) => res.send({deletedCitiesCount}))
    .catch(next)
})

module.exports = router
