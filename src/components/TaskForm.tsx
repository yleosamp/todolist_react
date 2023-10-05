import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
// Styles
import styles from "./TaskForm.module.css";
// Interfaces
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTile] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTile(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
    console.log(title);
    console.log(difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Tìtulo da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
