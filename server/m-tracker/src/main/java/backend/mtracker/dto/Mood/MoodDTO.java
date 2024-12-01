package backend.mtracker.dto.Mood;

import backend.mtracker.entity.Journal.JournalEntries;
import backend.mtracker.entity.Mood.Mood;
import backend.mtracker.entity.User.User;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MoodDTO {

    @NotNull(message = "Date required")
    private LocalDateTime date;

    @NotNull(message = "Mood required")
    private Mood mood;

}
