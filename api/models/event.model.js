import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    Datum: {
        type: Date,
        required: "Es muss ein Datum angegeben werden."
    },
    Uhrzeit: {
        type: String,
        trim: true,
        required: "Es muss eine Uhrzeit angegeben werden."
    },
    Anmeldungen: {
        type: Array,
        default: []
    }
});

const EventModel = mongoose.model("Event", eventSchema);

export default EventModel;
