import React from 'react';
import { useTasks } from '../../Context/Context';
import './InfoTasks.css';

export const InfoTasks = () => {
    const { tasks } = useTasks();
    const pendingTasks = tasks.filter(task => !task.status).length;
    const completedTasks = tasks.filter(task => task.status).length;

    return (
        <div className="info-tasks">
            <p>Usted tiene {pendingTasks} pendiente{pendingTasks !== 1 ? 's' : ''} y {completedTasks} terminada{completedTasks !== 1 ? 's' : ''}</p>
        </div>
    );
};