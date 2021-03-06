import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
