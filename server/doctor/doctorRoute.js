import express from 'express';
import {
    createDoc,
    deleteDoc,
    getDoc,
    getDocByHCP,
    updateDoc,
} from './doctorController.js';
const DocRouter = express.Router();

DocRouter.post('/create', createDoc);
DocRouter.get('/get', getDoc);
DocRouter.get('/getByHcp', getDocByHCP);
DocRouter.put('/update', updateDoc);
DocRouter.delete('/delete', deleteDoc);

export default DocRouter;
