"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[510],{3437:function(e,n,r){r(2791),r(7632),r(184)},6860:function(e,n,r){var t=r(7022),s=r(3666),d=r(6355),i=r(9506),c=(r(2487),r(9848)),l=r(184);n.Z=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{bg:"dark",variant:"dark",expand:!1,children:(0,l.jsxs)(t.Z,{fluid:!0,children:[(0,l.jsx)(i.Z.Toggle,{}),(0,l.jsxs)(i.Z.Offcanvas,{placement:"start",children:[(0,l.jsx)(d.Z.Header,{closeButton:!0,children:(0,l.jsx)(d.Z.Title,{children:"Admin Panel"})}),(0,l.jsx)(d.Z.Body,{style:{backgroundColor:"black",fontSize:"20px"},children:(0,l.jsx)(s.Z,{className:"justify-content-start flex-grow-1 pe-3",children:c.v.map((function(e,n){return(0,l.jsxs)(s.Z.Link,{style:{color:"white"},href:"/#"+e.path,className:e.cName,children:[e.icon,(0,l.jsx)("span",{className:"span",children:" "}),e.title]})}))})})]})]})})})}},6510:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(2982),s=r(885),d=r(2791),i=r(7022),c=r(2591),l=r(3360),o=r(8949),a=r(4569),h=r.n(a),x=(r(3437),r(6860)),j=r(7689),u=(r(2487),r(9848),r(5462),r(5985),r(9983),r(184));var m=r(115),f=function(){var e=(0,d.useState)([]),n=(0,s.Z)(e,2),r=n[0],a=n[1],f=(0,d.useState)(!1),p=(0,s.Z)(f,2),g=p[0],y=p[1],v=(0,j.s0)();function Z(e){console.log("Order clicked",e);var n=new Date,r=localStorage.getItem("jwtTokenAdmin"),t={orderId:""+e.orderId,deliveryDate:n.getDate()+"/"+n.getMonth()+"/"+n.getFullYear()};console.log("form data body",t),h().post(m.Z+"/order-status",t,{headers:{Authorization:"Bearer "+r,"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status?(console.log("Success",e.data),window.location.reload()):console.log("Error",e)})).catch((function(e){console.log("Error in order-status",e)}))}function b(e){console.log("Invoice",e),console.log("Generate Invoice",JSON.stringify(e)),localStorage.setItem("Invoice",JSON.stringify(e)),v("/invoice")}return(0,d.useEffect)((function(){"yes,true"!==localStorage.getItem("isAdminLoggedIn")&&v("/"),g||h().get(m.Z+"/pending-orders").then((function(e){200==e.status?(console.log("Success",e.data),a((0,t.Z)(e.data).reverse()),y(!0)):console.log("response",e)})).catch((function(e){console.log("Error In Fetching orders")}))})),(0,u.jsxs)("div",{children:[(0,u.jsx)(x.Z,{}),(0,u.jsxs)(i.Z,{className:"pendingdeliveries",children:[(0,u.jsx)("h4",{style:{margin:"20px",textAlign:"center"},children:"Pending Orders"}),(0,u.jsxs)(c.Z,{striped:!0,bordered:!0,hover:!0,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Order Id"}),(0,u.jsx)("th",{children:"Email"}),(0,u.jsx)("th",{children:"Buy Date"}),(0,u.jsx)("th",{children:"Address"}),(0,u.jsx)("th",{children:"Mobile Number"}),(0,u.jsx)("th",{children:"Payment Amount"}),(0,u.jsx)("th",{children:"Payment Mode"}),(0,u.jsx)("th",{children:"Invoice"}),(0,u.jsx)("th",{children:"#"})]})}),(0,u.jsx)("tbody",{children:g?r.map((function(e,n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.orderId}),(0,u.jsx)("td",{children:e.buyerEmail}),(0,u.jsx)("td",{children:e.buyDate}),(0,u.jsx)("td",{children:e.userAddress.address+","+e.userAddress.city+"-"+e.userAddress.pincode}),(0,u.jsx)("td",{children:e.userAddress.mobileNumber}),(0,u.jsx)("td",{children:e.paymentAmount}),(0,u.jsx)("td",{children:e.paymentMode}),(0,u.jsx)("td",{onClick:function(){return b(e)},children:"\ud83d\udcc5"}),(0,u.jsx)("td",{children:(0,u.jsx)(l.Z,{onClick:function(){return Z(e)},children:"\u2705"})})]})})):null})]})]}),(0,u.jsx)(o.Z,{flush:!0,className:"mobileviewpendingorders",children:g?r.map((function(e,n){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z.Item,{eventKey:n,children:[(0,u.jsxs)(o.Z.Header,{children:["Order Id: ",e.orderId]}),(0,u.jsx)(o.Z.Body,{children:(0,u.jsx)(c.Z,{children:(0,u.jsxs)("tbody",{children:[(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Order Id: "}),e.orderId]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Email: "}),e.buyerEmail]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Buy Date: "}),e.buyDate]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Address: "}),e.userAddress.address+","+e.userAddress.city+"-"+e.userAddress.pincode]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Contact: "}),e.userAddress.mobileNumber]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Payment Amount: "}),e.paymentAmount]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Payment Mode: "}),e.paymentMode]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"Invoice: "}),(0,u.jsx)(l.Z,{onClick:function(){return b(e)},children:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f"})]})}),(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("b",{children:"#: "}),(0,u.jsx)(l.Z,{onClick:function(){return Z(e)},children:"\u2705"})]})})]})})})]})})})):null})]})}},9848:function(e,n,r){r.d(n,{v:function(){return c}});r(2791);var t=r(8820),s=r(6856),d=r(7425),i=r(184),c=[{title:"Add Item",path:"/admin",icon:(0,i.jsx)(t.V9Z,{}),cName:"nav-text"},{title:"Pending Orders",path:"/pendingdelivery",icon:(0,i.jsx)(s.ZjZ,{}),cName:"nav-text"},{title:"Completed Orders",path:"/completedorders",icon:(0,i.jsx)(s.ZjZ,{}),cName:"nav-text"},{title:"User Complaints",path:"/allcomplaints",icon:(0,i.jsx)(d.SX$,{}),cName:"nav-text"},{title:"Upload Excel",path:"/upload",icon:(0,i.jsx)(t.aBR,{}),cName:"nav-text"}]},2487:function(){}}]);
//# sourceMappingURL=510.869c440f.chunk.js.map