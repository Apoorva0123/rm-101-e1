import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const {tasks, handleTasks} = useContext(TaskContext);

  const [taskData, setTaskData] = useState({
    done: false,
    count: 1
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    let newTask = true;
    if(taskData.text === "")
    {
      return;
    }
    tasks.forEach((e) => {
      if(e.text === taskData.text)
      {
        newTask = false;
        return;
      }
    });
    if(newTask)
    {
      handleTasks([...tasks, {...taskData, id: tasks.length+1}])
    }
  }

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" name="text" onChange={handleChange}/>
      <button data-testid="add-task-button" onClick={handleSubmit}>+</button>
    </div>
  );
};

export default AddTask;
