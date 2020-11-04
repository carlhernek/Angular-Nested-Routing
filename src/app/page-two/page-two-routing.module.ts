import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoComponent } from './page-two.component';
import { SubpageOneComponent } from './subpage-one/subpage-one.component';
import { SubpageTwoComponent } from './subpage-two/subpage-two.component';

const routes: Routes = [
  {
    path: '',
    component: PageTwoComponent,
    children: [
      { path: 'one', component: SubpageOneComponent },
      { path: 'two', component: SubpageTwoComponent },
      { path: '', redirectTo: 'one', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTwoRoutingModule {}
