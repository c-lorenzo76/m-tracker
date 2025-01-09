import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {Router} from "@angular/router";
import { UserDTO } from "../../dtos/user-response.dto";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RippleModule,

    NgIf,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private router: Router){}

  @Input() user: UserDTO | null = null;

}
