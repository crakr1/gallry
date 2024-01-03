import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true,
        maxLength: 30,
        minLength: 3
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true,
        minLength: 6
    },
    img_uri: {
        type: Object,
        default: {
            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_9131529&psig=AOvVaw25KKWai6ksxLg3XdgXc6kQ&ust=1703623385847000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjv3_i5q4MDFQAAAAAdAAAAABAD",
        }
    },
}, {
    timestamps: true
})

//token 
UserSchema.methods.AuthToken = function() {
    return jwt.sign({id: this._id, email: this.email }, process.env.JWT)
}

const User = mongoose.model("user", UserSchema)


export default User