"use strict";(self.webpackChunkmahavir=self.webpackChunkmahavir||[]).push([[318],{3437:function(e,s,i){i(2791),i(7632),i(184)},6860:function(e,s,i){var t=i(7022),n=i(3666),l=i(6355),a=i(9506),r=(i(2487),i(9848)),c=i(184);s.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.Z,{bg:"dark",variant:"dark",expand:!1,children:(0,c.jsxs)(t.Z,{fluid:!0,children:[(0,c.jsx)(a.Z.Toggle,{}),(0,c.jsxs)(a.Z.Offcanvas,{placement:"start",children:[(0,c.jsx)(l.Z.Header,{closeButton:!0,children:(0,c.jsx)(l.Z.Title,{children:"Admin Panel"})}),(0,c.jsx)(l.Z.Body,{style:{backgroundColor:"black",fontSize:"20px"},children:(0,c.jsx)(n.Z,{className:"justify-content-start flex-grow-1 pe-3",children:r.v.map((function(e,s){return(0,c.jsxs)(n.Z.Link,{href:"/#"+e.path,className:e.cName,children:[e.icon,(0,c.jsx)("span",{className:"span",children:" "}),e.title]})}))})})]})]})})})}},9848:function(e,s,i){i.d(s,{v:function(){return r}});i(2791);var t=i(8820),n=i(6856),l=i(7425),a=i(184),r=[{title:"Add Item",path:"/admin",icon:(0,a.jsx)(t.V9Z,{}),cName:"nav-text"},{title:"Pending Orders",path:"/pendingdelivery",icon:(0,a.jsx)(n.ZjZ,{}),cName:"nav-text"},{title:"Completed Orders",path:"/completedorders",icon:(0,a.jsx)(n.ZjZ,{}),cName:"nav-text"},{title:"User Complaints",path:"/allcomplaints",icon:(0,a.jsx)(l.SX$,{}),cName:"nav-text"},{title:"Add New",path:"/AddNew",icon:(0,a.jsx)(n.siy,{}),cName:"nav-text"},{title:"Logout",path:"/",icon:(0,a.jsx)(l.goJ,{}),cName:"nav-text"},{title:"Upload Excel",path:"/upload",icon:(0,a.jsx)(t.aBR,{}),cName:"nav-text"}]},9318:function(e,s,i){i.r(s);var t=i(885),n=i(2791),l=(i(4164),i(7022)),a=i(9743),r=i(2677),c=i(3360),o=(i(3437),i(6860)),d=i(4569),x=i.n(d),h=i(6495),j=i(115),p=i(184);s.default=function(){var e=(0,n.useState)(),s=(0,t.Z)(e,2),i=s[0],d=s[1],f=(0,n.useState)(),u=(0,t.Z)(f,2),m=u[0],b=u[1],Z=(0,n.useState)(),g=(0,t.Z)(Z,2),S=g[0],v=g[1],y=(0,n.useState)(),D=(0,t.Z)(y,2),z=D[0],C=D[1],F=(0,n.useState)(),k=(0,t.Z)(F,2),w=k[0],M=k[1],N=(0,n.useState)(),B=(0,t.Z)(N,2),A=B[0],L=B[1],U=(0,n.useState)(),E=(0,t.Z)(U,2),I=(E[0],E[1]),O=(0,n.useState)(),P=(0,t.Z)(O,2),T=(P[0],P[1]),Y=(0,n.useState)(!1),H=(0,t.Z)(Y,2),J=H[0],R=H[1],V=(0,n.useState)(!1),X=(0,t.Z)(V,2),$=X[0],q=X[1],G=(0,n.useState)(!1),K=(0,t.Z)(G,2),Q=K[0],W=K[1],_=(0,n.useState)(!1),ee=(0,t.Z)(_,2),se=ee[0],ie=ee[1],te=(0,n.useState)(!1),ne=(0,t.Z)(te,2),le=ne[0],ae=ne[1],re=(0,n.useState)(!1),ce=(0,t.Z)(re,2),oe=ce[0],de=ce[1],xe=(0,n.useState)(!1),he=(0,t.Z)(xe,2),je=(he[0],he[1]),pe=(0,n.useState)(!1),fe=(0,t.Z)(pe,2),ue=(fe[0],fe[1]),me=(0,h.e)("jwtToken");return(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Z,{}),(0,p.jsxs)(l.Z,{className:"uploadexcel",style:{padding:"50px"},children:[(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload Your Products Excel Datasheet here"}),(0,p.jsx)("input",{type:"file",name:"file",accept:".xlsx, .xls, .csv",onChange:function(e){d(e.target.files[0]),R(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",i),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/products",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error in products")}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:J?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",i.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",i.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",i.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",i.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload Your Categories Datasheet here"}),(0,p.jsx)("input",{type:"file",name:"categoriesfile",accept:".xlsx, .xls, .csv",onChange:function(e){b(e.target.files[0]),q(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",m),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/Categories",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error in Categories:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:$?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",m.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",m.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",m.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",m.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload filter criterias "}),(0,p.jsx)("input",{type:"file",name:"filtercriteria",accept:".xlsx, .xls, .csv",onChange:function(e){v(e.target.files[0]),W(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",S),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/filters",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error in filters:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:Q?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",S.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",S.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",S.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",S.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload shop by brands "}),(0,p.jsx)("input",{type:"file",name:"shopbybrands",accept:".xlsx, .xls, .csv",onChange:function(e){C(e.target.files[0]),ie(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",z),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/shopByBrands",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error in shopByBrands:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:se?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",z.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",z.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",z.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",z.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload mega mini posters "}),(0,p.jsx)("input",{type:"file",name:"megaminiposters",accept:".xlsx, .xls, .csv",onChange:function(e){M(e.target.files[0]),ae(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",w),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/offerposters",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("error in offerposters:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:le?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",w.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",w.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",w.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",w.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload Deals "}),(0,p.jsx)("input",{type:"file",name:"deals",accept:".xlsx, .xls, .csv",onChange:function(e){L(e.target.files[0]),de(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",A),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/deals",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("error in deals:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:oe?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",A.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",A.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",A.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",A.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload Is In Navbar "}),(0,p.jsx)("input",{type:"file",name:"deals",accept:".xlsx, .xls, .csv",onChange:function(e){I(e.target.files[0]),je(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",m),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/isCategoryInNavbar",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error in Categories:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:oe?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",A.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",A.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",A.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",A.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{sm:6,children:[(0,p.jsx)("h5",{children:"Upload Extra Categories "}),(0,p.jsx)("input",{type:"file",name:"deals",accept:".xlsx, .xls, .csv",onChange:function(e){T(e.target.files[0]),ue(!0)}}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(c.Z,{variant:"flat",size:"m",onClick:function(){var e=new FormData;e.append("file",m),console.log("Form Data",e),alert("Submit Clicked"),x().post(j.Z+"/excel/parentCategories",e,{headers:{Authorization:"Bearer "+me}}).then((function(e){console.log(e.data)})).catch((function(e){console.log("Error in Categories:",e)}))},children:"Submit"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsx)(r.Z,{sm:6,children:oe?(0,p.jsxs)("div",{style:{fontSize:"15px"},children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filename:"})," ",A.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Filetype:"})," ",A.type]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Size in bytes:"})," ",A.size]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"lastModifiedDate:"})," ",A.lastModifiedDate.toLocaleDateString()]})]}):(0,p.jsx)("p",{children:"Select a file to show details"})})]})]})]})}},2487:function(){}}]);
//# sourceMappingURL=318.c0eee8b8.chunk.js.map