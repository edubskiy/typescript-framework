import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.build({ name: 'name', age: 30})
const root = document.getElementById('root')
if (root != null) {
  const userForm = new UserForm(root, user)
  userForm.render()
} else {
  throw new Error('No element with root id was found')
}

