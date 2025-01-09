package backend.mtracker.controller;

import backend.mtracker.dto.User.ProfileDTO;
import backend.mtracker.dto.User.UserDTO;
import backend.mtracker.entity.User.User;
import backend.mtracker.service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user/")
public class UserController {

    @Autowired
    private UserService service;

    /**
     * Returns information for the user's profile
     * Need to update the DTO on the client side
     * @return personalProfile
     */
    @GetMapping("/profile")
    public ResponseEntity<ProfileDTO> getProfile() {
        String username  = SecurityContextHolder.getContext().getAuthentication().getName();
        ProfileDTO profileDTO = service.getUserInfo(username);

        return new ResponseEntity<ProfileDTO>(profileDTO, HttpStatus.OK);
    }

    @PutMapping("/edit-profile")
    public ResponseEntity<UserDTO> editProfile(UserDTO userDTO){
        UserDTO updatedUser = service.updateInformation(userDTO);

        return new ResponseEntity<UserDTO>(updatedUser, HttpStatus.OK);
    }

    @PutMapping("/edit-password")
    public ResponseEntity<String> editPassword(String oldPassword, String newPassword){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        service.checkPassword(username, oldPassword, newPassword);

        return new ResponseEntity("Password has been updated",HttpStatus.OK);
    }


    @GetMapping("/hello")
    public ResponseEntity<String> hello() { return ResponseEntity.ok("Hello bitch"); }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }





}
