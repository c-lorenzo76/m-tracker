import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RippleModule} from 'primeng/ripple';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RippleModule,
    RouterLink
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent { }
