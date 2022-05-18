import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

export default function PrivateRoute({ children }) {
    const auth = useAuth();
    console.log(auth);
    return auth ? children : <Navigate to="/login" />;
}
