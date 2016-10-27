import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class MediaService{
  public width: number;
  public height: number;

  constructor(ngZone: NgZone) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    window.onresize = (e) =>{
        ngZone.run(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        });
    };
  }
}
