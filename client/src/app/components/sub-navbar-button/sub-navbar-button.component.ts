import {Component, Input, ViewChild} from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {UserDTO} from "../../dtos/user-response.dto";

@Component({
  selector: 'app-sub-navbar-button',
  standalone: true,
  imports: [
    DrawerModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClass,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './sub-navbar-button.component.html',
})
export class SubNavbarButtonComponent {

  constructor(private router: Router){}

  @Input() user: UserDTO | null = null;

  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;
}
