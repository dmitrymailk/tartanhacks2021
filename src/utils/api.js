import axios from "axios";

var staticFiles = axios.create({
  baseURL: "https://storage.googleapis.com/tartanhacks/",
  crossdomain: true,
});

export { staticFiles };
