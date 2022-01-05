import express from "express";
import anmeldeCtrl from "../controllers/anmeldung.controller.js";
import EventModel from "../models/event.model.js";
import anmeldungMiddleware from "../middleware/anmeldung.middleware.js";

const router = express.Router();

//Checks if event exists
router.param("eventID", async (req, res, next, id) => {
    try {
        await EventModel.find({_id: id})
    } catch (err) {
        return res.status(400).json({error: "Das von Ihnen angefragte Event existiert nicht."})
    }
    next()
})

//Checks for permission
router.param("password", (req, res, next, password) => {
    if(password != process.env.API_PASSWORD) return res.status(401).json({error: "Du hast nicht die nötigen Rechte dies zu tun."})
    next()
})

router.get("/", anmeldeCtrl.list)

router.post("/:password/:eventID", anmeldungMiddleware.checkIfAlreadyRegistered, anmeldeCtrl.create)

export default router
