import axios, { AxiosResponse } from "axios";
import { User, Pagination } from "../../utils/types/types";

const instance = axios.create({
  baseURL: "https://6437cc07894c9029e8c63983.mockapi.io",
});

export const getUsers = async ({
  page,
  limit,
}: Pagination): Promise<User[]> => {
  const { data }: AxiosResponse<User[]> = await instance.get("/users", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const updateUser = async (user: User): Promise<User> => {
  const { data }: AxiosResponse<User> = await instance.put(
    `/users/${user.id}`,
    user
  );
  return data;
};
