package backend.mtracker.util;

import backend.mtracker.dto.Journal.JournalDTO;
import backend.mtracker.dto.Mood.MoodDTO;
import backend.mtracker.dto.User.RegisterDTO;
import backend.mtracker.dto.User.UserDTO;
import backend.mtracker.entity.Journal.JournalEntries;
import backend.mtracker.entity.Mood.Mood;
import backend.mtracker.entity.User.User;
import backend.mtracker.entity.User.UserRole;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MapperConfig {

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Converts registerDTO to a User
     * @param registerDTO
     * @ return User
     */
    public User convertRegisterDTOToUser(RegisterDTO registerDTO) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        User user = modelMapper.map(registerDTO, User.class);
        user.setRole(UserRole.USER);
        return user;
    }

    /**
     * Converts a User to UserDTO
     * @param user
     * @returns UserDTO
     */
    public UserDTO convertUserToDTO(User user) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(user, UserDTO.class);
    }

    /**
     * Converts a UserDTO to User
     * @param userDTO
     * @return User
     */
    public User convertUserDTOToUser(UserDTO userDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(userDTO, User.class);
    }

    /**
     * Converts a JournalDTO to JournalEntries
     * @param journalDTO
     * @return JournalEntries
     */
    public JournalEntries convertJournalDTOToJournalEntries(JournalDTO journalDTO) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(journalDTO, JournalEntries.class);
    }

    /**
     * Converts JournalEntries to JournalDTO
     * @param journalEntries
     * @return JournalDTO
     */
    public JournalDTO convertJournalEntryToDTO(JournalEntries journalEntries){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(journalEntries, JournalDTO.class);
    }

    /**
     * Converts Mood to MoodDTO
     * @param mood
     * @return moodDTO
     */
    public MoodDTO convertMoodToDTO(Mood mood){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(mood, MoodDTO.class);
    }

//    /**
//     * Converts MoodDTO to Mood
//     * @param moodDTO
//     * @return Mood
//     */
//    public Mood convertMoodDTOToMood(MoodDTO moodDTO){
//        modelMapper.getConfiguration()
//                .setMatchingStrategy(MatchingStrategies.LOOSE);
//        return modelMapper.map(moodDTO, Mood.class);
//    }
}
