package backend.mtracker.service.User;

import backend.mtracker.dto.User.RegisterDTO;
import backend.mtracker.dto.User.UserDTO;
import backend.mtracker.entity.User.User;
import backend.mtracker.exceptions.DuplicateEmailException;
import backend.mtracker.exceptions.PasswordNotMatch;
import backend.mtracker.exceptions.UserNotFoundException;
import backend.mtracker.repository.UserRepository;
import backend.mtracker.util.MapperConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserServiceMethods {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MapperConfig modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO registerUser(RegisterDTO registerDTO){

        Optional<User> checkEmail = userRepository.findByEmail(registerDTO.getEmail());
        if(checkEmail.isPresent()){
            throw new DuplicateEmailException("User with email already exists" );
        }

        User user = modelMapper.convertRegisterDTOToUser(registerDTO);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setSignup_date(LocalDateTime.now());

        userRepository.save(user);

        Optional<User> newUser = userRepository.findByEmail(user.getEmail());
        if(newUser.isPresent()){
            User userCreated = newUser.get();
            return modelMapper.convertUserToDTO(userCreated);
        }
        else{
            return null;
        }
    }

    public void updateLastLogin(String email){
        Optional<User> userOptional = userRepository.findByEmail(email);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setLast_login(LocalDateTime.now());
            userRepository.save(user);
        }
    }

    public UserDTO getUserInfo(String email){
        Optional<User> userOptional = userRepository.findByEmail(email);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            return modelMapper.convertUserToDTO(user);
        } else{
          throw new UserNotFoundException("User not found");
        }
    }

    /**
     * Updates information that a user wants to update about their account
     * I think I'll do another page for updating password, since email is a unique ID
     * idk if want the user to be able to update their email
     * @param userDTO
     * @return UserDTO
     */
    public UserDTO updateInformation(UserDTO userDTO){

        Optional<User> userOptional = userRepository.findByEmail(userDTO.getEmail());
        if(userOptional.isPresent()){
            User existingUser = userOptional.get();
            existingUser.setName(userDTO.getName());
//            existingUser.setEmail(userDTO.getEmail());
            existingUser.setPhone_number(userDTO.getPhone_number());
            existingUser.setSex(userDTO.getSex());

            userRepository.save(existingUser);

            return modelMapper.convertUserToDTO(existingUser);
        }
        else{
            throw new UserNotFoundException("User not found");
        }
    }


    public void checkPassword(String email, String oldPassword, String newPassword){
        Optional<User> userOptional = userRepository.findByEmail(email);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            if(passwordEncoder.matches(oldPassword, user.getPassword())){
                user.setPassword(passwordEncoder.encode(newPassword));
                userRepository.save(user);
            } else{
                throw new PasswordNotMatch("Old password is incorrect");
            }
        }else{
            throw new UserNotFoundException("User not found");
        }
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    // ADMIN
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ADMIN
    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // ADMIN
    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
