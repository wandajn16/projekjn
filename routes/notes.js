const express = require('express')
const controller = require('../controller/notes')

const router = express.Router()

router.post('/notes', controller.createNote)
router.get('/notes', controller.createNote)
router.get('/notes/:id', controller.createNote)
router.put('/notes/:id', controller.createNote)
router.delete('/notes', controller.createNote)

module.exports = router