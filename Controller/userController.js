// import user model 
const users = require('../Models/userSchema')
const jwt=require('jsonwebtoken')
const admins=require('../Models/adminSchema')
const details=require('../Models/detailsSchema')
const reviews=require('../Models/reviewSchema')
const favourites=require('../Models/favouriteSchema')


exports.register = async (req, res) => {
    console.log('inside register function')
    const { username, password, email } = req.body
    console.log(`username:${username},password:${password},Email:${email}`)
    try{
        const existingUser = await users.findOne({ email })
    console.log(existingUser)
    if (existingUser) {
        res.status(406).json("User Already Exist..")
    }
    else {
        const newUser = new users({ username, password, email, image: "", skill:"",time:"",phone:""})
        await newUser.save()
        res.status(200).json(newUser)

    }

    }
    catch(err){
        res.status(401).json("something went wrong,"+err)

    }
}

exports.login=async (req,res)=>{
    console.log("inside login function");
    const{email,password}=req.body
    try{
        const existingUser=await users.findOne({email,password})
        const existingAdmin=await admins.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},"superSecretkey")
            res.status(200).json({
                existingUser,
                role:'user',
                token
            })
        }
        else{
            if(existingAdmin){
                const token=jwt.sign({userId:existingAdmin._id},"superSecretkey")
                res.status(200).json({
                    existingAdmin,
                    role:'admin',
                    token
                })
            }
            
        
        else{
            res.status(406).json("invalid email/password")
        }
    }
    }
    catch(err){
        res.status(500).json("something went wrong",err)
    }
}

exports. addDetails=async(req,res)=>{
    console.log("inside addDetails function!!")
    console.log(req.file)
    const{name,email,skill,time,phone,userId}=req.body
    console.log(`${name},${email},${skill},${time},${phone},${userId}`)
    const details_image=req.file.filename
    // res.send("Add projects request is hit!!")
    try{
        const existingUser=await details.findOne({email})
        if(existingUser){
            res.status(406).json("Existing details")
        }
        
        else{
            const newDetails=new details({ name,email,details_image,skill,time,phone,userId})
            await newDetails.save()
            res.status(200).json(newDetails)
        }


    }
    catch(err){
        res.status(401).json("something wrong:"+err)

    }
}

exports.viewDetails=async(req,res)=>{
    console.log("inside user details")
    console.log(req.payload);
    try{
        const data=await details.find()
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(401).json(err)

    }
}

exports. addReviews=async(req,res)=>{
    console.log("inside addreview function!!")
    console.log(req.file)
    const{name,review,userId}=req.body
    console.log(`${name},${review},${userId}`)
    
    // res.send("Add projects request is hit!!")
    try{

        const existingUser=await reviews.findOne()
        // if(existingUser){
            // res.status(406).json("Existing details")
        // }
       
        
        
        

        // else{
            const newDetails=new reviews({ name,review,userId})
            await newDetails.save()
            res.status(200).json(newDetails)

        // }
       
         
        


    }
    catch(err){
        res.status(401).json("something wrong:"+err)

    }
}

exports.viewReview=async(req,res)=>{
    console.log("inside user Review")
    console.log(req.payload);
    try{
        const data=await reviews.find()
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(401).json(err)

    }
}

exports.viewUser=async(req,res)=>{
    console.log("inside user details")
    console.log(req.payload);
   
    
    try{
        const data=await details.findOne({userId:req.payload})
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(401).json(err)

    }
}

exports. addFavourite=async(req,res)=>{
    console.log("inside add Favourite function!!")
    console.log(req.file)
    const{name,email,skill,time,phone,userId}=req.body
    console.log(`${name},${email},${skill},${time},${phone},${userId}`)
    const details_image=req.file?req.file.filename:req.body.details_image
    // res.send("Add projects request is hit!!")
    try{
        const existingUser=await favourites()
      
            const newDetails=new favourites({ name,email,details_image,skill,time,phone,userId})
            await newDetails.save()
            res.status(200).json(newDetails)
       


    }
    catch(err){
        res.status(401).json("something wrong:"+err)

    }
}

exports.viewFavourite=async(req,res)=>{
    console.log("inside user details")
    console.log(req.payload);
    try{
        const data=await favourites.find({userId:req.payload})
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(401).json(err)

    }
}

exports.deleteFavourite = async (req, res) => {
    const { id } = req.params
    console.log("inside delete favourite function")
    try {
        const result = await favourites.findByIdAndDelete({ _id: id })
        console.log(result)
        res.status(200).json(result)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.deleteAdmin=async (req,res)=>{
    const { id } = req.params
    console.log("inside admin delete function")
    try {
        const result = await details.findByIdAndDelete({ _id: id })
        console.log(result)
        res.status(200).json(result)
        
    }
    catch (err) {
        res.status(401).json(err)
    }
    
}
