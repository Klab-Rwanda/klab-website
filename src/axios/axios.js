import axios from "axios";

export default axios.create({
  baseURL: "https://klab-academy.onrender.com/api/v1",
});

// export default axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });
