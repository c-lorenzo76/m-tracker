package backend.mtracker.service.Mood;

import backend.mtracker.dto.Mood.MoodDTO;
import backend.mtracker.entity.Mood.MoodHistory;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface MoodHistoryServiceMethods {

    // Role: User
    void createMoodHistory(MoodHistory moodHistory);
    // get all the mood history based off the user
    List<MoodDTO> getAllMoodHistory(String email);

    void saveMoodHistory(MoodHistory moodHistory);
    void deleteMoodHistoryById(Long id);

//    Optional<MoodHistory> getMoodHistoryByDate(LocalDateTime date); // get mood history based off day




}
