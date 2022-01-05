import express from "express";
import eventCtrl from "../controllers/event.controller.js";
import eventMiddleware from "../middleware/event.middleware.js";

const router = express.Router()

router.param("password", (req, res, next, id) => {
    if(id != process.env.API_PASSWORD) return res.status(401).json({error: "Du hast nicht die nötigen Rechte dies zu tun."})
    next()
})

router.route("/api/events")
    .get(eventCtrl.list);


router.post("/api/events/:password", eventMiddleware.validateRequest, eventCtrl.create)


export default router;
