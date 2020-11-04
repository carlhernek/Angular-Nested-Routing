import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';

const routes: Routes = [
  { path: '', component: PageOneComponent },
  {
    path: 'two',
    loadChildren: () =>
      import(`./page-two/page-two.module`).then((m) => m.PageTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
