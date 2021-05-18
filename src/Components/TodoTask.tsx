import React from "react";
import { ITask } from "../interfaces";
interface Props {
  task: ITask;
  completeTask(taskToDelete: String): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <>
      <div>
        {task.taskName}
        {task.deadLine}
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default TodoTask;
