import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NextComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
