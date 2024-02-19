import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
//import {methodName} from location and name of the js file
import { initializeAddTask } from "./initAddTask";
import { getAllTasks } from "./repository/taskRepo";

let todoList = [];

const fetchTasks = async () => {
  //get all the tasks
  let response = await getAllTasks();
  //when working with axois it automatically parses to json
  //and stores the result in a data property
  todoList = response.data;
  displayList();
};

//create a function that runs when the page
//This is like constructor of main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document Loaded");
  fetchTasks();
  initializeAddTask();
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
                <button key=${index} class="btn btn-success complete-button">Complete</button>
                <button key=${index} class="btn btn-danger delete-button">Delete</button>
              </div>`;
    list.appendChild(item);
    //because we dont know how many items will be in the list
    //we cannot just directly get references to these buttons and add
    //code them
    //We need to add the eventLister to the parent container
    //and then use the index to determine which button was clicked on
    //we add the listener to the parent
    list.addEventListener("click", (event) => {
      //get the index of the task
      let index = event.target.getAttribute("key");
      //find out whether they clicked complete or delete
      if (event.target.classList.contains("complete-button")) {
        console.log(`Complete ${index}`);
      } else if (event.target.classList.contains("delete-button")) {
        console.log(`Delete ${index}`);
      }
    });
  });
};
