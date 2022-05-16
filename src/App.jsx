import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AllRoutes from './shared/sharedcomponents/AllRoutes';
import './styles/App.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AllRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
