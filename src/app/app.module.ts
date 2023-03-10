import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RandomComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
