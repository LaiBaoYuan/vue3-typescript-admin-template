import{_ as I,o as y,c as P,a as e,b as o,d as g,e as B,f as T,u as K,g as L,h as N,r,i as U,w as j,j as D,E as M,k as v,l as a,m as W,n as z,p as A,q as $,v as G,s as J,t as X,x as Y,y as Z}from"./index-4e953027.js";import{E as ee}from"./el-dialog-8f80d04f.js";import{E as se,a as te}from"./el-form-item-51109d46.js";import"./_initCloneObject-f928ba96.js";const oe={name:"SocialSignin",methods:{wechatHandleClick(i){alert("ok")},tencentHandleClick(i){alert("ok")}}},ne={class:"social-signup-container"},ae={class:"wx-svg-container"},le={class:"qq-svg-container"};function re(i,d,b,x,h,p){const w=B;return y(),P("div",ne,[e("div",{class:"sign-btn",onClick:d[0]||(d[0]=_=>p.wechatHandleClick("wechat"))},[e("span",ae,[o(w,{"icon-class":"wechat",class:"icon"})]),g(" WeChat ")]),e("div",{class:"sign-btn",onClick:d[1]||(d[1]=_=>p.tencentHandleClick("tencent"))},[e("span",le,[o(w,{"icon-class":"qq",class:"icon"})]),g(" QQ ")])])}const ie=I(oe,[["render",re],["__scopeId","data-v-916e8f40"]]),f=i=>(Y("data-v-8436b8ab"),i=i(),Z(),i),de={class:"login-container"},ce=f(()=>e("div",{class:"title-container"},[e("h3",{class:"title"},"Login Form")],-1)),ue={class:"svg-container"},pe={class:"svg-container"},_e={style:{position:"relative"}},me=f(()=>e("div",{class:"tips"},[e("span",null,"Username : admin"),e("span",null,"Password : any")],-1)),ve=f(()=>e("div",{class:"tips"},[e("span",{style:{"margin-right":"18px"}},"Username : editor"),e("span",null,"Password : any")],-1)),fe=f(()=>e("br",null,null,-1)),we=f(()=>e("br",null,null,-1)),ge=f(()=>e("br",null,null,-1)),he=T({__name:"index",setup(i){const d=K(),b=L(),x=N();let h=r(),p=r(),w=r(),_=r(!1),k=r(""),C=r({}),c=r(!1),m=r("password"),l=U({username:"admin",password:"111111"}),F=U({username:[{required:!0,trigger:"blur",validator:(n,s,t)=>{G(s)?t():t(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:(n,s,t)=>{s.length<6?t(new Error("The password can not be less than 6 digits")):t()}}]});const H=n=>Object.keys(n).reduce((s,t)=>(t!=="redirect"&&(s[t]=n[t]),s),{}),V=()=>{w.value.validate(n=>{if(n)_.value=!0,x.dispatch("user/login",l).then(s=>{b.push({path:k.value||"/",query:C.value}),_.value=!1}).catch(()=>{_.value=!1});else return console.log("error submit!!"),!1})},O=()=>{m.value==="password"?m.value="":m.value="password",J(()=>{p.value.focus()})};return j(d,()=>{const n=d.query;n&&(k.value=n.redirect,C.value=H(n))},{immediate:!0}),D(()=>{l.username===""?h.value.focus():l.password===""&&p.value.focus()}),(n,s)=>{const t=B,E=M,S=se,q=X,Q=te,R=ee;return y(),P("div",de,[o(Q,{ref_key:"form",ref:w,model:a(l),rules:a(F),class:"login-form",autocomplete:"on","label-position":"left"},{default:v(()=>[ce,o(S,{prop:"username"},{default:v(()=>[e("span",ue,[o(t,{"icon-class":"user"})]),o(E,{ref_key:"username",ref:h,modelValue:a(l).username,"onUpdate:modelValue":s[0]||(s[0]=u=>a(l).username=u),placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},null,8,["modelValue"])]),_:1}),o(S,{prop:"password"},{default:v(()=>[e("span",pe,[o(t,{"icon-class":"password"})]),(y(),W(E,{key:a(m),ref_key:"password",ref:p,modelValue:a(l).password,"onUpdate:modelValue":s[1]||(s[1]=u=>a(l).password=u),type:a(m),placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on",onKeyup:z(V,["enter"])},null,8,["modelValue","type","onKeyup"])),e("span",{class:"show-pwd",onClick:O},[o(t,{"icon-class":a(m)==="password"?"eye":"eye-open"},null,8,["icon-class"])])]),_:1}),o(q,{loading:a(_),type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:A(V,["prevent"])},{default:v(()=>[g("Login")]),_:1},8,["loading","onClick"]),e("div",_e,[me,ve,o(q,{class:"thirdparty-button",type:"primary",onClick:s[2]||(s[2]=u=>$(c)?c.value=!0:c=!0)},{default:v(()=>[g(" Or connect with ")]),_:1})])]),_:1},8,["model","rules"]),o(R,{title:"Or connect with",modelValue:a(c),"onUpdate:modelValue":s[3]||(s[3]=u=>$(c)?c.value=u:c=u)},{default:v(()=>[g(" Can not be simulated on local, so please combine you own business simulation! ! ! "),fe,we,ge,o(ie)]),_:1},8,["modelValue"])])}}});const Ee=I(he,[["__scopeId","data-v-8436b8ab"]]);export{Ee as default};