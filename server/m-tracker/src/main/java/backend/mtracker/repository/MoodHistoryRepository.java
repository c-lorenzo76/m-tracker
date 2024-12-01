package backend.mtracker.repository;

import backend.mtracker.dto.Mood.MoodDTO;
import backend.mtracker.entity.Mood.Mood;
import backend.mtracker.entity.Mood.MoodHistory;
import backend.mtracker.entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface MoodHistoryRepository extends JpaRepository<MoodHistory, Long> {

    @Query("SELECT new backend.mtracker.dto.Mood.MoodDTO(MH.date, MH.mood) " +
            "FROM MoodHistory MH " +
            "WHERE MH.user.ID = :user_id " +
            "ORDER BY MH.date DESC")
    List <MoodDTO> findAllByUserID(Long user_id);

    Optional <MoodHistory> findByMood(Mood mood);

    @Query("SELECT MH FROM MoodHistory MH WHERE MH.date = :date AND MH.user.ID = :user_id")
    Optional <MoodHistory> findByDateAndUser(@Param("date") LocalDateTime date, @Param("user_id") Long user_id);
}
