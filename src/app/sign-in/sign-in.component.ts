import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  email: String = 'a@a.com';
  senha: String = 'abc123';

  sign_in() {
    console.log('Solicitado sign in');
    console.log('smail: ', this.email);
    console.log('senha: ', this.senha);
  }

}
