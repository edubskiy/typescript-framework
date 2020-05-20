import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

const URL = 'http://localhost:3000/users/';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
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
