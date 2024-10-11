import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public nameStorageBrand: string = environment.appName + '_';

  constructor( ) {
  }

  private _decrypt(data: string) {
    if (data && environment.simpleEncrypt) {
      return atob(data);
    }
    return data;
  }

  private _encrypt(data: string) {
    if (environment.simpleEncrypt) {
      return btoa(data);
    }
    return data;
  }

  async newUpdateLocalStorage(nameStorage: string, data: string) {
    return await localStorage.setItem(this.nameStorageBrand + nameStorage, this._encrypt(data));
  }

  async getLocalStorage(nameStorage: string): Promise<string | null> {
    return await this._decrypt(localStorage.getItem(this.nameStorageBrand + nameStorage)!);
  }

  deleteLocalStorage(nameStorage: string) {
    localStorage.removeItem(this.nameStorageBrand + nameStorage);
  }

  async clearLocalStorage() {
    await localStorage.clear;
  }

}