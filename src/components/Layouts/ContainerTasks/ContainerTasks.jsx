import React, { useState } from 'react';
import { useTasks } from '../../Context/Context';
import { FilterTask } from '../../FilterTasks/FilterTasks'
import { ItemTask } from '../../ItemTask/ItemTask';
import './ContainerTasks.css';

export const ContainerTasks = () => {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState('todas');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'pendientes') return !task.status;
        if (filter === 'realizadas') return task.status;
        return true;
    });

    return (
        <div>
            <FilterTask setFilter={setFilter} />
            {filteredTasks.map(task => (
                <ItemTask key={task.id} task={task} />
            ))}
        </div>
    );
};