import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgJsonEditorModule } from 'ang-jsoneditor';

import { AppComponent } from './app.component';

// @ts-ignore
@NgModule({
  imports:      [ BrowserModule, NgJsonEditorModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
// @ts-ignore
export class AppModule { }
