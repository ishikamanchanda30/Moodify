import express from 'express';
import getPlaylist from "../controllers/playlistController"

const client_id = '32dc2bead8e24470ace9cfddea02856f';
const redirect_uri = 'http://127.0.0.1:3000/callback';
const router = express.Router();
const app = express();

router.get('/getPlaylist', getPlaylist);  
