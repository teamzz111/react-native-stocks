import {useContext} from 'react';
import {AuthContextType} from '../types/auth.types';
import {AuthContext} from '../store/auth-context';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
};
