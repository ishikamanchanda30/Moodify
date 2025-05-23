//@desc gettheplaylist
//@route GET /api/----
//@acces private
import Playlist from "../models/Playlist"
const getPlaylist = async(req,res) => {
    try {
        const playlist = await Playlist.find({user:req.user.id});
        console.log(res);
    } catch (e) {
        console.error(e);
    }
}
export default getPlaylist;