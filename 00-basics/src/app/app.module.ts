// ! A decorator for defining the class as a module .
import { NgModule } from '@angular/core';
// !  Browser Specific Platform :
import { BrowserModule } from '@angular/platform-browser';

// . Importing App.Component.ts Class :
import { AppComponent } from './app.component';

@NgModule({
  //. Registering the BrowserModule :
  imports: [BrowserModule],
  declarations: [AppComponent],
  //. Defining the Root Component
  bootstrap: [AppComponent],
})
export class AppModule {}
