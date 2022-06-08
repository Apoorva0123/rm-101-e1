import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const handleTasks = (data) => {
        setTasks(data);
    };

    return (
        <TaskContext.Provider value={{tasks, handleTasks}}>
            {children}
        </TaskContext.Provider>
    );
}