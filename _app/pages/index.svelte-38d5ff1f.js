import{_ as it}from"../chunks/preload-helper-e4860ae8.js";import{S as ve,i as pe,s as be,F as Ye,J as Qe,K as Xe,L as Ze,r as M,p as O,Q as at,w as $e,v as ot,E as ct,e as m,c as v,a as h,d as u,b as a,g as R,R as et,T as ft,x as te,y as le,z as re,U as ut,C as se,t as Q,k as V,N as G,h as X,m as A,O as W,I as c,j as _e,o as Pe,q as Be,l as ae,n as ge,P as xe,V as Re,W as ht,H as me,D as tt,X as Ce,A as lt,M as Te,B as dt,f as Ue}from"../chunks/index-942db8c5.js";import{M as _t,P as gt}from"../chunks/partners-logo-8cbba6e2.js";var Ne=globalThis&&globalThis.__awaiter||function(i,e,s,l){function t(r){return r instanceof s?r:new s(function(n){n(r)})}return new(s||(s=Promise))(function(r,n){function o(_){try{p(l.next(_))}catch(x){n(x)}}function f(_){try{p(l.throw(_))}catch(x){n(x)}}function p(_){_.done?r(_.value):t(_.value).then(o,f)}p((l=l.apply(i,e||[])).next())})};function mt(i){return i?`?${Object.entries(i).map(([e,s])=>`${e}=${s}`).join("&")}`:""}const rt=({apiRoot:i,electionTagId:e,mediaTargetSize:s})=>({limit:l=6,tag:t=""}={})=>Ne(void 0,void 0,void 0,function*(){const r=(f,p)=>Ne(void 0,void 0,void 0,function*(){return yield(yield fetch(i+f+mt(p))).json()}),n=t?(yield r("/tags",{search:t,_fields:"id",per_page:1}))[0].id:e;return(yield r("/posts",{tags:n,_embed:"wp:featuredmedia",_fields:"id,title,link,date,tags,_links.wp:featuredmedia,_embedded.wp:featuredmedia",per_page:l})).filter(({tags:f})=>!t||(f==null?void 0:f.includes(e))).map(({id:f,title:p,link:_,date:x,_embedded:E})=>{const[w]=E==null?void 0:E["wp:featuredmedia"];return{id:f,title:p.rendered,link:_,date:new Date(x).toLocaleDateString("th-TH",{dateStyle:"long"}),image:w.media_details.sizes[s].source_url}})}),vt={apiRoot:"https://thestandard.co/wp-json/wp/v2",electionTagId:47793,mediaTargetSize:"newsthumb-small"},pt={apiRoot:"https://wevis.info/wp-json/wp/v2",electionTagId:17,mediaTargetSize:"small-thumb"},st=rt(vt),bt=rt(pt),wt=i=>({intersecting:i&1,entry:i&2,observer:i&4}),Ke=i=>({intersecting:i[0],entry:i[1],observer:i[2]});function kt(i){let e;const s=i[9].default,l=Ye(s,i,i[8],Ke);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,r){l&&l.m(t,r),e=!0},p(t,[r]){l&&l.p&&(!e||r&263)&&Qe(l,s,t,t[8],e?Ze(s,t[8],r,wt):Xe(t[8]),Ke)},i(t){e||(M(l,t),e=!0)},o(t){O(l,t),e=!1},d(t){l&&l.d(t)}}}function Et(i,e,s){let{$$slots:l={},$$scope:t}=e,{element:r=null}=e,{once:n=!1}=e,{intersecting:o=!1}=e,{root:f=null}=e,{rootMargin:p="0px"}=e,{threshold:_=0}=e,{entry:x=null}=e,{observer:E=null}=e;const w=at();let T=null,L=null;const j=()=>{s(2,E=new IntersectionObserver(b=>{b.forEach(H=>{s(1,x=H),s(0,o=H.isIntersecting)})},{root:f,rootMargin:p,threshold:_}))};return $e(()=>(j(),()=>{E&&(E.disconnect(),s(2,E=null))})),ot(async()=>{x!==null&&(w("observe",x),x.isIntersecting&&(w("intersect",x),n&&E.unobserve(r))),await ct(),r!==null&&r!==L&&(E.observe(r),L!==null&&E.unobserve(L),L=r),T&&p!==T&&(E.disconnect(),L=null,j()),T=p}),i.$$set=b=>{"element"in b&&s(3,r=b.element),"once"in b&&s(4,n=b.once),"intersecting"in b&&s(0,o=b.intersecting),"root"in b&&s(5,f=b.root),"rootMargin"in b&&s(6,p=b.rootMargin),"threshold"in b&&s(7,_=b.threshold),"entry"in b&&s(1,x=b.entry),"observer"in b&&s(2,E=b.observer),"$$scope"in b&&s(8,t=b.$$scope)},[o,x,E,r,n,f,p,_,t,l]}class xt extends ve{constructor(e){super(),pe(this,e,Et,kt,be,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function yt(i){let e,s;const l=i[1].default,t=Ye(l,i,i[0],null);return{c(){e=m("div"),t&&t.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var n=h(e);t&&t.l(n),n.forEach(u),this.h()},h(){a(e,"class","flex-shrink-0 w-64 md:w-auto")},m(r,n){R(r,e,n),t&&t.m(e,null),s=!0},p(r,[n]){t&&t.p&&(!s||n&1)&&Qe(t,l,r,r[0],s?Ze(l,r[0],n,null):Xe(r[0]),null)},i(r){s||(M(t,r),s=!0)},o(r){O(t,r),s=!1},d(r){r&&u(e),t&&t.d(r)}}}function Dt(i,e,s){let{$$slots:l={},$$scope:t}=e;return i.$$set=r=>{"$$scope"in r&&s(0,t=r.$$scope)},[t,l]}class Me extends ve{constructor(e){super(),pe(this,e,Dt,yt,be,{})}}function It(i,e,s){const l=i.slice();return l[10]=e[s],l}function ze(i,e,s){const l=i.slice();return l[14]=e[s],l}function Vt(i,e,s){const l=i.slice();return l[10]=e[s],l}function At(i){let e,s,l=i[7],t=[];for(let r=0;r<l.length;r+=1)t[r]=Bt(It(i,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=ae()},l(r){for(let n=0;n<t.length;n+=1)t[n].l(r);e=ae()},m(r,n){for(let o=0;o<t.length;o+=1)t[o].m(r,n);R(r,e,n),s=!0},p:ge,i(r){if(!s){for(let n=0;n<l.length;n+=1)M(t[n]);s=!0}},o(r){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)O(t[n]);s=!1},d(r){xe(t,r),r&&u(e)}}}function Tt(i){let e,s,l,t={ctx:i,current:null,token:null,hasCatch:!0,pending:jt,then:Lt,catch:Mt,value:13,error:17,blocks:[,,,]};return Re(s=i[4](),t),{c(){e=ae(),t.block.c()},l(r){e=ae(),t.block.l(r)},m(r,n){R(r,e,n),t.block.m(r,t.anchor=n),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(r,n){i=r,t.ctx=i,n&16&&s!==(s=i[4]())&&Re(s,t)||ht(t,i,n)},i(r){l||(M(t.block),l=!0)},o(r){for(let n=0;n<3;n+=1){const o=t.blocks[n];O(o)}l=!1},d(r){r&&u(e),t.block.d(r),t.token=null,t=null}}}function Pt(i){let e,s;return{c(){e=m("ui-post-card"),s=V(),this.h()},l(l){e=v(l,"UI-POST-CARD",{loading:!0}),h(e).forEach(u),s=A(l),this.h()},h(){me(e,"loading","true")},m(l,t){R(l,e,t),R(l,s,t)},d(l){l&&u(e),l&&u(s)}}}function Bt(i){let e,s;return e=new Me({props:{$$slots:{default:[Pt]},$$scope:{ctx:i}}}),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,t){re(e,l,t),s=!0},p(l,t){const r={};t&1048576&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(M(e.$$.fragment,l),s=!0)},o(l){O(e.$$.fragment,l),s=!1},d(l){se(e,l)}}}function Mt(i){let e,s,l=i[17].message+"",t;return{c(){e=m("p"),s=Q("\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "),t=Q(l)},l(r){e=v(r,"P",{});var n=h(e);s=X(n,"\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "),t=X(n,l),n.forEach(u)},m(r,n){R(r,e,n),c(e,s),c(e,t)},p(r,n){n&16&&l!==(l=r[17].message+"")&&_e(t,l)},i:ge,o:ge,d(r){r&&u(e)}}}function Lt(i){let e,s,l=i[13],t=[];for(let n=0;n<l.length;n+=1)t[n]=Ge(ze(i,l,n));const r=n=>O(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ae()},l(n){for(let o=0;o<t.length;o+=1)t[o].l(n);e=ae()},m(n,o){for(let f=0;f<t.length;f+=1)t[f].m(n,o);R(n,e,o),s=!0},p(n,o){if(o&16){l=n[13];let f;for(f=0;f<l.length;f+=1){const p=ze(n,l,f);t[f]?(t[f].p(p,o),M(t[f],1)):(t[f]=Ge(p),t[f].c(),M(t[f],1),t[f].m(e.parentNode,e))}for(Pe(),f=l.length;f<t.length;f+=1)r(f);Be()}},i(n){if(!s){for(let o=0;o<l.length;o+=1)M(t[o]);s=!0}},o(n){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)O(t[o]);s=!1},d(n){xe(t,n),n&&u(e)}}}function St(i){let e,s,l=[i[14]],t={};for(let r=0;r<l.length;r+=1)t=tt(t,l[r]);return{c(){e=m("ui-post-card"),s=V(),this.h()},l(r){e=v(r,"UI-POST-CARD",{}),h(e).forEach(u),s=A(r),this.h()},h(){Ce(e,t)},m(r,n){R(r,e,n),R(r,s,n)},p(r,n){Ce(e,t=lt(l,[n&16&&r[14]]))},d(r){r&&u(e),r&&u(s)}}}function Ge(i){let e,s;return e=new Me({props:{$$slots:{default:[St]},$$scope:{ctx:i}}}),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,t){re(e,l,t),s=!0},p(l,t){const r={};t&1048592&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(M(e.$$.fragment,l),s=!0)},o(l){O(e.$$.fragment,l),s=!1},d(l){se(e,l)}}}function jt(i){let e,s,l=i[7],t=[];for(let r=0;r<l.length;r+=1)t[r]=Ot(Vt(i,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=ae()},l(r){for(let n=0;n<t.length;n+=1)t[n].l(r);e=ae()},m(r,n){for(let o=0;o<t.length;o+=1)t[o].m(r,n);R(r,e,n),s=!0},p:ge,i(r){if(!s){for(let n=0;n<l.length;n+=1)M(t[n]);s=!0}},o(r){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)O(t[n]);s=!1},d(r){xe(t,r),r&&u(e)}}}function Ht(i){let e,s;return{c(){e=m("ui-post-card"),s=V(),this.h()},l(l){e=v(l,"UI-POST-CARD",{loading:!0}),h(e).forEach(u),s=A(l),this.h()},h(){me(e,"loading","true")},m(l,t){R(l,e,t),R(l,s,t)},d(l){l&&u(e),l&&u(s)}}}function Ot(i){let e,s;return e=new Me({props:{$$slots:{default:[Ht]},$$scope:{ctx:i}}}),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,t){re(e,l,t),s=!0},p(l,t){const r={};t&1048576&&(r.$$scope={dirty:t,ctx:l}),e.$set(r)},i(l){s||(M(e.$$.fragment,l),s=!0)},o(l){O(e.$$.fragment,l),s=!1},d(l){se(e,l)}}}function Rt(i){let e,s,l,t,r,n,o,f,p,_,x,E,w,T,L,j,b,H,N,C,K,y;const U=[Tt,At],k=[];function I(g,D){return g[6]?0:1}return C=I(i),K=k[C]=U[C](i),{c(){e=m("div"),s=m("div"),l=m("div"),t=m("h2"),r=Q(i[0]),n=V(),o=m("p"),f=Q(i[1]),p=V(),_=m("a"),x=m("span"),E=Q(i[2]),w=V(),T=G("svg"),L=G("path"),j=G("path"),b=G("path"),H=V(),N=m("div"),K.c(),this.h()},l(g){e=v(g,"DIV",{class:!0});var D=h(e);s=v(D,"DIV",{class:!0});var q=h(s);l=v(q,"DIV",{class:!0});var z=h(l);t=v(z,"H2",{class:!0});var F=h(t);r=X(F,i[0]),F.forEach(u),n=A(z),o=v(z,"P",{class:!0});var Z=h(o);f=X(Z,i[1]),Z.forEach(u),p=A(z),_=v(z,"A",{href:!0,target:!0,class:!0});var $=h(_);x=v($,"SPAN",{});var J=h(x);E=X(J,i[2]),J.forEach(u),w=A($),T=W($,"svg",{width:!0,height:!0,viewBox:!0,fill:!0});var Y=h(T);L=W(Y,"path",{d:!0,stroke:!0,"stroke-width":!0}),h(L).forEach(u),j=W(Y,"path",{d:!0,stroke:!0,"stroke-width":!0}),h(j).forEach(u),b=W(Y,"path",{d:!0,stroke:!0,"stroke-width":!0}),h(b).forEach(u),Y.forEach(u),$.forEach(u),z.forEach(u),q.forEach(u),H=A(D),N=v(D,"DIV",{class:!0});var oe=h(N);K.l(oe),oe.forEach(u),D.forEach(u),this.h()},h(){a(t,"class","typo-h2 mb-1 px-8"),a(o,"class","typo-u3 mb-1 px-8"),a(L,"d","M6 10L14 2"),a(L,"stroke","black"),a(L,"stroke-width","2"),a(j,"d","M7 1H15V9"),a(j,"stroke","black"),a(j,"stroke-width","2"),a(b,"d","M11 9.85714V15H1V5H6.14286"),a(b,"stroke","black"),a(b,"stroke-width","2"),a(T,"width","16"),a(T,"height","16"),a(T,"viewBox","0 0 16 16"),a(T,"fill","none"),a(_,"href",i[3]),a(_,"target","_blank"),a(_,"class","inline-flex flex-row space-x-2 items-center typo-b5 underline hover:opacity-60"),a(l,"class","flex-1 justify-center text-center"),a(s,"class","flex flex-col md:flex-row space-y-4 md:space-y-0"),a(N,"class","flex md:grid md:grid-cols-3 gap-6 md:gap-12 overflow-y-hidden overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0"),a(e,"class","pt-12 pb-14 space-y-12 md:py-28 md:space-y-16 md:pb-32")},m(g,D){R(g,e,D),c(e,s),c(s,l),c(l,t),c(t,r),c(l,n),c(l,o),c(o,f),c(l,p),c(l,_),c(_,x),c(x,E),c(_,w),c(_,T),c(T,L),c(T,j),c(T,b),c(e,H),c(e,N),k[C].m(N,null),i[8](e),y=!0},p(g,D){(!y||D&1)&&_e(r,g[0]),(!y||D&2)&&_e(f,g[1]),(!y||D&4)&&_e(E,g[2]),(!y||D&8)&&a(_,"href",g[3]);let q=C;C=I(g),C===q?k[C].p(g,D):(Pe(),O(k[q],1,1,()=>{k[q]=null}),Be(),K=k[C],K?K.p(g,D):(K=k[C]=U[C](g),K.c()),M(K,1),K.m(N,null))},i(g){y||(M(K),y=!0)},o(g){O(K),y=!1},d(g){g&&u(e),k[C].d(),i[8](null)}}}function Ct(i){let e,s,l;function t(n){i[9](n)}let r={once:!0,element:i[5],$$slots:{default:[Rt]},$$scope:{ctx:i}};return i[6]!==void 0&&(r.intersecting=i[6]),e=new xt({props:r}),et.push(()=>ft(e,"intersecting",t)),{c(){te(e.$$.fragment)},l(n){le(e.$$.fragment,n)},m(n,o){re(e,n,o),l=!0},p(n,[o]){const f={};o&32&&(f.element=n[5]),o&1048703&&(f.$$scope={dirty:o,ctx:n}),!s&&o&64&&(s=!0,f.intersecting=n[6],ut(()=>s=!1)),e.$set(f)},i(n){l||(M(e.$$.fragment,n),l=!0)},o(n){O(e.$$.fragment,n),l=!1},d(n){se(e,n)}}}const Ut=6;function Nt(i,e,s){const l=new Array(Ut).fill(null);let{title:t}=e,{subtitle:r}=e,{viewAllText:n}=e,{viewAllLink:o}=e,{fetchPosts:f}=e,p,_;function x(w){et[w?"unshift":"push"](()=>{p=w,s(5,p)})}function E(w){_=w,s(6,_)}return i.$$set=w=>{"title"in w&&s(0,t=w.title),"subtitle"in w&&s(1,r=w.subtitle),"viewAllText"in w&&s(2,n=w.viewAllText),"viewAllLink"in w&&s(3,o=w.viewAllLink),"fetchPosts"in w&&s(4,f=w.fetchPosts)},[t,r,n,o,f,p,_,l,x,E]}class Ae extends ve{constructor(e){super(),pe(this,e,Nt,Ct,be,{title:0,subtitle:1,viewAllText:2,viewAllLink:3,fetchPosts:4})}}function Kt(i){let e,s,l;return{c(){e=G("svg"),s=G("path"),l=G("path"),this.h()},l(t){e=W(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var r=h(e);s=W(r,"path",{d:!0}),h(s).forEach(u),l=W(r,"path",{d:!0}),h(l).forEach(u),r.forEach(u),this.h()},h(){a(s,"d","M8 1.5L15.5789 9.5L8 17.5"),a(l,"d","M0 9.5L16 9.5"),a(e,"width","17"),a(e,"height","19"),a(e,"viewBox","0 0 17 19"),a(e,"fill","none"),a(e,"stroke","white"),a(e,"stroke-width","2")},m(t,r){R(t,e,r),c(e,s),c(e,l)},d(t){t&&u(e)}}}function zt(i){let e,s,l,t;return{c(){e=G("svg"),s=G("path"),l=G("path"),t=G("path"),this.h()},l(r){e=W(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var n=h(e);s=W(n,"path",{d:!0}),h(s).forEach(u),l=W(n,"path",{d:!0}),h(l).forEach(u),t=W(n,"path",{d:!0}),h(t).forEach(u),n.forEach(u),this.h()},h(){a(s,"d","M6.00037 10.5L14.0004 2.5"),a(l,"d","M7.00037 1.5H15.0004V9.5"),a(t,"d","M11.0004 10.3571V15.5H1.00037V5.5H6.14322"),a(e,"width","16"),a(e,"height","17"),a(e,"viewBox","0 0 16 17"),a(e,"fill","none"),a(e,"stroke","white"),a(e,"stroke-width","2")},m(r,n){R(r,e,n),c(e,s),c(e,l),c(e,t)},d(r){r&&u(e)}}}function We(i){let e,s;return{c(){e=m("div"),s=Q("Coming soon"),this.h()},l(l){e=v(l,"DIV",{class:!0});var t=h(e);s=X(t,"Coming soon"),t.forEach(u),this.h()},h(){a(e,"class","absolute inset-0 flex justify-center items-center typo-b2 bg-black bg-opacity-60")},m(l,t){R(l,e,t),c(e,s)},d(l){l&&u(e)}}}function Gt(i){let e,s,l,t,r,n,o,f,p,_,x,E,w=" ",T,L,j,b,H,N,C;function K(I,g){return I[3]?zt:Kt}let y=K(i),U=y(i),k=!i[2]&&We();return{c(){e=m("div"),s=m("a"),l=m("div"),t=m("img"),n=V(),o=m("div"),f=m("h2"),p=m("p"),_=Q(i[1]),x=V(),E=m("span"),T=Q(w),L=V(),j=m("p"),b=Q(i[0]),H=V(),U.c(),C=V(),k&&k.c(),this.h()},l(I){e=v(I,"DIV",{class:!0});var g=h(e);s=v(g,"A",{href:!0,target:!0,class:!0});var D=h(s);l=v(D,"DIV",{class:!0});var q=h(l);t=v(q,"IMG",{src:!0,alt:!0,class:!0}),q.forEach(u),n=A(D),o=v(D,"DIV",{class:!0});var z=h(o);f=v(z,"H2",{class:!0});var F=h(f);p=v(F,"P",{class:!0});var Z=h(p);_=X(Z,i[1]),Z.forEach(u),x=A(F),E=v(F,"SPAN",{});var $=h(E);T=X($,w),$.forEach(u),L=A(F),j=v(F,"P",{class:!0});var J=h(j);b=X(J,i[0]),J.forEach(u),F.forEach(u),H=A(z),U.l(z),z.forEach(u),D.forEach(u),C=A(g),k&&k.l(g),g.forEach(u),this.h()},h(){Te(t.src,r=i[4])||a(t,"src",r),a(t,"alt",i[1]),a(t,"class","object-cover w-full h-full"),a(l,"class","absolute inset-0"),a(p,"class","typo-u3"),a(j,"class","typo-h6"),a(f,"class","flex-1"),a(o,"class","content absolute inset-0 flex flex-row px-8 py-6 bg-black bg-opacity-20"),a(s,"href",i[2]),a(s,"target",N=i[3]?"_blank":""),a(s,"class","absolute inset-0 border border-black hover:border-white"),a(e,"class","relative bg-gray h-44 md:h-52")},m(I,g){R(I,e,g),c(e,s),c(s,l),c(l,t),c(s,n),c(s,o),c(o,f),c(f,p),c(p,_),c(f,x),c(f,E),c(E,T),c(f,L),c(f,j),c(j,b),c(o,H),U.m(o,null),c(e,C),k&&k.m(e,null)},p(I,[g]){g&16&&!Te(t.src,r=I[4])&&a(t,"src",r),g&2&&a(t,"alt",I[1]),g&2&&_e(_,I[1]),g&1&&_e(b,I[0]),y!==(y=K(I))&&(U.d(1),U=y(I),U&&(U.c(),U.m(o,null))),g&4&&a(s,"href",I[2]),g&8&&N!==(N=I[3]?"_blank":"")&&a(s,"target",N),I[2]?k&&(k.d(1),k=null):k||(k=We(),k.c(),k.m(e,null))},i:ge,o:ge,d(I){I&&u(e),U.d(),k&&k.d()}}}function Wt(i,e,s){let{th:l}=e,{en:t}=e,{href:r=null}=e,{external:n=!1}=e,{image:o}=e;return i.$$set=f=>{"th"in f&&s(0,l=f.th),"en"in f&&s(1,t=f.en),"href"in f&&s(2,r=f.href),"external"in f&&s(3,n=f.external),"image"in f&&s(4,o=f.image)},[l,t,r,n,o]}class qt extends ve{constructor(e){super(),pe(this,e,Wt,Gt,be,{th:0,en:1,href:2,external:3,image:4})}}function qe(i,e,s){const l=i.slice();return l[2]=e[s],l}function Fe(i){let e,s;const l=[i[2]];let t={};for(let r=0;r<l.length;r+=1)t=tt(t,l[r]);return e=new qt({props:t}),{c(){te(e.$$.fragment)},l(r){le(e.$$.fragment,r)},m(r,n){re(e,r,n),s=!0},p(r,n){const o=n&2?lt(l,[dt(r[2])]):{};e.$set(o)},i(r){s||(M(e.$$.fragment,r),s=!0)},o(r){O(e.$$.fragment,r),s=!1},d(r){se(e,r)}}}function Ft(i){let e,s,l,t,r,n,o,f,p,_,x,E,w,T,L,j,b,H,N,C,K,y,U,k,I,g,D,q,z,F,Z,$,J,Y,oe,ee,ce,ye,fe,De,ue,we;e=new _t({props:{title:"Bangkok Election 2022 : \u0E40\u0E01\u0E32\u0E30\u0E15\u0E34\u0E14 '\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21. 2565"}}),o=new gt({});let he=i[1],P=[];for(let d=0;d<he.length;d+=1)P[d]=Fe(qe(i,he,d));const nt=d=>O(P[d],1,1,()=>{P[d]=null});return ce=new Ae({props:{title:"\u0E02\u0E48\u0E32\u0E27\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",subtitle:"\u0E23\u0E27\u0E21\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. \u0E08\u0E32\u0E01 THE STANDARD",fetchPosts:st,viewAllText:"\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 thestandard.co",viewAllLink:"https://thestandard.co/bkkelection2022/"}}),fe=new Ae({props:{title:"\u0E0A\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.",subtitle:"\u0E23\u0E27\u0E21\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E25\u0E48\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E42\u0E14\u0E22 WeVis",fetchPosts:bt,viewAllText:"\u0E14\u0E39\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 wevis.info",viewAllLink:"https://wevis.info/tag/\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07-\u0E01\u0E17\u0E21/"}}),ue=new Ae({props:{title:"\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21.",subtitle:"\u0E40\u0E01\u0E23\u0E47\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21.'65 \u0E08\u0E32\u0E01 The STANDARD",fetchPosts:i[0],viewAllText:"\u0E14\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1A\u0E19 thestandard.co",viewAllLink:"https://thestandard.co/tag/bkk-election-101/"}}),{c(){te(e.$$.fragment),s=V(),l=m("div"),t=m("div"),r=m("div"),n=m("div"),te(o.$$.fragment),f=V(),p=m("h1"),_=m("img"),E=V(),w=m("p"),T=Q("\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F "),L=m("br"),j=Q(`\u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E20\u0E32 \u0E01\u0E17\u0E21.
					\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48`),b=V(),H=m("a"),N=m("div"),C=Q("\u0E14\u0E39\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E19\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19"),K=V(),y=G("svg"),U=G("path"),k=G("path"),I=V(),g=m("div"),D=m("lite-youtube"),q=V(),z=m("lite-youtube"),F=V(),Z=m("div"),$=V(),J=m("div"),Y=m("div");for(let d=0;d<P.length;d+=1)P[d].c();oe=V(),ee=m("div"),te(ce.$$.fragment),ye=V(),te(fe.$$.fragment),De=V(),te(ue.$$.fragment),this.h()},l(d){le(e.$$.fragment,d),s=A(d),l=v(d,"DIV",{class:!0});var B=h(l);t=v(B,"DIV",{class:!0,style:!0});var S=h(t);r=v(S,"DIV",{class:!0});var ne=h(r);n=v(ne,"DIV",{class:!0});var ie=h(n);le(o.$$.fragment,ie),f=A(ie),p=v(ie,"H1",{class:!0});var Le=h(p);_=v(Le,"IMG",{src:!0,alt:!0}),Le.forEach(u),E=A(ie),w=v(ie,"P",{class:!0});var ke=h(w);T=X(ke,"\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F "),L=v(ke,"BR",{class:!0}),j=X(ke,`\u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E20\u0E32 \u0E01\u0E17\u0E21.
					\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48`),ke.forEach(u),b=A(ie),H=v(ie,"A",{href:!0,class:!0,style:!0});var Ee=h(H);N=v(Ee,"DIV",{class:!0});var Se=h(N);C=X(Se,"\u0E14\u0E39\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E19\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19"),Se.forEach(u),K=A(Ee),y=W(Ee,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var Ie=h(y);U=W(Ie,"path",{d:!0,stroke:!0,"stroke-width":!0}),h(U).forEach(u),k=W(Ie,"path",{d:!0,stroke:!0,"stroke-width":!0}),h(k).forEach(u),Ie.forEach(u),Ee.forEach(u),ie.forEach(u),I=A(ne),g=v(ne,"DIV",{class:!0});var je=h(g);D=v(je,"LITE-YOUTUBE",{videoid:!0}),h(D).forEach(u),je.forEach(u),q=A(ne),z=v(ne,"LITE-YOUTUBE",{class:!0,videoid:!0}),h(z).forEach(u),ne.forEach(u),S.forEach(u),F=A(B),Z=v(B,"DIV",{class:!0}),h(Z).forEach(u),$=A(B),J=v(B,"DIV",{class:!0});var He=h(J);Y=v(He,"DIV",{class:!0});var Oe=h(Y);for(let Ve=0;Ve<P.length;Ve+=1)P[Ve].l(Oe);Oe.forEach(u),He.forEach(u),B.forEach(u),oe=A(d),ee=v(d,"DIV",{class:!0});var de=h(ee);le(ce.$$.fragment,de),ye=A(de),le(fe.$$.fragment,de),De=A(de),le(ue.$$.fragment,de),de.forEach(u),this.h()},h(){Te(_.src,x="/static/images/bkkelection-white-big.svg")||a(_,"src",x),a(_,"alt","\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21. 2565 - Bangkok Election 2022"),a(p,"class","mx-auto"),a(L,"class","md:hidden"),a(w,"class","typo-b4 text-center"),a(N,"class","pr-4"),a(U,"d","M8 1L15.5789 9L8 17"),a(U,"stroke","white"),a(U,"stroke-width","2"),a(k,"d","M0 9L16 9"),a(k,"stroke","white"),a(k,"stroke-width","2"),a(y,"width","17"),a(y,"height","18"),a(y,"viewBox","0 0 17 18"),a(y,"fill","none"),a(y,"xmlns","http://www.w3.org/2000/svg"),a(H,"href","/map"),a(H,"class","typo-h6 flex flex-row live-button mx-auto p-4 items-center space-x-1 shadow-sm hover:brightness-125"),Ue(H,"background","linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #b90202"),a(n,"class","flex-1 flex flex-col space-y-8"),me(D,"videoid",Je),a(g,"class","-md:hidden flex-1"),me(z,"class","md:hidden"),me(z,"videoid",Je),a(r,"class","flex flex-col md:flex-row justify-center items-center px-5 py-12 md:py-32 w-full max-w-screen-xl space-y-8 md:space-y-0 md:space-x-16"),a(t,"class","flex flex-col items-center bg-cover bg-center"),Ue(t,"background-image","url('/static/images/landing-bg.webp')"),a(Z,"class","-mt-12 h-12 to-black from-transparent bg-gradient-to-b "),a(Y,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-2xl p-5 gap-5"),a(J,"class","flex flex-col items-center"),a(l,"class","bg-black text-white"),a(ee,"class","flex flex-col max-w-screen-xl mx-auto divide-y divide-black px-5")},m(d,B){re(e,d,B),R(d,s,B),R(d,l,B),c(l,t),c(t,r),c(r,n),re(o,n,null),c(n,f),c(n,p),c(p,_),c(n,E),c(n,w),c(w,T),c(w,L),c(w,j),c(n,b),c(n,H),c(H,N),c(N,C),c(H,K),c(H,y),c(y,U),c(y,k),c(r,I),c(r,g),c(g,D),c(r,q),c(r,z),c(l,F),c(l,Z),c(l,$),c(l,J),c(J,Y);for(let S=0;S<P.length;S+=1)P[S].m(Y,null);R(d,oe,B),R(d,ee,B),re(ce,ee,null),c(ee,ye),re(fe,ee,null),c(ee,De),re(ue,ee,null),we=!0},p(d,[B]){if(B&2){he=d[1];let S;for(S=0;S<he.length;S+=1){const ne=qe(d,he,S);P[S]?(P[S].p(ne,B),M(P[S],1)):(P[S]=Fe(ne),P[S].c(),M(P[S],1),P[S].m(Y,null))}for(Pe(),S=he.length;S<P.length;S+=1)nt(S);Be()}},i(d){if(!we){M(e.$$.fragment,d),M(o.$$.fragment,d);for(let B=0;B<he.length;B+=1)M(P[B]);M(ce.$$.fragment,d),M(fe.$$.fragment,d),M(ue.$$.fragment,d),we=!0}},o(d){O(e.$$.fragment,d),O(o.$$.fragment,d),P=P.filter(Boolean);for(let B=0;B<P.length;B+=1)O(P[B]);O(ce.$$.fragment,d),O(fe.$$.fragment,d),O(ue.$$.fragment,d),we=!1},d(d){se(e,d),d&&u(s),d&&u(l),se(o),xe(P,d),d&&u(oe),d&&u(ee),se(ce),se(fe),se(ue)}}}const Jt="bkk-election-101",Je="AFDIEkVIJsw";function Yt(i){const e=()=>st({tag:Jt});return $e(()=>it(()=>import("../chunks/lite-youtube-a13e012a.js"),[])),[e,[{th:"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 \u0E1C\u0E39\u0E49\u0E2A\u0E21\u0E31\u0E04\u0E23 \u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21. \u0E41\u0E25\u0E30 \u0E2A.\u0E01.",en:"Meet the Candidates",href:"/candidate",image:"/static/images/cover/tn_candidate.webp"},{th:"\u0E14\u0E39\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E19\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21. \u0E41\u0E25\u0E30 \u0E2A.\u0E01.",en:"BKK Election Result",href:"/map",image:"/static/images/cover/tn_result.webp"},{th:"\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21. \u0E1A\u0E31\u0E15\u0E23 2 \u0E43\u0E1A \u0E01\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23",en:"How to vote?",href:"https://thestandard.co/bkk-election-2022-handbook/",external:!0,image:"/static/images/cover/tn_howtovote.webp"},{th:"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E1C\u0E39\u0E49\u0E27\u0E48\u0E32\u0E2F \u0E01\u0E17\u0E21. \u0E1A\u0E19\u0E42\u0E25\u0E01\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",en:"Social Listening",href:"/socialtrend",image:"/static/images/cover/tn_sociallistening.webp"},{th:"\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E2A\u0E30\u0E2A\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E19 \u0E01\u0E17\u0E21.",en:"BKK Followup",href:"https://bkkfollowup.wevis.info/",external:!0,image:"/static/images/cover/tn_openbkk.webp"},{th:"\u0E23\u0E48\u0E27\u0E21\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 \u0E01\u0E17\u0E21.",en:"Bangkok Budgeting",href:"https://bangkokbudgeting.wevis.info",external:!0,image:"/static/images/cover/tn_bangkokbudget.webp"},{th:"\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07",en:"Where to Vote",href:"https://stat.bora.dopa.go.th/Election/enqelectloc",external:!0,image:"/static/images/cover/tn_check.webp"},{th:"\u0E23\u0E48\u0E27\u0E21\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E19\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19",en:"Monitor Our Votes",href:"https://vote62.com",external:!0,image:"/static/images/cover/tn_vote62.webp"},{th:"(\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48) \u0E04\u0E19 \u0E01\u0E17\u0E21. \u0E02\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E49\u0E27\u0E22",en:"We Vote BKK",href:"https://wevotebkk.wevis.info",external:!0,image:"/static/images/cover/tn_wevote.webp"}]]}class $t extends ve{constructor(e){super(),pe(this,e,Yt,Ft,be,{})}}export{$t as default};
