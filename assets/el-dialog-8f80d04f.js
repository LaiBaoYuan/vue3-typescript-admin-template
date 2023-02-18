import{C as W,ay as le,f as O,az as se,ah as G,b7 as ae,M as B,b8 as te,o as E,c as j,a as R,H as D,G as v,l as e,z as ne,b as M,k,m as q,U as re,V as ie,I as K,J as Y,K as Q,b9 as ue,ba as de,D as ce,bb as X,aW as fe,bc as me,b1 as J,r as I,bd as pe,be as ye,b3 as be,bf as ve,w as Z,s as ge,j as Ce,aa as he,bg as _,bh as ke,b0 as De,bi as H,F as Ie,ak as Ee,bj as Be,a3 as Fe,bk as we,bl as Ae,bm as Se,bn as Te,a4 as $e,bo as Pe,bp as Re,L as Me}from"./index-4e953027.js";const x=Symbol("dialogInjectionKey"),ee=W({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:le},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Oe={close:()=>!0},Le=["aria-label"],Ne=["id"],ze=O({name:"ElDialogContent"}),Ve=O({...ze,props:ee,emits:Oe,setup(o){const u=o,{t:g}=se(),{Close:r}=ue,{dialogRef:d,headerRef:m,bodyId:F,ns:a,style:t}=G(x),{focusTrapRef:p}=G(ae),c=de(p,d),y=B(()=>u.draggable);return te(d,m,y),(s,i)=>(E(),j("div",{ref:e(c),class:v([e(a).b(),e(a).is("fullscreen",s.fullscreen),e(a).is("draggable",e(y)),e(a).is("align-center",s.alignCenter),{[e(a).m("center")]:s.center},s.customClass]),style:Y(e(t)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:m,class:v(e(a).e("header"))},[D(s.$slots,"header",{},()=>[R("span",{role:"heading",class:v(e(a).e("title"))},ne(s.title),3)]),s.showClose?(E(),j("button",{key:0,"aria-label":e(g)("el.dialog.close"),class:v(e(a).e("headerbtn")),type:"button",onClick:i[0]||(i[0]=T=>s.$emit("close"))},[M(e(ie),{class:v(e(a).e("close"))},{default:k(()=>[(E(),q(re(s.closeIcon||e(r))))]),_:1},8,["class"])],10,Le)):K("v-if",!0)],2),R("div",{id:e(F),class:v(e(a).e("body"))},[D(s.$slots,"default")],10,Ne),s.$slots.footer?(E(),j("footer",{key:0,class:v(e(a).e("footer"))},[D(s.$slots,"footer")],2)):K("v-if",!0)],6))}});var Ue=Q(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const je=W({...ee,appendToBody:{type:Boolean,default:!1},beforeClose:{type:ce(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ke=(o,u)=>{const r=he().emit,{nextZIndex:d}=me();let m="";const F=J(),a=J(),t=I(!1),p=I(!1),c=I(!1),y=I(o.zIndex||d());let s,i;const T=pe("namespace",ye),L=B(()=>{const n={},h=`--${T.value}-dialog`;return o.fullscreen||(o.top&&(n[`${h}-margin-top`]=o.top),o.width&&(n[`${h}-width`]=be(o.width))),n}),N=B(()=>o.alignCenter?{display:"flex"}:{});function z(){r("opened")}function $(){r("closed"),r(X,!1),o.destroyOnClose&&(c.value=!1)}function V(){r("close")}function P(){i==null||i(),s==null||s(),o.openDelay&&o.openDelay>0?{stop:s}=_(()=>f(),o.openDelay):f()}function w(){s==null||s(),i==null||i(),o.closeDelay&&o.closeDelay>0?{stop:i}=_(()=>S(),o.closeDelay):S()}function A(){function n(h){h||(p.value=!0,t.value=!1)}o.beforeClose?o.beforeClose(n):w()}function U(){o.closeOnClickModal&&A()}function f(){ke&&(t.value=!0)}function S(){t.value=!1}function l(){r("openAutoFocus")}function b(){r("closeAutoFocus")}function C(n){var h;((h=n.detail)==null?void 0:h.focusReason)==="pointer"&&n.preventDefault()}o.lockScroll&&ve(t);function oe(){o.closeOnPressEscape&&A()}return Z(()=>o.modelValue,n=>{n?(p.value=!1,P(),c.value=!0,y.value=o.zIndex?y.value++:d(),ge(()=>{r("open"),u.value&&(u.value.scrollTop=0)})):t.value&&w()}),Z(()=>o.fullscreen,n=>{u.value&&(n?(m=u.value.style.transform,u.value.style.transform=""):u.value.style.transform=m)}),Ce(()=>{o.modelValue&&(t.value=!0,c.value=!0,P())}),{afterEnter:z,afterLeave:$,beforeLeave:V,handleClose:A,onModalClick:U,close:w,doClose:S,onOpenAutoFocus:l,onCloseAutoFocus:b,onCloseRequested:oe,onFocusoutPrevented:C,titleId:F,bodyId:a,closed:p,style:L,overlayDialogStyle:N,rendered:c,visible:t,zIndex:y}},Ge=["aria-label","aria-labelledby","aria-describedby"],Je=O({name:"ElDialog",inheritAttrs:!1}),Ze=O({...Je,props:je,emits:qe,setup(o,{expose:u}){const g=o,r=De();H({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},B(()=>!!r.title)),H({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},B(()=>!!g.customClass));const d=Ie("dialog"),m=I(),F=I(),a=I(),{visible:t,titleId:p,bodyId:c,style:y,overlayDialogStyle:s,rendered:i,zIndex:T,afterEnter:L,afterLeave:N,beforeLeave:z,handleClose:$,onModalClick:V,onOpenAutoFocus:P,onCloseAutoFocus:w,onCloseRequested:A,onFocusoutPrevented:U}=Ke(g,m);Ee(x,{dialogRef:m,headerRef:F,bodyId:c,ns:d,rendered:i,style:y});const f=Be(V),S=B(()=>g.draggable&&!g.fullscreen);return u({visible:t,dialogContentRef:a}),(l,b)=>(E(),q(Re,{to:"body",disabled:!l.appendToBody},[M(Pe,{name:"dialog-fade",onAfterEnter:e(L),onAfterLeave:e(N),onBeforeLeave:e(z),persisted:""},{default:k(()=>[Fe(M(e(we),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(T)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(p),"aria-describedby":e(c),class:v(`${e(d).namespace.value}-overlay-dialog`),style:Y(e(s)),onClick:b[0]||(b[0]=(...C)=>e(f).onClick&&e(f).onClick(...C)),onMousedown:b[1]||(b[1]=(...C)=>e(f).onMousedown&&e(f).onMousedown(...C)),onMouseup:b[2]||(b[2]=(...C)=>e(f).onMouseup&&e(f).onMouseup(...C))},[M(e(Ae),{loop:"",trapped:e(t),"focus-start-el":"container",onFocusAfterTrapped:e(P),onFocusAfterReleased:e(w),onFocusoutPrevented:e(U),onReleaseRequested:e(A)},{default:k(()=>[e(i)?(E(),q(Ue,Se({key:0,ref_key:"dialogContentRef",ref:a},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(S),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:e($)}),Te({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e($),titleId:e(p),titleClass:e(d).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ge)]),_:3},8,["mask","overlay-class","z-index"]),[[$e,e(t)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var _e=Q(Ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const We=Me(_e);export{We as E};
