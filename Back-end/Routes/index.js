import express  from "express";

import { login, register } from "../controllers/AuthController.js";

import {getUserProfile} from "../controllers/UsersController.js"

import upload from "../middlewares/photoUpload.js"
import isLoggedIn from "../middlewares/authentication.js"

import { valid } from "../middlewares/validate/validateOpjectId.js";

import {createPost, deletePost, getMyPost, getPost, getPosts, updatePost} from "../controllers/PostControllers.js"

const router = express.Router()


router.post('/register', register)
router.post('/login', login)




router.get('/posts', getPosts)
router.get('/post/:postId', getPost)
router.get('/myPost/:userId',isLoggedIn, getMyPost)
router.put('/post/update/:userId/:postId',isLoggedIn, updatePost)
router.delete('/post/delete/:userId/:postId',isLoggedIn, deletePost)
router.post('/post/create/:userId',isLoggedIn, upload.single("image"), createPost)



export default router