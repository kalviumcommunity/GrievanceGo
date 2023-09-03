const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const connectDB = require("./DB/DB");
const cors = require("cors");
const { User } = require("./Models/model");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/info", async (req, res) => {
  try {
    const comp = await User.find();
    console.log("comp", comp); //Needs to be removed before deploying
    res.status(200).json(comp);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
});

app.post("/api/addinfo", async (req, res) => {
  const {
    name,
    wardno,
    phoneno,
    arealimit,
    subject,
    department,
    address,
    description,
  } = req.body;

  const dta = await User.create({
    name,
    wardno,
    phoneno,
    arealimit,
    subject,
    department,
    address,
    description,
    createdOn: new Date(),
    resolvedOn: "null",
    status: "In progress",
  });
  const bdta = await User.find();
  res.status(201).json(bdta);
});

app.post("/api/addchat", async (req, res) => {
  const { id, chat } = req.body;

  const dta = await User.updateOne(
    {
      _id: id,
    },
    {
      $push: { chats: chat },
    }
  );

  const dta2 = await User.find();

  res.status(200).send(dta2);
});

app.patch("/api/updatestatus", async (req, res) => {
  const { id } = req.body;

  const dta = await User.updateOne(
    {
      _id: id,
    },
    {
      resolvedOn: new Date(),
      status: "Resolved",
    }
  );

  const dta2 = await User.find();

  res.status(200).send(dta2);
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
