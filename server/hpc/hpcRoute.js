import express from 'express';

import { createHPC, deleteHPC, getHPC, updateHPC } from './hpcController.js';

const HPCRouter = express.Router();

HPCRouter.post('/create', createHPC);
HPCRouter.get('/get', getHPC);
HPCRouter.put('/update', updateHPC);
HPCRouter.delete('/delete', deleteHPC);

export default HPCRouter;
