import express from "express";
import routes from "./routes/index.js";

const main = async () => {
  const app = express();

  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/", routes);

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

main().catch((err) => console.log(err));
