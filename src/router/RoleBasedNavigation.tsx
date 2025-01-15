import React from 'react';
import {useAuth} from '../hooks/useAuth';
import UserNavigator from './UserNavigation';
import {AdminNavigation} from './AdminNavigation';

export const RoleBasedNavigator: React.FC = () => {
  const {user} = useAuth();

  if (user?.role === 'admin') {
    return <AdminNavigation />;
  }

  return <UserNavigator />;
};
