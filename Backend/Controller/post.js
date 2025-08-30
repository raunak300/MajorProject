
const Post=require('../Model/UserPost');
const User=require('../Model/UserModule');

const makePost=async(req,res)=>{
    
    const {title,description,tag,ventId}=req.body
    const id=req.userId
    try {
        const user=await User.findOne({ventId : ventId});
        if(!user){
            res.status(404).send({message:"User not exist"})
            return ;
        }
        const post=new Post({userId:id,Title:title,Description:description,Tag:tag});
        await post.save();
        res.status(200).send({message:"User Post Created"});
        
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"some error in making post"})
    }

}

const sendPost=async(req,res)=>{
    const ventId=req.ventId
    try {
        const user=await User.findOne({ventId:ventId});
        if(!user){
            res.status(404).send({message:"no user exist"})
            return ;
        }
        const tag=user.Tags;
        console.log(tag);
        const posts = await Post.find({ Tag: { $in: user.Tags } })
                        .sort({ createdAt: -1 })
                        .limit(100);
        console.log(posts)
        res.status(200).send({message:"Post Collected",AllPost:posts})
        
    } catch (error) {
        res.status(200).send({message:"server Error in sending Posts"})
    }
}

module.exports={makePost,sendPost}