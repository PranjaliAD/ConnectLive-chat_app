import User from '../models/user_model.js';
import bcrypt from "bcryptjs";
import generateToken from '../utils/generateToken.js';

export const signup = async(req,res)=>{
    try {
        //mobileNo instead of gender
        const {fullName,userName,mobileNo,gender,password,confirmPassword}  = req.body;

        if(password != confirmPassword){
            return res.status(400).json({error:"Password don't match"});
        }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({error:"Username already exists"});
        }

        //hash password here
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //https://avatar-placeholder.iran.liara.run/

        const boyprofilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`;
        const girlprofilePic = `https://avatar.iran.liara.run/public/girl?Musername=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            mobileNo,
            gender,
            password: hashPassword,
            profilePic: gender === "male" ? boyprofilePic :girlprofilePic,
        })

        if(newUser){
            //generate JWT token here
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic,
            });
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }

    } catch(error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const login = async(req,res)=>{
    try{
        const {userName,password} = req.body;
        const user = await User.findOne({userName});
        const isPassword = await bcrypt.compare(password,user.password || "");

        if(!user || isPassword){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic,
        })

    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Loged out successfully"});
    }catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

