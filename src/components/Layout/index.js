import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {

    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer);
        }

        getTasks();
    }, []);

    // Fetch Tasks
    const fetchTask = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });

        const data = await res.json();

        setTasks([...tasks, data]);
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });

        setTasks(tasks.filter((task) => task.id !== id));
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updTask)
        });

        const data = await res.json();

        setTasks(
            tasks && tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        );
    }

    return (
        <Fragment>
            <Header />
            <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                    ) : (null);
                })}
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default Layout;
