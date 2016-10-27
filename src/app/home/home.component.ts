import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  //encapsulation: ViewEncapsulation.Native,
})
export class HomeComponent implements OnInit {
  public isVisible: boolean = true;

  constructor() { }

  ngOnInit() {
    console.debug('xxxx');
  }

  toggleVisible(){
    this.isVisible = !this.isVisible;
  }
}
