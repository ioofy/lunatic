import apiClient from "libs/apiClient";
import { TodosType } from "types/data";

const getTodosData = async (no: number) => {
  const response = await apiClient.get(`/todos/${no}`);

  return TodosType.parse(response.data);
};

const todosService = { getTodosData };

export default todosService;
