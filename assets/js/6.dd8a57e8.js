(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{319:function(t,s,e){"use strict";var r=e(0),a=e(20),n=e(11),i=e(1),l=e(29),o=[],c=o.sort,u=i((function(){o.sort(void 0)})),_=i((function(){o.sort(null)})),v=l("sort");r({target:"Array",proto:!0,forced:u||!_||!v},{sort:function(t){return void 0===t?c.call(n(this)):c.call(n(this),a(t))}})},320:function(t,s,e){},371:function(t,s,e){var r=e(0),a=e(3),n=e(100),i=[].slice,l=function(t){return function(s,e){var r=arguments.length>2,a=r?i.call(arguments,2):void 0;return t(r?function(){("function"==typeof s?s:Function(s)).apply(this,a)}:s,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(n)},{setTimeout:l(a.setTimeout),setInterval:l(a.setInterval)})},372:function(t,s,e){"use strict";var r=e(320);e.n(r).a},377:function(t,s,e){"use strict";e.r(s);e(24),e(45),e(319),e(9),e(371);var r={name:"ServerList",props:{title:{type:String,default:null},apiUrl:{type:String,default:"https://tracker.tomatenquark.org/api/servers/"},flagBaseUrl:{type:String,default:"https://www.sauertracker.net/images/flags/"},dark:{type:Boolean,default:!1},showEmpty:{type:Boolean,default:!0}},data:function(){return{servers:[],updateInterval:null,error:null}},computed:{processedServers:function(){return(this.showEmpty?this.servers:this.servers.filter((function(t){return t.clients>0}))).slice().sort((function(t,s){return s.clients-t.clients}))}},mounted:function(){this.updateServerList(),this.updateInterval=setInterval(this.updateServerList,5e3)},methods:{updateServerList:function(){var t=this;fetch(this.apiUrl).then((function(t){return t.json()})).then((function(s){t.servers=s,t.error=null})).catch((function(s){return t.error=s}))}}},a=(e(372),e(43)),n=Object(a.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"st_container",class:t.dark?"st_dark":""},[t.title?e("span",{staticClass:"st_title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),e("ul",{staticClass:"st_list"},t._l(t.processedServers,(function(s){return e("li",{key:s.host+":"+s.port,staticClass:"st_server"},[e("div",{staticClass:"st_server__start"},[e("div",{staticClass:"st_server__title"},[e("img",{staticClass:"st_server__flag",attrs:{src:""+t.flagBaseUrl+s.country+".png",alt:"Flag of "+s.countryName}}),t._v(" "),e("span",{staticClass:"st_server__description"},[t._v(t._s(s.description))])]),t._v(" "),e("ul",{staticClass:"st_server__details"},[e("li",{staticClass:"st_server__detail"},[t._v(t._s(s.gameMode))]),t._v(" "),e("li",{staticClass:"st_server__detail"},[t._v(t._s(s.mapName))]),t._v(" "),e("li",{staticClass:"st_server__detail"},[t._v(t._s(s.timeLeftString))]),t._v(" "),e("li",{staticClass:"st_server__detail"},[t._v("\n            "+t._s(s.clients)+"/"+t._s(s.maxClients)+"\n          ")])])]),t._v(" "),e("div",{staticClass:"st_server__end"},[e("span",{staticClass:"st_server__address"},[t._v(t._s(s.host)+":"+t._s(s.port))])])])})),0)])}),[],!1,null,"b593b81a",null);s.default=n.exports}}]);