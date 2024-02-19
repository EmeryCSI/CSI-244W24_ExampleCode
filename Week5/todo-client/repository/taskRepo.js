//import axios
import axios from "axios";
//we are going to use axios to send requests to the server
//save the host url in a variable
const BASE_URL = `http://localhost:3001`;

//define a function that we will export
export const getAllTasks = () => {
  return axios.get(BASE_URL + "/tasks");
};
