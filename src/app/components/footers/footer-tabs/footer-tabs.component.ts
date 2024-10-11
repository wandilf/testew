import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer-tabs',
  templateUrl: './footer-tabs.component.html',
  styleUrls: ['./footer-tabs.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
})
export class FooterTabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
