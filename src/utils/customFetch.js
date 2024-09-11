import axios from "axios";
import { BASE_URL } from "../constant";

const customFetch = axios.create({
  baseURL: "http://localhost:3000",
});

export default customFetch;
