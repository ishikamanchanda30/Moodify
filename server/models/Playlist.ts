//models/User.ts
import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const PlaylistSchema = new Schema({
    title: {
        type : String,
        required:true,
    } , 
    userId : {
        type : String,
        ref: 'user',
        required : true,
    },
    mood : {
        type: Array,
    },
    songs : {
       type:Schema.Types.ObjectId,

    },
    link : {
        type: String,
    },
    createdAt : {
        type: Date
    },
    updatedAt : {
        type: Date
    },
    
} , {timestamps : true}); 

const Playlist = model('Playlist', PlaylistSchema);
