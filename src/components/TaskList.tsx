import React from "react";
// Intefaces
import { ITask } from "../interfaces/Task";
// Styles
import styles from "./TaskList.module.css";

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.theTask} key={task.id}>
            <div className="content">
              <h4 className={styles.title}>{task.title}</h4>
              <p className={styles.difficulty}>
                Dificuldade: {task.difficulty}
              </p>
            </div>
            <div className="buttons">
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
