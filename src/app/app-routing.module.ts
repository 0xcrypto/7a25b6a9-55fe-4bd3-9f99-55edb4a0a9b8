import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { CenterContentLayoutComponent } from './_layouts/center-content-layout/center-content-layout.component';
import { ColumnContentLayoutComponent } from './_layouts/column-content-layout/column-content-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: CenterContentLayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
    ]
  },
  { 
    path: '', 
    component: ColumnContentLayoutComponent,
    children: [
      { path: 'index', component: IndexComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}