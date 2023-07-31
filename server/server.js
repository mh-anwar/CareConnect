import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import PatientRouter from './patients/patientRoute.js';
import ApptRouter from './appointments/apptRoute.js';
import HPCRouter from './hpc/hpcRoute.js';

const allowedOrigins = ['http://localhost:5173', undefined]; // TODO In prod, remove undefined (it lets Postman work)
const corsOptions = {
    origin: (origin, callback) => {
        console.log('Request from: ' + origin);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            // If the origin is not allowed, reject the request
            callback(new Error('Not allowed by CORS'));
        }
    },
};

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

// Attach middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/patient', PatientRouter);
app.use('/hpc', HPCRouter);
app.use('/appt', ApptRouter);
