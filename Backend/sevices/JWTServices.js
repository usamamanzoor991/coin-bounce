const jwt = require('jsonwebtoken');
const {REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET} = require('../Config/index');
const  refreshToken = require('../Models/token');

class JWTServices {
    //Sign Access Token
    static signAccessToken(payload, expirytime){
        return jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn : expirytime});
    }
    //Sign Refresh Token
    static signRefreshToken(payload, expirytime,){
        return jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn : expirytime});
    }
    //Verify Access Token
    static verifyAccessToken (token){
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    }
    //Verify Refresh Token
    static verifyRefreshToken (token){
        return jwt.verify(token, REFRESH_TOKEN_SECRET);
    }
    //Store Refresh Token
    static async storeRefreshToken(token, userId){
        try{
            const newToken = new refreshToken({
                token : token,
                userId : userId  
            });
            await newToken.save()
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = JWTServices;