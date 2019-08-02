const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/feature-flags", function(req, res) {
  res.send({
    weatherReports: true
  });
});

app.get("/tabs", function(req, res) {
  res.send([
    {
      id: 1,
      name: "Tab of Kindness"
    },
    {
      id: 2,
      name: "Tab of Happiness"
    },
    {
      id: 3,
      name: "Tab of Wisdom"
    }
  ]);
});

const tabIdToPanels = {
  1: [
    {
      type: "singleValue",
      value: 60
    },
    {
      type: "text",
      value: "Bez ochoty niespore roboty."
    },
    {
      type: "animal",
      value: "cat"
    },
    {
      type: "weather",
      place: "Warsaw",
      isOkay: true
    }
  ],
  2: [
    {
      type: "singleValue",
      value: 100
    },
    {
      type: "text",
      value: "Czym chata bogata, tym gościowi rada."
    },
    {
      type: "animal",
      value: "dog"
    },
    {
      type: "weather",
      place: "Yakutsk, Siberia",
      isOkay: false
    }
  ],
  3: [
    {
      type: "singleValue",
      value: 20
    },
    {
      type: "text",
      value: "Bęben dlatego tak głośny, bo próżny."
    },
    {
      type: "animal",
      value: "turtle"
    },
    {
      type: "weather",
      place: "Minsk",
      isOkay: true
    }
  ]
};

app.get("/tab/:id", function(req, res) {
  res.send(tabIdToPanels[req.params.id]);
});

app.get("/", function(req, res) {
  res.send({ message: "Hello World!" });
});

const port = process.env.PORT || 3000;

app.listen(port);

console.log("Listening on localhost:" + port);
