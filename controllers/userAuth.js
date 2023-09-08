// function for user signup
exports.signup = (req,res,next)=>{
    console.log(req.body);
   return res.status(200).json("user is signed up")
}