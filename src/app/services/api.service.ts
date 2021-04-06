import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  async login(email: string, password: string) {
    const data: any = await this.http
      .post('http://api.les-combien.com/api/login', {
        username: email,
        password: password,
      })
      .toPromise();
    console.log(data);
    localStorage.setItem('token', data.apiToken);

    const result = await this.getLoggedInUser();
    console.log(result);
  }

  getLoggedInUser() {
    const token = localStorage.getItem('token');
    const headers = {
      'x-auth-token': token,
    };

    return this.http
      .get('http://api.les-combien.com/api/users/logged_in', {
        headers: headers,
      })
      .toPromise();
  }
}
