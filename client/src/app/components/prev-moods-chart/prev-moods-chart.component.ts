import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {ChartModule} from "primeng/chart";
import {MoodHistoryService} from "../../services/mood-history/mood-history.service";
import {MoodHistoryDto} from "../../dtos/mood-history.dto";

@Component({
  selector: 'app-prev-moods-chart',
  standalone: true,
  imports: [
    CardModule,
    ChartModule,
  ],
  templateUrl: './prev-moods-chart.component.html',

})
export class PrevMoodsChartComponent implements OnInit {

  moodHistory: any;

  constructor(private moodHistoryService: MoodHistoryService) {
  }

  ngOnInit(): void {
    this.moodHistoryService.fetchMoodHistory().subscribe({
      next: (data: MoodHistoryDto[]) =>{
        this.moodHistory = this.processMoodData(data);
      },
      error: (error) => {
        console.error('Error fetching mood history:', error);
      }
    })
  }


  private processMoodData(moods: MoodHistoryDto[]) {
    const moodCounts = moods.reduce((acc, curr) => {
      acc[curr.mood] = (acc[curr.mood] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return {
      labels: Object.keys(moodCounts), // Mood types (e.g., "Happy", "Sad")
      datasets: [
        {
          data: Object.values(moodCounts), // Counts of each mood
        },
      ],
    };



  }
}
