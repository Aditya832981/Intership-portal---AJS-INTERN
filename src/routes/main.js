const express = require("express")
const { route } =require('express/lib/application')
const Slider=require("../models/Slider")
const routes = express.Router()
const Detail= require('../models/Detail')
const Service=require("../models/Service")
const Contact=require("../models/Contact")
routes.get("/",async(req,res)=>{

    const details= await Detail.findOne({'_id':"661fc54b878fe2da308cead0"})
    const slides= await Slider.find()
    const services= await Service.find()    
    // console.log(slides) 
     


    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})


routes.get("/gallery",async(req,res)=>{

    const details= await Detail.findOne({'_id':"661fc54b878fe2da308cead0"})
    res.render("gallery",{
        details:details
    })
})


// process contact form

routes.post("/process-contact-form", async(request,response)=>{
    // console.log("submited")
    // console.log(request.body)
    //save the data to mongodb
    try{

        const data= await Contact.create(request.body)
        console.log(data)
        response.redirect("/")


    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }

    
})





module.exports = routes