import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Tasks
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// Styles
import styles from "./App.module.css";
// Interfaces
import { ITask } from "./interfaces/Task";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div className="formulario">
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" />
        </div>
        <div className="lista">
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
