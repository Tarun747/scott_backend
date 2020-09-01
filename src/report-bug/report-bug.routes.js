const router = require('express').Router()
const { deletereportbug, registerreportbug, allreportbug } = require('./report-bug.controller')

router.get('/all-reportbug', allreportbug)
router.post('/register', registerreportbug)
router.delete('/:id', deletereportbug)
module.exports = router
