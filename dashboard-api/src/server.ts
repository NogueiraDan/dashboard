import express from "express";
import { router } from "./router";
import { config } from "dotenv";
import { connectDatabase } from "./database/db.config";

config();
connectDatabase();
export const app = express();
export const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
