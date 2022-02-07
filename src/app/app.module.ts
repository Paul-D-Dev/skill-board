import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppFirebaseModule } from './shared/modules/app-firebase-module/app-firebase.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppFirebaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
