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

const candidates = require("./TechTestJson.json");

app.get("/candidates", (req, res) => {
  const { fromDate, candidate, location } = req.query;
  return dataModule([...candidates], fromDate, candidate, location, req, res);
});

app.get("/candidates/:title", (req, res) => {
  const title = req.params.title;
  const filteredcandidate = candidates.find(
    (candidate) => candidate.title.toLowerCase() === title.toLowerCase()
  );
  res.json(filteredcandidate);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
