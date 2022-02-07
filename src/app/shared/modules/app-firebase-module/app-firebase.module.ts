import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from '../../../../environments/environment'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  exports: [AngularFireModule, AngularFireAuthModule],
})
export class AppFirebaseModule {}
