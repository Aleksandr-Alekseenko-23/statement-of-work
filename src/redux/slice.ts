import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../utils/types/types";
import { fetchUsers, updateUserById } from "./operations";

const initialState: UserState = {
  users: [] as User[],
  isLoading: false,
  error: null,
  page: 0,
  hasMore: true,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(...action.payload);
        state.hasMore =
          action.payload.length > 0 && action.payload.length === 9;
        state.page++;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, subscription, followers } = action.payload;
        const user = state.users.find((user) => user.id === id);
        if (user) {
          user.subscription = subscription;
          user.followers = followers;
        }
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default userSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
