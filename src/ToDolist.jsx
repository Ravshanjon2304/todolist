import React, { useState } from 'react'

const ToDolist = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

function handleInputChange(event){
    setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks( t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {

        if(index > 0){
            const updatedTasks =[...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks =[...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (<div className='to-Do-list'>
        <h1>To Do <span>list</span></h1>

        <div>
            <input
                type="text"
                placeholder='Enter a task... '
                value={newTask}
                onChange={handleInputChange}/>
                <button
                    className='add-button'
                    onClick={addTask}>
                        Add

                </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
            <li key={index}>
                <span className='text'>{task}</span>

                <button
                className='delete-button'
                onClick={() => deleteTask(index)}>
                    Delete
                </button>

                <button
                className='move-button'
                onClick={() => moveTaskUp(index)}>
                    👆
                </button>

                <button
                className='move-button'
                onClick={() => moveTaskDown(index)}>
                    👇
                </button>

                </li>
                )}
        </ol>
        
    </div>);
}
export default ToDolist