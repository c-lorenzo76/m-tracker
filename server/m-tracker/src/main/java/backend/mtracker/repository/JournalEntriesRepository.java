package backend.mtracker.repository;

import backend.mtracker.dto.Journal.JournalDTO;
import backend.mtracker.entity.Journal.JournalEntries;
import backend.mtracker.entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface JournalEntriesRepository extends JpaRepository<JournalEntries, Long> {
    Optional<JournalEntries> findByID(Long ID);

    /**
     * Deletes a journal entry based off the ID
     * @param ID
     */
    void deleteByID(Long ID);

    /**
     * Returns a list of the JournalEntries based off the user_id
     * @param user_id
     * @return List<JournalDTO>
     */
    @Query("SELECT new backend.mtracker.dto.Journal.JournalDTO(j.activities, j.content, j.entry_date, j.is_private, j.mood) " +
            "FROM JournalEntries j " +
            "WHERE j.user.ID = :user_id " +
            "ORDER BY j.entry_date DESC")
    List<JournalDTO> findByUser_ID(Long user_id);

    /**
     * Returns a JournalEntry by entity date and user ID
     * @param entry_date
     * @return JournalEntries
     */
    @Query("SELECT j FROM JournalEntries j WHERE j.entry_date = :entry_date AND j.user.ID = :user_id")
    Optional<JournalEntries> findByEntry_Date(@Param("entry_date") LocalDateTime entry_date, @Param("user_id") Long user_id);
}

