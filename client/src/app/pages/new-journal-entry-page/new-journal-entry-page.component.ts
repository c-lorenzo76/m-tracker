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
import {JournalEntryDTO} from "../../dtos/new-journal.dto";
import {MessageService} from "primeng/api";
import {Toast} from "primeng/toast";
import {Mood} from "../../dtos/mood.enum";

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
    Toast,
  ],
  templateUrl: './new-journal-entry-page.component.html',
  providers: [MessageService],

})
export class NewJournalEntryPageComponent {
  moods = Moods;
  activities = Activities;
  date: Date;

  selectedActivities: string[] = [];

  user: UserDTO | null = null;
  journalEntry: JournalEntryDTO = {
    activities: '',
    content: '',
    entry_date: new Date().toISOString(),
    is_private: false,
    mood: Mood.Okay,
  };

  constructor(private router: Router, private userService: UserService, private journalEntriesService: JournalEntriesService, private messageService: MessageService) {
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

  submitJournalEntry(): void {
    this.journalEntry.entry_date = new Date(this.journalEntry.entry_date).toISOString();
    this.journalEntry.activities = this.selectedActivities.map(activity => activity).join(',');

    if (!this.journalEntry.content || !this.journalEntry.activities || !this.journalEntry.mood) {
      this.showError('error', 'Error', 'Please fill in all required fields')
      return;
    }

    this.journalEntriesService.createJournal(this.journalEntry).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status === 201) {
          this.router.navigate(['/journal-entries']).then(() => {
            this.showError('success', 'Success', 'Successfully added a new journal entry');
            console.log('navigated to all');
          }).catch((error) => {
            console.error('Error navigating:', error);
          });
        }
      },
      error: (error) => {
        console.error("Error creating journal entry:", error);
        this.showError('error', 'Error', 'Creating the journal entry failed');
      }
    });
  }


  private showError(severity: string, summary: string, message: string) {
    this.messageService.add({severity: severity, summary: summary, detail: message});
  }

}
