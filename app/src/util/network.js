import axios from "axios"

let config = {
  baseURL: "/api",
  transformResponse: [
    function (data) {
      return data
    }
  ],
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 20000,
  responseType: "json"
}

axios.interceptors.response.use(function (res) {
  return res.data;
})

export function Get(url) {
  return axios.get(url, config)
}

export function Post(url, data) {
  return axios.post(url, data, config)
}

export function Put(url, data) {
  return axios.put(url, data, config)
}

export function Remove(url) {
  return axios.delete(url, config)
}

export function Patch(url, data) {
  return axios.patch(url, data, config)
}