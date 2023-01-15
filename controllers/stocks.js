var {
  Ashokley,
  BSE,
  Cipla,
  Eichermot,
  Nse,
  Reliance,
  Tatasteel,
} = require("../models/models");
const sivasanath = {
  ashokley: Ashokley,
  bse: BSE,
  cipla: Cipla,
  eichermot: Eichermot,
  nse: Nse,
  reliance: Reliance,
  tatasteel: Tatasteel,
};

var express = require("express");
var router = express.Router();
router.get("/ashokley", async (req, res) => {
  let business;
  try {
    business = await Ashokley.find();
  } catch (err) {
    return console.log(err);
  }

  if (!Ashokley) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});
router.get("/bse", async (req, res) => {
  let business;
  try {
    business = await BSE.find();
  } catch (err) {
    return console.log(err);
  }

  if (!BSE) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});
router.get("/cipla", async (req, res) => {
  let business;
  try {
    business = await Cipla.find();
  } catch (err) {
    return console.log(err);
  }

  if (!Cipla) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});
router.get("/eichermot", async (req, res) => {
  let business;
  try {
    business = await Eichermot.find();
  } catch (err) {
    return console.log(err);
  }

  if (!Eichermot) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});
router.get("/nse", async (req, res) => {
  let business;
  try {
    business = await Nse.find();
  } catch (err) {
    return console.log(err);
  }

  if (!Nse) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});
router.get("/reliance", async (req, res) => {
  let business;
  try {
    business = await Reliance.find();
  } catch (err) {
    return console.log(err);
  }

  if (!Reliance) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});
router.get("/tatasteel", async (req, res) => {
  let business;
  try {
    business = await Tatasteel.find();
  } catch (err) {
    return console.log(err);
  }

  if (!Tatasteel) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ business });
});

router.get("/:name/:date", (req, res) => {
  const m = sivasanath[req.params.name];
  const date = req.params.date;
  m.findOne({ Date: date }).then(
    (doc) => {
      res.status(200).send(doc);
    },
    (err) => {
      res.status(400).send({ error: err });
    }
  );
});
router.get("/:name/:date1/:date2", (req, res) => {
  const m = sivasanath[req.params.name];
  const date1 = req.params.date1;
  const date2 = req.params.date2;
  m.find({
    Date: {
      $gte: date1,
      $lte: date2,
    },
  }).then(
    (doc) => {
      console.log(doc);
      res.status(200).send(doc);
    },
    (err) => {
      res.status(400).send({ error: err });
    }
  );
});
router.get("/:name/:date1/:date2/:s", (req, res) => {
  const m = sivasanath[req.params.name];
  const date1 = req.params.date1;
  const date2 = req.params.date2;
  const s = req.params.s;
  m.find({
    Date: {
      $gte: date1,
      $lte: date2,
    },
  })
    .sort(s == -1 ? { High: s } : { Low: s })
    .limit(1)
    .then(
      (doc) => {
        console.log(doc);
        res.status(200).send(doc[0]);
      },
      (err) => {
        res.status(400).send({ error: err });
      }
    );
});
module.exports = { router };
