import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {UserDTO} from "../../dtos/user-response.dto";
import {Checkbox} from "primeng/checkbox";
import {Divider} from "primeng/divider";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {InputText} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {StepperSeparator} from "primeng/stepper";
import {SubNavbarComponent} from "../../components/sub-navbar/sub-navbar.component";
import {Textarea} from "primeng/textarea";

@Component({
  selector: 'app-new-journal-entry-page',
  standalone: true,
  imports: [
    Checkbox,
    Divider,
    InputGroup,
    InputGroupAddon,
    InputText,
    NgOptimizedImage,
    Ripple,
    SidebarComponent,
    StepperSeparator,
    SubNavbarComponent,
    Textarea
  ],
  templateUrl: './new-journal-entry-page.component.html',

})
export class NewJournalEntryPageComponent {
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
