
const Post=require('../Model/UserPost');
const User=require('../Model/UserModule');
const Post = require('../Model/UserPost');

const makePost=async(req,res)=>{
    const ventId=req.params.vid;
    const {title,description,tag}=req.body
    try {
        const user=await User.findOne({ventId:ventId});
        if(!user){
            res.status(404).send({message:"User not exist"})
            return ;
        }
        const post=new Post({ventId:ventId,Title:title,Description:description,Tag:tag});
        await post.save();
        res.status(200).send({message:"User Post Created"});
        
    } catch (error) {
        res.status(500).send({message:"Server Error in Post creation"})
    }

}

module.exports={makePost}