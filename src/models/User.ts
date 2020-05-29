import { Model } from './Model';
import { Attributes } from './Attributes';
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

export class User extends Model<UserProps> {}
