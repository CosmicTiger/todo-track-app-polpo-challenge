import Task from './index';

const Tasks = (props) => {
    const { tasks, onDelete, onToggle } = props;

    return (
        <>
            { tasks && tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    );
};

export default Tasks;
