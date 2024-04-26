// register.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    username: '',
    password: ''
  };

  register() {
    // Add registration functionality here
    console.log('Registration functionality will be implemented here.');
  }
}
