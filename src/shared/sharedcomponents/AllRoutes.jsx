import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomLoginTest from '../../pages/CustomLoginTest';
import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';

function AllRoutes() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login2" element={<CustomLoginTest />} />
                {/* <Route path="/register" element={<Register />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default AllRoutes;
