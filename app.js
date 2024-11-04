if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const express = require("express");
const app = express();
const path = require("path");
const apiKey = process.env.API_KEY;

app.set("view engine" ,"ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));

app.use(express.json());

const ejsMate  = require("ejs-mate");
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "/public"))); 

app.get("/locations", async(req,res)=>{
    const request = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_VPLDzqbsCgF6t2H6PVp4liaQrIxrX&ipAddress=223.187.135.192")  //&ipAddress=8.8.8.8
    const jsonResponse = await request.json()
    let data={};
    data.lat=jsonResponse.location.lat;
    data.lng=jsonResponse.location.lng;
    data.region=jsonResponse.location.region;
    data.city=jsonResponse.location.city;

    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    let countryName = regionNamesInEnglish.of(jsonResponse.location.country);
    data.country =countryName;                                                
    console.log(data);

    const request2 = await fetch(`https://my.api.mockaroo.com/users/${countryName}?key=${apiKey}`) 
    const jsonResponse2 = await request2.json()
    const response = jsonResponse2.slice(0,100);
    res.render("locations/index.ejs",{data,response});
})

app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
})
