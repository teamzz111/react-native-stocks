import {AuthResponse, LoginCredentials, User} from '../types/auth.types';

const mockUsers = [
  {
    id: '1',
    email: 'admin@test.com',
    password: 'admin123',
    role: 'admin' as const,
    name: 'Admin User',
  },
  {
    id: '2',
    email: 'user@test.com',
    password: 'user123',
    role: 'user' as const,
    name: 'Normal User',
  },
];

const mockDelay = (ms: number = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function loginAPI(
  credentials: LoginCredentials,
): Promise<AuthResponse> {
  await mockDelay();

  const user = mockUsers.find(u => u.email === credentials.email);

  if (!user || user.password !== credentials.password) {
    throw new Error('Invalid credentials');
  }

  const {...userData} = user;
  const mockToken = `mock-token-${userData.id}-${Date.now()}`;

  return {
    token: mockToken,
    userData,
  };
}

export async function validateToken(token: string): Promise<User> {
  await mockDelay(500);

  if (!token.startsWith('mock-token-')) {
    throw new Error('Token inválido');
  }

  const userId = token.split('-')[2];
  const user = mockUsers.find(u => u.id === userId);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const {...userData} = user;
  return userData;
}
