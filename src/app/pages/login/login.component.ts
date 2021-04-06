import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {}

  validate() {
    // console.log(this.email, this.password);
    this.apiService.login(this.email, this.password);
  }
}
