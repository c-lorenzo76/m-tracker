import {Mood} from "./mood.enum";

export interface JournalEntryDTO {
  activities: string;
  content: string;
  entry_date: string;
  is_private: boolean;
  mood: Mood;
}
