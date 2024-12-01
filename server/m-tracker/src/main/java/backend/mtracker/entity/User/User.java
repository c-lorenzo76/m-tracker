package backend.mtracker.entity.User;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private String phone_number;
    private String passcode;
    private int age;

    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Enumerated(EnumType.STRING)
    private MaritalStatus marital_status;

    @Enumerated(EnumType.STRING)
    private CurrentMood current_mood;

    @Column(name = "signup_date", updatable = false)
    private LocalDateTime signup_date;

    @Column(name = "last_login")
    private LocalDateTime last_login;


}
