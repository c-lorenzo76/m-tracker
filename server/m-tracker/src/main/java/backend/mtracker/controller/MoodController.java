package backend.mtracker.controller;

import backend.mtracker.dto.Mood.MoodDTO;
import backend.mtracker.entity.Mood.Mood;
import backend.mtracker.repository.MoodHistoryRepository;
import backend.mtracker.service.Mood.MoodHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mood")
public class MoodController {

    @Autowired
    private MoodHistoryService moodHistoryService;

    @GetMapping("/all")
    public ResponseEntity<List<MoodDTO>> getAllMoods() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        List<MoodDTO> moodDTOList = moodHistoryService.getAllMoodHistory(username);

        return new ResponseEntity<List<MoodDTO>>(moodDTOList, HttpStatus.OK);
    }

}
