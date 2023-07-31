import express from 'express';
import {
    createAppt,
    getAppt,
    updateAppt,
    deleteAppt,
} from './apptController.js';
const ApptRouter = express.Router();

ApptRouter.post('/create', createAppt);
ApptRouter.get('/get', getAppt);
ApptRouter.put('/update', updateAppt);
ApptRouter.delete('/delete', deleteAppt);

export default ApptRouter;
