package backend.mtracker.service.Journal;

import backend.mtracker.dto.Journal.JournalDTO;
import backend.mtracker.entity.Journal.JournalEntries;
import backend.mtracker.entity.User.User;

import java.util.List;


/**
 * Not happy about my naming convention on this, but I'm a little to deep to change it now,
 * but it is not multiple JournalEntries it is a single one, but I have the table named that way
 * not entirely sure how persistence works, but I believe I have to have the class named
 * exactly.
 */
public interface JournalEntriesServiceMethods {


    // Role: User
    void createJournalEntry(JournalDTO newJournal, String username);
    void saveJournalEntry(JournalEntries journalEntries);

    // May need to change this to Long id
    List<JournalDTO> getJournalEntriesByUserId(String email); // gets all the journal entries of userID
    void deleteJournalEntry(Long id);

    //Optional getJournalEntryByDate(LocalDateTime date); // gets by certain date

}
