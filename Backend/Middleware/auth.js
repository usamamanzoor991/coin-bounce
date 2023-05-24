const JWTServices = require('../sevices/JWTServices');
const User = require('../Models/User');
const UserDTO = require('../dto/user');

const auth = async (req , res , next) => {
    try{
        //1.Refresh , Access Token Validation
    const {refreshToken, accessToken} = req.cookies;

    if (!refreshToken || !accessToken){
        const error = {
            status : 401,
            message : 'Unauthorized'
        } 

        return next(error)
    }
    let id;
    try{
        
        _id = JWTServices.verifyAccessToken(accessToken)._id;
    
    }catch(error){
        return next(error);
    }

    let user;
    try{
        
        user = await User.findOne({_id : _id});
    
    }
    catch(error){
        return next(error);
    }

    const userDTO = new UserDTO(user);

    req.user = userDTO;

    next();

    }catch(error){
        return next(error);
    }   
}

module.exports = auth;