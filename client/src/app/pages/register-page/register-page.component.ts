import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {RegisterRequest} from "../../dtos/register-request.dto";
import {AuthService} from "../../services/auth/auth.service";
import {Sex} from "../../dtos/sex.enum";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-page',
  standalone :true,
  imports: [
    FormsModule,
    NgForOf,
    NgOptimizedImage,
    RouterLink,
    ToastModule,
  ],
  templateUrl: './register-page.component.html',
  providers: [
    MessageService
  ]

})

export class RegisterPageComponent {
  registerRequest: RegisterRequest = new RegisterRequest();
  sexOptions: string[] = Object.values(Sex);

  constructor(private authService: AuthService,private router: Router, private messageService:MessageService) {}

  onRegister(){
    if (!this.registerRequest.name || !this.registerRequest.email || !this.registerRequest.password || !this.registerRequest.age || !this.registerRequest.sex) {
      this.showError('Please fill in all the fields');
      return;
    }

    this.authService.register(this.registerRequest).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']).catch((error) => {
          console.error('Navigation error:', error);
        })
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.showError('Registration failed. Please check your details and try again.')
      }
    })

  }

  private showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
}
