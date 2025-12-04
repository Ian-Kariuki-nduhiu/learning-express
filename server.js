import express from "express";
import { apiRouter } from "./route/route.js";
import cors from "cors";

const app = express(); //assigning instance of express to app

const PORT = 8000;

app.use(cors()); //open policy, open to any frontend calling our api
app.use("/api", apiRouter);
app.use((req, res) => {
  res
    .status(400)
    .json({ message: "Endpoint not found. Please read the API documentation" });
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}.`);
});
