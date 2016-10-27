import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';

import { Test1RoutingModule } from './test1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Test1RoutingModule,
  ],
  declarations: [Test1Component]
})
export class Test1Module { }
