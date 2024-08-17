const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        //connect to database
        await mongoose.connect (process.env.MONGO_CNN)
        console.log('connect to  database');

    }catch  (error) {
        console.error('Error connection to MongoDB', error,message)
    }
}

module.exports = dbConnect()