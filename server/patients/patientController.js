import Patient from './patientModel.js';

// Create and Save a new Patient

async function createPatient(req,res) {
    // Validate request
    if (!req.body.healthCard) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Patient
    const patient = {
        healthCard: req.body.healthCard,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        appointments: req.body.appointments,
        prescriptions: req.body.prescriptions,
        history: req.body.history,
        referralCode: req.body.referralCode
    };

    // Save Patient in the database
    Patients.create(patient)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Patient."
            });
        });
}

async function getPatient() {}

async function updatePatient() {}

async function deletePatient() {}

export { createPatient, getPatient, updatePatient, deletePatient };