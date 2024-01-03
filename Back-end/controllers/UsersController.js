import User from "../models/User.js";
import path from "path"
import fs from "fs"

export const getUserProfile = async (req, res) => {
    const user = await User.findById(req.params.id).select("-password")
    if(!user) {
        return res.status(404).json({message: "user not found"})


    }
     res.status(200).json({user})
}  


export const UploadProfilePhoto =  async (req, res) => {

    const pathImage = path.join(process.cwd(), `../images${req.file.filename}`)
    const user = await User.findById(req.params.id).select("-password")
    console.log(user)
    try {
        user.img_uri = {
            url: pathImage
        }
        await user.save()
        console.log(req.file);
        res.status(200).json({message: "your profile photo uploaded"})
    } catch (e) {
        res.status(401).json({message: e})
    }


}