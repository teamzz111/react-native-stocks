export type UserRole = 'admin' | 'user';

export type RootStackParamList = {
  MainApp: undefined;
  Login: undefined;
  Register: undefined;
};

export type AdminTabParamList = {
  Dashboard: undefined;
  Users: undefined;
  Settings: undefined;
  AdminProfile: undefined;
};

export type UserTabParamList = {
  Home: undefined;
  Products: undefined;
};
