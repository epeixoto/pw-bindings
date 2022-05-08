import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsShowComponent } from './components/bindings/bindings-show/bindings-show.component';

import { FormsModule } from '@angular/forms';


import { CookieService } from 'ngx-cookie-service';
import { BindingsShow2Component } from './components/bindings2/bindings-show2/bindings-show2.component';
import { BindingsShow3Component } from './components/bindings3/bindings-show3/bindings-show3.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsShowComponent,
    BindingsShow2Component,
    BindingsShow3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
