import React, { useState } from 'react'
import styles from './Tasq.module.css'
import { TaskPropsI } from "../Tasq.interface";
import TaskItem from 'Features/TaskItem';
import { Draggable } from "react-beautiful-dnd";
import { addItem } from "Entities/Tasks/TasksSlice";
import { useDispatch } from "react-redux";

const Tasq: React.FC<TaskPropsI> = ({ task }) => {
  const [newItemName, setNewItemName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    setAddNewClicked(true);
  };


  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value)
  }

  const onAddNewClick = () => {
    if (newItemName === "") {
      setAddNewClicked(false)
    } else {
      dispatch(addItem({ parentId: task.id, name: newItemName }))
      setNewItemName('')
      setAddNewClicked(false)
    }
  }

  return (
    <div className={styles.taskGroup}>
      <div className={styles.taskName}>
        <h4>{task.taskState}</h4>
      </div>
      {task.tasks.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            draggableId={item.id.toString()}
            index={index}
          >
            {(provided) => {
              return (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <TaskItem item={item} parentId={task.id} key={item.id} />
                </div>
              );
            }}
          </Draggable>
        );
      })}
      <div className={styles.taskBottom}>
        {!addNewClicked ? (
          <div className={styles.taskBottomDiv}>
            <button className={styles.addButton} onClick={handleAddClick}>
              +
            </button>
          </div>
        ) : (
          <div className={styles.addNew}>
            <input type="text" value={newItemName} onChange={onInputChange} />
            <button onClick={onAddNewClick}>{newItemName !== "" ? "+" : 'Close'}</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasq