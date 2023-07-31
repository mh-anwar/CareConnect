import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Corporate from './Routes/Corporate/Corporate';
import Clinic from './Routes/Clinic/Clinic';
import Patient from './Routes/Patient/Patient';
import JoinRouter from './Routes/Join/JoinRouter';
import PatientJoin from './Routes/Join/PatientJoin';
import CreateAppointment from './Routes/Patient/CreateAppointment/CreateAppointment';
import HCPJoin from './Routes/Join/HCPJoin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Corporate />,
    },
    {
        path: 'clinic',
        element: <Clinic />,
    },
    {
        path: 'patient',
        element: <Patient />,
    },
    {
        path: 'join',
        element: <JoinRouter />,
    },
    {
        path: 'join/patient',
        element: <PatientJoin />,
    },
    {
        path: 'join/hcp',
        element: <HCPJoin />,
    },
    {
        path: 'patient/create-appointment',
        element: <CreateAppointment />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
