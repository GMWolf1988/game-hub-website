import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "81a6597e54c14345ab0b139b00d35321",
  },
});



