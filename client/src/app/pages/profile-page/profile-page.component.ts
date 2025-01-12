import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {UserDTO} from "../../dtos/user-response.dto";
import {UserService} from "../../services/user/user.service";
import {CheckboxModule} from "primeng/checkbox";
import {Divider} from "primeng/divider";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {StepperSeparator} from "primeng/stepper";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {TextareaModule } from "primeng/textarea";


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CheckboxModule,
    Divider,
    NgOptimizedImage,
    InputGroupModule,
    InputGroupAddonModule,
    StepperSeparator,
    InputTextModule,
    RippleModule,
    TextareaModule,
  ],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {

  user: UserDTO | null = null;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error fetching user information:', error);
      },
    });
  }
}
