import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup_form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signup_form = this.formBuilder.group({
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
