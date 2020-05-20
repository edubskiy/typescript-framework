import { Sync } from './Sync';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

const URL = 'http://localhost:3000/users/';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
}
