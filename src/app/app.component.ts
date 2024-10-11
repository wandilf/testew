import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StorageService } from './services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public log:boolean = false;
  constructor(
    private _router: Router,
    public platform: Platform,
    private _storageService: StorageService,
  ) {
    this.platform.ready().then(async () => {


      if (this.platform.is("capacitor")) {
        this._storageService.newUpdateLocalStorage('reference','users/pI9z5v4go5M72laGjGgQ');
          this._router.navigate(['login'], {});
      }
  
      this._storageService.getLocalStorage('reference').then(async (dt: string | null) => {
        if (!dt) {
          this._router.navigate(['login'], {});
          return;
        }
        this.log = true;
        return;
      });

    });
  }
}
