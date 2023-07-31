import PatientModel from './patientModel.js';

async function createPatient(req, res) {
    let patient = req.body;
    // patient cont. fname, lname, healthcard, dob, phone, email
    console.log(patient);

    try {
        // Create a Patient
        const newPatient = await PatientModel.create({
            // instantiates a model and populates w/ request
            ...patient,
            referralCode: null,
        });

        res.send({ patientId: newPatient.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error occurred while creating the Patient.',
        });
    }
}

async function getPatient(req, res) {
    let patientId = req.query.id;
    console.log(patientId);
    try {
        const user = await PatientModel.findByPk(patientId);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}

async function updatePatient(req, res) {
    let newPatientData = req.body;
    let patientId = req.body.id;

    PatientModel.update(newPatientData, {
        where: { id: patientId },
    })
        .then((updatedRows) => {
            if (updatedRows[0] === 1) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

async function deletePatient(req, res) {
    let patientId = req.query.id;
    console.log(patientId);
    PatientModel.destroy({
        where: { id: patientId },
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

export { createPatient, getPatient, updatePatient, deletePatient };
