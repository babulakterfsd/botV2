import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

export default function PrivateRoute({ children }) {
    console.log(children);
    const auth = useAuth();

    return auth ? children : <Navigate to="/login" />;
}
