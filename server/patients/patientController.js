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
}

async function getPatient() {}

async function updatePatient() {}

async function deletePatient() {}

export { createPatient, getPatient, updatePatient, deletePatient };