package backend.mtracker.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class MoodHistoryNotFoundException extends RuntimeException {
    public MoodHistoryNotFoundException(String message) {
        super(message);
    }
}
