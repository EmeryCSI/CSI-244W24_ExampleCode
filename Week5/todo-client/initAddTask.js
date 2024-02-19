//to make a module
export function initializeAddTask() {
  const btnAddTask = document.getElementById("btnAddTask");
  const taskInput = document.querySelector("#taskInput");
  btnAddTask.addEventListener("click", (event) => {
    alert("Add Task Clicked");
  });
}
