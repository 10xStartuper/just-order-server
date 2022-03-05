import dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes/index.js";
import mongoose from "mongoose";
const main = async () => {
  const app = express();

  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qlg2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  app.use("/", routes);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

main().catch((err) => console.log(err));
