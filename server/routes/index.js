const route = require('express').Router()

route.get('/api', (req, res) => {
    res.json({
        message: "Home Page"
    })
    // res.render('index.ejs')
})

const itemRoutes = require('./item');
route.use('/api/items', itemRoutes)

const brandRoutes = require('./brand');
route.use('/api/brands', brandRoutes)

module.exports = route