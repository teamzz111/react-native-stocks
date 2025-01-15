export type User = {
  id: string;
  email: string;
  role: UserRole;
  name: string;
};

export type UserRole = 'user' | 'admin';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  userData: User;
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
};

export type RootStackParamList = {
  MainApp: undefined;
  Login: undefined;
  Register: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Admin: undefined;
  Profile: undefined;
};

export type LoginScreenProps = {
  onLogin?: (credentials: LoginCredentials) => Promise<void>;
};

export type ErrorResponse = {
  message: string;
  code?: string;
};

export type ValidationError = {
  field: keyof LoginCredentials;
  message: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

export type AuthAction =
  | {type: 'SET_USER'; payload: User}
  | {type: 'SET_LOADING'; payload: boolean}
  | {type: 'SET_ERROR'; payload: string | null}
  | {type: 'LOGOUT'};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
