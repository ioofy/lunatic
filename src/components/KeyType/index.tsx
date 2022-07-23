// props pawling
type ValueKey = string | number | boolean;

interface DataProps {
  [key: string | number]: ValueKey;
}

const KeyType = ({ ...item }: DataProps) => {
  return (
    <>
      <span>
        <p>id: {item.id}</p>
        <p>title: {item.title}</p>
        <p>status: {item.completed ? "Yes" : "No"}</p>
        <p>uid: {item.userId}</p>
      </span>
    </>
  );
};

export default KeyType;
