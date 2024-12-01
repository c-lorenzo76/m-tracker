package backend.mtracker.service.Journal;

import backend.mtracker.dto.Journal.JournalDTO;
import backend.mtracker.entity.Journal.JournalEntries;
import backend.mtracker.entity.Mood.MoodHistory;
import backend.mtracker.entity.User.User;
import backend.mtracker.exceptions.JournalEntryNotFoundException;
import backend.mtracker.exceptions.UserNotFoundException;
import backend.mtracker.repository.JournalEntriesRepository;
import backend.mtracker.repository.MoodHistoryRepository;
import backend.mtracker.repository.UserRepository;
import backend.mtracker.util.MapperConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class JournalEntriesService implements JournalEntriesServiceMethods {

    @Autowired
    private MapperConfig modelMapper;

    @Autowired
    private JournalEntriesRepository journalEntriesRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MoodHistoryRepository moodHistoryRepository;

    private static final Logger logger = LoggerFactory.getLogger(JournalEntries.class);

    // may need to update this in the future by that I mean for the DTO to include the ID
    public void editJournalEntry(JournalDTO journalDTO, Long id) {
        Optional<JournalEntries> journalEntry = journalEntriesRepository.findById(id);
        if (journalEntry.isPresent()) {
            JournalEntries journalEntries = journalEntry.get();
            journalEntries.setActivities(journalDTO.getActivities());
            journalEntries.setContent(journalDTO.getContent());
            journalEntries.setIs_private(journalDTO.getIs_private());
            journalEntries.setMood(journalDTO.getMood());

            journalEntriesRepository.save(journalEntries);

            Optional<MoodHistory> moodHistory = moodHistoryRepository.findByDateAndUser(journalEntries.getEntry_date(),journalEntries.getUser().getID());
            if (moodHistory.isPresent()) {
                MoodHistory moodHistoryEntry = moodHistory.get();
                moodHistoryEntry.setMood(journalDTO.getMood());
                moodHistoryRepository.save(moodHistoryEntry);
            }

        } else {
            throw new JournalEntryNotFoundException("Journal entry with the id not found");
        }
    }

    // who is we?
    // we need to update this
    // manually create a journal entry
    @Override
    public void createJournalEntry(JournalDTO newJournal, String username) {

        JournalEntries journalEntry = modelMapper.convertJournalDTOToJournalEntries(newJournal);
        Optional<User> user = userRepository.findByEmail(username);

        if (user.isPresent()) {
            journalEntry.setUser(user.get());
            journalEntry.setEntry_date(LocalDateTime.now());
            journalEntriesRepository.save(journalEntry);

            Optional<JournalEntries> savedJournalEntry = journalEntriesRepository.findByEntry_Date(
                    journalEntry.getEntry_date(), user.get().getID());

            if (savedJournalEntry.isPresent()) {

                MoodHistory moodHistory = new MoodHistory();
                moodHistory.setDate(journalEntry.getEntry_date());
                moodHistory.setMood(newJournal.getMood());
                moodHistory.setJournalEntry(savedJournalEntry.get());
                moodHistory.setUser(user.get());

                moodHistoryRepository.save(moodHistory);

                logger.info("Successfully created mood history entry for user: {} and journal_entry: {}", username, savedJournalEntry.get().getID());

            } else {
                throw new JournalEntryNotFoundException("Failed to retrieve the saved journal entry for mood history creation");
            }

            logger.info("Successfully created journal entry for user: {}", username);
        } else {
            throw new UserNotFoundException("User not found with the email: " + username);
        }
    }

    @Override
    public void saveJournalEntry(JournalEntries journalEntries) {
        journalEntriesRepository.save(journalEntries);
    }

    /**
     * Returns a list of all the journal entries by user
     * Comment: The function name may be misleading but, I don't want to do logic for getting
     * user information at the controller
     * @param email
     * @return List<JournalDTO>
     */
    @Override
    public List<JournalDTO> getJournalEntriesByUserId(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            User userEntry = user.get();
            return journalEntriesRepository.findByUser_ID(userEntry.getID());
        }else{
            throw new UserNotFoundException("User not found with the email: " + email);
        }
    }

    @Override
    public void deleteJournalEntry(Long id) {
        journalEntriesRepository.deleteByID(id);
    }

}
