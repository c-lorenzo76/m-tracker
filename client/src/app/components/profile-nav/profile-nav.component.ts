import {Component, Input} from '@angular/core';
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {UserDTO} from "../../dtos/user-response.dto";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-profile-nav',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    DatePipe,
    SkeletonModule

  ],
  templateUrl: './profile-nav.component.html',

})
export class ProfileNavComponent {

  @Input() user: UserDTO | null = null;

  constructor(){}


}
