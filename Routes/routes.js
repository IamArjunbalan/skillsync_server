// import express

const express=require("express")

// import controller function to resolve requests

const usercontroller=require('../Controller/userController')

// import admin controller
const admincontroller=require('../Controller/adminController')

const multerConfig=require('../Middlewares/detailsMiddleware')
const jwtmiddleware=require('../Middlewares/jwtMiddleware')


// create object for Router class in express

const router=new express.Router()

// define various paths

router.post('/user/register',usercontroller.register)
router.post('/admin/adminregister',admincontroller.register)
router.post('/user/login',usercontroller.login)
router.post('/user/adddetails',jwtmiddleware,multerConfig.single('details_image'),usercontroller.addDetails)
router.get('/user/viewDetails',jwtmiddleware,usercontroller.viewDetails)
router.post('/user/review',usercontroller.addReviews)
router.get('/user/viewReviews',usercontroller.viewReview)
router.get('/user/userDetail',jwtmiddleware,usercontroller.viewUser)
router.post('/user/addFavourite',jwtmiddleware,multerConfig.single('details_image'),usercontroller.addFavourite)
router.get('/user/viewFavourite',jwtmiddleware,usercontroller.viewFavourite)
router.delete('/user/deleteFvourite/:id',jwtmiddleware,usercontroller.deleteFavourite)
router.delete('/user/deleteAdmin/:id',jwtmiddleware,usercontroller.deleteAdmin)
router.post('/user/addmessage',usercontroller.addMessage)
router.get('/user/viewmessage',usercontroller.viewmessage)
router.delete('/user/deleteMessage/:id',jwtmiddleware,usercontroller.deleteMessage)
router.delete('/user/deleteReview/:id',jwtmiddleware,usercontroller.deleteReview)




module.exports=router