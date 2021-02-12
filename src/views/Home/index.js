import React from 'react';
import AddTask from '../../components/AddTask';
import Tasks from '../../components/Tasks';

const Home = (props) => {
    const { showAddTask, tasks } = props;

    return (
        <>
            <Task />
        </>
    )
}

export default Home
