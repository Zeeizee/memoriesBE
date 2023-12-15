import mongoose from "mongoose"
import PostModel from "../modals/post.js"


export const getAllPosts= async (req,res)=>{
  try{   
    const posts= await PostModel.find();    
    res.status(200).json(posts)
  }
  catch(err){
      res.status(400).json({ message: err.message})
  }

};
export const createNewPosts=async (req,res)=>{
    const postBody=req.body;
    console.log("creating new post")
    const newPostIamge=new PostModel(postBody);
    try{
       await newPostIamge.save();
        res.status(200).json(newPostIamge);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }

}   
export const delPosts=async (req,res)=>{ 
    const {id}=req.body;
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$in delPost function",id)
   await PostModel.findByIdAndDelete(id)
   res.json({status:200,message:"Post Deleted Successfully"});
    

}
export const updatePosts=async (req,res)=>{ 
   console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
   const {id:_id}=req.params;
   const postData=req.body;
   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",_id)
   if(mongoose.Types.ObjectId.isValid(_id))
   {
    const updatedPost=await PostModel.findByIdAndUpdate(_id,postData,{new:true})
    return res.json({status:200,message:"Post Updated"})
   }
   else{
     return res.status(404).send("No Such Post Found")
   }
    

}
export const likePosts=async (req,res)=>{ 
   console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
   const {id:_id}=req.params;
   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",_id)
   if(mongoose.Types.ObjectId.isValid(_id))
   {
    const mypost=await PostModel.findById(_id)
    const updatedpost=await PostModel.findByIdAndUpdate(_id,{likeCount:mypost.likeCount+1},{new:true})
    return res.json({status:200})
  }
  else{
    return res.status(404).send("No Such Post Found")
  }
    

}