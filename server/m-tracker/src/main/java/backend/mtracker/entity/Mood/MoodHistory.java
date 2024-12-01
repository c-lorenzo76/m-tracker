package backend.mtracker.entity.Mood;

import backend.mtracker.entity.Journal.JournalEntries;
import backend.mtracker.entity.User.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MoodHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "journal_entry_id", nullable = false)
    private JournalEntries journalEntry;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Mood mood;

    @Column
    private LocalDateTime date;
}
