import Patient from './patientModel.js';

// Create and Save a new Patient

async function createPatient(req,res) {
    let patient = req.body;
    // patient cont. fname, lname, healthcard, dob, phone, email

    // Create a Patient
    const newPatient = Patient.create({
        ...patient,
        appointments: [],
        prescriptions: [],
        history: [],
        referralCode: null
    });

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