import axios from "axios";
import { BASEURL } from '../consts/Consts.ts'

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: BASEURL
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    // console.log(err, 'Ошибка');
  }
);

export { axiosInstance };