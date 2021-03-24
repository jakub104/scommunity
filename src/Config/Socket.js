import Vue from 'vue'
import { io } from "socket.io-client";
const socket = io.connect('http://localhost:5000')
Vue.prototype.$socket = socket