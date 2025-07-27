const express = require("express");
const app = express();
require("dotenv").config({
  path: require("path").join(__dirname, "..", ".env"),
});
const databaseConnect = require("./MongoDB/databaseConnect");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
const Drug = require("./MongoDB/drugSchema");
const fs = require("fs");
const path = require("path");
const drugRouter = require("./Routes/drugRouter");

databaseConnect();

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});

app.use("/", drugRouter);
