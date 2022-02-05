const express = require('express')

var router = express.Router()

router.get('/', (req, res) => {
res.render('index', {title: "Miary Express"});
})

module.exports = router;