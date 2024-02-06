import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TaskItemProps, TaskProps } from 'shared/TasksInterface';
import { RootState } from 'store'; 
import Tasq from 'Features/Tasq';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { changeDragDropItems } from 'Entities/Tasks/TasksSlice';
import styles from './task-list.module.css'

const TaskList: React.FC = () => {

    const dispatch = useDispatch();

    const tasks = useSelector((state: RootState) => {
        return state.tasks.tasks;
    });

    const onDragEnd = (result: any) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        const sourceColumn: TaskProps = tasks.find((item) => item.id.toString() === source.droppableId) as TaskProps;
        const destinationColumn: TaskProps = tasks.find((item) => item.id.toString() === destination.droppableId) as TaskProps;

        const newSourceCards: TaskItemProps[] = Array.from(sourceColumn?.tasks as TaskItemProps[])
        const [removedCard] = newSourceCards.splice(source.index, 1);

        if (source.droppableId === destination.droppableId) {
            newSourceCards.splice(destination.index, 0, removedCard);

            const newColumn: TaskProps = {
                ...sourceColumn,
                tasks: newSourceCards,
            };

            dispatch(changeDragDropItems(tasks.map(column => column.id === newColumn.id ? newColumn : column)))
        } else {
            const newDestinationCards: TaskItemProps[] = Array.from(destinationColumn.tasks);
            newDestinationCards.splice(destination.index, 0, removedCard);


            const newSourceColumn: TaskProps = {
                ...sourceColumn,
                tasks: newSourceCards
            }

            const newDestinationColumn: TaskProps = {
                ...destinationColumn,
                tasks: newDestinationCards
            }


            dispatch(changeDragDropItems((tasks.map(column => {
                if (column.id === newSourceColumn.id) return newSourceColumn;
                if (column.id === newDestinationColumn.id) return newDestinationColumn;
                return column
            }))))
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.taskGroup}>
                {
                    tasks.map((task, index) => {
                        return (
                            <Droppable droppableId={task.id.toString()} key={task.id}>
                                {
                                    (provided) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                            >
                                                <Tasq task={task} key={task.id} />
                                            </div>
                                        )
                                    }
                                }
                            </Droppable>
                        )
                    }
                    )
                }
            </div>
        </DragDropContext>
    )
}

export default TaskList