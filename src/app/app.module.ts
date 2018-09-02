import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AssetsService } from './assets.service';
import { AppComponent } from './app.component';
import { CenterContentLayoutComponent } from './_layouts/center-content-layout/center-content-layout.component';
import { ColumnContentLayoutComponent } from './_layouts/column-content-layout/column-content-layout.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterContentLayoutComponent,
    ColumnContentLayoutComponent,
    LoginComponent,
    IndexComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AssetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
