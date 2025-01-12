import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SubNavbarComponent} from "../../components/sub-navbar/sub-navbar.component";
import {Router, RouterOutlet} from "@angular/router";
import {UserDTO} from "../../dtos/user-response.dto";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    SubNavbarComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit{
  user: UserDTO | null = null;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error fetching user information:' , error);
      },
    });
  }

}
