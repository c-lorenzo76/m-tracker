package backend.mtracker.service.Mood;

import backend.mtracker.dto.Mood.MoodDTO;
import backend.mtracker.entity.Mood.MoodHistory;
import backend.mtracker.entity.User.User;
import backend.mtracker.exceptions.UserNotFoundException;
import backend.mtracker.repository.MoodHistoryRepository;
import backend.mtracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MoodHistoryService implements MoodHistoryServiceMethods{

    @Autowired
    private MoodHistoryRepository moodHistoryRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void createMoodHistory(MoodHistory moodHistory) {
        moodHistoryRepository.save(moodHistory);
    }

    @Override
    public void saveMoodHistory(MoodHistory moodHistory) {
        moodHistoryRepository.save(moodHistory);
    }

    @Override
    public List<MoodDTO> getAllMoodHistory(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            User userEntity = user.get();
            return moodHistoryRepository.findAllByUserID(userEntity.getID());
        } else{
            throw new UserNotFoundException("User not found");
        }
    }

//    @Override
//    public Optional<MoodHistory> getMoodHistoryByDate(LocalDateTime date) {
//        return moodHistoryRepository.findByDate(date);
//    }

    // moodHistory ID not the user_id
    @Override
    public void deleteMoodHistoryById(Long id) {
        moodHistoryRepository.deleteById(id);
    }
}
