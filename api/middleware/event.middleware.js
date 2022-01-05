const validatePostRequest = (req, res, next) => {
    //Checks if data is given
    if (!req.body.Datum) return res.status(400).json({error: "Es muss ein Datum angegeben werden."});
    if (!req.body.Uhrzeit) return res.status(400).json({error: "Es muss eine Uhrzeit angegeben werden."});

    //Checks if Date is possible
    if (req.body.Datum < new Date) return res.status(400).json({error: "Du kannst keine Events für die Vergangenheit planen."});

    next();
}

//TODO Add middleware for update so that the user who registers himself actually does exist in the users db.

export default { validatePostRequest };
