// ! A decorator for defining the class as a module .
import { NgModule } from '@angular/core';
// !  Browser Specific Platform :
import { BrowserModule } from '@angular/platform-browser';

// . Importing App.Component.ts Class :
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

@NgModule({
  //. Registering the BrowserModule :
  imports: [BrowserModule],
  declarations: [AppComponent, PostComponent],
  //. Defining the Root Component
  bootstrap: [AppComponent],
})
export class AppModule {}
