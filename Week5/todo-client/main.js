import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

let todoList = [
  {
    task: "Buy groceries",
    status: "incomplete",
    priority: "high",
  },
  {
    task: "Finish work presentation",
    status: "incomplete",
    priority: "medium",
  },
  {
    task: "Go for a run",
    status: "complete",
    priority: "low",
  },
  {
    task: "Read a book",
    status: "incomplete",
    priority: "medium",
  },
  {
    task: "Play Baseball",
    status: "incomplete",
    priority: "low",
  },
];

//create a function that runs when the page
//This is like constructor of main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document Loaded");
  displayList();
});

const displayList = () => {
  const list = document.getElementById("taskList");
  //console.log(list);
  list.innerHTML = "";
  // The simple way
  // todoList.forEach((task, index) => {
  //   let item = document.createElement("li");
  //   item.innerHTML = `<p>${task.task} ${task.status} ${task.priority}</p>`;
  //   list.appendChild(item);
  // });

  //we want a whole div rendered inside each li
  //we want some styling
  //we need buttons that fire when clicked

  todoList.forEach((task, index) => {
    //lets start with some styling
    let priorityClass;
    if (task.priority === "high") {
      priorityClass = "text-danger";
    } else if (task.priority === "medium") {
      priorityClass = "text-warning";
    } else {
      priorityClass = "text-info";
    }
    let item = document.createElement("li");
    item.innerHTML = `
              <div class="d-flex justify-content-between">
                <p>${task.task}</p>
                <p>${task.priority}</p>
                <button class="btn btn-success">Complete</button>
                <button class="btn btn-danger">Delete</button>
              </div>`;
    list.appendChild(item);
    //because we dont know how many items will be in the list
    //we cannot just directly get references to these buttons and add
    //code them
    //We need to add the eventLister to the parent container
    //and then use the index to determine which button was clicked on
    //console.log(`${task.task} - ${priorityClass}`);
  });
};
