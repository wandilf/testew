import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostIndexPageRoutingModule } from './post-index-routing.module';

import { PostIndexPage } from './post-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostIndexPageRoutingModule
  ],
  declarations: [PostIndexPage]
})
export class PostIndexPageModule {}
