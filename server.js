const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
// const Reservation = require('./Reservation')

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const reservations = [
    {
        routeName: "moojig",
        name: "Moojig",
        phone: "555-555-5555",
        id: 321
    }
];
const waitlist = [
    {
        routeName: "sebastian",
        name: "Sebastian",
        phone: "333-333-3333",
        id: 123
    }
];

// home page
app.get('/:page', function(req, res) {
    const chosen = req.params.page;

    if (!chosen) {
        res.sendFile(path.join(__dirname, "index.html"));
    } else {
        res.sendFile(path.join(__dirname, chosen));
    }
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
    // 201 means Created
    res.sendStatus(201);
})

app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`);
})