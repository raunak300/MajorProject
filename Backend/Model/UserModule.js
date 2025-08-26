const mongoose=require('mongoose');

const bcrypt=require('bcrypt');

const UserSchema=new mongoose.Schema({
    ventId :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },Tags:{
        type:[String],
        default:[]
    }

})

UserSchema.pre('save',async function(next){
    const hashCount=10;
    this.password=await bcrypt.hash(this.password,hashCount);
    next();
})

const User=mongoose.model('User',UserSchema);
module.exports=User;