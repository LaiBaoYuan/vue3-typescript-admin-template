import{W as ge,cj as _e,ck as Ne,C as D,D as J,ag as ne,f as F,ah as Y,a_ as Q,F as I,r as w,w as O,s as Z,a$ as le,o as oe,c as re,G as ie,l as k,J as Ce,K as ce,cl as B,aa as K,cm as Te,cn as we,M,j as ue,av as Pe,b as v,V as L,co as Se,ca as $e,R as Ee,ax as V,bi as xe,ak as ke,cp as Be,H as de,bb as be,bX as te,T as Oe,ai as Re,b0 as ze,cq as ae,i as Ae,c6 as Fe,a3 as Me,a4 as Le,I as Ve,L as De,b6 as Ie}from"./index-4e953027.js";const U=Symbol("tabsRootContextKey"),Ke=(e,n,f)=>_e(e.subTree).filter(t=>{var l;return Ne(t)&&((l=t.type)==null?void 0:l.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>f[t]).filter(t=>!!t),Ue=(e,n)=>{const f={},C=ge([]);return{children:C,addChild:l=>{f[l.uid]=l,C.value=Ke(e,n,f)},removeChild:l=>{delete f[l],C.value=C.value.filter(S=>S.uid!==l)}}},je=D({tabs:{type:J(Array),default:()=>ne([])}}),ve="ElTabBar",qe=F({name:ve}),He=F({...qe,props:je,setup(e,{expose:n}){const f=e,C=K(),i=Y(U);i||Q(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=I("tabs"),l=w(),S=w(),u=()=>{let m=0,r=0;const d=["top","bottom"].includes(i.props.tabPosition)?"width":"height",b=d==="width"?"x":"y",$=b==="x"?"left":"top";return f.tabs.every(P=>{var R,a;const h=(a=(R=C.parent)==null?void 0:R.refs)==null?void 0:a[`tab-${P.uid}`];if(!h)return!1;if(!P.active)return!0;m=h[`offset${B($)}`],r=h[`client${B(d)}`];const g=window.getComputedStyle(h);return d==="width"&&(f.tabs.length>1&&(r-=Number.parseFloat(g.paddingLeft)+Number.parseFloat(g.paddingRight)),m+=Number.parseFloat(g.paddingLeft)),!1}),{[d]:`${r}px`,transform:`translate${B(b)}(${m}px)`}},y=()=>S.value=u();return O(()=>f.tabs,async()=>{await Z(),y()},{immediate:!0}),le(l,()=>y()),n({ref:l,update:y}),(m,r)=>(oe(),re("div",{ref_key:"barRef",ref:l,class:ie([k(t).e("active-bar"),k(t).is(k(i).props.tabPosition)]),style:Ce(S.value)},null,6))}});var We=ce(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Xe=D({panes:{type:J(Array),default:()=>ne([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ge={tabClick:(e,n,f)=>f instanceof Event,tabRemove:(e,n)=>n instanceof Event},se="ElTabNav",Je=F({name:se,props:Xe,emits:Ge,setup(e,{expose:n,emit:f}){const C=K(),i=Y(U);i||Q(se,"<el-tabs><tab-nav /></el-tabs>");const t=I("tabs"),l=Te(),S=we(),u=w(),y=w(),m=w(),r=w(!1),d=w(0),b=w(!1),$=w(!0),P=M(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),R=M(()=>({transform:`translate${P.value==="width"?"X":"Y"}(-${d.value}px)`})),a=()=>{if(!u.value)return;const o=u.value[`offset${B(P.value)}`],c=d.value;if(!c)return;const s=c>o?c-o:0;d.value=s},h=()=>{if(!u.value||!y.value)return;const o=y.value[`offset${B(P.value)}`],c=u.value[`offset${B(P.value)}`],s=d.value;if(o-s<=c)return;const x=o-s>c*2?s+c:o-c;d.value=x},g=async()=>{const o=y.value;if(!r.value||!m.value||!u.value||!o)return;await Z();const c=m.value.querySelector(".is-active");if(!c)return;const s=u.value,x=["top","bottom"].includes(i.props.tabPosition),N=c.getBoundingClientRect(),_=s.getBoundingClientRect(),E=x?o.offsetWidth-_.width:o.offsetHeight-_.height,T=d.value;let p=T;x?(N.left<_.left&&(p=T-(_.left-N.left)),N.right>_.right&&(p=T+N.right-_.right)):(N.top<_.top&&(p=T-(_.top-N.top)),N.bottom>_.bottom&&(p=T+(N.bottom-_.bottom))),p=Math.max(p,0),d.value=Math.min(p,E)},z=()=>{if(!y.value||!u.value)return;const o=y.value[`offset${B(P.value)}`],c=u.value[`offset${B(P.value)}`],s=d.value;c<o?(r.value=r.value||{},r.value.prev=s,r.value.next=s+c<o,o-s<c&&(d.value=o-c)):(r.value=!1,s>0&&(d.value=0))},j=o=>{const c=o.code,{up:s,down:x,left:N,right:_}=V;if(![s,x,N,_].includes(c))return;const E=Array.from(o.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),T=E.indexOf(o.target);let p;c===N||c===s?T===0?p=E.length-1:p=T-1:T<E.length-1?p=T+1:p=0,E[p].focus({preventScroll:!0}),E[p].click(),ee()},ee=()=>{$.value&&(b.value=!0)},q=()=>b.value=!1;return O(l,o=>{o==="hidden"?$.value=!1:o==="visible"&&setTimeout(()=>$.value=!0,50)}),O(S,o=>{o?setTimeout(()=>$.value=!0,50):$.value=!1}),le(m,z),ue(()=>setTimeout(()=>g(),0)),Pe(()=>z()),n({scrollToActiveTab:g,removeFocus:q}),O(()=>e.panes,()=>C.update(),{flush:"post"}),()=>{const o=r.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!r.value.prev)],onClick:a},[v(L,null,{default:()=>[v(Se,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!r.value.next)],onClick:h},[v(L,null,{default:()=>[v($e,null,null)]})])]:null,c=e.panes.map((s,x)=>{var N,_,E,T;const p=s.uid,H=s.props.disabled,W=(_=(N=s.props.name)!=null?N:s.index)!=null?_:`${x}`,X=!H&&(s.isClosable||e.editable);s.index=`${x}`;const pe=X?v(L,{class:"is-icon-close",onClick:A=>f("tabRemove",s,A)},{default:()=>[v(Ee,null,null)]}):null,he=((T=(E=s.slots).label)==null?void 0:T.call(E))||s.props.label,ye=!H&&s.active?0:-1;return v("div",{ref:`tab-${p}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",s.active),t.is("disabled",H),t.is("closable",X),t.is("focus",b.value)],id:`tab-${W}`,key:`tab-${p}`,"aria-controls":`pane-${W}`,role:"tab","aria-selected":s.active,tabindex:ye,onFocus:()=>ee(),onBlur:()=>q(),onClick:A=>{q(),f("tabClick",s,W,A)},onKeydown:A=>{X&&(A.code===V.delete||A.code===V.backspace)&&f("tabRemove",s,A)}},[he,pe])});return v("div",{ref:m,class:[t.e("nav-wrap"),t.is("scrollable",!!r.value),t.is(i.props.tabPosition)]},[o,v("div",{class:t.e("nav-scroll"),ref:u},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:y,style:R.value,role:"tablist",onKeydown:j},[e.type?null:v(We,{tabs:[...e.panes]},null),c])])])}}}),Ye=D({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:J(Function),default:()=>!0},stretch:Boolean}),G=e=>Oe(e)||Re(e),Qe={[be]:e=>G(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>G(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>G(e),tabAdd:()=>!0};var Ze=F({name:"ElTabs",props:Ye,emits:Qe,setup(e,{emit:n,slots:f,expose:C}){var i,t;const l=I("tabs"),{children:S,addChild:u,removeChild:y}=Ue(K(),"ElTabPane"),m=w(),r=w((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),d=a=>{r.value=a,n(be,a),n("tabChange",a)},b=async a=>{var h,g,z;if(!(r.value===a||te(a)))try{await((h=e.beforeLeave)==null?void 0:h.call(e,a,r.value))!==!1&&(d(a),(z=(g=m.value)==null?void 0:g.removeFocus)==null||z.call(g))}catch{}},$=(a,h,g)=>{a.props.disabled||(b(h),n("tabClick",a,g))},P=(a,h)=>{a.props.disabled||te(a.props.name)||(h.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},R=()=>{n("edit",void 0,"add"),n("tabAdd")};return xe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},M(()=>!!e.activeName)),O(()=>e.activeName,a=>b(a)),O(()=>e.modelValue,a=>b(a)),O(r,async()=>{var a;await Z(),(a=m.value)==null||a.scrollToActiveTab()}),ke(U,{props:e,currentName:r,registerPane:u,unregisterPane:y}),C({currentName:r}),()=>{const a=e.editable||e.addable?v("span",{class:l.e("new-tab"),tabindex:"0",onClick:R,onKeydown:z=>{z.code===V.enter&&R()}},[v(L,{class:l.is("icon-plus")},{default:()=>[v(Be,null,null)]})]):null,h=v("div",{class:[l.e("header"),l.is(e.tabPosition)]},[a,v(Je,{ref:m,currentName:r.value,editable:e.editable,type:e.type,panes:S.value,stretch:e.stretch,onTabClick:$,onTabRemove:P},null)]),g=v("div",{class:l.e("content")},[de(f,"default")]);return v("div",{class:[l.b(),l.m(e.tabPosition),{[l.m("card")]:e.type==="card",[l.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[h,g]:[g,h]])}}});const et=D({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),tt=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",at=F({name:fe}),st=F({...at,props:et,setup(e){const n=e,f=K(),C=ze(),i=Y(U);i||Q(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=I("tab-pane"),l=w(),S=M(()=>n.closable||i.props.closable),u=ae(()=>{var b;return i.currentName.value===((b=n.name)!=null?b:l.value)}),y=w(u.value),m=M(()=>{var b;return(b=n.name)!=null?b:l.value}),r=ae(()=>!n.lazy||y.value||u.value);O(u,b=>{b&&(y.value=!0)});const d=Ae({uid:f.uid,slots:C,props:n,paneName:m,active:u,index:l,isClosable:S});return ue(()=>{i.registerPane(d)}),Fe(()=>{i.unregisterPane(d.uid)}),(b,$)=>k(r)?Me((oe(),re("div",{key:0,id:`pane-${k(m)}`,class:ie(k(t).b()),role:"tabpanel","aria-hidden":!k(u),"aria-labelledby":`tab-${k(m)}`},[de(b.$slots,"default")],10,tt)),[[Le,k(u)]]):Ve("v-if",!0)}});var me=ce(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const lt=De(Ze,{TabPane:me}),ot=Ie(me);export{ot as E,lt as a};
