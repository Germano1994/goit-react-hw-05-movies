"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[624],{624:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(87),i=n(256),p={moviesContainer:"Movies_moviesContainer__Tghoa",loading:"Movies_loading__NvIcC"},l=n(184);var f=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,s.useState)([]),v=(0,a.Z)(f,2),h=v[0],d=v[1],m=(0,s.useState)(!0),g=(0,a.Z)(m,2),x=g[0],w=g[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.bI)(t);case 3:n=e.sent,d(n.results),w(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();e(n)}),[n]),(0,l.jsxs)("div",{className:p.moviesContainer,children:[(0,l.jsx)("h2",{children:"\u041f\u043e\u0448\u0443\u043a \u0444\u0456\u043b\u044c\u043c\u0456\u0432"}),(0,l.jsx)(o.rU,{to:"/",children:"Home"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,l.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443"}),(0,l.jsx)("button",{type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})]}),x&&(0,l.jsx)("p",{className:p.loading,children:"Loading..."}),h&&(0,l.jsx)("ul",{children:h.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"/movies/".concat(e.id),className:p.movieLink,children:e.title})},e.id)}))})]})}},256:function(e,t,n){n.d(t,{C$:function(){return p},Hx:function(){return l},bI:function(){return v},uV:function(){return f},wr:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="d674a3ff6872e455972c5f5b224f497e",o="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/trending/all/day"),{params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"?language=en-US"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?language=en-US&page=1"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?language=en-US"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/search/movie?include_adult=false&language=en-US&page=1&query=").concat(t),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=624.3559708e.chunk.js.map