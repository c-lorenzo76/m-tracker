package backend.mtracker.dto.User;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginResponseDTO {

    private String email;
    private String token;
    private List<String> roles;

}
