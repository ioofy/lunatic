import apiClient from "libs/apiClient";
import { UsersType } from "types/data";

const getUsersData = async (no: number) => {
  const response = await apiClient.get(`/users/${no}`);

  return UsersType.parse(response.data);
};

const userService = { getUsersData };

export default userService;
