import{S as b,i as y,s as w,e as g,G as T,c as m,d as h,b as i,I as u,M as d,k as A,a as E,m as B,V as f,g as M,T as q}from"./vendor-906eeb2b.js";function I(s){let t,n,e,a,l,o;return document.title=t=s[0],{c(){n=g("meta"),e=g("meta"),a=g("meta"),l=g("meta"),o=g("meta"),this.h()},l(r){const c=T('[data-svelte="svelte-xwbfui"]',document.head);n=m(c,"META",{name:!0,content:!0}),e=m(c,"META",{property:!0,content:!0}),a=m(c,"META",{property:!0,content:!0}),l=m(c,"META",{property:!0,content:!0}),o=m(c,"META",{name:!0,content:!0}),c.forEach(h),this.h()},h(){i(n,"name","description"),i(n,"content",p),i(e,"property","og:title"),i(e,"content",s[0]),i(a,"property","og:description"),i(a,"content",p),i(l,"property","og:image"),i(l,"content","https://bkkelection2022.wevis.info/static/images/main_og.png"),i(o,"name","twitter:card"),i(o,"content","summary_large_image")},m(r,c){u(document.head,n),u(document.head,e),u(document.head,a),u(document.head,l),u(document.head,o)},p(r,[c]){c&1&&t!==(t=r[0])&&(document.title=t),c&1&&i(e,"content",r[0])},i:d,o:d,d(r){h(n),h(e),h(a),h(l),h(o)}}}const p="\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u0E01\u0E17\u0E21. 2022 \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48";function S(s,t,n){let e,{title:a=""}=t;return s.$$set=l=>{"title"in l&&n(1,a=l.title)},s.$$.update=()=>{s.$$.dirty&2&&n(0,e=`${a?`${a} - `:""}Bangkok Election 2022`)},[e,a]}class P extends b{constructor(t){super();y(this,t,S,I,w,{title:1})}}var _=[{name:"WeVis",logo:"/static/images/logo-wevis.png",logoBlack:"/static/images/logo-wevis-black.png",href:"https://wevis.info"},{name:"The Standard",logo:"/static/images/logo-tsd.png",logoBlack:"/static/images/logo-tsd-black.png",href:"https://thestandard.co/"},{name:"Wisesight",logo:"/static/images/logo-wisesight.png",logoBlack:"/static/images/logo-wisesight-black.png",href:"https://wisesight.com/"}];function k(s,t,n){const e=s.slice();return e[1]=t[n].name,e[2]=t[n].logo,e[3]=t[n].logoBlack,e[4]=t[n].href,e}function v(s){let t,n,e,a,l,o;return{c(){t=g("a"),n=g("img"),l=A(),this.h()},l(r){t=m(r,"A",{href:!0,target:!0});var c=E(t);n=m(c,"IMG",{src:!0,alt:!0,class:!0}),l=B(c),c.forEach(h),this.h()},h(){f(n.src,e=s[0]?s[3]:s[2])||i(n,"src",e),i(n,"alt",a=s[1]),i(n,"class","h-6 md:h-8"),i(t,"href",o=s[4]),i(t,"target","_blank")},m(r,c){M(r,t,c),u(t,n),u(t,l)},p(r,c){c&1&&!f(n.src,e=r[0]?r[3]:r[2])&&i(n,"src",e)},d(r){r&&h(t)}}}function V(s){let t,n=_,e=[];for(let a=0;a<n.length;a+=1)e[a]=v(k(s,n,a));return{c(){t=g("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=m(a,"DIV",{class:!0});var l=E(t);for(let o=0;o<e.length;o+=1)e[o].l(l);l.forEach(h),this.h()},h(){i(t,"class","flex flex-row space-x-8 justify-center")},m(a,l){M(a,t,l);for(let o=0;o<e.length;o+=1)e[o].m(t,null)},p(a,[l]){if(l&1){n=_;let o;for(o=0;o<n.length;o+=1){const r=k(a,n,o);e[o]?e[o].p(r,l):(e[o]=v(r),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:d,o:d,d(a){a&&h(t),q(e,a)}}}function x(s,t,n){let{black:e=!1}=t;return s.$$set=a=>{"black"in a&&n(0,e=a.black)},[e]}class W extends b{constructor(t){super();y(this,t,x,V,w,{black:0})}}export{P as M,W as P};
