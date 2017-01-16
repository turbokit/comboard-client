import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler
} from 'ionic-angular';

import { MyApp } from './app.component';
import { Pages } from '../pages';
import { Providers } from '../providers';

let errorHandler = {
  provide: ErrorHandler,
  useClass: IonicErrorHandler
};

Providers.push(errorHandler);
Pages.push(MyApp);

@NgModule({
  bootstrap: [ IonicApp ],
  declarations: [ Pages ],
  entryComponents: [ Pages ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  providers: [ Providers ]
})
export class AppModule {}
