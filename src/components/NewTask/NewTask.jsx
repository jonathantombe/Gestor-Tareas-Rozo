import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'
import { useState } from 'react';
import { useTasks } from '../Context/Context';

export const NewTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            addTask(title, description);
            setTitle('');
            setDescription('');
        }

    }
    return (<>
        <div>
            <form className="frm-task" onSubmit={handleSubmit}>
                <div className="group-title-task">
                    <label htmlFor="taskTitle">Título de la tarea:</label>
                    <input type="text" id="taskTitle" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ingrese el título"/>
                </div>
                <div className="group-description-task">
                    <label htmlFor="taskDescription">Descripción de la tarea:</label>
                    <input type="text" id="taskDescription" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ingrese la descripción" />
                </div>
                <button type="submit" className="btn-new-task">Crear nueva tarea</button>
            </form>
        </div>
    </>)
}