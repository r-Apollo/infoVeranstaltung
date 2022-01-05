import express from "express";
import eventRoutes from "./routes/event.routes.js";
import anmeldeRoutes from "./routes/anmeldung.routes.js"
import cors from "cors";
import dotenv from "dotenv";
import "./server.js"
import path from 'path';

dotenv.config();
const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/events", eventRoutes)

app.use("/api/anmeldung", anmeldeRoutes)

app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/index.html'))
})

app.listen(process.env.PORT | 8001,  () => {
    console.info(`Api running on http://localhost:${process.env.PORT | 8001}.`)
})
