import express from 'express';
import { getPatient, createPatient } from './patientController.js';

const PatientRouter = express.Router();

PatientRouter.post('/create', createPatient);
PatientRouter.get('/get', getPatient);

export default PatientRouter;
