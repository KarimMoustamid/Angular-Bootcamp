//! Responsibility of the main.ts , is to load Angular and our Aplication code .
// # Angular Provide two types of Compilations For TS to JS : JIT and AOT .

// - Loading Angular Platform For JIT :
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//- Loading Our Application :
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
