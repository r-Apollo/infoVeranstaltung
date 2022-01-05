import express from "express";
import eventRoutes from "./routes/event.routes.js";
import anmeldeRoutes from "./routes/anmeldung.routes.js"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/events", eventRoutes)

app.use("/api/anmeldung", anmeldeRoutes)

app.listen(process.env.PORT | 8001,  () => {
    console.info(`Api running on http://localhost:${process.env.PORT | 8001}.`)
})
