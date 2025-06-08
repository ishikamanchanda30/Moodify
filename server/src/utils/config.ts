require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');
// spotify configuration , isme we have all the basic things we need to connect with the spotify
export const spotifyApi = new SpotifyWebApi({
    clientID : process.env.SPOTIFY_CLIENT_ID,
    clientSecret : process.env.SPOTIFY_CLIENT_SECRET,
    redirectURL : process.env.SPOTIFY_REDIRECT_URL,
    scopes : [
        'user-read-private',
        'user-read-email',
        'user-top-read',
    ].join(''),
})
