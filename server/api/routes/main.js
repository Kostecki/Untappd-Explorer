import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/ping', (req, res) => {
  res.status(200).send('pong')
})

module.exports = router
