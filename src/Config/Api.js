import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_ENDPOINT
});

const token = localStorage.getItem('token')
console.log('Token: ', token);
if (token) {
	instance.defaults.headers.common['auth-token'] = token;
}
else {
	delete instance.defaults.headers.common['auth-token'];
}


Vue.prototype.$axios = instance
