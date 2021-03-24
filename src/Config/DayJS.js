import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pl')
Vue.prototype.$dayjs = dayjs;