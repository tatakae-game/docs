import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.login_form = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {

  }

  onSubmit(data): void {
    this.authService.login(data.username, data.password).pipe(first()).subscribe(
      res => {
        if (res?.success) {
          this.router.navigate(['/']);
        } else if (res?.errors) {
          console.log(res.errors)
        }
      },
      error => {
        console.log(error)
      }
    );
  }
}
