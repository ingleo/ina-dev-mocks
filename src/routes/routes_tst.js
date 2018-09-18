const express = require('express')
const router = express.Router()
const path = require('path');

//inicio de aplicación
const app = express()

router.get('/report', (req, res) => {

    let campaign = {
        name: 'jenn pruebas'
    }
    res.render('report/home', { title: `Campaña ${campaign.name}` })

    //res.sendFile(path.join(__dirname, '../public/report', 'index.html'))
})


module.exports = router