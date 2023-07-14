const express = require('express');
const path = require("path");
const hbs = require("hbs");
const app = express();
// new fs
const fs = require('fs');
// const dat = fs.readFileSync("../textFiles/hello.txt");
// const causesDat = fs.readFileSync("../textFiles/causes.txt");
// const shapingDat = fs.readFileSync("../textFiles/shaping.txt");



const port = process.env.PORT || 8000;


const staticPath = path.join(__dirname, "../public");


const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partial_path);

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("/weatherinfo", (req, res) => {
    res.render("weatherInfo", {
        wiki: dat,
        causeswiki: causesDat,
        shaping: shapingDat
    });
})
app.get("/overpage", (req, res) => {
    res.render("overpage");
})

app.get("*", (req, res) => {
    res.render("404error");
})
app.listen(port, () => {
    console.log("done bro")
})

