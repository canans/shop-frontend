import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Users } from '../common/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    });
  constructor(private fb:FormBuilder) { }
    user:Users;
  ngOnInit(): void {
  }
  onSubmit() {
    this.user = this.loginForm.value;
    console.log(this.user)
  }

}
