package backend.mtracker;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

// random comment to test
@SpringBootApplication
public class MTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(MTrackerApplication.class, args);
    }

    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }

}
