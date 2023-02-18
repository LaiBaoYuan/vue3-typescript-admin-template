import{an as P,h as C,_ as b,B as E,a2 as w,o,c as d,b as t,a as h,a3 as m,d as e,k as i,m as p,z as x,I as k,a1 as B}from"./index-4e953027.js";import{E as N,a as R}from"./el-tab-pane-7cdf3be2.js";import{S as z}from"./SwitchRoles-c880b8e6.js";import"./el-radio-group-cc0ffe2e.js";const v=(s,r)=>{const{value:a}=r,u=P.getters.roles;if(a&&a instanceof Array){if(a.length>0){const _=a;u.some(f=>_.includes(f))||s.parentNode&&s.parentNode.removeChild(s)}}else throw new Error(`need roles! Like v-permission="['admin','editor']"`)},A={updated(s,r){v(s,r)},mounted(s,r){v(s,r)}};function D(s){const r=C();if(s&&s instanceof Array&&s.length>0){const a=r.getters.roles,u=s;return a.some(c=>u.includes(c))}else return console.error(`need roles! Like v-permission="['admin','editor']"`),!1}const S={name:"DirectivePermission",components:{SwitchRoles:z},directives:{permission:A},data(){return{key:1}},methods:{checkPermission:D,handleRolesChange(){this.key++}}},T={class:"permission-container"},V={class:"permission-alert"},O={class:"permission-alert"},L={class:"permission-alert"},I=h("br",null,null,-1);function j(s,r,a,u,_,c){const f=E("switch-roles"),n=B,y=N,g=R,l=w("permission");return o(),d("div",T,[t(f,{onChange:c.handleRolesChange},null,8,["onChange"]),(o(),d("div",{key:_.key,style:{"margin-top":"30px"}},[h("div",null,[m((o(),d("span",V,[e(" Only "),t(n,{class:"permission-tag",size:"small"},{default:i(()=>[e("admin")]),_:1}),e(" can see this ")])),[[l,["admin"]]]),m((o(),p(n,{class:"permission-sourceCode",type:"info"},{default:i(()=>[e(` v-permission="['admin']" `)]),_:1})),[[l,["admin"]]])]),h("div",null,[m((o(),d("span",O,[e(" Only "),t(n,{class:"permission-tag",size:"small"},{default:i(()=>[e("editor")]),_:1}),e(" can see this ")])),[[l,["editor"]]]),m((o(),p(n,{class:"permission-sourceCode",type:"info"},{default:i(()=>[e(` v-permission="['editor']" `)]),_:1})),[[l,["editor"]]])]),h("div",null,[m((o(),d("span",L,[e(" Both "),t(n,{class:"permission-tag",size:"small"},{default:i(()=>[e("admin")]),_:1}),e(" and "),t(n,{class:"permission-tag",size:"small"},{default:i(()=>[e("editor")]),_:1}),e(" can see this ")])),[[l,["admin","editor"]]]),m((o(),p(n,{class:"permission-sourceCode",type:"info"},{default:i(()=>[e(` v-permission="['admin','editor']" `)]),_:1})),[[l,["admin","editor"]]])])])),(o(),d("div",{key:"checkPermission"+_.key,style:{"margin-top":"60px"}},[h("aside",null,[e(x(s.$t("permission.tips"))+" ",1),I,e(" e.g. ")]),t(g,{type:"border-card",style:{width:"550px"}},{default:i(()=>[c.checkPermission(["admin"])?(o(),p(y,{key:0,label:"Admin"},{default:i(()=>[e(" Admin can see this "),t(n,{class:"permission-sourceCode",type:"info"},{default:i(()=>[e(` v-if="checkPermission(['admin'])" `)]),_:1})]),_:1})):k("",!0),c.checkPermission(["editor"])?(o(),p(y,{key:1,label:"Editor"},{default:i(()=>[e(" Editor can see this "),t(n,{class:"permission-sourceCode",type:"info"},{default:i(()=>[e(` v-if="checkPermission(['editor'])" `)]),_:1})]),_:1})):k("",!0),c.checkPermission(["admin","editor"])?(o(),p(y,{key:2,label:"Admin-OR-Editor"},{default:i(()=>[e(" Both admin or editor can see this "),t(n,{class:"permission-sourceCode",type:"info"},{default:i(()=>[e(` v-if="checkPermission(['admin','editor'])" `)]),_:1})]),_:1})):k("",!0)]),_:1})]))])}const J=b(S,[["render",j]]);export{J as default};
