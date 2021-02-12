import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = (props) => {
    const { task, onDelete, onToggle } = props;

    const toggler = () => {
        onToggle(task.id);
    }

    const deleter = () => {
        onDelete(task.id);
    }

    return (
        <div
            className={`card Task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={toggler}
        >
            <div className="card-header">
                <h5 className="card-title Task-title">
                    {task.title} {' '}
                </h5>
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={deleter}
                />
            </div>
            <div className="card-body Task-body">
                <span className="card-text Task-content">
                    {task.weekDay}
                </span>
                <span className="card-text Task-content">
                    {task.inbox}
                </span>
            </div>
        </div>
    )
}

export default Task
