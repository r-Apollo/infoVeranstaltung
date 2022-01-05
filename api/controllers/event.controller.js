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
    try {
        const Event = new EventModel(req.body)
        await Event.save(),
        res.status(201).json(Event)
    } catch (err) {
        res.status(500).json({err})
    }
}

const update = async (req, res) => {
    try {
        if (req.body.Datum) await EventModel.updateOne({_id: req.params.eventID}, {Datum: req.body.Datum})
        if (req.body.Uhrzeit) await EventModel.updateOne({_id: req.params.eventID}, {Uhrzeit: req.body.Uhrzeit})

        //Adds a registration to the Anmeldungen Array
        if (req.body.Anmeldung) {
            await EventModel.updateOne(
                {_id: req.params.eventID}, 
                {$push: {Anmeldungen: [req.body.Anmeldung]}}
            )
        }
        res.status(201).json(await EventModel.findById(req.params.eventID))
    } catch (err) {
        res.status(500).json({err})
    }
}

const remove = async (req, res) => {
    try {
        const Event = await EventModel.findOneAndDelete({_id: req.params.eventID})
        res.status(200).json(Event)
    } catch (err) {
        res.status(500).json({err})
    }
}

export default { list, create, update, remove }
