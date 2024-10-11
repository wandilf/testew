import { Injectable } from '@angular/core';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { FirestoreService } from './firestore.service';
import { userI } from 'src/app/interfaces/user';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _firestoreService: FirestoreService,
    public platform: Platform,
  ) { }

  public googleLogin(): Observable<boolean> {
    return new Observable((obs) => {
      this.platform.ready().then(async () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        await signInWithPopup(auth, provider)
          .then(async (result) => {
            const credential: any = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            let userIn: userI = {
              name: user.displayName,
              socialName: '',
              email: user.email,
              photoURL: user.photoURL,
              token: token
            };

            await this._firestoreService.setUser(userIn).then((dat) => {
              obs.next(true);
              obs.complete();
            });

          }).catch((error) => {
            obs.next(false);
            obs.complete();
          });
      }).catch((error) => {
        obs.next(false);
        obs.complete();

      });
    });
  }


  public faceLogin(): Observable<boolean> {
    return new Observable((obs) => {
      this.platform.ready().then(async () => {
        const provider = new FacebookAuthProvider();

        provider.setCustomParameters({ display: 'popup' });

        const auth = getAuth();
        await signInWithPopup(auth, provider)
          .then(async (result: any) => {
            const user = result.user;
            const credential: any = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            let userIn: userI = {
              name: user.displayName,
              socialName: '',
              email: user.email,
              photoURL: user.photoURL,
              token: accessToken
            };

            await this._firestoreService.setUser(userIn).then((dat) => {
              obs.next(true);
              obs.complete();
            });

          })
          .catch((error) => {
            obs.next(false);
            obs.complete();
          });
      });
    });
  }


}
