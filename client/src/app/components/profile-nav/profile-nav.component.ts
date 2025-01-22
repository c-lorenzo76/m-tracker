import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {UserDTO} from "../../dtos/user-response.dto";
import {SkeletonModule} from "primeng/skeleton";
import {JournalEntriesService} from "../../services/journal-entries/journal-entries.service";

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
export class ProfileNavComponent implements OnInit {
  @Input() user: UserDTO | null = null;

  journalCount : number | null = null;


  constructor(private journalService: JournalEntriesService) {
  }

  ngOnInit(): void {
    this.journalService.fetchNumJournals().subscribe({
      next: (data) => {
        this.journalCount = data;
      },
      error: (error) => {
        console.error('Failed to fetch journal count:', error);
      }
    });
  }


}
