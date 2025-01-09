import {Component} from '@angular/core';
import {RippleModule} from "primeng/ripple";


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    RippleModule

  ],
  templateUrl: './banner.component.html'
})
export class BannerComponent {

}
