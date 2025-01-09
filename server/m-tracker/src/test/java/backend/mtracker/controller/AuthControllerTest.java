package backend.mtracker.controller;

import backend.mtracker.dto.User.RegisterDTO;
import backend.mtracker.dto.User.UserDTO;
import backend.mtracker.entity.User.Sex;
import backend.mtracker.service.User.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AuthController.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private UserService service;


    @Test
    public void testRegisterUser() throws Exception {
        String registerJson = """
            {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "password": "password123",
                "age": 30,
                "sex": "Male"
            }
        """;

        UserDTO userDTO = new UserDTO();
        userDTO.setName("John Doe");
        userDTO.setEmail("john.doe@example.com");
        userDTO.setPhone_number("1234567890");
        userDTO.setPassword("password123"); // In real cases, this should not be returned in plaintext
        userDTO.setSex(Sex.Male);
        userDTO.setSignup_date("2023-12-08T10:15:30");
        userDTO.setLast_login(null);


        when(service.registerUser(any(RegisterDTO.class))).thenReturn(userDTO);

        // Perform the POST request and verify the response
        mockMvc.perform(post("/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(registerJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.email").value("john.doe@example.com"))
                .andExpect(jsonPath("$.phone_number").value("1234567890"))
                .andExpect(jsonPath("$.password").value("password123"))
                .andExpect(jsonPath("$.sex").value("MALE"))
                .andExpect(jsonPath("$.signup_date").value("2023-12-08T10:15:30"))
                .andExpect(jsonPath("$.last_login").doesNotExist());
    }


}
