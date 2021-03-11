import Axios from "axios";
const ownAxios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default ownAxios;
