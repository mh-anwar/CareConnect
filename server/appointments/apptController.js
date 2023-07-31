import Appt from './apptModel.js';

async function createAppt(req, res) {
    let appt = req.body;
    // Appt cont. fname, lname, healthcard, dob, phone, email
    console.log(appt);

    try {
        // Create a Appt
        const newAppt = await Appt.create({
            // instantiates a model and populates w/ request
            ...appt,
            notes: '',
        });

        res.send(newAppt);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error occurred while creating the Appt.',
        });
    }
}

async function getAppt() {}

async function updateAppt() {}

async function deleteAppt() {}

export { createAppt, getAppt, updateAppt, deleteAppt };
