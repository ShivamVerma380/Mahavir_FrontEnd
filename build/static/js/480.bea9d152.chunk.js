"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[480],{1480:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var r=a(885),n=a(2791),o=a(46),s=a(6495),l=a(4569),c=a.n(l),i=a(115),d=a(7689),m=a(9743),p=a(9140),u=a(542),h=a(8114),y=a(5985),g=a(184);var x=function(){try{console.log("Buy Product",localStorage.getItem("buyProduct"));var e=localStorage.getItem("buyProduct")}catch(N){console.log(N)}var t=(0,n.useState)(new Map),a=(0,r.Z)(t,2),l=a[0],x=(a[1],[]);console.log("product",e),x.push(e),null!=e&&(x=e.split(",")).map((function(e){var t=e.split("=");l.set(t[0],t[1])}));var b=(0,d.s0)(),j=Object.fromEntries(l),v=JSON.parse(localStorage.getItem("selectedaddress")),f=(0,n.useState)(!1),S=(0,r.Z)(f,2),I=S[0],A=S[1],D=(0,n.useState)(!1),T=(0,r.Z)(D,2),w=(T[0],T[1]),Z=(0,n.useState)(!1),k=(0,r.Z)(Z,2),P=k[0],C=k[1],O=new Date;return(0,g.jsxs)("div",{children:[(0,g.jsx)(y.Ix,{position:"top-center"}),I?(0,g.jsx)("h1",{children:"Payment Done"}):(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("body",{style:{background:"whitesmoke"},children:[(0,g.jsx)(u.Z,{}),(0,g.jsxs)(m.Z,{style:{height:"100%",width:"100%",marginTop:"70px",background:"white"},children:[(0,g.jsx)(o.JX,{md:4}),(0,g.jsx)("center",{children:(0,g.jsxs)(o.JX,{md:8,className:"payment",children:[(0,g.jsx)("h3",{children:"Payment"}),(0,g.jsx)("p",{style:{fontSize:"16px",marginTop:"20px"},children:"Choose payment method below"}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(o.JX,{md:12,children:(0,g.jsx)(p.Z,{style:{width:"150px",height:"100px",border:"1px solid black",margin:"10px",backgroundColor:P?"lightblue":""},onClick:function(){localStorage.setItem("paymentType","cashOnDelivery"),"cashOnDelivery",C(!0),w(!1)},children:(0,g.jsx)(p.Z.Img,{id:"cashOnDelivery",onClick:function(){localStorage.setItem("paymentType","cashOnDelivery"),C(!0),w(!1)},style:{padding:"10px",width:"100px",height:"100px",marginLeft:"20px"},variant:"top",src:"https://cdn-icons-png.flaticon.com/512/1019/1019607.png"})})})}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(o.JX,{md:12,children:(0,g.jsx)("h3",{children:"Cash On Delivery"})})}),(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(o.JX,{md:3}),(0,g.jsx)(o.JX,{md:6,children:(0,g.jsx)(o.zx,{id:"payment_nextbtn",className:"payment_nextbtn",onClick:function(e){if(e.preventDefault(),""===localStorage.getItem("Amount"))y.Am.warn("Please enter amount");else if("cashOnDelivery"!==localStorage.getItem("paymentType"))y.Am.warn((0,g.jsx)("b",{children:"Please select payment type"}));else if("cashOnDelivery"===localStorage.getItem("paymentType")){if(y.Am.info((0,g.jsx)("b",{children:"Processing your order..."})),e.currentTarget.disabled=!0,localStorage.setItem("paymentmode","cashOnDelivery"),console.log("Products",j),0===j.size)return void y.Am.error((0,g.jsx)("b",{children:"Please add products to cart"}));var t={products:j,userAddress:{name:v.name,mobileNumber:v.mobileNumber,pincode:v.pincode,locality:v.locality,address:v.address,city:v.city,state:v.state,addressType:"home"},buyDate:O.getDate()+"/"+O.getMonth()+"/"+O.getFullYear(),paymentMode:"Cash On Delivery",paymentAmount:localStorage.getItem("Amount")};c().post(i.Z+"/order",t,{headers:{Authorization:"Bearer "+(0,s.e)("jwtToken"),"Content-Type":"application/json"}}).then((function(t){200==t.status?(y.Am.success((0,g.jsx)("b",{children:"Order Placed Successfully"})),A(!0),A(!0),b("/paymentsuccess"),localStorage.removeItem("buyProduct"),localStorage.removeItem("paymentType"),e.currentTarget.disabled=!1):(y.Am.error((0,g.jsx)("b",{children:t.data.message})),e.currentTarget.disabled=!1)})).catch((function(t){y.Am.error((0,g.jsx)("b",{children:t.response.data.message})),console.log("Error",t.response),e.currentTarget.disabled=!1}))}else{var a={key:"rzp_live_HD5qU0zoy9Ntd2",key_secret:"GXZHI3xZnA6BFaCZHEYQt2De",amount:100*localStorage.getItem("Amount"),currency:"INR",name:"Mahavir Electronics",description:"Payment for products",handler:function(e){if(null!=localStorage.getItem("Amount")){var t={products:j,userAddress:{name:v.name,mobileNumber:v.mobileNumber,pincode:v.pincode,locality:v.locality,address:v.address,city:v.city,state:v.state,addressType:"home"},buyDate:O.getDate()+"/"+O.getMonth()+"/"+O.getFullYear(),paymentMode:"razorpay",paymentAmount:localStorage.getItem("Amount"),paymentId:e.razorpay_payment_id};c().post(i.Z+"/order",t,{headers:{Authorization:"Bearer "+(0,s.e)("jwtToken"),"Content-Type":"application/json"}}).then((function(e){200==e.status&&(A(!0),A(!0),localStorage.removeItem("paymentType"),b("/paymentsuccess"))})).catch((function(e){console.log("Error",e.response)}))}},prefill:{name:v.name,contact:v.mobileNumber,email:"shivam380.testing@gmail.com"},notes:{address:v.address},theme:{color:"#F37254"}};new window.Razorpay(a).open()}},children:"Next"})})]})]})})]}),(0,g.jsx)(h.Z,{})]})})]})}}}]);
//# sourceMappingURL=480.bea9d152.chunk.js.map