import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, Platform } from '@ionic/angular';
import { postI } from 'src/app/interfaces/post';
import { userI } from 'src/app/interfaces/user';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { HttpService } from 'src/app/services/request/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public title = 'Bem vindo';

  public allPosts: Array<postI> | null = null;
  
  public slice: number = 10;

  constructor(  
    private _httpService:HttpService,
    private _router: Router,
    public platform: Platform,
    private _firestoreService: FirestoreService) {
    

  }

  ionViewWillEnter() {

    this._httpService.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: async (value: Array<postI>) => {
        this.allPosts = value;
      },
      error: err => {
        console.log('ERROR', err);
      }
    });
    this._firestoreService.getUser().subscribe({
      next: async (value: userI | null) => {
        if(value) {
          
          this.title = 'Ola ' + value.name?.split(' ')[0];
        }
        console.log('USER', value);
      },
      error: err => {
        console.log('ERROR', err);
      }
    });
  }

  goToIndex(postIn:postI){
    this._router.navigate(['post-index'], {
      state: {post: postIn}
    } );
  }


  doInfinite(ev:any) {
    setTimeout(() => {
      this.slice += 5;
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 600);
    
  }

}
