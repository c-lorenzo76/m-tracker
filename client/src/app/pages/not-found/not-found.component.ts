import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {RippleModule} from "primeng/ripple"

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RippleModule,
    RouterLink
  ],
  templateUrl: './not-found.component.html',

})
export class NotFoundComponent {
  constructor(private router: Router) {
  }
}
