import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="date-container">
        <h1 class="date">Saturday, 9th</h1>
        <h5 class="month">March</h5>
        <h1 class="number-of-tasks">0 Tasks</h1>
      </div>
      <div class="task-list-container"></div>
      <div class="tasks-menu-container">
        <span id="all" class="active">
          All
        </span>
        <span id="pending">Pending</span>
        <span id="completed">Completed</span>
        <button class="clear-all-btn">Clear All</button>
      </div>
      <div class="input-div">
        <input type="text" class="task-input" placeholder="Enter Your Task" />
        <button class="add-task-btn">+</button>
      </div>
    </div>
  );
}

export default App;
