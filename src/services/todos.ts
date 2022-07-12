import apiClient from "~/libs/apiClient";

const getTodosData = async (take: number) => {
  const response = await apiClient.get(`/todos/${take}`);

  return response.data;
};

const todosService = { getTodosData };

export default todosService;
