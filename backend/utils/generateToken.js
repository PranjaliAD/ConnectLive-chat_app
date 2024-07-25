import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '5d'
    });

    res.cookie("jwt",token,{
        maxAge: 5 * 24 * 60 * 60 * 1000, //MS
        httpOnly:true, //prevent XSS attcks cross-site scripting attacks
        sameSite: "strict", //CSRF attacks cross-site request forgeny attacks
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndSetCookie;