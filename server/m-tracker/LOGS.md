## Logs

#### 11/30/2024
TODO:
- Get rid of createUser and have only registerUser for creation of user
- Login is slow for finding the user may have to add a separate query in repository
- Include ID for the JournalEntryDTO to be able to delete an entry if a user decides to will just hide it in the client side
- Finish the remaining parts of the backend service functionality 

COMPLETED:
- Added error handling for missing values for registering
  - Exceptions to each exception necessary and then one GlobalExceptionHandler that takes care for all of them
- Check for emails that already exist in the database to avoid duplicates
- Adjusted to have '/Login' and '/Register' to be a part of AuthController then the rest of the other calls can be from User, JournalEntries, Mood
- UserController and UserService might want to add the valid things I did for RegisterDTO to update the password and profile:
  - added edit-profile, edit-password 
- JournalEntries functionality is now available
- Mood_History gets added when a new JournalEntries is created
- Mood_History requests added


#### 11/29/2024
TODO:
- Test the functionality of controller and service properly work
- Figure out how to get the username from the token

COMPLETED:
- Adjusted tables where Mood_History references Journal_Entries
- Created custom exceptions package
  - UserNotFound, PasswordNotMatch, DuplicateEmail, etc.
- Worked more on controller and service

#### 11/27/2024 pt2
TODO:
- Test the SecurityFilterChain configuration for login & other requests
- Also make adjustments for the controller

Completed:
- Finished SecurityFilterChain

#### 11/27/2024
TODO:
- Focus on finishing SecurityFilterChain for authentication

Completed:
- Files for JWT are done

#### 11/26/2024
TODO:
- Finish requests for controllers
- Allow jsonwebtoken(JWT) to work for login

Completed:
- Completed MapperConfig for DTOs

#### 11/25/2024
TODO:
- Adjust the users table to accept null values in certain attributes
- Finish working on controllers
- Creating DTOs

Completed:
- Finished service functions

#### 11/24/2024
TODO:
- Finish the remaining functions and requests for controllers and services
- Start on DTOs
- Check why it's not properly running

Completed:
- Setup Controllers
- Setup Service

#### 11/23/2024
TODO:
- Adjust tables that are referencing each other

Completed:
- Set up most of the project structure and databases
