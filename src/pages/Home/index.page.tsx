import Generic from "components/Generic";
import { useFetchTodos, useFetchUsers } from "hooks/useFetch";

export const Home = () => {
  const {
    data: todos,
    isLoading: todosLoading,
    isSuccess: todosSuccess,
    isError: todosError,
  } = useFetchTodos();
  const {
    data: users,
    isLoading: usersLoading,
    isSuccess: usersSuccess,
    isError: usersError,
  } = useFetchUsers();

  if (usersLoading || todosLoading) return <p>Fetching your data..</p>;
  if (usersError || todosError) return <p>Error fetching your data..</p>;

  return (
    <div>
      Query Data
      {usersSuccess && todosSuccess && <Generic users={users} todos={todos} />}
    </div>
  );
};
