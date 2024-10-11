import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postI } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.page.html',
  styleUrls: ['./post-index.page.scss'],
})
export class PostIndexPage {

  public post: postI | null = null;

  constructor(
    private _router: Router,
  ) { }

  ionViewWillEnter() {
    this.post = history.state.post;
  }

  goBack() {
    this._router.navigate(['home'], {});
  }

}
