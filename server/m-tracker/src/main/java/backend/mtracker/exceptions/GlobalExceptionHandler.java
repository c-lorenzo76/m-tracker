package backend.mtracker.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Checks to see if any of the Valid attributes are null or empty.
     * @param ex
     * @return ResponseEntity<>(errors,HttpStatus.BAD_REQUEST)
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.put(error.getField(), error.getDefaultMessage());
        }
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    /**
     * Checks to see if the User is not found.
     * @param ex
     * @return ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND)
     */
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    /**
     * Checks to see that there are no duplicate Users with the same email as it has to be unique.
     * @param ex
     * @return ResponseEntity<>(error, HttpStatus.BAD_REQUEST)
     */
    @ExceptionHandler(DuplicateEmailException.class)
    public ResponseEntity<Map<String, String>> handleDuplicateEmailException(DuplicateEmailException ex){
        Map<String, String> error = new HashMap<>();
        error.put("message", ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    /**
     * Checks to see that the passwords match i.e.(old)
     * @param ex
     * @return ResponseEntity<>(error, HttpStatus.BAD_REQUEST)
     */
    @ExceptionHandler(PasswordNotMatch.class)
    public ResponseEntity<Map<String, String>> handlePasswordNotMatchException(PasswordNotMatch ex){
        Map<String, String> error = new HashMap<>();
        error.put("message", ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    /**
     * Returns an error for Journal entry not being found
     * @param ex
     * @return ResponseEntity<>(error, HttpStatus.NOT_FOUND);
     */
    @ExceptionHandler(JournalEntryNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleJournalEntryNotFoundException(JournalEntryNotFoundException ex){
        Map<String, String> error = new HashMap<>();
        error.put("message", ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    /**
     * Returns an error for a Mood History not being found
     * @param ex
     * @return ResponseEntity<>(error, HttpStatus.NOT_FOUND);
     */
    @ExceptionHandler(MoodHistoryNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleMoodHistoryNotFoundException(MoodHistoryNotFoundException ex){
        Map<String, String> error = new HashMap<>();
        error.put("message", ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
