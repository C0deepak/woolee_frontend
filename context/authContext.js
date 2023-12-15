'use client'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { push } = useRouter();
    const path = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(getStoredUser());

    function getStoredUser() {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('wuser');
            return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    }

    useEffect(() => {
        const storedUser = getStoredUser();
        if (storedUser) {
            setIsLoggedIn(true);
            setUser(storedUser);
        }
    }, []);

    const login = (userData) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('wuser', JSON.stringify(userData));
            setUser(userData);
            setIsLoggedIn(true);
            push('/');
        }
    };

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('wuser');
            setUser(null);
            setIsLoggedIn(false);

            if (path !== '/marketplace' && path !== '/resources') {
                push('/')
            }
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
