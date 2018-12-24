import axios from "axios";

const api = axios.create({
  baseURL: "www.googleapis.com/books/v1"
});

export default api;
