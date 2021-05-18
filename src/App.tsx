import React, { FC, useState, ChangeEvent } from "react";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./interfaces";
const App: FC = () => {
  const [task, setTask] = useState<String>("");
  const [deadLine, setDeadLine] = useState<Number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadLine };
    setTask("");
    setDeadLine(0);
    setTodoList([...todoList, newTask]);
  };
  console.log(todoList, "hi");
  const completeTask = (taskToDelete: String): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Taask"
          name="task"
          onChange={handleChange}
        />
        <input
          type="number"
          name="deadline"
          placeholder="DeadLine(in days)"
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task </button>{" "}
      </div>
      {/* how to add the props to your functional component */}
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
