import express  from "express";

import { login, register } from "../controllers/AuthController.js";

import {getUserProfile, UploadProfilePhoto} from "../controllers/UsersController.js"

import upload from "../middlewares/photoUpload.js"
import isLoggedIn from "../middlewares/authentication.js"

import { valid } from "../middlewares/validate/validateOpjectId.js";

import {createPost, getPost, getPosts, updatePost} from "../controllers/PostControllers.js"

const router = express.Router()


router.post('/register', register)
router.post('/login', login)


router.get(
    "/account/profile/:id",
    isLoggedIn, 
    valid,
    getUserProfile 
)
router.post(
    "/account/profile/upload-profile/:id", 
    isLoggedIn,
    upload.single('avatar'), 
    UploadProfilePhoto,
)


router.get('/posts',isLoggedIn, getPosts)
router.post('/post/create',isLoggedIn, createPost)
router.get('/post/get/:id',isLoggedIn, getPost)
router.put('/post/update/:id',isLoggedIn, updatePost)



export default router