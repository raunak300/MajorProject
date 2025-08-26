
const Post=require('../Model/UserPost');
const User=require('../Model/UserModule');

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

const sendPost=async(req,res)=>{
    const ventId=req.params.vid;
    try {
        const user=await User.findOne({ventId:ventId});
        if(!user){
            res.status(404).send({message:"no user exist"})
            return ;
        }
        const tag=user.Tags;
        console.log(tag);
        // const posts=[]
        // for(let i=0;i<tag.length;i++){
        //     const post=await Post.find({Tag:tag[i]}).sort({ createdAt: -1 }).limit(100);
        //     posts.push(...post)
        // }
        const posts = await Post.find({ Tag: { $in: user.Tags } })
                        .sort({ createdAt: -1 })
                        .limit(100);

        res.status(200).send({message:"Post Collected",AllPost:posts})
        
    } catch (error) {
        res.status(200).send({message:"server Error in sending Posts"})
    }
}

module.exports={makePost,sendPost}