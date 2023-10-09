import React from "react";

function Task({ task, toggleComplete, removeTask }) {
  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <p className="task-text">{task.text}</p>
      </div>
      <div>
        <button className="remove-button" onClick={() => removeTask(task.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default Task;
