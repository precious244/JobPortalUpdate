import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-topbar-home',
  templateUrl: './topbar-home.component.html',
  styleUrls: ['./topbar-home.component.scss']
})
export class TopbarHomeComponent implements OnInit {

  userData: any = {};

  constructor(
    public readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
  }

  logout() {
    this.authService.logOut()
  }

  submitRegister() {
    this.router.navigate(["sign-up"]);
  }

  submitLogin() {
    this.router.navigate(["login"]);
  }

}
