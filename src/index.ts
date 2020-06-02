import { UserProps, User } from './models/User';
import { Collection } from './models/Collection';
const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.build(json)
)

collection.on('change', () => {
  console.log(collection);
})

collection.fetch()
