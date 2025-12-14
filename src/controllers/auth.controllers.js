import {User, user} from "../models/user.models.js"
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/Api-error.js";
import { asyncHandler } from "../utils/async-handler.js";


const registerUser = asyncHandler(async(req, res)=>{
    const {email , username , password , role } = req.body
      const existedUser = await User.findOne({
        $or:[ {username} , {email} ]
    });
    if(existedUser){
        throw new ApiError(409 ," Username  or Email Already Exsisted" ,  [] )
    }
     User.create({
        email ,
        password,
        username ,
        isEmailVerified : false 
     })
})
