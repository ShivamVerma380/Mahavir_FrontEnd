"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[65],{3437:function(e,t,n){n(2791),n(7632),n(184)},2065:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(885),i=n(2791),o=n(46),a=n(323),l=n(3360),c=n(4569),s=n.n(c),u=n(7689),d=(n(542),n(3437),n(6860)),f=(n(7632),n(5671)),h=n(3144),p=n(7326),g=n(136),m=n(9388),v=n(6073),x=n(115),j=n(184),y=!0;function b(e){if(!e.isAddNewSelected)return(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Select Category"}),console.log(e.Category),(0,j.jsx)(v.Z,{Category:e.Category})]})}function N(e){if(e.isAddNewSelected)return(0,j.jsx)("div",{children:(0,j.jsx)("h1",{children:"Add Element"})})}i.Component;var _,Z,E,T,L,w=n(7022),I=n(9743),C=n(2677),S=n(160),A=n(8949),U=(n(4164),n(3264),n(5462),n(5985)),D="",P="",k="",F="",O="",M="",R=[];function V(e){var t=(0,i.useState)(!0),n=(0,r.Z)(t,2),o=n[0];n[1];return(0,j.jsx)("div",{children:(0,j.jsx)(w.Z,{children:(0,j.jsx)(I.Z,{className:"additem",children:(0,j.jsx)(C.Z,{md:{span:6,offset:3},children:o?(0,j.jsxs)(S.Z,{children:[(0,j.jsx)("br",{}),(0,j.jsx)(S.Z.Group,{children:(0,j.jsx)(S.Z.Control,{type:"text",placeholder:"Model No",onChange:function(e){P=e.target.value}})}),(0,j.jsx)("br",{}),(0,j.jsx)(S.Z.Group,{children:(0,j.jsx)(S.Z.Control,{type:"text",placeholder:"Product Name",onChange:function(e){k=e.target.value}})}),(0,j.jsx)("br",{}),(0,j.jsx)(S.Z.Group,{children:(0,j.jsx)(S.Z.Control,{type:"text",placeholder:"Product Highlights",onChange:function(e){F=e.target.value}})}),(0,j.jsx)("br",{}),(0,j.jsx)(S.Z.Group,{children:(0,j.jsx)(A.Z,{children:(0,j.jsxs)(A.Z.Item,{eventKey:"0",children:[(0,j.jsx)(A.Z.Header,{children:"Upload Images"}),(0,j.jsxs)(A.Z.Body,{children:[(0,j.jsx)("input",{type:"file",name:"img1",onChange:function(e){return function(e){_=e.target.files[0]}(e)}}),(0,j.jsx)("input",{type:"file",name:"img2",onChange:function(e){return function(e){Z=e.target.files[0]}(e)}}),(0,j.jsx)("input",{type:"file",name:"img3",onChange:function(e){return function(e){E=e.target.files[0]}(e)}}),(0,j.jsx)("input",{type:"file",name:"img4",onChange:function(e){return function(e){T=e.target.files[0]}(e)}}),(0,j.jsx)("input",{type:"file",name:"img5",onChange:function(e){return function(e){L=e.target.files[0]}(e)}})]})]})})}),(0,j.jsx)("br",{}),(0,j.jsx)(S.Z.Group,{children:(0,j.jsx)(S.Z.Control,{type:"number",placeholder:"Price",onChange:function(e){O=e.target.value}})}),(0,j.jsx)("br",{}),(0,j.jsx)(S.Z.Group,{children:(0,j.jsx)(S.Z.Control,{type:"number",placeholder:"Offer Price",onChange:function(e){M=e.target.value}})}),(0,j.jsx)("br",{})]}):null})})})})}var z=function(){var e=(0,u.s0)(),t=(0,i.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],c=(0,i.useState)([]),d=(0,r.Z)(c,2),f=d[0],h=d[1];return(0,i.useEffect)((function(){o||s().get("http://localhost:8080/get-categories/admin").then((function(e){200==e.status&&(h(e.data),a(!0))})).catch((function(e){U.Am.warn("Error ",e)}))})),(0,j.jsxs)("div",{children:[(0,j.jsx)(V,{}),(0,j.jsx)("div",{children:(0,j.jsx)(w.Z,{className:"additem2",children:(0,j.jsx)(I.Z,{children:(0,j.jsxs)(C.Z,{md:{span:6,offset:3},children:[(0,j.jsxs)("select",{onChange:function(e){return function(e){console.log(e.target.value),D=e.target.value}(e)},children:[(0,j.jsx)("option",{children:"Choose category..."}),o?f.map((function(e){return(0,j.jsx)("option",{id:e.categoryName,value:e.categoryName,children:e.categoryName})})):null]}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("center",{children:(0,j.jsx)(l.Z,{variant:"flat",size:"m",onClick:function(){console.log("Model No",P),console.log("Product Name",k),console.log("Product Highlights",F),console.log("Price",O),console.log("OfferPrice",M),console.log("Selected Category",D),console.log("images",R);var t={modelNumber:P,productName:k,productHighlights:F,productPrice:O,offerPrice:M,category:D,productImage1:_,productImage2:Z,productImage3:E,productImage4:T,productImage5:L};s().post("http://localhost:8080/add-product",t,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGJjYWFmZGFhaHN0c3NhYWFhc3ciLCJleHAiOjE2NTYwOTUwMzYsImlhdCI6MTY1NTk5NTAzNn0.WnGVpf7UeR1h2ZIgHm4Tkms_3LnGcL1f4uxyff7WRr8","Content-Type":"multipart/form-data"},mode:"no-cors"}).then((function(t){console.log(t.data),localStorage.setItem("CategorySelected",D),localStorage.setItem("ModelNos",P),e("/addSubCategories/"+P)})).catch((function(e){console.log("Error in add-product")}))},children:"Save"})})]})})})})]})};function B(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2);t[0],t[1];return(0,j.jsxs)("div",{children:[(0,j.jsx)(d.Z,{}),(0,j.jsx)("h1",{style:{marginTop:"20px",textAlign:"center"},children:"Mahavir Electronics"}),(0,j.jsx)(z,{}),(0,j.jsx)("br",{})]})}var G=function(){var e,t="",n=(0,i.useState)(),c=(0,r.Z)(n,2),d=c[0],f=c[1],h="",p=(0,i.useState)(!1),g=(0,r.Z)(p,2),m=g[0],v=g[1],y=(0,i.useState)(!1),b=(0,r.Z)(y,2),N=(b[0],b[1]),_=(0,i.useState)(!1),Z=(0,r.Z)(_,2),E=Z[0],T=Z[1],L=(0,i.useState)(!1),w=(0,r.Z)(L,2),I=(w[0],w[1]),C=(0,i.useState)(!1),S=(0,r.Z)(C,2),A=S[0],U=S[1];(0,u.s0)();return(0,j.jsx)("div",{children:(0,j.jsx)("center",{children:A?(0,j.jsx)(B,{}):m?E?(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Enter Secret Key"}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)("br",{}),(0,j.jsx)(o.II,{id:"otp",name:"otp",placeholder:"Enter Secret Key",className:"input",onChange:function(e){h=e.target.value,console.log("Secret Key: ",h)}})]}),(0,j.jsx)(l.Z,{onClick:function(){"380002"===h?(alert("Correct key"),I(!0),U(!0)):alert("Wrong Key")},children:"Submit Key"})]}):(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Enter your OTP"}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(o.__,{for:"otp-input",id:"Enter-otp-input",children:"Enter OTP"}),(0,j.jsx)("br",{}),(0,j.jsx)(o.II,{id:"otp",name:"otp",placeholder:"Enter OTP",className:"input",onChange:function(t){e=t.target.value,console.log("Input: ",e)}})]}),(0,j.jsx)(l.Z,{onClick:function(){return console.log(d,":",e),void(d===e?(alert("Correct input otp"),T(!0)):alert("incorrect otp"))},children:"Submit OTP"})]}):(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Please Login First"}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(o.__,{for:"email"}),(0,j.jsx)(o.II,{id:"email",name:"email",placeholder:"Enter Email",type:"email",className:"input",onChange:function(e){t=e.target.value}})]}),(0,j.jsx)(l.Z,{onClick:function(){alert(t),""===t?(console.log("Email is empty"),alert("Please Enter Email")):(console.log("Email",t),s()({method:"get",url:x.Z+"/verify-email/"+t}).then((function(e){console.log(e.data),f(e.data.otp),console.log("otp:",d)})).catch((function(e){console.log(e)})),v(!0),N(!0),console.log("isOTPSent",m))},children:"Send OTP"})]})})})}},6860:function(e,t,n){var r=n(7022),i=n(3666),o=n(6355),a=n(9506),l=(n(2487),n(9848)),c=n(184);t.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.Z,{bg:"dark",variant:"dark",expand:!1,children:(0,c.jsxs)(r.Z,{fluid:!0,children:[(0,c.jsx)(a.Z.Toggle,{}),(0,c.jsxs)(a.Z.Offcanvas,{placement:"start",children:[(0,c.jsx)(o.Z.Header,{closeButton:!0,children:(0,c.jsx)(o.Z.Title,{children:"Admin Panel"})}),(0,c.jsx)(o.Z.Body,{style:{backgroundColor:"black",fontSize:"20px"},children:(0,c.jsx)(i.Z,{className:"justify-content-start flex-grow-1 pe-3",children:l.v.map((function(e,t){return(0,c.jsxs)(i.Z.Link,{href:"/#"+e.path,className:e.cName,children:[e.icon,(0,c.jsx)("span",{className:"span",children:" "}),e.title]})}))})})]})]})})})}},9848:function(e,t,n){n.d(t,{v:function(){return l}});n(2791);var r=n(8820),i=n(6856),o=n(7425),a=n(184),l=[{title:"Add Item",path:"/admin",icon:(0,a.jsx)(r.V9Z,{}),cName:"nav-text"},{title:"Pending Orders",path:"/pendingdelivery",icon:(0,a.jsx)(i.ZjZ,{}),cName:"nav-text"},{title:"Completed Orders",path:"/completedorders",icon:(0,a.jsx)(i.ZjZ,{}),cName:"nav-text"},{title:"User Complaints",path:"/allcomplaints",icon:(0,a.jsx)(o.SX$,{}),cName:"nav-text"},{title:"Add New",path:"/AddNew",icon:(0,a.jsx)(i.siy,{}),cName:"nav-text"},{title:"Logout",path:"/",icon:(0,a.jsx)(o.goJ,{}),cName:"nav-text"},{title:"Upload Excel",path:"/upload",icon:(0,a.jsx)(r.aBR,{}),cName:"nav-text"}]},4903:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DATA_URL_KEY=t.INIT_MAX_NUMBER=t.DEFAULT_NULL_INDEX=void 0,t.DEFAULT_NULL_INDEX=-1,t.INIT_MAX_NUMBER=1e3,t.DEFAULT_DATA_URL_KEY="dataURL"},3264:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},l=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},s=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,l=o.length;a<l;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(2791)),d=n(6842),f=n(2718),h=n(4903);t.default=function(e){var t=e.value,n=void 0===t?[]:t,i=e.onChange,o=e.onError,a=e.children,p=e.dataURLKey,g=void 0===p?h.DEFAULT_DATA_URL_KEY:p,m=e.multiple,v=void 0!==m&&m,x=e.maxNumber,j=void 0===x?h.INIT_MAX_NUMBER:x,y=e.acceptType,b=e.maxFileSize,N=e.resolutionWidth,_=e.resolutionHeight,Z=e.resolutionType,E=e.inputProps,T=void 0===E?{}:E,L=e.allowNonImageType,w=void 0!==L&&L,I=n||[],C=u.useRef(null),S=u.useState(h.DEFAULT_NULL_INDEX),A=S[0],U=S[1],D=u.useState(null),P=D[0],k=D[1],F=u.useState(!1),O=F[0],M=F[1],R=u.useCallback((function(){return d.openFileDialog(C)}),[C]),V=u.useCallback((function(){U(h.DEFAULT_NULL_INDEX),R()}),[R]),z=u.useCallback((function(){null===i||void 0===i||i([])}),[i]),B=function(e){return l(void 0,void 0,void 0,(function(){var t;return c(this,(function(n){switch(n.label){case 0:return[4,f.getErrorValidation({fileList:e,maxFileSize:b,maxNumber:j,acceptType:y,keyUpdate:A,resolutionType:Z,resolutionWidth:N,resolutionHeight:_,value:I,allowNonImageType:w})];case 1:return(t=n.sent())?(k(t),null===o||void 0===o||o(t,e),[2,!1]):(P&&k(null),[2,!0])}}))}))},G=function(e){return l(void 0,void 0,void 0,(function(){var t,n,r,o,a;return c(this,(function(l){switch(l.label){case 0:return e?[4,d.getListFiles(e,g)]:[2];case 1:return(t=l.sent()).length?[4,B(t)]:[2];case 2:if(!l.sent())return[2];if(r=[],A>h.DEFAULT_NULL_INDEX)o=t[0],(n=s(I))[A]=o,r.push(A);else if(v)for(n=s(I,t),a=I.length;a<n.length;a+=1)r.push(a);else n=[t[0]],r.push(0);return null===i||void 0===i||i(n,r),[2]}}))}))},X=u.useMemo((function(){return d.getAcceptTypeString(y,w)}),[y,w]);return u.default.createElement(u.default.Fragment,null,u.default.createElement("input",r({type:"file",accept:X,ref:C,multiple:v&&A===h.DEFAULT_NULL_INDEX,onChange:function(e){return l(void 0,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,G(e.target.files)];case 1:return t.sent(),A>h.DEFAULT_NULL_INDEX&&U(h.DEFAULT_NULL_INDEX),C.current&&(C.current.value=""),[2]}}))}))},style:{display:"none"}},T)),null===a||void 0===a?void 0:a({imageList:I,onImageUpload:V,onImageRemoveAll:z,onImageUpdate:function(e){U(e),R()},onImageRemove:function(e){var t=s(I);Array.isArray(e)?e.forEach((function(e){t.splice(e,1)})):t.splice(e,1),null===i||void 0===i||i(t)},errors:P,dragProps:{onDrop:function(e){e.preventDefault(),e.stopPropagation(),M(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&G(e.dataTransfer.files)},onDragEnter:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.items&&e.dataTransfer.items.length>0&&M(!0)},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),M(!1)},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDragStart:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.clearData()}},isDragging:O}))}},6842:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getListFiles=t.getImage=t.getBase64=t.getAcceptTypeString=t.openFileDialog=void 0,t.openFileDialog=function(e){e.current&&e.current.click()},t.getAcceptTypeString=function(e,t){return(null===e||void 0===e?void 0:e.length)?e.map((function(e){return"."+e})).join(", "):t?"":"image/*"},t.getBase64=function(e){var t=new FileReader;return new Promise((function(n){t.addEventListener("load",(function(){return n(String(t.result))})),t.readAsDataURL(e)}))},t.getImage=function(e){var t=new Image;return new Promise((function(n){t.addEventListener("load",(function(){return n(t)})),t.src=URL.createObjectURL(e)}))},t.getListFiles=function(e,n){for(var r=[],i=0;i<e.length;i+=1)r.push(t.getBase64(e[i]));return Promise.all(r).then((function(t){return t.map((function(t,r){var i;return(i={})[n]=t,i.file=e[r],i}))}))}},2718:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorValidation=t.isMaxNumberValid=t.isAcceptTypeValid=t.isMaxFileSizeValid=t.isImageValid=t.isResolutionValid=void 0;var o=n(4903),a=n(6842);t.isResolutionValid=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=1),!n||!r||!e.width||!e.height)return!0;switch(t){case"absolute":if(e.width===n&&e.height===r)return!0;break;case"ratio":var i=n/r;if(e.width/e.height===i)return!0;break;case"less":if(e.width<=n&&e.height<=r)return!0;break;case"more":if(e.width>=n&&e.height>=r)return!0}return!1},t.isImageValid=function(e){return!!e.includes("image")},t.isMaxFileSizeValid=function(e,t){return!t||e<=t},t.isAcceptTypeValid=function(e,t){if(e&&e.length>0){var n=t.split(".").pop()||"";if(e.findIndex((function(e){return e.toLowerCase()===n.toLowerCase()}))<0)return!1}return!0},t.isMaxNumberValid=function(e,t,n){if(0!==t&&!t)return!0;if(n===o.DEFAULT_NULL_INDEX){if(e<=t)return!0}else if(e<=t+1)return!0;return!1},t.getErrorValidation=function(e){var n=e.fileList,o=e.value,l=e.maxNumber,c=e.keyUpdate,s=e.acceptType,u=e.maxFileSize,d=e.resolutionType,f=e.resolutionWidth,h=e.resolutionHeight,p=e.allowNonImageType;return r(void 0,void 0,void 0,(function(){var e,r,g,m;return i(this,(function(i){switch(i.label){case 0:return e={},t.isMaxNumberValid(n.length+o.length,l,c)?[3,1]:(e.maxNumber=!0,[3,5]);case 1:r=0,i.label=2;case 2:return r<n.length?(g=n[r].file)?(p||t.isImageValid(g.type))&&t.isAcceptTypeValid(s,g.name)?t.isMaxFileSizeValid(g.size,u)?d?[4,a.getImage(g)]:[3,4]:(e.maxFileSize=!0,[3,5]):(e.acceptType=!0,[3,5]):[3,4]:[3,5];case 3:if(m=i.sent(),!t.isResolutionValid(m,d,f,h))return e.resolution=!0,[3,5];i.label=4;case 4:return r+=1,[3,2];case 5:return Object.values(e).find(Boolean)?[2,e]:[2,null]}}))}))}},2487:function(){}}]);
//# sourceMappingURL=65.3d2681ef.chunk.js.map