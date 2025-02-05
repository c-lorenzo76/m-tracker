import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SubNavbarComponent} from "../../components/sub-navbar/sub-navbar.component";
import {UserDTO} from "../../dtos/user-response.dto";
import {UserService} from "../../services/user/user.service";
import {ProfileNavComponent} from "../../components/profile-nav/profile-nav.component";
import {PrevMoodsChartComponent} from "../../components/prev-moods-chart/prev-moods-chart.component";


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    ProfileNavComponent,
    PrevMoodsChartComponent,
  ],
  templateUrl: './dashboard-page.component.html',
})

export class DashboardPageComponent implements OnInit{

  user: UserDTO | null = null;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error fetching user information:' , error);
      },
    });
  }


}
