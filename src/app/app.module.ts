import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirestoreService } from './services/firebase/firestore.service';
import { FooterTabsComponent } from './components/footers/footer-tabs/footer-tabs.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserModule,
    HttpClientModule,
    FooterTabsComponent,
    IonicModule.forRoot({ 
      mode: 'md', 
      animated: true, 
      sanitizerEnabled: true,
      // scrollPadding: false,
      // scrollAssist: false
     }),
    AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (firestore: FirestoreService) => {
        return async () => {
          await firestore.initializeFirebase().then(dat=>{
            console.log("data",dat)
          });
        };
      },
      deps: [FirestoreService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
