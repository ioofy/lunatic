import Generic from "~/components/Generic";
import { useFetchTodos } from "./hooks/useFetch";

function App() {
  const { data, isLoading } = useFetchTodos();

  if (isLoading) return <p>Fetching your datas..</p>;

  return (
    <>
      <Generic data={data} />
    </>
  );
}

export default App;
