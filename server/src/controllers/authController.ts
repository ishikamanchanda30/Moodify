import express from 'express';
import queryString from 'query-string';
const client_id = '32dc2bead8e24470ace9cfddea02856f';
const redirect_uri = 'http://127.0.0.1:3000/callback';

const app = express();

app.get('/login', function(req, res) {
  const state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    queryString.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
