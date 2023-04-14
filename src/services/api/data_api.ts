import axios, { AxiosResponse } from "axios";
import { User } from "../../utils/types/types";

const instance = axios.create({
  baseURL: "https://6437cc07894c9029e8c63983.mockapi.io",
});

export const getDate = async (): Promise<User[]> => {
  const { data }: AxiosResponse<User[]> = await instance.get("/users", {
    params: {
      page: 1,
      limit: 8,
    },
  });

  console.log("запрос", data);

  return data;
};
