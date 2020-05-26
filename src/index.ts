import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('User was changed');
})

user.set({ name: 'some new record 2'})

