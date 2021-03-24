import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faUser, faLock, faEye, faEyeSlash,
	faMale, faFemale, faQuestion,
	faBell, faUsers, faComments, faAddressCard, faFileAlt,
	faCommentAlt, faPlus, faSearch,
	faSignInAlt, faSignOutAlt,
	faCheck, faTimes,
	faUserMinus, faUserFriends, faCrown, faUserPlus, faUserCheck, faDoorOpen, faDoorClosed,
	faAngleLeft, faAngleRight, faReply, faPaperPlane, faImage, faStickyNote, faHandshake
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faUser, faLock, faEye, faEyeSlash,
	faMale, faFemale, faQuestion,
	faBell, faUsers, faComments, faAddressCard, faFileAlt,
	faCommentAlt, faPlus, faSearch,
	faSignInAlt, faSignOutAlt,
	faCheck, faTimes,
	faUserMinus, faUserFriends, faCrown, faUserPlus, faUserCheck, faDoorOpen, faDoorClosed,
	faAngleLeft, faAngleRight, faReply, faPaperPlane, faImage, faStickyNote, faHandshake
)

Vue.component('fa-icon', FontAwesomeIcon)