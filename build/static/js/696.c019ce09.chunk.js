"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[696],{2696:function(e,t,r){r.r(t);var n=r(2982),l=r(885),c=r(4569),d=r.n(c),s=r(2791),a=r(9743),i=r(2677),u=r(160),o=r(2592),h=r(3360),m=r(542),x=r(6495),y=r(115),g=r(7689),j=(r(30),r(184));t.default=function(){var e=new Date,t=(0,s.useState)([]),r=(0,l.Z)(t,2),c=r[0],b=r[1],f=(0,s.useState)(!1),k=(0,l.Z)(f,2),p=k[0],Z=k[1],v=(0,s.useState)([]),C=(0,l.Z)(v,2),E=C[0],F=C[1],I=(0,g.s0)();function N(){var t=[];document.getElementById("on-the-way").checked&&c.map((function(e){null==e.deliveryDate&&t.push(e)})),document.getElementById("delivered").checked&&c.map((function(e){null!=e.deliveryDate&&t.push(e)})),0==document.getElementById("on-the-way").checked&&0==document.getElementById("delivered").checked&&(t=c);var r=[];document.getElementById(e.getFullYear()).checked&&t.map((function(t){t.buyDate.substring(5)==e.getFullYear()&&r.push(t)})),document.getElementById(e.getFullYear()-1).checked&&t.map((function(t){t.buyDate.substring(5)==e.getFullYear()-1&&r.push(t)})),document.getElementById("Older").checked&&t.map((function(t){t.buyDate.substring(5)<e.getFullYear()-1&&r.push(t)})),0==document.getElementById(e.getFullYear()).checked&&0==document.getElementById(e.getFullYear()-1).checked&&0==document.getElementById("Older").checked&&(r=t),F([]),F((0,n.Z)(r))}return(0,s.useEffect)((function(){p||d().get(y.Z+"/my-orders",{headers:{Authorization:"Bearer "+(0,x.e)("jwtToken")}}).then((function(e){200==e.status&&(b((0,n.Z)(e.data).reverse()),F((0,n.Z)(e.data).reverse()),Z(!0))})).catch((function(e){console.log("Error in /my-orders")}))})),(0,j.jsxs)("div",{children:[(0,j.jsx)(m.Z,{}),(0,j.jsxs)(a.Z,{className:"orders",children:[(0,j.jsxs)(i.Z,{style:{backgroundColor:"#fff",borderRadius:"2px",boxShadow:"0 2px 4px 0 rgb(0 0 0 / 8%)"},sm:2,children:[(0,j.jsx)("h3",{style:{margin:"10px"},children:"Filter"}),(0,j.jsxs)("div",{className:"orderfilter",children:[(0,j.jsx)("div",{className:"orderfiltertitle",children:"Order Status"}),(0,j.jsxs)(u.Z,{className:"orderfiltercheck",children:[(0,j.jsx)(u.Z.Check,{type:"checkbox",label:"On The Way",id:"on-the-way",onChange:N}),(0,j.jsx)(u.Z.Check,{type:"checkbox",label:"Delivered",id:"delivered",onChange:N})]})]}),(0,j.jsxs)("div",{className:"orderfilter",children:[(0,j.jsx)("div",{className:"orderfiltertitle",children:"Order Time"}),(0,j.jsxs)(u.Z,{className:"orderfiltercheck",children:[(0,j.jsx)(u.Z.Check,{type:"checkbox",id:e.getFullYear(),label:e.getFullYear(),onChange:N}),(0,j.jsx)(u.Z.Check,{type:"checkbox",id:e.getFullYear()-1,label:e.getFullYear()-1,onChange:N}),(0,j.jsx)(u.Z.Check,{type:"checkbox",id:"Older",label:"Older",onChange:N})]})]})]}),(0,j.jsx)(i.Z,{md:10,children:p?E.map((function(e){return(0,j.jsxs)(a.Z,{className:"ordersbox",children:[(0,j.jsx)(i.Z,{md:2,style:{display:"flex",justifyContent:"center"},children:(0,j.jsx)(o.Z,{thumbnail:"true",src:e.productImage1})}),(0,j.jsxs)(i.Z,{md:4,children:[(0,j.jsxs)("h5",{children:[(0,j.jsx)("br",{}),e.productName]}),(0,j.jsx)("br",{}),1==e.productRated?(0,j.jsx)(h.Z,{className:"buttonn",onClick:function(){},children:"Already rated"}):(0,j.jsx)(h.Z,{className:"buttonn",onClick:function(){return function(e){localStorage.setItem("rateProduct",JSON.stringify(e)),I("/ratereview")}(e)},children:"Rate & Review"})]}),(0,j.jsx)(i.Z,{md:2,children:(0,j.jsxs)("h5",{children:[" ",(0,j.jsx)("br",{}),"MSP: ",(0,j.jsxs)("b",{style:{marginRight:"20px",color:"rgb(255,98,98)"},children:["\u20b9",e.productPrice," "]})," "]})}),(0,j.jsx)(i.Z,{md:4,children:(0,j.jsxs)("h5",{children:[(0,j.jsx)("br",{}),"Quantity:",e.quantity,(0,j.jsx)("br",{}),"Ordered On: ",e.buyDate,(0,j.jsx)("br",{}),"Delivery Date:",e.deliveryDate,(0,j.jsx)("br",{}),"Payment Mode:",e.paymentMode]})})]})})):null})]})]})}}}]);
//# sourceMappingURL=696.c019ce09.chunk.js.map