import AnmeldungsModel from "../models/anmeldung.model.js";
import EventModel from "../models/event.model.js"

const list = async (req, res) => {
    try {
        res.send(await AnmeldungsModel.find({}))
    } catch (err) {
        res.status(500).json({error: err})
    }
}

const create = async (req, res) => {
    try {
        const Anmeldung = new AnmeldungsModel(req.body)
        await Anmeldung.save()
        await EventModel.updateOne({_id: req.params.eventID},
            {$push: {Anmeldungen: [Anmeldung]}})
        res.status(201).json(Anmeldung)
    } catch (err) {
        res.status(500).json({error: err})
    }
}

export default { list, create }
