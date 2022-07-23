import React from "react";
import { TodosType, UsersType } from "types/data";
import { z } from "zod";

type Users = z.infer<typeof UsersType>;
type Todos = z.infer<typeof TodosType>;

interface ItemProps {
  todos: Todos | undefined;
  users: Users | undefined;
}

const Generic: React.FC<ItemProps> = ({ todos, users }) => {
  return (
    <>
      <br />
      <span>
        <strong>Todos</strong>
      </span>
      <p>{todos?.userId}</p>
      <p>{todos?.title}</p>
      <p>{todos?.completed}</p>
      <span>
        <strong>Users</strong>
      </span>
      <p>{users?.name}</p>
      <p>{users?.website}</p>
      <p>{users?.email}</p>
    </>
  );
};

export default Generic;
