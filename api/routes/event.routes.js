import express from "express";
import eventCtrl from "../controllers/event.controller.js";
import eventMiddleware from "../middleware/event.middleware.js";
import EventModel from "../models/event.model.js"

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

router.get(("/api/events"), eventCtrl.list);

router.post("/api/events/:password", eventMiddleware.validatePostRequest, eventCtrl.create)

router.patch("/api/events/:password/:eventID", eventCtrl.update)

router.delete("/api/events/:password/:eventID", eventCtrl.remove)


export default router;
