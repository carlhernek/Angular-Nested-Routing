import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { SubpageOneComponent } from './subpage-one/subpage-one.component';
import { SubpageTwoComponent } from './subpage-two/subpage-two.component';


@NgModule({
  declarations: [SubpageOneComponent, SubpageTwoComponent],
  imports: [
    CommonModule,
    PageTwoRoutingModule
  ]
})
export class PageTwoModule { }
