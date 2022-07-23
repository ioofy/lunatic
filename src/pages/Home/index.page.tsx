import Generic from "components/Generic";
import KeyType from "components/KeyType";
import { useFetchTodos, useFetchUsers } from "hooks/useFetch";

export const Home = () => {
  const { data: todos, isLoading: todosLoading } = useFetchTodos();
  const { data: users, isLoading: usersLoading } = useFetchUsers();

  if (todosLoading || usersLoading) return <p>Fetching your data..</p>;

  return (
    <div>
      With Generic Type
      <Generic todos={todos} users={users} />
      <br />
      <br />
      With key Type
      <KeyType {...todos} />
    </div>
  );
};
