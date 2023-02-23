import{l as R,aT as z,aB as G,p as N,ar as x,q as C,aU as H,s as I,K as Y,u as B,w as X,aV as Z,v as E,x as $,E as S,F as V,a8 as y,aK as M,aW as T,I as e,aj as F,H as g,G as k,a5 as b,a6 as P,ai as K,_ as w,W as U,a4 as J,Y as Q,aX as ee,aY as ae,P as oe,A as le,B as te,C as ne,y as se,z as ue,aa as de,ab as A,U as n,a1 as l,aZ as ie,a_ as re,a$ as pe,b0 as ce,V as me,ay as fe,b1 as _e,b2 as be,b3 as ve,b4 as ge}from"./index-4fe7658c.js";const D=Symbol("radioGroupKey"),O=R({size:z,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),ye=R({...O,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),L={[G]:d=>N(d)||x(d)||C(d),[H]:d=>N(d)||x(d)||C(d)},W=(d,f)=>{const s=I(),o=Y(D,void 0),i=B(()=>!!o),p=B({get(){return i.value?o.modelValue:d.modelValue},set(m){i.value?o.changeEvent(m):f&&f(G,m),s.value.checked=d.modelValue===d.label}}),c=X(B(()=>o==null?void 0:o.size)),_=Z(B(()=>o==null?void 0:o.disabled)),t=I(!1),u=B(()=>_.value||i.value&&p.value!==d.label?-1:0);return{radioRef:s,isGroup:i,radioGroup:o,focus:t,size:c,disabled:_,tabIndex:u,modelValue:p}},Ee=["value","name","disabled"],Be=E({name:"ElRadio"}),Ie=E({...Be,props:ye,emits:L,setup(d,{emit:f}){const s=d,o=$("radio"),{radioRef:i,radioGroup:p,focus:c,size:_,disabled:t,modelValue:u}=W(s,f);function m(){U(()=>f("change",u.value))}return(a,r)=>{var v;return S(),V("label",{class:g([e(o).b(),e(o).is("disabled",e(t)),e(o).is("focus",e(c)),e(o).is("bordered",a.border),e(o).is("checked",e(u)===a.label),e(o).m(e(_))])},[y("span",{class:g([e(o).e("input"),e(o).is("disabled",e(t)),e(o).is("checked",e(u)===a.label)])},[M(y("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":r[0]||(r[0]=h=>F(u)?u.value=h:null),class:g(e(o).e("original")),value:a.label,name:a.name||((v=e(p))==null?void 0:v.name),disabled:e(t),type:"radio",onFocus:r[1]||(r[1]=h=>c.value=!0),onBlur:r[2]||(r[2]=h=>c.value=!1),onChange:m},null,42,Ee),[[T,e(u)]]),y("span",{class:g(e(o).e("inner"))},null,2)],2),y("span",{class:g(e(o).e("label")),onKeydown:r[3]||(r[3]=K(()=>{},["stop"]))},[k(a.$slots,"default",{},()=>[b(P(a.label),1)])],34)],2)}}});var Re=w(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const Se=R({...O,name:{type:String,default:""}}),Ve=["value","name","disabled"],he=E({name:"ElRadioButton"}),Ge=E({...he,props:Se,setup(d){const f=d,s=$("radio"),{radioRef:o,focus:i,size:p,disabled:c,modelValue:_,radioGroup:t}=W(f),u=B(()=>({backgroundColor:(t==null?void 0:t.fill)||"",borderColor:(t==null?void 0:t.fill)||"",boxShadow:t!=null&&t.fill?`-1px 0 0 0 ${t.fill}`:"",color:(t==null?void 0:t.textColor)||""}));return(m,a)=>{var r;return S(),V("label",{class:g([e(s).b("button"),e(s).is("active",e(_)===m.label),e(s).is("disabled",e(c)),e(s).is("focus",e(i)),e(s).bm("button",e(p))])},[M(y("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=v=>F(_)?_.value=v:null),class:g(e(s).be("button","original-radio")),value:m.label,type:"radio",name:m.name||((r=e(t))==null?void 0:r.name),disabled:e(c),onFocus:a[1]||(a[1]=v=>i.value=!0),onBlur:a[2]||(a[2]=v=>i.value=!1)},null,42,Ve),[[T,e(_)]]),y("span",{class:g(e(s).be("button","inner")),style:J(e(_)===m.label?e(u):{}),onKeydown:a[3]||(a[3]=K(()=>{},["stop"]))},[k(m.$slots,"default",{},()=>[b(P(m.label),1)])],38)],2)}}});var j=w(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const $e=R({id:{type:String,default:void 0},size:z,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ke=L,we=["id","aria-label","aria-labelledby"],Ne=E({name:"ElRadioGroup"}),xe=E({...Ne,props:$e,emits:ke,setup(d,{emit:f}){const s=d,o=$("radio"),i=Q(),p=I(),{formItem:c}=ee(),{inputId:_,isLabeledByFormItem:t}=ae(s,{formItemContext:c}),u=a=>{f(G,a),U(()=>f("change",a))};oe(()=>{const a=p.value.querySelectorAll("[type=radio]"),r=a[0];!Array.from(a).some(v=>v.checked)&&r&&(r.tabIndex=0)});const m=B(()=>s.name||i.value);return le(D,te({...ne(s),changeEvent:u,name:m})),se(()=>s.modelValue,()=>{s.validateEvent&&(c==null||c.validate("change").catch(a=>ue()))}),(a,r)=>(S(),V("div",{id:e(_),ref_key:"radioGroupRef",ref:p,class:g(e(o).b("group")),role:"radiogroup","aria-label":e(t)?void 0:a.label||"radio-group","aria-labelledby":e(t)?e(c).labelId:void 0},[k(a.$slots,"default")],10,we))}});var q=w(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);de(Re,{RadioButton:j,RadioGroup:q});const Ce=A(q),ze=A(j);const Me=y("span",null,"Navigator One",-1),Te=y("span",null,"Group One",-1),Fe=y("span",null,"item four",-1),Pe=E({name:"dashboard"}),Ue=E({...Pe,setup(d){const f=I(!0),s=(i,p)=>{console.log(i,p)},o=(i,p)=>{console.log(i,p)};return(i,p)=>{const c=ze,_=Ce,t=fe,u=_e,m=be,a=ve,r=ge;return S(),V(me,null,[n(_,{modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=v=>f.value=v),style:{"margin-bottom":"20px"}},{default:l(()=>[n(c,{label:!1},{default:l(()=>[b("expand")]),_:1}),n(c,{label:!0},{default:l(()=>[b("collapse")]),_:1})]),_:1},8,["modelValue"]),n(r,{"default-active":"2",class:"el-menu-vertical-demo",collapse:f.value,onOpen:s,onClose:o},{default:l(()=>[n(a,{index:"1"},{title:l(()=>[n(t,null,{default:l(()=>[n(e(ie))]),_:1}),Me]),default:l(()=>[n(m,null,{title:l(()=>[Te]),default:l(()=>[n(u,{index:"1-1"},{default:l(()=>[b("item one")]),_:1}),n(u,{index:"1-2"},{default:l(()=>[b("item two")]),_:1})]),_:1}),n(m,{title:"Group Two"},{default:l(()=>[n(u,{index:"1-3"},{default:l(()=>[b("item three")]),_:1})]),_:1}),n(a,{index:"1-4"},{title:l(()=>[Fe]),default:l(()=>[n(u,{index:"1-4-1"},{default:l(()=>[b("item one")]),_:1})]),_:1})]),_:1}),n(u,{index:"2"},{title:l(()=>[b("Navigator Two")]),default:l(()=>[n(t,null,{default:l(()=>[n(e(re))]),_:1})]),_:1}),n(u,{index:"3",disabled:""},{title:l(()=>[b("Navigator Three")]),default:l(()=>[n(t,null,{default:l(()=>[n(e(pe))]),_:1})]),_:1}),n(u,{index:"4"},{title:l(()=>[b("Navigator Four")]),default:l(()=>[n(t,null,{default:l(()=>[n(e(ce))]),_:1})]),_:1})]),_:1},8,["collapse"])],64)}}});export{Ue as default};
