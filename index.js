import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Iryna:mZfWWrg3MQeNVE47@cluster0.kvrgbpo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => 
    console.log("DB ok")
  ).catch((error) => console.log('DB error', error));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Vasya",
    },
    "secret123"
  );
  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (error) => {
  if (error) {
    return console.log(error.message);
  }
  console.log("Server OK");
});
