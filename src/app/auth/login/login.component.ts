import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  clickMessage = '';
  username = '';
  password = '';

  constructor() {

  }

  ngOnInit(): void {
  }

  onClickMe() {
    let username = this.username;
    let password = this.password;
    let data = { username, password};
    console.log(data)
  }

  onKeyUsername(e: any) {
    this.username = e.target.value;
  }

  onKeyPassword(e: any) {
    this.password = e.target.value;
  }


}
