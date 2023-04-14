export interface User {
  id: number;
  user: string;
  avatar: string;
  tweets: number;
  followers: number;
}

export interface MyErrorResponse {
  message: string;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  id?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface SectionProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
