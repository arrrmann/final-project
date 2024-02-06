import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import styles from './task-item.module.css'
import { TaskItemPropsI } from "../TaskItem.interface";
import { RootState } from "store";
import { changeTaskItemName } from 'Entities/Tasks/TasksSlice';

const TaskItem: React.FC<TaskItemPropsI> = ({ item, parentId }) => {
    const [isEditting, setEditting] = useState(false)
    const [itemName, setItemName] = useState(item.name)

    const tasks = useSelector((state: RootState) => {
        return state.tasks.tasks;
    });


    const dispatch = useDispatch();

    const handleTaskItemChange = () => {
        setEditting(!isEditting)
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(e.target.value)
        dispatch(changeTaskItemName({ parentId, selfId: item.id, name: e.target.value }));

    }

    return (
        <ul className={styles.ul}>
            <li>
                <div className={styles.taskName}>
                    {!isEditting ? <p>{item.name}</p> : <input type="text" value={itemName} onChange={handleInputChange} />}
                    <button className={styles.bbutton} onClick={handleTaskItemChange}>
                        {
                            !isEditting ? <FaEdit/>:<FaX/>
                        }
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default TaskItem