import { Collection } from './Collection';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { SyncAPI } from './Sync';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

const URL = 'http://localhost:3000/users/';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static build(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new SyncAPI<UserProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.build(json),
    );
  }
}
