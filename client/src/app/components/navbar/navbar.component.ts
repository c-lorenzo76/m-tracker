import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
