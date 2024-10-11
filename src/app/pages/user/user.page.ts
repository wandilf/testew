import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userI } from 'src/app/interfaces/user';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  public title = 'Perfil';
  public user:userI|null = null;

  constructor(    
    private _router: Router, 
    private _storageService: StorageService,
    private _firestoreService: FirestoreService) { }

  ionViewWillEnter() {
    this._firestoreService.getUser().subscribe({
      next: async (value: any) => {
        console.log('USER', value);
        this.user = value;
      },
      error: err => {
        console.log('ERROR', err);
      }
    });
  }


  singOut(){
    this._storageService.deleteLocalStorage('reference');
    this._router.navigate(['login'], {});
  }

}
