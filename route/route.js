import express from "express";
import { getParamData } from "../controllers/getParamData.js"
import { getQueryData } from "../controllers/getQueryData.js"

export const apiRouter = express.Router();

apiRouter.get("/", getQueryData);
apiRouter.get("/:field/:name", getParamData)
