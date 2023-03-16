import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes.js";
import imageRoute from "./routes/imageRoutes.js";
import multer from "multer";
import fs from 'fs'
import uuidv4 from 'uuidv4'

import Image from "./models/imageModel.js";

const app = express();
const DIR = 'images';

const port = process.env.PORT || 5000;
const connecturl =
  "mongodb+srv://hameed381:Y16cs943@cluster0.l6plzgu.mongodb.net/christTheKing?retryWrites=true&w=majority";
mongoose
  .connect(connecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(
        `Database connection Succeeded and server is running on ${port}`
      )
    )
  )
  .catch((err) => console.log(err.message));
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());





app.use("/api/users/", express.static('images'), userRoute);

