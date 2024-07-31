import React from 'react';
import { InfoTasks } from '../InfoTasks/InfoTasks';
import { NewTask } from '../../NewTask/NewTask';
import { ContainerTasks } from '../ContainerTasks/ContainerTasks';
import './Main.css';

export const Main = () => {
    return (
        <main className="main-container">
            <InfoTasks />
            <NewTask />
            <ContainerTasks />
        </main>
    );
};