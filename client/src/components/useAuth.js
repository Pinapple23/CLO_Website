import { useContext } from 'react';
import { AuthUserContext } from './AuthContext';

export const useAuth = () => {
  return useContext(AuthUserContext);
};
