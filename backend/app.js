const express = require("express");
const app = express();

const Port = 3000;

const { products } = require("./data");

console.log(products);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/api", (req, res) => {
    res.send("api is working");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(Port, () => {
    console.log(`server is running at port ${Port}`);
});