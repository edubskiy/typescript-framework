import { UserProps, User } from './models/User';
import { Collection } from './models/Collection';

const collection = User.buildUserCollection()

collection.on('change', () => {
  console.log(collection);
})

collection.fetch()
