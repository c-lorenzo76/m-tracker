package backend.mtracker.dto.Journal;

import backend.mtracker.entity.Mood.Mood;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JournalDTO {

    @NotBlank(message = "Activities is required")
    private String activities;

    @NotBlank(message = "Content is required")
    private String content;

    private LocalDateTime entry_date;

    @NotNull(message = "Privacy is required")
    private Boolean is_private;

    @NotNull(message = "Mood is required")
    private Mood mood;
}
