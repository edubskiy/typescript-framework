import axios, { AxiosResponse } from 'axios';

const URL = 'http://localhost:3000/users/';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: {[key: string]: Callback[]} = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, fn: Callback): void {
    const handlers = this.events[eventName] || [];

    handlers.push(fn);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if ( ! handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`${URL}${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${URL}${id}`, this.data);
    } else {
      axios.post(`${URL}`, this.data);
    }
  }
}
