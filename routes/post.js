import express from 'express'
const router=express.Router();
import {getAllPosts,createNewPosts,delPosts,updatePosts,likePosts} from '../controllers/post.js'

router.get('/',getAllPosts)
router.post('/',createNewPosts);
router.post('/deletepost',delPosts);
router.patch('/updatepost/:id',updatePosts);
router.patch('/likepost/:id',likePosts);


export default router;