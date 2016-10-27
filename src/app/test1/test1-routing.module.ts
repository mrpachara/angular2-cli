import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test1Component } from './test1.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: Test1Component }
  ])],
  exports: [RouterModule]
})
export class Test1RoutingModule {}
