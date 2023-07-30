import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import PatientRouter from './patients/patientRoute.js';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/patient', PatientRouter);
