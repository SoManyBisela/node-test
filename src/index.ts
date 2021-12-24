import express, { Router } from "express";


const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

app.listen(10001, () => {
    console.log("listening");
})