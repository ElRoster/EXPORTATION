const {model, Schema} = require ("mongoose")

const ProductSchema =  new Schema(
    {
        Name_Product:{
            type:String,
            required:[true,"The product name is required"],
            unique:true,
            minlength:[0,"Write a product name"],
            maxlength:[50,"The product name must be less than 50 characters"]
        },

        
        Price:{
            type:Number,
            required:[true,"The price is required"],
            min:[0,"Write a positive price"],
        },

        Weigth:{
            type:String,
            required:[true,"The weight is required"],
            min:[0,"Write a positive weight"],
        }
        
    }
)

module.exports = model("Products", ProductSchema, "product")