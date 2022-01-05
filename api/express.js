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

//Events
app.use("/api/events", eventRoutes)

//Anmeldung
app.use("/api/anmeldung", anmeldeRoutes)

//Generic 404
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/index.html'))
})

app.listen(process.env.PORT | 8001,  () => {
    console.info(`Api running on http://localhost:${process.env.PORT | 8001}.`)
})
