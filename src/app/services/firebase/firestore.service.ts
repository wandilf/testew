import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { Platform } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { userI } from 'src/app/interfaces/user';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _storageService: StorageService,
    public platform: Platform) {
  }

  public async initializeFirebase(): Promise<void> {
    this.platform.ready().then(async () => {
      if (this.platform.is('capacitor')) {
        return;
      }
      await initializeApp(environment.firebase);
      return 'ok';
    });
  }

  public getUser(): Observable<userI | null> {
    return new Observable((obs) => {
      this.platform.ready().then(async () => {
        this._storageService.getLocalStorage('reference').then(async (dt: string | null) => {

          if (dt) {
            console.log(dt)

            await FirebaseFirestore.getDocument({
              reference: dt!,
            }).then((dtFire) => {
              console.log(dtFire.snapshot.data)
              obs.next(dtFire.snapshot.data! as userI);
              obs.complete();
            }).catch((error) => {
              obs.next(null);
              obs.complete();
            });


          }
        });
      });
    });
  }

  public deleteUser(): Observable<boolean> {
    return new Observable((obs) => {
      this.platform.ready().then(async () => {
        this._storageService.getLocalStorage('reference').then(async (dt: string | null) => {
          await FirebaseFirestore.deleteDocument({
            reference: dt!,
          }).then((dtFire) => {
            obs.next(true);
            obs.complete();
          }).catch((error) => {
            obs.next(false);
            obs.complete();
          });
        });
      });
    });
  }

  public async setUser(user: userI): Promise<userI | null> {
    await this.platform.ready().then(async () => {

      await this._storageService.getLocalStorage('reference').then(async (dt: string | null) => {
        if (!dt) {
          await FirebaseFirestore.addDocument({
            reference: 'users',
            data: user,
          }).then(async dat => {
            console.log("data DOC", dat)
            this._storageService.newUpdateLocalStorage('reference', dat.reference.path);
            return dat.reference.path;
          });
        }
        await FirebaseFirestore.setDocument({
          reference: dt!,
          data: user,
          merge: false,
        });
        return dt;
      });

    });

    return null;
  };

}
