const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
     age:{
        type:Number,
        require:true
    },    

    date:{
        type:Date,
        default:Date.now
    },
    
    });
    const User = mongoose.model("TODO",schema)

    module.exports=User;