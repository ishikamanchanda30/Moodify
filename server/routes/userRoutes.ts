import express from 'express';
const router = express.Router();
import getPlaylist from "../controllers/playlistController"

router.get('/getPlaylist', getPlaylist);  