import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {UserDTO} from "../../dtos/user-response.dto";
import {CheckboxModule} from "primeng/checkbox";
import {Divider} from "primeng/divider";
import {InputText} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {StepperSeparator} from "primeng/stepper";
import {Textarea} from "primeng/textarea";
import {MultiSelectModule} from 'primeng/multiselect';
import {FormsModule} from "@angular/forms";
import {DatePickerModule} from "primeng/datepicker";
import {JournalEntriesService} from "../../services/journal-entries/journal-entries.service";
import {Moods} from "../../constants/Moods";
import {Activities} from "../../constants/Activities";
import {SelectModule} from "primeng/select";

@Component({
  selector: 'app-new-journal-entry-page',
  standalone: true,
  imports: [
    CheckboxModule,
    Divider,
    InputText,
    RippleModule,
    StepperSeparator,
    Textarea,
    MultiSelectModule,
    SelectModule,
    FormsModule,
    DatePickerModule,
  ],
  templateUrl: './new-journal-entry-page.component.html',

})
export class NewJournalEntryPageComponent {
  moods = Moods;
  activities = Activities;
  date: Date;
  selectedActivities: any[] = [];
  selectedMoods: any[] = [];
  user: UserDTO | null = null;

  constructor(private router: Router, private userService: UserService, private journalEntriesService: JournalEntriesService) {
    this.date = new Date();
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
  }
}
