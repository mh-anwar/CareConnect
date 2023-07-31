import express from 'express';
import {
    createPatient,
    getPatient,
    updatePatient,
    deletePatient,
} from './patientController.js';

const PatientRouter = express.Router();

PatientRouter.post('/create', createPatient);
PatientRouter.get('/get', getPatient);
PatientRouter.put('/update', updatePatient);
PatientRouter.delete('/delete', deletePatient);

export default PatientRouter;
