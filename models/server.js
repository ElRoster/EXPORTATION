const express = require ('express');
const dbConnect = require('../database/config')
const {postProducts,getProducts,putProducts,deleteProducts} = require('../controllers/ProductController')
require('../database/config')


class Server {
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathProducts = '/api/product'
        this.route()
        
    }

    async dbConnection(){
        await dbConnect
    }

    route(){
        this.app.use(express.json())
        this.app.get(this.pathProducts, getProducts)
        this.app.post(this.pathProducts, postProducts)
        this.app.put(this.pathProducts, putProducts)
        this.app.delete(this.pathProducts+'/:id', deleteProducts)
        
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running `)
        })
    }
}

module.exports= Server