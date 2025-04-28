import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9dbc82f83c7549a3a0805ca58a2ed08c",
  },
});
