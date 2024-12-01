package backend.mtracker.dto.User;

import backend.mtracker.entity.User.Sex;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class UserDTO {
    private String name;
    private String email;
    private String phone_number;
    private String password;
    private Sex sex;
    private String signup_date;
    private String last_login;
}
