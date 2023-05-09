import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", { error });
  });

const app = express();
app.use(express.json());

app.use(router);

// app.get("/dodajSlike", (req, res) => {
//   csv()
//     .fromFile("C:/Users/milica/Desktop/Elfak/SOA/SOA I projekat/dataset.csv")
//     .then((jsonObj) => {
//       try {
//         Model.insertMany(jsonObj);
//         res.status(200).json("success");
//       } catch (err) {
//         console.log("err ", err);
//         res.status(500);
//       }
//     });
// });

app.listen(8080, () => {
  console.log("Server is listening on port 8080.");
});
