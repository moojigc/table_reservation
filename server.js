const express = require('express');
const path = require('path');
const fs = require('fs');
const Reservation = require('./Reservation')

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitlist = [];

// home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

// all reservations plus waitlist
app.get('/api/reservations', function(req, res) {
    return res.json(reservations);
});
app.get('/api/waitlist', function(req, res) {
    return res.json(waitlist);
})

app.post('/api/reservations', function(req, res) {
    const newTable = req.body;

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    if (reservations > 5) {
        waitlist.push(newTable);
    } else {
        reservations.push(newTable);
    }
    res.sendStatus(201);
})

app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`);
})