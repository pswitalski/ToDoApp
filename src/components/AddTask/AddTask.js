import React, { useState } from "react";
import { StyledAddTask, StyledH2, StyledInput, StyledLabel } from "./AddTask.style";
import Button from "../Button/Button";

function AddTask({handleAddTaskClose, handleAddNewTask, nextTaskId}) {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleTaskInputChange = (e) => {
        setTask(e.target.value);
    }

    const handleCategoryInputChange = (e) => {
        setCategory(e.target.value);
    }

    const handleDateInputChange = (e) => {
        setDate(e.target.value)
    }

    const handleAddTask = (e) => {
        e.preventDefault();

        const newTask = {
            taskId: nextTaskId,
            task,
            category,
            date
        }

        handleAddNewTask(newTask);
        handleAddTaskClose();
    }

    return(
        <StyledAddTask onSubmit={handleAddTask} >
            <StyledH2>Add new task</StyledH2>
            <StyledLabel htmlFor="task" >Task:</StyledLabel>
            <StyledInput id="task" required value={task} onChange={handleTaskInputChange} />
            <StyledLabel htmlFor="category" >Category:</StyledLabel>
            <StyledInput id="category" required value={category} onChange={handleCategoryInputChange} />
            <StyledLabel htmlFor="date" >Target date:</StyledLabel>
            <StyledInput id="date" required type="date" value={date} onChange={handleDateInputChange} />
            <Button text="add" type="submit" />
            <Button text="cancel" type="button" secondary onClick={handleAddTaskClose} />
        </StyledAddTask>
    )
}

export default AddTask;