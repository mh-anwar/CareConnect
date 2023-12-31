import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Corporate from './Routes/Corporate/Corporate';
import Clinic from './Routes/HCP/HCP';
import FindDoctor from './Routes/Patient/FindDoctor/FindDoctor';
import NotFound from './Routes/NotFound/NotFound';
import Patient from './Routes/Patient/Patient';
import JoinRouter from './Routes/Join/JoinRouter';
import PatientJoin from './Routes/Join/PatientJoin';
import CreateAppointment from './Routes/Patient/CreateAppointment/CreateAppointment';
import HCPJoin from './Routes/Join/HCPJoin';
import HCP from './Routes/HCP/HCP';
import ManageSchedule from './Routes/HCP/Schedule/ManageSchedule';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Corporate />,
    },
    {
        path: 'hcp',
        element: <HCP />,
    },
    {
        path: 'hcp/manage-schedule',
        element: <ManageSchedule />,
    },
    {
        path: 'patient',
        element: <Patient />,
    },
    {
        path: 'patient/create-appointment',
        element: <CreateAppointment />,
    },
    {
        path: 'patient/find-doctor',
        element: <FindDoctor />,
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
        path: '*',
        element: <NotFound />,
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
