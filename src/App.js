import React, { useState } from "react";
import './App.css';

export default function App() {
    let taskInput = '';

    const handleInputChange = (e) => {
        taskInput = e.target.value;
    };

    const handleCreateTask = () => {
        const taskContainer = document.querySelector('#task-container');
        taskContainer.innerHTML = taskInput;
    };

    return (
        <div className="App">
            <input placeholder="Напишите задачу" type="text" onChange={handleInputChange} />
            <button onClick={handleCreateTask}>Создать</button>
            <div id="task-container"></div>
        </div>
    );
}

