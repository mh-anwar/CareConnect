import express from 'express';

import { createHCP, deleteHCP, getHCP, updateHCP } from './hcpController.js';

const HCPRouter = express.Router();

HCPRouter.post('/create', createHCP);
HCPRouter.get('/get', getHCP);
HCPRouter.put('/update', updateHCP);
HCPRouter.delete('/delete', deleteHCP);

export default HCPRouter;
