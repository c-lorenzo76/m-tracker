import {Component, Input, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Drawer, DrawerModule} from 'primeng/drawer';
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {SubNavbarButtonComponent} from "../sub-navbar-button/sub-navbar-button.component";
import {UserDTO} from "../../dtos/user-response.dto";

@Component({
  selector: 'app-sub-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DrawerModule,
    RippleModule,
    ButtonModule,
    AvatarModule,
    SubNavbarButtonComponent,
  ],
  templateUrl: './sub-navbar.component.html'
})
export class SubNavbarComponent {
  @Input() user: UserDTO | null = null;
}
