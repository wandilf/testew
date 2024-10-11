import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private _router: Router, 
    public _authService:AuthService) { }

  sing(platform:string){
    switch(platform){
      case 'g':
        this._authService.googleLogin().subscribe({
          next: async (value: any) => {
            this._router.navigate(['home'], {});
          },
          error: err => {
            console.log('ERROR', err);
          }
        });
        break;
      case 'f':
        this._authService.faceLogin().subscribe({
          next: async (value: any) => {
            this._router.navigate(['home'], {});
          },
          error: err => {
            console.log('ERROR', err);
          }
        });
        break;
    }

  }

}
