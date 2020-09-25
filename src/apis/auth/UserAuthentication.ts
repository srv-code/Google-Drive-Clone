import { UserDetails } from '../../interfaces/commons';

// TODO make real API call
// Sample user login authentication
export const userLogin = (
  name: string,
  password: string
): UserDetails | undefined => {
  return name === 'sourav' && password === '123'
    ? { tokenId: '72sdh7dg8ybv7rtcqe', firstName: 'Sourav', lastName: 'Dey' }
    : undefined;
};
