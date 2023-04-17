import { User, UserState } from "../utils/types/types";

export const selectUsers = (state: { users: UserState }): User[] =>
  state.users.users;

export const selectFilterUsers = (state: { users: UserState }): string =>
  state.users.filter;

export const selectIsLoading = (state: { users: UserState }): boolean =>
  state.users.isLoading;

export const selectError = (state: { users: UserState }): null | string =>
  state.users.error;

export const selectPage = (state: { users: UserState }): number =>
  state.users.page;

export const selectHasMore = (state: { users: UserState }): boolean =>
  state.users.hasMore;
