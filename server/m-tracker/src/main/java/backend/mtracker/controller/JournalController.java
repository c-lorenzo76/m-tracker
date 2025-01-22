package backend.mtracker.controller;

import backend.mtracker.dto.Journal.JournalDTO;
import backend.mtracker.service.Journal.JournalEntriesService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journal")
public class JournalController {

    @Autowired
    private JournalEntriesService journalService;

    @GetMapping("/all")
    public ResponseEntity<List<JournalDTO>> getAllJournals() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        List<JournalDTO> journalsList = journalService.getJournalEntriesByUserId(username);
        return new ResponseEntity<List<JournalDTO>>(journalsList,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createNewJournalEntry(@Valid @RequestBody JournalDTO journalEntry) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        journalService.createJournalEntry(journalEntry, username);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/edit-entry/{id}")
    public ResponseEntity<String> editJournalEntry(@Valid @RequestBody JournalDTO journalEntry, @PathVariable Long id) {
        journalService.editJournalEntry(journalEntry, id);
        return new ResponseEntity("Successfully edited the Journal entry", HttpStatus.OK);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<String> deleteJournalEntryByID(@PathVariable Long id) {
        journalService.deleteJournalEntry(id);
        return new ResponseEntity("Successfully deleted the Journal entry with ID: " + id,HttpStatus.OK);
    }

    @GetMapping("/count-journals")
    public ResponseEntity<Integer> getNumJournals() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        Integer journalCount = journalService.getJournalCount(username);
        return new ResponseEntity<>(journalCount, HttpStatus.OK);
    }




}
