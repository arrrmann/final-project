import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTask } from 'Entities/Tasks/TasksSlice';
import TaskList from 'Features/TaskList';
import styles from './board.module.css'

const Board: React.FC = () => {
    const dispatch = useDispatch();

    const [onIsAdd, setOnIsAdd] = useState(false)
    const [taskText, setTaskText] = useState("")

    const handleAddClick = () => {
        setOnIsAdd(true)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    }

    const onAddNewClick = () => {
        if (taskText === "") {
            setOnIsAdd(false);
        } else {
        dispatch(addTask(taskText));
        setTaskText("");
        setOnIsAdd(false);
        }
    };

    return (
        <div className={styles.board}>
            {
                !onIsAdd ? <button onClick={handleAddClick} className={styles.addList}>
                    <span className={styles.plyusik}>+</span>
                </button> : (
                    <div className={styles.addNewList}>
                        <input
                            type="text"
                            onChange={onInputChange}
                            placeholder="Add list..."
                            value={taskText}
                        />{" "}
                        <button onClick={onAddNewClick}>
                            {taskText !== "" ? "Add List" : "Close"}
                        </button>
                    </div>
                )}
            <TaskList />
        </div>
    )
}

export default Board