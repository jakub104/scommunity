(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af517800"],{"1dde":function(t,e,n){var i=n("d039"),s=n("b622"),a=n("2d00"),r=s("species");t.exports=function(t){return a>=51||!i((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"229f":function(t,e,n){"use strict";var i=n("a6ef"),s=n.n(i);s.a},2532:function(t,e,n){"use strict";var i=n("23e7"),s=n("5a34"),a=n("1d80"),r=n("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(a(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},2686:function(t,e,n){"use strict";var i=n("30f7"),s=n.n(i);s.a},"2ca0":function(t,e,n){"use strict";var i=n("23e7"),s=n("06cf").f,a=n("50c4"),r=n("5a34"),o=n("1d80"),c=n("ab13"),u=n("c430"),d="".startsWith,l=Math.min,f=c("startsWith"),p=!u&&!f&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(t){var e=String(o(this));r(t);var n=a(l(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return d?d.call(e,i,n):e.slice(n,n+i.length)===i}})},"30f7":function(t,e,n){},3188:function(t,e,n){},"3aea":function(t,e,n){"use strict";var i=n("3188"),s=n.n(i);s.a},"3ee2":function(t,e,n){},"3f69":function(t,e,n){"use strict";var i=n("3ee2"),s=n.n(i);s.a},"425a":function(t,e,n){"use strict";var i=n("834b"),s=n.n(i);s.a},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),a=n("b622"),r=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").filter,a=n("1dde"),r=n("ae40"),o=a("filter"),c=r("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"834b":function(t,e,n){},8418:function(t,e,n){"use strict";var i=n("c04e"),s=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?s.f(t,r,a(0,n)):t[r]=n}},"876d":function(t,e,n){"use strict";var i=n("e919"),s=n.n(i);s.a},"8dba":function(t,e,n){},"99af":function(t,e,n){"use strict";var i=n("23e7"),s=n("d039"),a=n("e8b5"),r=n("861d"),o=n("7b0b"),c=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),_=9007199254740991,m="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=l("concat"),C=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},b=!g||!h;i({target:"Array",proto:!0,forced:b},{concat:function(t){var e,n,i,s,a,r=o(this),l=d(r,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?r:arguments[e],C(a)){if(s=c(a.length),f+s>_)throw TypeError(m);for(n=0;n<s;n++,f++)n in a&&u(l,f,a[n])}else{if(f>=_)throw TypeError(m);u(l,f++,a)}return l.length=f,l}})},a15b:function(t,e,n){"use strict";var i=n("23e7"),s=n("44ad"),a=n("fc6a"),r=n("a640"),o=[].join,c=s!=Object,u=r("join",",");i({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},a6ef:function(t,e,n){},ab13:function(t,e,n){var i=n("b622"),s=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,"/./"[t](e)}catch(i){}}return!1}},af2c:function(t,e,n){},b1fc:function(t,e,n){"use strict";var i=n("8dba"),s=n.n(i);s.a},c740:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").findIndex,a=n("44d2"),r=n("ae40"),o="findIndex",c=!0,u=r(o);o in[]&&Array(1)[o]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},caad:function(t,e,n){"use strict";var i=n("23e7"),s=n("4d64").includes,a=n("44d2"),r=n("ae40"),o=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},cb15:function(t,e,n){t.exports=n.p+"img/join.4324cdbb.svg"},d152:function(t,e,n){"use strict";var i=n("fc02"),s=n.n(i);s.a},d25e:function(t,e,n){},d81d:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").map,a=n("1dde"),r=n("ae40"),o=a("map"),c=r("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e87d:function(t,e,n){"use strict";var i=n("d25e"),s=n.n(i);s.a},e919:function(t,e,n){},f2ff:function(t,e,n){"use strict";var i=n("af2c"),s=n.n(i);s.a},f359:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"..."===t.user?i("fragment",[t._v(" ... ")]):t.user?i("fragment",[i("div",{staticClass:"profile-view"},[i("Action",{attrs:{isOwner:t.$ls.get("id")===t.user._id,isFriend:t.user.friends.map((function(t){return t._id})).includes(t.$ls.get("id"))},on:{"log-out":t.logOut,"send-friend-request":t.sendFriendRequest,"undo-request":t.undoRequest,"remove-friend":t.removeFriend}}),i("BasicInfo",{attrs:{info:t.user.info,isOwner:t.$ls.get("id")===t.user._id},on:{"update-info":t.updateInfo}}),i("Languages"),i("Panel",{attrs:{isOwner:t.$ls.get("id")===t.user._id,user:t.user},on:{"accept-friend-request":t.acceptFriendRequest,"ignore-friend-request":t.ignoreFriendRequest,"update-info":t.updateInfo}}),i("Posts",{attrs:{isOwner:t.$ls.get("id")===t.user._id,accountCreate:t.user.info.createdAt},on:{"add-post":t.addPost}})],1)]):i("fragment",[i("h1",{staticClass:"title"},[t._v("Nie znaleziono użytkownika!")]),i("div",{staticClass:"logo"},[i("img",{staticClass:"logo__element",attrs:{alt:"Vue logo",src:n("d917")}}),i("img",{staticClass:"logo__element",attrs:{alt:"Vue logo",src:n("740c")}})])])},s=[],a=(n("99af"),n("c740"),n("96cf"),n("1da1")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel__component"},[n("div",{staticClass:"panel__nav"},[n("div",{class:["nav__item",{"nav__item--active":"friends"===t.activePart}],on:{click:function(e){t.mobile&&(t.activePart="friends")}}},[n("fa-icon",{staticClass:"item__icon",attrs:{icon:"users"}})],1),n("div",{class:["nav__item",{"nav__item--active":"groups"===t.activePart}],on:{click:function(e){t.mobile&&(t.activePart="groups")}}},[n("fa-icon",{staticClass:"item__icon",attrs:{icon:"comments"}})],1),n("div",{class:["nav__item",{"nav__item--active":"info"===t.activePart}],on:{click:function(e){t.mobile&&(t.activePart="info")}}},[n("fa-icon",{staticClass:"item__icon",attrs:{icon:"address-card"}})],1),t.isOwner?n("div",{class:["nav__item",{"nav__item--active":"notifications"===t.activePart}],on:{click:function(e){t.mobile&&(t.activePart="notifications")}}},[n("fa-icon",{staticClass:"item__icon",attrs:{icon:"bell"}})],1):t._e()]),n("div",{class:["panel__parts",{"panel__parts--owner":t.isOwner}]},[t.mobile&&"friends"!==t.activePart?t._e():n("div",{staticClass:"part"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.$t("profile.friends.name")))]),n("Friends",{attrs:{friends:t.user.friends,isOwner:t.isOwner,_id:t.user._id}})],1),t.mobile&&"groups"!==t.activePart?t._e():n("div",{staticClass:"part"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.$t("profile.groups.name")))]),n("Groups",{attrs:{groups:t.user.groups,isOwner:t.isOwner,_id:t.user._id}})],1),t.mobile&&"info"!==t.activePart?t._e():n("div",{staticClass:"part"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.$t("profile.info.name")))]),n("Info",{attrs:{info:t.user.info,isOwner:t.isOwner,_id:t.user._id},on:{"update-info":function(e,n){return t.$emit("update-info",e,n)}}})],1),t.mobile&&"notifications"!==t.activePart||!t.isOwner?t._e():n("div",{staticClass:"part"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.$t("profile.notifications.name")))]),n("Notifications",{attrs:{notifications:t.user.notifications,isOwner:t.isOwner,_id:t.user._id},on:{"accept-friend-request":function(e,n){return t.$emit("accept-friend-request",e,n)},"ignore-friend-request":function(e){return t.$emit("ignore-friend-request",e)}}})],1)])])},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notifications-wrapper"},[t.notifications.length?n("fragment",t._l(t.notifications,(function(e){return n("div",{key:e._id,staticClass:"notification"},[n("router-link",{directives:[{name:"bg",rawName:"v-bg:cover.center",value:e.sender.info.avatar,expression:"notification.sender.info.avatar",arg:"cover",modifiers:{center:!0}}],staticClass:"notification__img",attrs:{to:{name:"Profile",params:{nick:e.sender.info.nick}}}}),n("div",{staticClass:"notification__content"},[n("strong",[t._v(t._s(e.sender.info.nick))]),t._v(" "+t._s(t.$t("profile.notifications."+e.type+".content"))+" "),"friend-request"!==e.type||e.done?t._e():n("div",{staticClass:"content__actions"},[n("div",{staticClass:"content__action",on:{click:function(n){return t.$emit("accept-friend-request",e.sender._id,e._id)}}},[t._v(t._s(t.$t("profile.notifications."+e.type+".actions.accept")))]),n("div",{staticClass:"content__action",on:{click:function(n){return t.$emit("ignore-friend-request",e._id)}}},[t._v(t._s(t.$t("profile.notifications."+e.type+".actions.ignore")))])])])],1)})),0):n("fragment",[t._v(" Brak powiadomień ")])],1)},u=[],d={name:"Notifications",props:{notifications:Array,isOwner:Boolean},data:function(){return{}}},l=d,f=(n("876d"),n("2877")),p=Object(f["a"])(l,c,u,!1,null,"0a08b5fc",null),v=p.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friends-wrapper"},[t.friends.length?n("div",{staticClass:"search"},[n("fa-icon",{staticClass:"search__icon",attrs:{icon:"search"}}),n("input",{staticClass:"search__input",attrs:{type:"search",placeholder:t.$t("profile.friends.search")}})],1):t._e(),n("div",{staticClass:"friends"},[t.friends.length?n("fragment",[t._l(t.friends,(function(e){return n("div",{key:e._id,staticClass:"friend"},[n("router-link",{directives:[{name:"bg",rawName:"v-bg:cover.center",value:e.info.avatar,expression:"friend.info.avatar",arg:"cover",modifiers:{center:!0}}],staticClass:"friend__avatar",attrs:{to:{name:"Profile",params:{nick:e.info.nick}}}}),n("div",{staticClass:"friend__name"},[t._v(t._s(e.info.nick))]),t.isOwner?n("router-link",{staticClass:"friend__action",attrs:{to:{name:"Chat",params:{id:t.getChatId(e.chats)}}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"comment-alt"}})],1):t._e()],1)})),n("router-link",{staticClass:"friends__add",attrs:{to:{name:"Users"}}},[n("fa-icon",{attrs:{icon:"plus"}})],1)],2):n("fragment",[t.isOwner?n("div",{staticClass:"friends__empty"},[n("div",{staticClass:"empty__content"},[t._v(t._s(t.$t("profile.friends.empty.owner.content")))]),n("Button",{attrs:{content:t.$t("profile.friends.empty.owner.button"),small:""}})],1):n("div",{staticClass:"friends__empty"},[n("div",{staticClass:"empty__content"},[t._v(t._s(t.$t("profile.friends.empty.guest.content")))]),n("Button",{attrs:{content:t.$t("profile.friends.empty.guest.button"),small:""},on:{click:function(e){return t.inviteFriend(t._id)}}})],1)])],1)])},m=[],g=(n("caad"),n("2532"),n("ca45")),h={name:"Friends",components:{Button:g["a"]},props:{friends:Array,isOwner:Boolean,_id:String},data:function(){return{}},methods:{inviteFriend:function(t){console.log("Send friend request to ".concat(t,"..."))},getChatId:function(t){var e=this,n=t.findIndex((function(t){return"priv"===t.type&&t.owners.includes(e.$ls.get("id"))}));return t[n]._id}}},C=h,b=(n("3aea"),Object(f["a"])(C,_,m,!1,null,"19b4b118",null)),w=b.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"groups-wrapper"},[t.groups.length?n("div",{staticClass:"search"},[n("fa-icon",{staticClass:"search__icon",attrs:{icon:"search"}}),n("input",{staticClass:"search__input",attrs:{type:"search",placeholder:"Szukaj"}})],1):t._e(),n("div",{staticClass:"groups"},[t.groups.length?n("fragment",[t._l(t.groups,(function(e){return n("div",{key:e._id,staticClass:"group"},[n("router-link",{directives:[{name:"bg",rawName:"v-bg:cover.center",value:"https://szulcus.pl/avatar.jpg",expression:"'https://szulcus.pl/avatar.jpg'",arg:"cover",modifiers:{center:!0}}],staticClass:"group__avatar",attrs:{to:{name:"Profile",params:{nick:e.nick}}}}),n("div",{staticClass:"group__name"},[t._v(t._s(e.nick))]),t.isOwner?n("router-link",{staticClass:"group__action",attrs:{to:{name:"PrivateChat",params:{nick:e.nick}}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"comment-alt"}})],1):n("div",{staticClass:"group__action",on:{click:function(n){return t.sendgroupRequest(e._id)}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"user-plus"}})],1)],1)})),n("router-link",{staticClass:"groups__add",attrs:{to:{name:"Users"}}},[n("fa-icon",{attrs:{icon:"plus"}})],1)],2):n("fragment",[t.isOwner?n("div",{staticClass:"groups__empty"},[n("div",{staticClass:"empty__content"},[t._v(t._s(t.$t("profile.groups.empty.owner.content")))]),n("Button",{attrs:{content:t.$t("profile.groups.empty.owner.button"),small:""}})],1):n("div",{staticClass:"groups__empty"},[n("div",{staticClass:"empty__content"},[t._v(t._s(t.$t("profile.groups.empty.guest.content")))]),n("Button",{attrs:{content:t.$t("profile.groups.empty.guest.button"),small:""}})],1)])],1)])},x=[],k={name:"Groups",components:{Button:g["a"]},props:{groups:Array,isOwner:Boolean},data:function(){return{}}},y=k,O=(n("f2ff"),Object(f["a"])(y,$,x,!1,null,"54d7101a",null)),j=O.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["info-wrapper",{"info__wrapper--edited":JSON.stringify(t.info.interests)!==JSON.stringify(t.updatedInterests)}]},[n("div",{staticClass:"info"},[n("div",{staticClass:"info__interests"},[n("div",{staticClass:"interests__title"},[t._v(t._s(t.$t("profile.info.interests.name"))+":")]),n("div",{staticClass:"interests"},[t.updatedInterests.length>0?n("fragment",t._l(t.updatedInterests,(function(e){return n("div",{key:e,staticClass:"interest"},[t.isOwner?n("div",{staticClass:"interest__remove",on:{click:function(n){return t.removeInterest(e)}}},[n("fa-icon",{attrs:{icon:"times"}})],1):t._e(),t._v(" "+t._s(t.$t("profile.info.interests.variants."+e))+" ")])})),0):n("div",{staticClass:"interest"},[t._v(" - ")])],1),t.isOwner?n("fragment",[n("Choice",{attrs:{checked:"Programowanie 💻",options:Object.entries(t.$t("profile.info.interests.variants"))},on:{"add-item":t.addInterest}})],1):t._e()],1)]),n("div",{staticClass:"info"},[n("div",{staticClass:"info__type"},[t._v(t._s(t.$t("profile.info.gender.name"))+":")]),n("input",{staticClass:"info__input",attrs:{disabled:"",type:"text"},domProps:{value:t.$t("profile.info.gender.variants."+t.info.gender)}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"info__type"},[t._v(t._s(t.$t("profile.info.lang.name"))+":")]),n("input",{staticClass:"info__input",attrs:{disabled:"",type:"text"},domProps:{value:t.$t("profile.info.lang.variants."+t.info.lang)}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"info__type"},[t._v(t._s(t.$t("profile.info.role.name"))+":")]),n("input",{staticClass:"info__input",attrs:{disabled:"",type:"text"},domProps:{value:t.$t("profile.info.role.variants."+t.info.role)}})]),JSON.stringify(t.info.interests)!==JSON.stringify(t.updatedInterests)?n("div",{staticClass:"info__submit"},[n("Button",{attrs:{content:"Zapisz zmiany",small:""},on:{click:function(e){return t.$emit("update-info","interests",t.updatedInterests)}}})],1):t._e()])},P=[],B=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"choice-wrapper"},[n("div",{staticClass:"choice",attrs:{hint:t.hint[1]}},[n("div",{staticClass:"choice__add",on:{click:t.addItem}},[n("fa-icon",{staticClass:"add__icon",attrs:{icon:"plus"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],staticClass:"choice__input",attrs:{type:"text",placeholder:t.$t("profile.info.interests.add")},domProps:{value:t.word},on:{input:[function(e){e.target.composing||(t.word=e.target.value)},t.setHint],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(e)}}})])])}),R=[],q=(n("a15b"),n("d81d"),n("2ca0"),{name:"Choice",props:{options:Array},data:function(){return{hint:["",""],word:""}},methods:{setHint:function(t){if(t.target.value){var e=this.options.filter((function(e){return e[1].startsWith(t.target.value)}));e.length>0?this.hint=e[0]:this.hint=["",""]}else this.hint=["",""]},addItem:function(){this.hint[0]?(this.$emit("add-item",this.hint[0]),this.hint=["",""],this.word=""):alert("Musisz wybrać jedno z poniższych zainteresowań:\n".concat(this.options.map((function(t){return t[1]})).join(", "),"."))}}}),S=q,A=(n("3f69"),Object(f["a"])(S,B,R,!1,null,"30a5d26a",null)),N=A.exports,z={name:"Info",components:{Choice:N,Button:g["a"]},props:{info:Object,isOwner:Boolean},data:function(){return{updatedInterests:JSON.parse(JSON.stringify(this.info.interests)),interest:""}},methods:{addInterest:function(t){this.updatedInterests.includes(t)?alert("Zainteresowania nie mogą sie powtarzać!"):(console.log("add",t),this.updatedInterests.push(t))},removeInterest:function(t){this.updatedInterests=this.updatedInterests.filter((function(e){return e!==t}))}}},E=z,F=(n("d152"),Object(f["a"])(E,I,P,!1,null,"0b0bbddf",null)),J=F.exports,W={name:"Panel",components:{Notifications:v,Friends:w,Groups:j,Info:J},props:{isOwner:Boolean,user:Object},data:function(){return{mobile:window.innerWidth<1200,activePart:"friends"}},mounted:function(){var t=this;window.addEventListener("resize",(function(e){e.target.innerWidth<1200&&!t.mobile?t.mobile=!0:e.target.innerWidth>1200&&t.mobile&&(t.mobile=!1)}))},beforeDestroy:function(){var t=this;window.removeEventListener("resize",(function(e){e.target.innerWidth<1200&&!t.mobile?t.mobile=!0:e.target.innerWidth>1200&&t.mobile&&(t.mobile=!1)}))},methods:{setActivePart:function(t){this.activePart=t}}},T=W,L=(n("b1fc"),Object(f["a"])(T,r,o,!1,null,"d68080d8",null)),M=L.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts-wrapper"},[n("h2",{staticClass:"posts__title"},[t._v(t._s(t.$t("profile.activity.name")))]),t.isOwner?n("div",{staticClass:"posts__create"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postContent,expression:"postContent"}],staticClass:"create__input",attrs:{placeholder:t.$t("profile.activity.add.placeholder",{nick:t.$route.params.nick})},domProps:{value:t.postContent},on:{input:function(e){e.target.composing||(t.postContent=e.target.value)}}}),t._v(" "),n("Button",{attrs:{content:t.$t("profile.activity.add.submit"),type:"submit",small:""},on:{click:t.submitPost}})],1):t._e(),n("div",{staticClass:"posts"},[n("div",{staticClass:"post"},[n("img",{staticClass:"post__img",attrs:{src:t.join}}),n("div",{staticClass:"post__content"},[t._v(t._s(t.$t("profile.activity.joined",{nick:t.$route.params.nick})))]),n("div",{staticClass:"post__date"},[t._v(t._s(t.$dayjs(t.accountCreate).format("DD.MM.YYYY")))])])])])},D=[],Y=n("cb15"),G=n.n(Y),H={name:"Posts",components:{Button:g["a"]},props:{isOwner:Boolean,accountCreate:String},data:function(){return{postContent:"",join:G.a}},methods:{submitPost:function(){this.$emit("add-post",this.postContent),alert("Ta opcja jest jeszcze niedostępna")}}},V=H,Z=(n("2686"),Object(f["a"])(V,U,D,!1,null,"6f074eb4",null)),K=Z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"action-wrapper"},[t.isOwner?n("fragment",[n("div",{staticClass:"action",on:{click:function(e){return t.$emit("log-out")}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"sign-out-alt"}})],1)]):t.isFriend?n("fragment",[n("div",{staticClass:"action",on:{click:function(e){return t.$emit("remove-friend")}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"user-minus"}})],1)]):t.isFriend?n("fragment",[n("div",{staticClass:"profile__action",on:{click:function(e){return t.$emit("undo-request")}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"user-minus"}})],1)]):n("fragment",[n("div",{staticClass:"action",on:{click:function(e){return t.$emit("send-friend-request")}}},[n("fa-icon",{staticClass:"action__icon",attrs:{icon:"user-plus"}})],1)])],1)},X=[],tt={name:"Action",props:{isOwner:Boolean,isFriend:Boolean},data:function(){return{}}},et=tt,nt=(n("e87d"),Object(f["a"])(et,Q,X,!1,null,"be5897ce",null)),it=nt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basic-info-wrapper"},[n("h1",{staticClass:"title"},[t._v(t._s(t.info.nick))]),n("div",{staticClass:"user-info"},[n("div",{directives:[{name:"bg",rawName:"v-bg:cover.center",value:t.info.avatar,expression:"info.avatar",arg:"cover",modifiers:{center:!0}}],class:["avatar",{"avatar--edited":t.isOwner}],on:{click:function(t){return t.target.nextSibling.click()}}}),n("input",{staticClass:"file-input",attrs:{type:"file",id:"file-input"},on:{click:t.changeAvatar}}),n("div",{class:["biogram",{"biogram--owner":t.isOwner}]},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updatedBiogram,expression:"updatedBiogram"}],staticClass:"biogram__text",attrs:{readonly:!t.isOwner,spellcheck:"false"},domProps:{value:t.updatedBiogram},on:{input:function(e){e.target.composing||(t.updatedBiogram=e.target.value)}}}),t.updatedBiogram!==t.info.biogram?n("div",{staticClass:"biogram__submit",on:{click:function(e){return t.$emit("update-info","biogram",t.updatedBiogram)}}},[n("fa-icon",{staticClass:"submit__icon",attrs:{icon:"check"}})],1):t._e(),n("div",{staticClass:"line"}),n("div",{staticClass:"biogram__limit"},[t._v(t._s(t.info.biogram.length)+" / 300")])])])])},at=[],rt={name:"BasicInfo",props:{info:Object,isOwner:Boolean},data:function(){return{updatedBiogram:JSON.parse(JSON.stringify(this.info.biogram))}},methods:{changeAvatar:function(){alert("Ta funkcja jest jeszcze niedostepna")}}},ot=rt,ct=(n("229f"),Object(f["a"])(ot,st,at,!1,null,"29d46061",null)),ut=ct.exports,dt=n("3b52"),lt={name:"Profile",components:{Panel:M,Posts:K,Languages:dt["a"],Action:it,BasicInfo:ut},data:function(){return{user:"...",uploadProgress:{}}},mounted:function(){this.loadUser(this.$route.params.nick)},watch:{$route:function(t){this.info="...",this.loadUser(t.params.nick)}},methods:{loadUser:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s,a,r,o,c,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e.$i18n.locale),n.next=4,e.$axios.get("/users/profile/".concat(t));case 4:if(i=n.sent,console.log(i),s=i.data.user,a=s.invitedBy,r=s.friends,o=s.info,c=s._id,u={invitedBy:a,friends:r,groups:[],info:o,_id:c},u._id!==e.$ls.get("id")){n.next=14;break}return n.next=11,e.$axios.get("/notifications/".concat(u._id));case 11:d=n.sent,console.log(d.data),u.notifications=d.data.notifications;case 14:e.user=u,n.next=21;break;case 17:n.prev=17,n.t0=n["catch"](0),console.log(n.t0.response),e.info=null;case 21:case"end":return n.stop()}}),n,null,[[0,17]])})))()},logOut:function(){this.$ls.remove("token"),this.$ls.remove("id"),this.$ls.remove("nick"),this.$ls.remove("lang"),delete this.$axios.defaults.headers.common["auth-token"],this.$router.push({name:"Login"})},sendFriendRequest:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Send request to ".concat(t.user._id)),e.prev=1,e.next=4,t.$axios.post("/notifications",{type:"friend-request",receiverId:t.user._id});case 4:return n=e.sent,e.next=7,t.$axios.patch("/users/".concat(t.user._id,"/invitedBy/add"),{dataId:t.$ls.get("id")});case 7:console.log(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},acceptFriendRequest:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s,a,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.log("Add ".concat(t,", ").concat(n.$ls.get("id")," to friends")),i.prev=1,i.next=4,n.$axios.patch("/users/".concat(n.$ls.get("id"),"/invitedBy/remove"),{dataId:t});case 4:return i.next=6,n.$axios.patch("/users/".concat(n.$ls.get("id"),"/friends/add"),{dataId:t});case 6:return i.next=8,n.$axios.patch("/users/".concat(t,"/friends/add"),{dataId:n.$ls.get("id")});case 8:return i.next=10,n.$axios.post("/chats",{owners:[t,n.$ls.get("id")],type:"priv"});case 10:return s=i.sent,i.next=13,n.$axios.patch("/users/".concat(n.$ls.get("id"),"/chats/add"),{dataId:s.data.chat._id});case 13:return i.next=15,n.$axios.patch("/users/".concat(t,"/chats/add"),{dataId:s.data.chat._id});case 15:return i.next=17,n.$axios.patch("/notifications/".concat(e,"/done"),{data:!0});case 17:a=i.sent,a.data.success&&(r=n.user.notifications.findIndex((function(t){return t._id===e})),n.user.notifications[r].done=!0,n.user.friends.push(a.data.notification.sender)),console.log(a.data),i.next=25;break;case 22:i.prev=22,i.t0=i["catch"](1),console.log(i.t0.response.data);case 25:case"end":return i.stop()}}),i,null,[[1,22]])})))()},ignoreFriendRequest:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("Delete notification by id: ".concat(t)),n.prev=1,n.next=4,e.$axios.patch("/notifications/".concat(t,"/done"),{data:!0});case 4:i=n.sent,i.data.success&&(s=e.user.notifications.findIndex((function(e){return e._id===t})),e.user.notifications[s].done=!0),console.log(i.data),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},updateInfo:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,n.$axios.patch("/users/profile/me/update-info/".concat(t),{data:e});case 3:s=i.sent,s.data.success&&(n.user.info[t]=e),console.log(s.data),i.next=11;break;case 8:i.prev=8,i.t0=i["catch"](0),console.log(i.t0);case 11:case"end":return i.stop()}}),i,null,[[0,8]])})))()},undoRequest:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("undo request");case 1:case"end":return t.stop()}}),t)})))()},removeFriend:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("remove friend");case 1:case"end":return t.stop()}}),t)})))()},changeAvatar:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("change avatar");case 1:case"end":return t.stop()}}),t)})))()},addPost:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log('Add post: "'.concat(t,'"'));case 1:case"end":return e.stop()}}),e)})))()}}},ft=lt,pt=(n("425a"),Object(f["a"])(ft,i,s,!1,null,"373fedc6",null));e["default"]=pt.exports},fc02:function(t,e,n){}}]);
//# sourceMappingURL=chunk-af517800.ad033597.js.map