import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostIndexPage } from './post-index.page';

const routes: Routes = [
  {
    path: '',
    component: PostIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostIndexPageRoutingModule {}
