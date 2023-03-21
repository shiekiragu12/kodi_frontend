import axios from "axios";

export const serverUrl = axios.create({
  baseURL: "https://kodinyumba.app/api",
});
