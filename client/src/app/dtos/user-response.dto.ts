import {Sex} from "./sex.enum";

export interface UserDTO {
  name: string;
  email: string;
  phone_number: string;
  sex: Sex;
  signup_date: string;
  last_login: string;
}
