import { User } from '../../classes';

const fetchUser = () => User({
  email: 'email@email.com',
  username: 'testUsername',
  id: 1,
});

const services = {
  fetchUser,
};

export default services;
