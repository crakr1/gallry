import {Post, createPostValidate} from "../models/Post.js"
import mongoose from "mongoose"




//create post 
export const createPost = async(req, res) => {
    const pathImage = path.join(process.cwd(), `../images${req.file.filename}`)

    if(!req.file) {
        return res.status(400).json({message: "image is requier"})
    }
    const {error} = createPostValidate(req.body)
    if(error) {
        return res.status(400).json({message: error.details[0].message})
    }    
    const newPost = new Post(req.body)

    try{
        await newPost.save()
        res.status(200).json({message: "post created"})
    } catch(e) {
        res.status(500).json(e)
    }
}

export const getPosts= async (req, res) => {
    const posts = Post.find()
    try{ 
        res.status(200).json(posts)
    }catch(e) {
        console.log(e)
        res.status(500).json(e)
    } 
}

//get post 
export const getPost= async (req, res) => {
    const id = req.params.id

    try{ 
        const post = await Post.findById(id)
        res.status(200).json(post)
    }catch(e) {
        res.status(500).json(e)
    }
}

//update post 
export const updatePost= async (req, res) => {
    const postId = req.params.id
    const userId = req.body

    try{
        const post = await Post.findById(postId)
        if(post.userId === userId) {
            await post.updateOne({ $set: req.body})
            res.status(200).json({message: "post updated"})
        }
    }catch(e) {
        res.status(500).json(e)
    }

}