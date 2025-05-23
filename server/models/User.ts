import mongoose from "mongoose";
const {Schema , model} = mongoose;
import Playlist from "./Playlist";
const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
    }, 
    playlists : {
        type : Playlist,
    }



})