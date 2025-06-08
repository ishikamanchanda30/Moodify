import {spotifyApi} from "../utils/config"

require("dotenv").config();
const express = require("express");
const app = express();
app.get("/login", (req:any, res:any) => {
  const scopes = spotifyApi.scopes;
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get("/callback", (req:any, res:any) => {
  const error = req.query.error;
  const code = req.query.code;

  if (error) {
    console.log("callback error");
    res.send(`Callback error ${error}`);
    return;
  }
  spotifyApi.authorizationCodeGrant(code).then((data:any) => {
    const accessToken = data.body["access_token"];
    const refreshToken = data.body["refresh_token"];
    const expiresIn = data.body["expires_in"];

    spotifyApi.setAccessToken(accessToken);
    spotifyApi.setRefreshToken(refreshToken);

    console.log("access token is : " , accessToken);
    console.log("refresh token is : " , refreshToken);
    res.send("login successfull. you can now browse the points.");

    setInterval(async()=>{
      const data = await spotifyApi.refreshAccessToken();
      const accessTokenRefreshed = data.body['access_token'];

    }, expiresIn / 2*1000);
  }).catch((error:any) => {
    console.log("error in accessing token", error);
    res.send("Error getting tokens")
  });
});
