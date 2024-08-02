import React from 'react';
import { useTasks } from "../Context/Context";
import './ItemTask.css';

export const ItemTask = ({ task }) => {
    const { toggleTaskStatus } = useTasks();

    return (
        <div className={`task-item ${task.status ? 'completed' : ''}`}>
            <span className={`task-status-dot ${task.status ? 'completed' : 'pending'}`}></span>
            <span className="task-title">{task.title}</span>
            <button onClick={() => toggleTaskStatus(task.id)}>{task.status ? '✓' : '☐'}</button>
        </div>
    );
};