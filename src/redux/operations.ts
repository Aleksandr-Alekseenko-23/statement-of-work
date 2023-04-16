import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, updateUser } from "../services/api/data_api";
import {
  User,
  UserState,
  UpdateUserData,
  Pagination,
} from "../utils/types/types";

export const fetchUsers = createAsyncThunk<
  User[],
  Pagination,
  { rejectValue: string }
>("users/fetchUsers", async ({ page, limit }, { rejectWithValue }) => {
  const data = await getUsers({ page, limit });
  if (!data) {
    return rejectWithValue("Server Error!");
  }
  return data;
});

export const updateUserById = createAsyncThunk<
  User,
  UpdateUserData,
  { rejectValue: string; state: { users: UserState } }
>("users/updateUserById", async (data, { rejectWithValue, getState }) => {
  const user = getState().users.users.find((user) => user.id === data.id);

  if (user) {
    const updatedUser = {
      ...user,
      subscription: data.subscription,
      followers: data.followers,
    };

    const response = await updateUser(updatedUser);

    if (!response) {
      return rejectWithValue("Server Error!");
    }
    return response;
  }
  return rejectWithValue("No such user in the list");
});
