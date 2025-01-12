import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mood-history',
  standalone: true,
  imports: [],
  templateUrl: './mood-history.component.html',

})
export class MoodHistoryComponent {
  constructor(private router: Router) {
  }
}
