import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StorageService } from '../services/storage/storage.service';

@Injectable()
export class loggedInInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    public platform: Platform,
    private _storageService: StorageService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.platform.ready().then(async () => {
      this._storageService.getLocalStorage('reference').then(async (dt: string | null) => {
        if (!dt) {
          this._router.navigate(['login'], {});
        }
      });
      return next.handle(req);
    });
    return next.handle(req);
  }
}