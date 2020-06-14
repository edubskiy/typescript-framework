import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.build({ name: 'name', age: 30})
const root = document.getElementById('root')
if (root != null) {
  const userEdit = new UserEdit(root, user)
  userEdit.render()
  console.log(userEdit);
} else {
  throw new Error('No element with root id was found')
}

