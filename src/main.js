import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from '@/Router'
// STYLES
import '@/Styles/Global.scss'
// CONFIG
import '@/Config/Api'
import '@/Config/FaIcons'
import '@/Config/Fragment'
import '@/Config/DayJS'
import '@/Config/Socket'
import i18n from '@/i18n'
import VueLocalStorage from 'vue-localstorage'

Vue.use(i18n)
Vue.use(VueLocalStorage, {
  name: 'ls',
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

Vue.config.productionTip = false

Vue.directive('bg', function (el, binding) {
  el.style.backgroundImage = `url(${binding.value})`
  el.style.backgroundRepeat = 'no-repeat'
  if (binding.modifiers.center) {
    el.style.backgroundPosition = 'center'
  }
  if (binding.arg === 'cover') {
    el.style.backgroundSize = 'cover'
  }
  else if (binding.arg === 'contain') {
    el.style.backgroundSize = 'contain'
  }
})

router.beforeEach((to, from, next) => {
  let lang = to.params.lang
  if (!lang) {
      lang = 'pl'
  }
  i18n.locale = lang
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
