import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.login_form = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {

  }

  onSubmit(data): void {
    console.log(data)
  }
}
