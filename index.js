const dataModule = require("./modules/data");
const express = require("express");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 5000;

const jsonData = require("../TechTestJson.json");

app.get("/data", (req, res) => {
  const { fromDate, candidate, location } = req.query;
  return dataModule([...jsonData], fromDate, candidate, location, req, res);
});

app.get("/data/:Title", (req, res) => {
  const title = req.params.Title;
  const filteredData = jsonData.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
