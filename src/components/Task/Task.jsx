import React, { useContext } from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";
import { TaskContext } from "../../context/TaskContext";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair
  const { tasks, handleTasks } = useContext(TaskContext);

  function handleClick(id){
    handleTasks(
      tasks.map((e) => 
        e.id === id ? {...e, done: !e.done} : e
      )
    )
  }
  function handleDelete(id){
    handleTasks(
      tasks.filter((e) => 
        e.id !== id
      )
    )
  }
  return (
    <>
      {tasks.map((e) => (
        <li data-testid="task" className={styles.task} key={e.id}>
          {e.done ? (
            <input type="checkbox" data-testid="task-checkbox" onClick={() => {handleClick(e.id)}} defaultChecked/>
          ) : (
            <input type="checkbox" data-testid="task-checkbox" onClick={() => {handleClick(e.id)}}/>
          )}
          <div data-testid="task-text" style={e.done ? {textDecoration: "line-through"} : {}}>{e.text}</div>
          <Counter countvalue={e.count} />
          <button data-testid="task-remove-button" onClick={() => {handleDelete(e.id)}}>X</button>
        </li>
      ))}
    </>
  );
};

export default Task;
