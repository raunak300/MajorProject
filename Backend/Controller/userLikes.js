const User=require('../Model/UserModule');

const userLikes=async(req,res)=>{
    const {likes}=req.body;
    const ventId=req.ventId;
    try {
        const user=await User.findOne({ventId:ventId});
         if (!user) {
            return res.status(404).send({ message: "User not found" });
            
        }
        user.Tags = user.Tags = likes; // just store the new array

        await user.save();

        res.status(200).send({ message: "Likes updated successfully", Tags: user.Tags })
    } catch (error) {
        res.status(500).send({message:"server Error in selecting likes"})
    }
}

module.exports={userLikes}