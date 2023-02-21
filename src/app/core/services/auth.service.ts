import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) { }

  login(email: string, password: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((res)=>{
        this.ngZone.run(()=>{
          this.router.navigate(['/private/dashboard']);
        })
      }).catch((error)=>{
        window.alert("Email ou mot de passe invalide");
      })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/private/login']);
    }, err=>{
      alert(err.message);
    })
  }
}
