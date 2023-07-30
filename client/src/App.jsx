import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Corporate from './Routes/Corporate/Corporate';
import Clinic from './Routes/Clinic/Clinic';
import Patient from './Routes/Patient/Patient';
import Join from './Routes/Join/Join';

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
        element: <Join />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
