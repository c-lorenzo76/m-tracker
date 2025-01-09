import { Sex } from './sex.enum';

export class RegisterRequest {
  name: string = '';
  email: string = '';
  password: string = '';
  age: number = 0;
  sex: Sex = Sex.Male;

}
