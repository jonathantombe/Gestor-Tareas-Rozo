import React from 'react';
import './FilterTasks.css';

export const FilterTask = ({ setFilter }) => {
    return (
        <select onChange={(e) => setFilter(e.target.value)}>
            <option value="todas">Todas</option>
            <option value="pendientes">Pendientes</option>
            <option value="realizadas">Realizadas</option>
        </select>
    );
};