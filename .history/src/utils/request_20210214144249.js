import axios from "axios";
import * as cookie from "./cookie";
// import {Toast} from 'vant'
//todo 1. 创建自定义请求实例
const ins = axios.create({
  baseURL: "http://59.110.226.77:5000/api/private/v1/",
  timeout: 20000,
});

//todo 2. 请求的拦截
ins.interceptors.request.use(
  (config) => {
    console.log(config)
    //todo 3. token的统一携带
    config.headers.common["Authorization"] = cookie.getCookie("token");

    return config;
  },
  (error) => Promise.reject(error)
);

ins.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => Promise.reject(error)
);

//todo 4. 封装函数
export default function request(options) {
  const {
    url,
    method = "GET",
    data,
    headers,
    submitType = "json", // json   form   file
  } = options;
  let s = submitType.toUpperCase();

  switch (method.toUpperCase()) {
    case "GET":
      return ins.get(url, { params: data });
    case "POST":
      if (s == "JSON") {
        return ins.post(url, data, { headers });
      }
      if (s == "FORM") {
        //转换参数  new URLSearchParams   ||   qs
        const p = new URLSearchParams();
        for (let key in data) {
          p.append(key, data[key]);
        }
        return ins.post(url, p, { headers });
      }
      if (s == "FILE") {
        const params = new FormData();
        for (let key in data) {
          params.append(key, data[key]);
        }
        return ins.post(url, params, { headers });
      }

      return ins.post(url, data, { headers });
    case "PUT":
      return ins.put(url, data);
    case "DELETE":
      return ins.delete(url, { data });
    case "PATCH":
      return ins.patch(url, data);
    default:
      break;
  }
}
