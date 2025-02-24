const express = require("express");
const cors = require("cors");
const tree_model = require("treeModel");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.use(cors());

app.get("/", (req, res) => {
  tree_model
    .getNodes()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book 2",
    },
    {
      id: "2",
      title: "Book 7",
    },
    {
      id: "3",
      title: "Book 3",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
