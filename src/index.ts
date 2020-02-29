import { User } from './models/User';

const user = new User({ id: 1 });


user.set({ name: 'NEW NAME', age: 99 });
user.save();
