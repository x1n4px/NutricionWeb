import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';

  constructor(private router: Router, private admin: AdminService){}

  formS() {
    console.log(this.login);

    if (this.login == 'password') {
       this.admin.save(true);

    }

    this.router.navigate(['']);
  }
}
