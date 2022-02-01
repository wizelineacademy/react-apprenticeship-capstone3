import React, { useEffect, useState, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsuario(user);
                setIsAuthenticated(true);
                console.log('Si');
            } else {
                setUsuario(null);
                setIsAuthenticated(false);
                console.log('No');
            }
        }
        )
    }, []);


    const value = { usuario, isAuthenticated }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('Error using context');
    }
    return context;
}




