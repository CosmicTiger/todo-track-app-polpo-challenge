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
            className={`card task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={toggler}
        >
            <div className="card-header">
                <h5 className="card-title Task-title">
                    {task.text} {' '}
                </h5>
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={deleter}
                />
            </div>
            <div className="card-body Task-body">
                <span className="card-text Task-content">
                    {task.day}
                </span>
            </div>
        </div>
    )
}

export default Task
