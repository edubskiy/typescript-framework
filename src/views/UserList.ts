import { UserShow } from './UserShow';
import { User, UserProps } from './../models/User';
import { CollectionView } from "./CollectionView";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, parent: Element): void {
    new UserShow(parent, model).render()
  }
}
