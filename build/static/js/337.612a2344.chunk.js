/*! For license information please see 337.612a2344.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[337],{337:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var n=r(4942),o=r(1002);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function p(){}function f(){}function m(){}var g={};l(g,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(_([])));v&&v!==e&&r.call(v,a)&&(g=v);var x=m.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(i,a,c,s){var l=d(t[i],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,o.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=m,l(x,"constructor",m),l(m,"constructor",f),f.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),l(x,s,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}var c=r(885),s=r(2791),l=r(6871),u=r(4569),d=r.n(u),h=r(8563),p=r(7152),f=(r(4628),r(2717)),m=r(7495),g=r(542),y=r(9743),v=r(7022),x=r(2592),w=r(2677),j=r(759),b=r(8820),N=r(26),I=r(115),S=r(8114),_=r(8324),L=r(6495),k=r(5985),Z=r(184);var E=function(){var t=(0,L.e)("jwtToken"),e=((0,s.useRef)(null),(0,l.s0)()),r=[],o=[],u=(0,s.useState)([]),E=(0,c.Z)(u,2),P=E[0],O=(E[1],(0,s.useState)(!1)),T=(0,c.Z)(O,2),C=T[0],B=T[1],F=(0,s.useState)(!1),G=(0,c.Z)(F,2),A=(G[0],G[1],localStorage.getItem("brandVideoLinks").split(",")),V=localStorage.getItem("array"),z=localStorage.getItem("jsonarray"),W=JSON.parse(V),H=JSON.parse(z);window.scrollTo(0,0),(0,s.useEffect)((function(){C||d().get(I.Z+"/excel/shopByBrands").then((function(t){200==t.status&&(P.push(t.data),B(!0))})).catch((function(t){console.log("error in shopByBrands")}))})),W.map((function(t){t.products.map((function(t){}))})),W.map((function(t){r.push(t.category)}));var R=function(){var t,e=(t=i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.getElementById(e).scrollIntoView();case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(g.Z,{}),(0,Z.jsx)("br",{}),(0,Z.jsx)(y.Z,{className:"brandheading",children:(0,Z.jsx)(v.Z,{style:{width:"100%",backgroundColor:N.cY_},children:(0,Z.jsx)("center",{children:(0,Z.jsx)(x.Z,{className:"brandimg",src:localStorage.getItem("brandLogo")})})})}),(0,Z.jsx)("br",{}),(0,Z.jsx)(y.Z,{children:(0,Z.jsx)(f.Z,{className:"branddetails-slider",style:{margin:0},children:H.map((function(t){return(0,Z.jsx)(m.Z,{interval:1e3,onClick:function(){return r=t.modelNumbers,o=r,localStorage.setItem("offermodels",o),void e("/brandofferposterproducts");var r},children:(0,Z.jsx)(x.Z,{className:"brandsliderimage",src:t.offerPoster,alt:t.alt})})}))})}),(0,Z.jsxs)(y.Z,{children:[(0,Z.jsx)("h3",{className:"brand_feature_category",children:"Featured Categories"}),(0,Z.jsx)(h.tq,{loop:!1,loopFillGroupWithBlank:!0,breakpoints:{700:{slidesPerView:6},400:{slidesPerView:3}},pagination:{clickable:!0},navigation:!0,modules:[p.tl,p.W_],className:"brand_category_swiper",children:W.map((function(t){return(0,Z.jsx)("div",{className:"container",children:(0,Z.jsx)(h.o5,{children:(0,Z.jsx)(v.Z,{onClick:function(){return R(t.category)},children:(0,Z.jsxs)("center",{children:[(0,Z.jsx)(x.Z,{src:t.catImage,style:{width:70,height:70}}),(0,Z.jsx)("p",{className:"brand_category_title",children:t.category})]})})})})}))})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)("br",{}),W.map((function(r){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(y.Z,{children:[(0,Z.jsxs)(y.Z,{className:"brand_feature",children:[(0,Z.jsx)(w.Z,{md:10,children:(0,Z.jsx)("h3",{className:"brand_feature_product_cat_title",id:r.category,children:r.category})}),(0,Z.jsx)(w.Z,{md:2,children:(0,Z.jsxs)("button",{className:"brand_feature_product_btn",onClick:function(){return function(t){localStorage.setItem("shopbrandcat",t),localStorage.setItem("brandcatname",t.category),e("/brandcatproducts")}(r.category)},children:["View More ",(0,Z.jsx)(_.H_v,{})]})})]}),(0,Z.jsx)(v.Z,{style:{width:"90%",marginBottom:"20px"},children:(0,Z.jsx)(j.uZ,{style:{justifyContent:"center",padding:"10px"},className:"row-cols-1 row-cols-md-3 g-4",children:r.products.slice(0,4).map((function(r){var o,i,a;o={url:r.productImage1},(0,n.Z)(o,"url",r.productImage1),(0,n.Z)(o,"url",r.productImage1);return(0,Z.jsxs)(j.Yl,{style:{marginTop:"3%"},className:"categoryproductscard",children:[(0,Z.jsxs)("div",{className:"cardimg",children:[(0,Z.jsx)(j.PH,{className:"cardimage",src:r.productImage1,alt:"...",position:"top"}),null!==r.productImage1&&null!==r.productImage2&&null!==r.productImage3?(0,Z.jsxs)(f.Z,{interval:1e3,className:"cardimage2",indicators:"",variant:"dark",children:[(0,Z.jsx)(f.Z.Item,{children:(0,Z.jsx)("img",{className:"d-block w-100",src:r.productImage1,alt:"First slide"})}),(0,Z.jsx)(f.Z.Item,{children:(0,Z.jsx)("img",{className:"d-block w-100",src:r.productImage2,alt:"Second slide"})}),(0,Z.jsx)(f.Z.Item,{children:(0,Z.jsx)("img",{className:"d-block w-100",src:r.productImage3,alt:"Third slide"})})]}):(0,Z.jsx)(j.PH,{className:"cardimage2",src:r.productImage1,alt:"...",position:"top"})]}),null!=localStorage.getItem("wishlistproduct")&&localStorage.getItem("wishlistproduct").includes(r.modelNumber)?(0,Z.jsx)(b.M_L,{style:{marginLeft:"0px",marginTop:"10px",marginRight:"10px",alignSelf:"end",fill:"rgb(255, 88, 88)"},className:"wishlisticon",size:30,onClick:function(){return function(t){console.log("Wishlist",localStorage.getItem("wishlistproduct")),console.log("in remove");var e={modelNumber:t.modelNumber};d().post(I.Z+"/delete-wishlist",e,{headers:{Authorization:"Bearer "+(0,L.e)("jwtToken"),"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status){var r=localStorage.getItem("wishlistproduct").split(","),n=[];r.map((function(e){""!==e&&e!==t.modelNumber&&n.push(e)})),localStorage.setItem("wishlistproduct",n),window.location.reload()}})).catch((function(t){console.log("Error",t)}))}(r)}}):(0,Z.jsx)(b.lo,{style:{marginLeft:"0px",marginTop:"10px",marginRight:"10px",alignSelf:"end"},className:"wishlisticon",size:30,onClick:function(){return function(r){if("true"!==(0,L.e)("isLoggedIn"))e("/login");else{if(null==localStorage.getItem("wishlistproduct"))localStorage.setItem("wishlistproduct",r.modelNumber);else{var n=localStorage.getItem("wishlistproduct").split(","),o=!0;n.map((function(t){t===r.modelNumber&&(n.splice(n.indexOf(t),1),localStorage.setItem("wishlistproduct",n),o=!1)})),o&&localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+r.modelNumber),e("/branddetails")}var i={modelNumber:r.modelNumber};d().post(I.Z+"/wishlist",i,{headers:{Authorization:"Bearer "+t,"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&k.Am.success((0,Z.jsx)("b",{children:"Added to wishlist successfully"}))})).catch((function(t){406==t.response.status?k.Am.warn((0,Z.jsx)("b",{children:"Item already present in Wishlist"})):(k.Am.error((0,Z.jsx)("b",{children:"SignIn First"})),console.log("Error",t))}))}}(r)}}),(0,Z.jsxs)(j.H7,{className:"categoryproductscardbody",children:[(0,Z.jsxs)(j.QM,{className:"cardtitle",children:[r.productName," "]}),(0,Z.jsxs)(j.CN,{style:{marginTop:"5px",marginBottom:"5px",fontSize:"18px"},children:["Rs. ",r.offerPrice]}),(i=r.offerPrice,a=r.productPrice,i!==a?(0,Z.jsx)(j.Pp,{className:"text",children:"Offer Available"}):(0,Z.jsx)(j.Pp,{className:"text",children:"No Offer Available"}))]}),(0,Z.jsxs)(j.H7,{className:"categoryproductscardbodyonhover",children:[(0,Z.jsxs)(j.QM,{className:"cardtitle",children:[r.productName," "]}),(0,Z.jsxs)(j.CN,{style:{marginTop:"5px",marginBottom:"5px",fontSize:"18px"},children:["Rs. ",r.offerPrice]}),(0,Z.jsx)(j.Pp,{className:"text",onClick:function(){return function(t){localStorage.setItem("productSelected",t.modelNumber),localStorage.setItem("productId",t.productId),e("/productDetails")}(r)},children:"View Details"})]})]})}))})})]})})})),(0,Z.jsx)("br",{}),(0,Z.jsx)(y.Z,{children:(0,Z.jsx)("center",{children:(0,Z.jsx)("h3",{className:"brand_feature_category",children:"Featured Videos"})})}),(0,Z.jsx)("br",{}),(0,Z.jsx)(y.Z,{children:(0,Z.jsx)(h.tq,{slidesPerView:1,spaceBetween:5,slidesPerGroup:1,loop:!1,loopFillGroupWithBlank:!0,breakpoints:{700:{slidesPerView:1},400:{slidesPerView:1}},pagination:{clickable:!0},navigation:!0,modules:[p.tl,p.W_],className:"videoswiper",children:A.map((function(t){return(0,Z.jsx)("div",{children:(0,Z.jsx)(h.o5,{className:"brandvideo",children:(0,Z.jsx)("iframe",{className:"videoframe",width:"560",height:"315",src:t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})}))})}),(0,Z.jsx)("br",{}),(0,Z.jsx)(S.Z,{})]})}},4628:function(){}}]);
//# sourceMappingURL=337.612a2344.chunk.js.map