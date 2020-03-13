import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ta-totvs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  password: string;
  tokenId: number;
  passwordErrors = [];
  loginErrors = [];

  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  checkLogin(formData) {

    this.authService
      .authenticate(formData['login'], formData['password'])
      .subscribe(
        () => {
          this.router.navigate(['feed', this.authService.getIdfromToken(), 'task-list', this.authService.getIdfromToken()]);
          this.authService.setIdFromToken(this.authService.getIdfromToken());
          if (!formData['rememberUser'])
          {this.authService.removeToken();}
        },
        () => {
          this.passwordErrors = ['Senha e/ou usuário inválido, verifique e tente novamente.'];
          this.loginErrors = ['Senha e/ou usuário inválido, verifique e tente novamente.'];}
      )
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

}
