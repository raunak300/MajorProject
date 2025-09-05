const User = require("../Model/UserModule");

const formConnection=async(req,res)=>{
    try {
        const {ventId,othId}=req.body;
        console.log(ventId," ",othId)
        const user1=await User.findOne({ventId:ventId})
        const user2 = await User.findOne({ ventId: othId });
        console.log(user1," ", user2)
        if(!user1 || !user2){
            return res.status(404).send({message:"User NOT Found"})
        }
        //connection exist or not will be checked onfrontend
        user1.connections.push({id:user2._id,status:'pending'})
        user1.save()
        //generate notification will be written for user2
        return res.status(200).send({message:"Request Sent"});
        
    } catch (error) {
        console.error("Error in forming connections:", error);
        return res.status(500).send({message:"Error in forming connections"})
    }
}

module.exports={formConnection};