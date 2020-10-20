import axios from "axios";

const instance = axios.create({
  baseURL: "https://limitless-castle-62687.herokuapp.com/",
});

export default instance;
