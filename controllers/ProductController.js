const Products = require('../models/Products');

const getProducts = async (req,res)=>{
    const products = await Products.find()

    res.json(products)
}

const postProducts = async (req,res)=>{
    let msg = 'Product inserted'
    const body = req.body
    try{
        const products = new Products(body)
        await products.save()
    }
    catch(error){
        msg = error
    }
    res.json({msg:msg})
}
const putProducts =  async (req, res)=>{
    let msg = 'Product updated'
    const {Name_Product, Price, Weigth} = req.body
    try {
        await Products.findOneAndUpdate({Name_Product:Name_Product}, {Price:Price , Weigth:Weigth})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

// Method DELETE
const deleteProducts = async (req,res)=>{
    let msg = 'Product deleted'
    id = req.params.id
    try {
        await Products.findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the Product'
    }
    res.json({msg:msg})
}

module.exports ={
    getProducts,
    postProducts,
    putProducts,
    deleteProducts
}