export class User {
  id: number;
  email: string;
  avatar_url: string;
  password: string;
  first_name: string;
  last_name: string;
  employed_company: {
    id: number;
    name: string;
  }
}
