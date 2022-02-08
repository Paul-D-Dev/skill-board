import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import { GoogleAuthProvider } from 'firebase/auth'
import { Observable, of, switchMap } from 'rxjs'
import { IUser } from '../interfaces/user.interface'

@Injectable()
export class AuthService {
  user$: Observable<IUser | null>
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return of(user)
        } else {
          return of(null)
        }
      })
    )
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        console.log('Successfully logged in')
        this.router.navigateByUrl('/dashboard')
      })
      .catch((error) => console.error(error))
  }

  async signOut() {
    await this.afAuth.signOut()
    return this.router.navigateByUrl('/')
  }
}
