package backend.mtracker.entity.Journal;

import backend.mtracker.entity.Mood.Mood;
import backend.mtracker.entity.User.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JournalEntries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column
    private LocalDateTime entry_date;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Mood mood;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String activities;

    @Column(name= "is_private", nullable = false)
    private Boolean is_private;

}
