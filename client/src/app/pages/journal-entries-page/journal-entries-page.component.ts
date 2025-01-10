import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {DatePipe} from "@angular/common";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {SubNavbarComponent} from "../../components/sub-navbar/sub-navbar.component";
import {UserDTO} from "../../dtos/user-response.dto";
import {UserService} from "../../services/user/user.service";
import {JournalEntriesService} from "../../services/journal-entries/journal-entries.service";
import {JournalDTO} from "../../dtos/journal-response-all.dto";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-journal-entries-page',
  standalone: true,
  imports: [
    SidebarComponent,
    SubNavbarComponent,
    TableModule,
    DatePipe,
    RouterLink
  ],
  templateUrl: './journal-entries-page.component.html',
})

export class JournalEntriesPageComponent {

  user: UserDTO | null = null;
  journalEntries: JournalDTO[] = [];
  loading: boolean = true;

  constructor(
    private router: Router,
    private userService: UserService,
    private journalEntriesService: JournalEntriesService
  ) {
  }


  ngOnInit(): void {
    this.userService.fetchUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error fetching user information:', error);
      },
    });

    this.journalEntriesService.fetchUserJournals().subscribe({
      next: (data) => {
        this.journalEntries = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching journal entries:', error);
        this.loading = false;
      },
    });
  }


}
