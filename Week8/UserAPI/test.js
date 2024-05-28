import axios from "axios";

const options = {
  method: "GET",
  url: "https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028",
  headers: {
    "X-RapidAPI-Key": "edc1cf53c9msh509f6e4a610f77dp1e03aajsnb5e9e035ff19",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
