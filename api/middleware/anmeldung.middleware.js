import EventModel from "../models/event.model.js"

const emailInAnmeldungen = (Anmeldungen, Email) => {
    let emailInAnmeldungen = false
    Anmeldungen.forEach(anmeldung => {
        if (anmeldung.Email == Email) emailInAnmeldungen = true
    }) 
    return emailInAnmeldungen
}

const checkIfAlreadyRegistered = async (req, res, next) => {
    const Event = await EventModel.findById(req.params.eventID)
    console.log(Event)
    if (emailInAnmeldungen(Event.Anmeldungen, req.body.Email)) return res.status(400).json({error: "Diese Email ist bereits registriert"})
    next()
}

export default { checkIfAlreadyRegistered }
