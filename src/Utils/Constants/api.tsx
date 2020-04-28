import axios from "axios";
const {
  REACT_APP_PRODUCT_SERVICE_API,
  REACT_APP_ORDER_SERVICE_API,
  REACT_APP_USER_MANAGEMENT_SERVICE_API
} = process.env
export const apiURL =""
export const devApiURL ="http://localhost:8080"


export const productApi = axios.create({
  baseURL: `${REACT_APP_PRODUCT_SERVICE_API}`,
  timeout: 0,
  
});

export const orderApi = axios.create({
  baseURL: `${REACT_APP_ORDER_SERVICE_API}`,
  timeout: 0,
  
});
export const userApi = axios.create({
  baseURL: `${REACT_APP_USER_MANAGEMENT_SERVICE_API}`,
  timeout: 0,
  
});
