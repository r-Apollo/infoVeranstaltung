import mongoose from "mongoose";

const anmeldungSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true,
        required: "Es muss ein Name angegeben werden."
    }, 
    Nachname: {
        type: String,
        trim: true,
        required: "Es muss ein Nachname angegeben werden."
    },
    Email: {
        type: String,
        trim: true,
        required: "Es muss eine Email angegeben werden."
    },
    Personen: {
        type: Number,
        required: "Es muss eine Personenzahl angegeben werden."
    }
});

const AnmeldungsModel = mongoose.model("Anmeldungen", anmeldungSchema);

export default AnmeldungsModel;
