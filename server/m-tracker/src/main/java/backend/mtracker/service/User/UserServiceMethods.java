package backend.mtracker.service.User;

import backend.mtracker.entity.User.User;

import java.util.List;
import java.util.Optional;

public interface UserServiceMethods {

    // Role: User
    void createUser(User user);
    void saveUser(User user);


    // Role: Admin
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    void deleteUserById(Long id);


}
