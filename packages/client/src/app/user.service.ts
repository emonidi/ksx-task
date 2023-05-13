import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  token: string;
}

export interface Credentials {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User | null;
  public baseUrl = 'https://dummyjson.com/users'
  constructor() {
    const savedUser = window.localStorage.getItem('user');
    this.user = savedUser ? JSON.parse(savedUser) : null;
  }
  async login(credentials: Credentials): Promise<unknown> {
    const request = await fetch(`${this.baseUrl}/filter?key=username&value=${credentials.username}`);
    const { users } = await request.json();

    if (users.length === 1 && users.at(0).username === credentials.username && users.at(0).password === credentials.password) {
      this.user = users.at(0);
      window.localStorage.setItem('user',JSON.stringify(this.user));
      return true;
    } else {
      throw new Error("Username or password is wrong")
    }
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  logout():void{
    this.user = null;
    window.localStorage.removeItem('user')
  }

}
