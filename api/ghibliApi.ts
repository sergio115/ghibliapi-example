import axios from "axios";

const ghibliApi = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
});

export default ghibliApi;
