// ! A decorator for defining the class as a module .
import { NgModule } from '@angular/core';
// !  Browser Specific Platform :
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  //- Registering the BrowserModule :
  imports: [BrowserModule],
})
export class AppModule {}
