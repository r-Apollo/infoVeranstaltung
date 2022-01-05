import EventModel from "../models/event.model.js"
import "../server.js"


const list = async (req, res) => {
    try {
        res.send(await EventModel.find())
    } catch (err) {
        res.status(500).send(err)
    }
}

const create = async (req, res) => {
    const Event = new EventModel(req.body)
    try {
        await Event.save(),
        res.status(201).json(Event)
    } catch (err) {
        res.status(400).json({err})
    }
}

export default { list, create }
