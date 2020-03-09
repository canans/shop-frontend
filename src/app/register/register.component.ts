import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Users } from '../common/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  registerForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  });
  user:Users
  ngOnInit(): void {
  }
  onSubmit() {
    this.user = this.registerForm.value;
    console.log(this.user)
  }
}
