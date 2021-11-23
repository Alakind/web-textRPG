import { UserOptions } from './options';

export class User {
    private email: string;

    private username: string;

    private password: string;

    private id: number;

    constructor({
      email, username, password, id,
    }: UserOptions) {
      this.email = email;
      this.username = username;
      this.password = password;
      this.id = id;
    }

    getEmail() {
      return this.email;
    }

    getUsername() {
      return this.username;
    }

    getId() {
      return this.id;
    }

    changeUserame(newUsername: string) {
      this.username = newUsername;
    }
}
