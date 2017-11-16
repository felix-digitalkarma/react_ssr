import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../client/reducers";
import config from "./baseConfig";

export default req => {
  const axiosInstance = axios.create({
    baseURL: config.baseURL,
    headers: { cookie: req.get("cookie") || "" }
  });
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};