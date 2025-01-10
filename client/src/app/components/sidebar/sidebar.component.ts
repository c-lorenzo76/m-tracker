import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {UserDTO} from "../../dtos/user-response.dto";
// import {Popover} from "primeng/popover";
import {AuthService} from "../../services/auth/auth.service";


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RippleModule,
    NgIf,
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() user: UserDTO | null = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  handleLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']).then(() => {
      console.log('Navigation to landing page successful');
    }).catch((error) => {
      console.error('Navigation error:', error);
    });
  }
}
