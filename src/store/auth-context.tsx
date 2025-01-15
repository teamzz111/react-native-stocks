import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {
  AuthContextType,
  AuthResponse,
  LoginCredentials,
  User,
} from '../types/auth.types';
import {loginAPI, validateToken} from '../services/auth.service';

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async (): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const userData = await validateToken(token);
        setUser(userData);
      }
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      const response: AuthResponse = await loginAPI(credentials);
      const {token, userData} = response;
      await AsyncStorage.setItem('userToken', token);
      setUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
