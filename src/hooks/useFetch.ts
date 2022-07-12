import { useQuery } from "react-query";
import { z } from "zod";
import todosService from "~/services/todos";

const DataType = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});

type TypeData = z.infer<typeof DataType>;

const useFetchTodos = () => {
  return useQuery<TypeData, Error>(
    ["listTodos"],
    async () => await todosService.getTodosData(1)
  );
};

export { useFetchTodos };
