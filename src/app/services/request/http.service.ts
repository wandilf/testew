import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Platform} from "@ionic/angular";
import {map, Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class HttpService {
  constructor(private _httm : HttpClient, public platform : Platform) {}

  get(endpoint : string, payloadData? : object | any): Observable<any> {
    return new Observable((obs) => {
      this.platform.ready().then(async () => {

        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        const options = {
          headers: headers
        };


        this._httm.get(endpoint, payloadData).pipe(map((res : any) => res)).subscribe({
          next: (value : any) => {
            obs.next(value);
            obs.complete();
          },
          error: (err : HttpErrorResponse) => {
            console.log(err.name);
            console.log(typeof err);
            console.log(err);
            obs.error(err);
            obs.complete();
          },
          complete: () => {}
        });
      });
    });
  }
}
