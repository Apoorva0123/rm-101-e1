import React from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import { TaskContext } from "../context/TaskContext";
import { useContext, useEffect } from "react";
import data from "../data/tasks.json";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const {handleTasks} = useContext(TaskContext);

  useEffect(() => {
    handleTasks(data);
  },[])

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask />
      <Tasks/>
    </div>
  );
};

export default TaskApp;
