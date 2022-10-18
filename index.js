const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Using CORS
app.use(cors());

// Getting Categories
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("News server is running...");
});

// Sending Categories data
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Dragon News server is running on PORT: ", port);
});
