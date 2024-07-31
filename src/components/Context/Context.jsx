import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente1', status: false },
        { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente2', status: true },
        { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente3', status: true }
    ]);

    const addTask = (title, description) => {
        setTasks([...tasks, { id: uuidv4(), title, description, status: false }]);
    };

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: !task.status } : task
        ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
