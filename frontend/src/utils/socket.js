// socket.js
import { io } from "socket.io-client";
const endpoint = import.meta.env.VITE_BACKEND_ENDPOINT

const url = endpoint.split('/api')[0]

const socket = io(url, {
  auth: {
    token: localStorage.getItem("token") // or whatever auth you use
  }
});

export default socket;
