"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{8:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),o=r(689),u=r(87),l=r(256),v="Cast_cast__rO2Iv",p="Cast_actorName__kdhSK",d="Cast_character__r3Kl0",h="Cast_loading__OYwLL",f="Cast_castList__aP658",_="Cast_castItem__Hn3OX",m=r(184);var x=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)({}),r=(0,a.Z)(t,2),s=r[0],u=r[1],x=(0,i.useState)(!0),w=(0,a.Z)(x,2),g=w[0],j=w[1];return(0,i.useEffect)((function(){var t=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.uV)(t);case 3:r=e.sent,u(r),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();t(e)}),[e]),g?(0,m.jsx)("div",{className:h,children:"Loading..."}):(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("h2",{children:"Cast"}),(0,m.jsx)("ul",{className:f,children:s.cast.map((function(e){return(0,m.jsxs)("li",{className:_,children:[e.profile_path?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:""}):(0,m.jsx)("p",{children:"Sorry, image not available"}),(0,m.jsx)("p",{className:p,children:e.name}),(0,m.jsxs)("p",{className:d,children:["Character: ",e.character]})]},e.id)}))})]})},w="Reviews_reviews__+VvJ4",g="Reviews_loading__r1+JG",j="Reviews_reviewsHeader__iTHFC",k="Reviews_reviewsList__AH-Wg",N="Reviews_reviewItem__Zf9-V",Z="Reviews_reviewAuthor__ToQNp",y="Reviews_reviewContent__5Gwrr";var b=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)({}),r=(0,a.Z)(t,2),s=r[0],u=r[1],v=(0,i.useState)(!0),p=(0,a.Z)(v,2),d=p[0],h=p[1];return(0,i.useEffect)((function(){var t=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Hx)(t);case 3:r=e.sent,u(r),h(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();t(e)}),[e]),d?(0,m.jsx)("div",{className:g,children:"Loading..."}):(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)("h2",{className:j,children:"Reviews"}),(0,m.jsx)("ul",{className:k,children:s.results.length>0?s.results.map((function(e){return(0,m.jsxs)("li",{className:N,children:[(0,m.jsx)("h3",{className:Z,children:e.author}),(0,m.jsx)("p",{className:y,children:e.content})]},e.id)})):(0,m.jsx)("div",{children:"Sorry, we don't have any reviews..."})})]})},C={movieDetails:"MovieDetails_movieDetails__VQn5L",container:"MovieDetails_container__awhNg",details:"MovieDetails_details__O-aFp",moviesDetails:"MovieDetails_moviesDetails__TpsqM",backButton:"MovieDetails_backButton__6PzFO",castButton:"MovieDetails_castButton__mPB61",additional:"MovieDetails_additional__c2f4x",styledMovieDetails:"MovieDetails_styledMovieDetails__MgYaE"};var D=function(){var e=(0,o.UO)().movieId,t=(0,o.s0)(),r=(0,i.useState)({}),s=(0,a.Z)(r,2),v=s[0],p=s[1],d=(0,i.useState)(!0),h=(0,a.Z)(d,2),f=h[0],_=h[1];return(0,i.useEffect)((function(){var t=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.C$)(t);case 3:r=e.sent,p(r),_(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();t(e)}),[e]),f?(0,m.jsx)("div",{className:C.loading,children:"Loading..."}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:C.container,children:[(0,m.jsxs)("div",{className:C.moviesDetails,children:[(0,m.jsx)(u.rU,{onClick:function(){return t(-1)},className:C.backButton,children:"Back"})," ",(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(v.poster_path),alt:""}),(0,m.jsxs)("div",{className:C.details,children:[(0,m.jsx)("h2",{children:v.title}),(0,m.jsxs)("p",{children:["Overview: ",v.overview]}),(0,m.jsxs)("p",{children:["User Score: ",v.vote_average]}),(0,m.jsxs)("p",{children:["Genres: ",v.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,m.jsxs)("div",{className:C.additional,children:[(0,m.jsx)("h3",{children:"Additional Information"}),(0,m.jsx)(u.rU,{to:"cast",className:C.link,children:"Cast"}),(0,m.jsx)(u.rU,{to:"reviews",className:C.link,children:"Reviews"})]})]}),(0,m.jsxs)(o.Z5,{children:[(0,m.jsx)(o.AW,{path:"cast",element:(0,m.jsx)(x,{})}),(0,m.jsx)(o.AW,{path:"reviews",element:(0,m.jsx)(b,{})})]})]})}},256:function(e,t,r){r.d(t,{C$:function(){return l},Hx:function(){return v},bI:function(){return d},uV:function(){return p},wr:function(){return u}});var n=r(861),a=r(757),s=r.n(a),c=r(243),i="d674a3ff6872e455972c5f5b224f497e",o="https://api.themoviedb.org/3",u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/trending/all/day"),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"?language=en-US"),{params:{api_key:i}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?language=en-US&page=1"),{params:{api_key:i}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?language=en-US"),{params:{api_key:i}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/search/movie?include_adult=false&language=en-US&page=1&query=").concat(t),{params:{api_key:i}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=8.f00d112e.chunk.js.map