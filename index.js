import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req,res)=>{
    res.render("index.ejs");
});

app.get('/pricing', (req, res)=>{
    res.render("pricing.ejs");
});

app.get('/flight', (req, res)=>{
    res.render("flightTicket.ejs");
});

app.get('/passport', (req, res)=>{
    res.render("passport.ejs");
});

app.get('/visa', (req, res)=>{
    res.render("visa.ejs");
});

app.get('/hotelbooking', (req, res)=>{
    res.render("hotelBook.ejs");
});

app.get('/businessTrip', (req, res)=>{
    res.render("businessTrip.ejs");
});

app.get('/familyVacation', (req, res)=>{
    res.render("familyVacation.ejs");
});

app.get('/conference', (req, res)=>{
    res.render("conference.ejs");
});

app.get('/seminar', (req, res)=>{
    res.render("seminar.ejs");
});

app.get('/training', (req, res)=>{
    res.render("training.ejs");
});

app.get('/tour', (req, res)=>{
    res.render("tour.ejs");
});

app.get('/cruise', (req, res)=>{
    res.render("cruise.ejs");
});

app.get('/holiday', (req, res)=>{
    res.render("holiday.ejs");
});

app.listen(port, ()=>{
    console.log("Server is listening on Port: " + port);
});