import express from 'express';
import { getPatient, createPatient } from './patientController.js';

const PatientRouter = express.Router();

PatientRouter.post('/create',createMeeting)
PatientRouter.get('/get',getMeeting)

export default PatientRouter;