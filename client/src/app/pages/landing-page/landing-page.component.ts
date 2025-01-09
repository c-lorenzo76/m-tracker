import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {BannerComponent} from "../../components/banner/banner.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {CommunityComponent} from "../../components/community/community.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    HeroComponent,
    CommunityComponent,

  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  constructor(private router: Router) {}


}
