import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FooterTabsComponent } from 'src/app/components/footers/footer-tabs/footer-tabs.component';
import { HeaderComponent } from 'src/app/components/headers/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterTabsComponent,
    HeaderComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
