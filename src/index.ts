import { User } from './models/User';

const user = new User({ name: 'Sam', age: 22});

user.on('change', () => {
  console.log("change 1");
});

user.on('change', () => {
  console.log("change 2");
});

user.on('save', () => {
  console.log("save");
});

user.trigger('change');
user.trigger('save');
