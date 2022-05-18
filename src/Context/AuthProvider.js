import React, { createContext } from 'react';
import CustomAuth from '../Hooks/CustomAuth';

export const AuthContext = createContext();
function AuthProvider({ children }) {
    const allContext = CustomAuth();
    return <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
