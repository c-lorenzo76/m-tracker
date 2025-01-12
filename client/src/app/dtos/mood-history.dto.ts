import {Mood} from "./mood.enum";

export interface MoodHistoryDto {
  date: string;
  mood: Mood;
}
