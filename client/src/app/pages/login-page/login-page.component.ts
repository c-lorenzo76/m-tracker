import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Checkbox} from "primeng/checkbox";
import {NgOptimizedImage} from "@angular/common";
import {RippleModule} from "primeng/ripple"
import {AuthService} from "../../services/auth/auth.service";
import {LoginRequest} from "../../dtos/login-request.dto";
import {FormsModule} from "@angular/forms";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {PasswordModule} from 'primeng/password'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    Checkbox,
    NgOptimizedImage,
    RippleModule,
    FormsModule,
    RouterLink,
    ToastModule,
    PasswordModule,
  ],
  templateUrl: './login-page.component.html',
  providers: [MessageService],
})

export class LoginPageComponent {
  loginRequest: LoginRequest = new LoginRequest();
  rememberMe: boolean = false;

  constructor(private authService: AuthService, private router: Router, private messageService:MessageService) {
  }

  onLogin() {
    if (!this.loginRequest.email || !this.loginRequest.email) {
      this.showError('Please fill in both email and password')
      return;
    }

    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log('Login successful:', response);

        const { user, token, roles } = response;

        localStorage.setItem('user', user);
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('roles', JSON.stringify(roles));

        if (this.rememberMe) {
          localStorage.setItem('rememberMe', this.loginRequest.email);
        }

        this.router.navigate(['/dashboard']).then(() => {
          console.log('Navigation to dashboard successful');
        }).catch((err) => {
          console.error('Navigation error:', err);
        });
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.showError('Login failed. Please check your email and password.');
      }
    });
  }

  private showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
}
