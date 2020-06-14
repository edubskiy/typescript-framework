import { UserProps, User } from './models/User';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users', 
  (json: UserProps) => {
    return User.build(json)
  }
)

users.on('change', () => {
  const root = document.getElementById('root')

  if (root != null) {
    new UserList(root, users).render()
  }
})

users.fetch()
