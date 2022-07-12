import React from "react";

type KeyValue = number | string;

interface DataProps<T extends KeyValue> {
  id: T;
  userId: T;
  completed: boolean;
  title: string;
}

interface ItemProps<T extends KeyValue> {
  data: DataProps<T> | any;
}

// generic type data is ok for list array of object that can come from API
const Generic = <T extends KeyValue>({ data }: ItemProps<T>) => {
  return (
    <span>
      <p>{data.userId}</p>
      <p>{data.title}</p>
      <p>{data.completed}</p>
    </span>
  );
};

export default Generic;
