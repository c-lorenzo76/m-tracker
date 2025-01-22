import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PrevMoodsChartComponent} from "../../components/prev-moods-chart/prev-moods-chart.component";
import {FormsModule} from "@angular/forms";
import {DatePicker} from "primeng/datepicker";

@Component({
  selector: 'app-mood-history',
  standalone: true,
  imports: [
    PrevMoodsChartComponent,
    FormsModule,
    DatePicker
  ],
  templateUrl: './mood-history.component.html',

})
export class MoodHistoryComponent {
  date: Date;
  constructor(private router: Router) {
    this.date = new Date();
  }
}
