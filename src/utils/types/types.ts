export interface User {
  id: string;
  user: string;
  avatar: string;
  tweets: number;
  followers: number;
  subscription: boolean;
}

export type Filter = "all" | "follow" | "following";

export interface UserState {
  users: User[];
  filter: Filter;
  isLoading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

export interface UpdateUserData {
  id: string;
  subscription: boolean;
  followers: number;
}

export interface Pagination {
  page: number;
  limit: number;
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

export interface Links {
  id: string;
  label: string;
  path: string;
}
