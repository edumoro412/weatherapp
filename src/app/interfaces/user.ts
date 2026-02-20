export interface UserInterface {
  email: string;
  password: string;
}

export interface UserRegisterInterface extends UserInterface {
  name: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  message: string;
  status?: number;
}
