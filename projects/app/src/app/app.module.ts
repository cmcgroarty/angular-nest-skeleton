import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';




@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ServiceWorkerModule.register( 'ngsw-worker.js', { enabled: environment.production } ),
  ],
  providers: [],
  bootstrap: [ AppComponent ],
} )
export class AppModule {
}
