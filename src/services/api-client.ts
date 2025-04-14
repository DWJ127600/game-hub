import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "141d6e89dc1149b295f2a9f9408f2b2b",
  },
});
