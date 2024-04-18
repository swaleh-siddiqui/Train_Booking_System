const express = require("express");
const router = express.Router({mergeParams : true});



const Train = require("../models/train.js");
const Booking = require("../models/booking.js");

const wrapAsync = require("../utils/wrapasync.js");

const {isLoggedIn} = require("../middlewares.js");





const axios = require('axios');


const  stationTypeA  =  require('../train_api/categoryAstations.js');
const  stationTypeB  =  require('../train_api/categoryBstations.js');
const  stationTypeC  =  require( '../train_api/categoryCstations.js');
const  stationTypeD  = require('../train_api/categoryDstations.js');
const  stationTypeA1  = require('../train_api/categoryA1stations.js');




// train home route

router.get("", isLoggedIn,  wrapAsync(async (req,res) => {
    res.render("./train/home.ejs")
}))



// search train route

router.get("/search_train" , isLoggedIn , wrapAsync(async (req,res) => {
    // let from = req.query.from;
    // let to = req.query.to;
    // let date = req.query.date;
    
    const {query} = req;
    const startStation = query.from;
    const endStation = query.to;
    const date = query.date;

    let startInd=-1;
    let endInd = -1;

    let startLat = 0,startLong =0;
    let endLat = 0,endLong =0;

    if(startInd==-1){
        startInd = stationTypeA.findIndex((value)=>value.STATION_NAME==startStation.toUpperCase());
        if(startInd!=-1){
            startLat = stationTypeA[startInd].Latitude;
            startLong = stationTypeA[startInd].Longitude;
        }
    }
    if(endInd==-1){
        endInd = stationTypeA.findIndex((value)=>value.STATION_NAME==endStation.toUpperCase());
        if(endInd!=-1){
            endLat = stationTypeA[endInd].Latitude;
            endLong = stationTypeA[endInd].Longitude;
        }
    }
    if(startInd==-1){
        startInd = stationTypeA1.findIndex((value)=>value.STATION_NAME==startStation.toUpperCase());
        if(startInd!=-1){
            startLat = stationTypeA1[startInd].Latitude;
            startLong = stationTypeA1[startInd].Longitude;
        }
    }
    if(endInd==-1){
        endInd = stationTypeA1.findIndex((value)=>value.STATION_NAME==endStation.toUpperCase());
        if(endInd!=-1){
            endLat = stationTypeA1[endInd].Latitude;
            endLong = stationTypeA1[endInd].Longitude;
        }
    }
    if(startInd==-1){
        startInd = stationTypeB.findIndex((value)=>value.STATION_NAME==startStation.toUpperCase());
        if(startInd!=-1){
            startLat = stationTypeB[startInd].Latitude;
            startLong = stationTypeB[startInd].Longitude;
        }
    }
    if(endInd==-1){
        endInd = stationTypeB.findIndex((value)=>value.STATION_NAME==endStation.toUpperCase());
        if(endInd!=-1){
            endLat = stationTypeB[endInd].Latitude;
            endLong = stationTypeB[endInd].Longitude;
        }
    }
    if(startInd==-1){
        startInd = stationTypeC.findIndex((value)=>value.STATION_NAME==startStation.toUpperCase());
        if(startInd!=-1){
            startLat = stationTypeC[startInd].Latitude;
            startLong = stationTypeC[startInd].Longitude;
        }
    }
    if(endInd==-1){
        endInd = stationTypeC.findIndex((value)=>value.STATION_NAME==endStation.toUpperCase());
        if(endInd!=-1){
            endLat = stationTypeC[endInd].Latitude;
            endLong = stationTypeC[endInd].Longitude;
        }
    }
    if(startInd==-1){
        startInd = stationTypeD.findIndex((value)=>value.STATION_NAME==startStation.toUpperCase());
        if(startInd!=-1){
            startLat = stationTypeD[startInd].Latitude;
            startLong = stationTypeD[startInd].Longitude;
        }
    }
    if(endInd==-1){
        endInd = stationTypeD.findIndex((value)=>value.STATION_NAME==endStation.toUpperCase());
        if(endInd!=-1){
            endLat = stationTypeD[endInd].Latitude;
            endLong = stationTypeD[endInd].Longitude;
        }
    }

    // if(startInd==-1||endInd==-1){
    //     return res.status(400).send({msg:"Please check station name"});
    // }

    const stationNearStartA = stationTypeA.find((data)=>{
        if(data.STATION_NAME!=startStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((startLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((startLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((startLong*Math.PI)/180)))*6371;//in km
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearStartA1 = stationTypeA1.find((data)=>{
        if(data.STATION_NAME!=startStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((startLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((startLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((startLong*Math.PI)/180)))*6371;//in km
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearStartB = stationTypeB.find((data)=>{
        if(data.STATION_NAME!=startStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((startLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((startLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((startLong*Math.PI)/180)))*6371;//in km
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearStartC = stationTypeC.find((data)=>{
        if(data.STATION_NAME!=startStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((startLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((startLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((startLong*Math.PI)/180)))*6371;//in km
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearStartD = stationTypeD.find((data)=>{
        if(data.STATION_NAME!=startStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((startLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((startLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((startLong*Math.PI)/180)))*6371;//in km
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearEndA = stationTypeA.find((data)=>{
        if(data.STATION_NAME!=endStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((endLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((endLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((endLong*Math.PI)/180)))*6371;
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearEndA1 = stationTypeA1.find((data)=>{
        if(data.STATION_NAME!=endStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((endLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((endLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((endLong*Math.PI)/180)))*6371;
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearEndB = stationTypeB.find((data)=>{
        if(data.STATION_NAME!=endStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((endLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((endLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((endLong*Math.PI)/180)))*6371;
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearEndC = stationTypeC.find((data)=>{
        if(data.STATION_NAME!=endStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((endLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((endLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((endLong*Math.PI)/180)))*6371;
            return distance<=100;
        }else{
            return false;
        }
    });
    const stationNearEndD = stationTypeD.find((data)=>{
        if(data.STATION_NAME!=endStation.toUpperCase()){
            const lat = data.Latitude;
            const long = data.Longitude;
            const distance = Math.acos(Math.sin((endLat*Math.PI)/180)*Math.sin((lat*Math.PI)/180)+Math.cos((endLat*Math.PI)/180)*Math.cos((lat*Math.PI)/180)*Math.cos(((long*Math.PI)/180)-((endLong*Math.PI)/180)))*6371;
            return distance<=100;
        }else{
            return false;
        }
    });
    let stationNearStart = [];
    stationNearStart = stationNearStart.concat(stationNearStartA!=null?stationNearStartA:[],stationNearStartA1!=null?stationNearStartA1:[],stationNearStartB!=null?stationNearStartB:[],stationNearStartC!=null?stationNearStartC:[],stationNearStartD!=null?stationNearStartD:[]);
    stationNearStart.sort((a,b)=>{
        const d1 = Math.acos(Math.sin(startLat*Math.PI/180)*Math.sin(a.Latitude*Math.PI/180)+Math.cos(startLat*Math.PI/180)*Math.cos(a.Latitude*Math.PI/180)*Math.cos((a.Longitude*Math.PI/180)-(startLong*Math.PI/180)))*6371;
        const d2 = Math.acos(Math.sin(startLat*Math.PI/180)*Math.sin(b.Latitude*Math.PI/180)+Math.cos(startLat*Math.PI/180)*Math.cos(b.Latitude*Math.PI/180)*Math.cos((b.Longitude*Math.PI/180)-(startLong*Math.PI/180)))*6371;
        return d1-d2;
    });
    let stationNearEnd = [];
    stationNearEnd = stationNearEnd.concat(stationNearEndA!=null?stationNearEndA:[],stationNearEndA1!=null?stationNearEndA1:[],stationNearEndB!=null?stationNearEndB:[],stationNearEndC!=null?stationNearEndC:[],stationNearEndD!=null?stationNearEndD:[]);
    stationNearEnd.sort((a,b)=>{
        const d1 = Math.acos(Math.sin(endLat*Math.PI/180)*Math.sin(a.Latitude*Math.PI/180)+Math.cos(endLat*Math.PI/180)*Math.cos(a.Latitude*Math.PI/180)*Math.cos((a.Longitude*Math.PI/180)-(endLong*Math.PI/180)))*6371;
        const d2 = Math.acos(Math.sin(endLat*Math.PI/180)*Math.sin(b.Latitude*Math.PI/180)+Math.cos(endLat*Math.PI/180)*Math.cos(b.Latitude*Math.PI/180)*Math.cos((b.Longitude*Math.PI/180)-(endLong*Math.PI/180)))*6371;
        return d1-d2;
    });



    // let trains = [1,2,3, 4, 5,6,7,]
    let trains = await Train.find();

// train api call 


    res.status(200).send({"StationNearStart":stationNearStart,"StationNearEnd":stationNearEnd});

    console.log(stationNearStart);




    // res.render("./train/search_train.ejs" , {trains}); 
}))




// train booking route post

router.post("/book" , isLoggedIn, wrapAsync(async (req,res) => {
    let booking = new Booking(req.body.ob);
    booking.owner = req.user._id;
    await booking.save();
    res.redirect("/user/history");
}))


module.exports = router;