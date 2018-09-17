const express = require('express')
const router = express.Router()
const path = require('path');

//inicio de aplicación
const app = express()

router.get('/report', (req, res) => {

    let campaign = {
            name: 'Empresa'
        }
        //res.render('report', { title: `Campaña ${campaign.name}` })

})


module.exports = router