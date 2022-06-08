import React,{useContext} from "react";
import { TaskContext } from "../../context/TaskContext";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  const {tasks} = useContext(TaskContext);
  let totalTask = tasks.length;
  let unCompletedTask = tasks.filter(task => !task.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      Todo List:
      You have 
      <b data-testid="header-remaining-task"> {unCompletedTask} </b>
      out of
      <b data-testid="header-total-task"> {totalTask} </b>
      remaining.
    </div>
  );
};

export default TaskHeader;
