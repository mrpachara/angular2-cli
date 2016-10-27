import { Component, ViewEncapsulation } from '@angular/core';
import { Routes } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { routes } from './app-routing.module';

import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [MediaService],
})
export class AppComponent {
  title = 'app works!';
  routes: Routes;

  constructor(private mediaService: MediaService){
    this.routes = routes;
  }

  getMode(sideNav: MdSidenav): string{
    if(this.mediaService.width >= 1280){
      if(sideNav.mode !== 'side') sideNav.open();
      return 'side';
    } else{
      if(sideNav.mode !== 'over') sideNav.close();
      return 'over';
    }
  }

  isSmall(): boolean{
    return this.mediaService.width < 600;
  }
}
