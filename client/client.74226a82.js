import{n as e,s as t,S as s,i as r,e as a,t as n,a as o,c as l,b as c,d as i,f,g as h,h as u,j as p,k as g,l as m,m as d,o as v,p as $,q as b,r as E,u as y,v as w,w as _,x as S,y as A,z as P,A as L,B as k,C as j,D as C,E as R,F as x,G as I,H as D}from"./index.1f26ef1a.js";import{M as z}from"./Meta.e2a6e7d1.js";const O=[];function U(s,r=e){let a;const n=[];function o(e){if(t(s,e)&&(s=e,a)){const e=!O.length;for(let e=0;e<n.length;e+=1){const t=n[e];t[1](),O.push(t,s)}if(e){for(let e=0;e<O.length;e+=2)O[e][0](O[e+1]);O.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,l=e){const c=[t,l];return n.push(c),1===n.length&&(a=r(o)||e),t(s),()=>{const e=n.indexOf(c);-1!==e&&n.splice(e,1),0===n.length&&(a(),a=null)}}}}const V={},W=()=>({});function H(t){let s,r,d,v,$,b,E,y,w,_,S,A,P,L,k,j,C,R,x,I,D,z,O,U,V,W,H,q;return{c(){s=a("header"),r=a("nav"),d=a("ul"),v=a("li"),$=a("a"),b=n("Features"),E=o(),y=a("li"),w=a("a"),_=n("Articles"),S=o(),A=a("li"),P=a("a"),L=n("Services"),k=o(),j=a("li"),C=a("a"),R=n("Trainings"),x=o(),I=a("div"),D=a("h1"),z=n("What Web Can Do Today?"),O=o(),U=a("p"),V=n("Can I rely on the Web Platform features to build my app?"),W=o(),H=a("p"),q=n("An overview of the device integration HTML5 APIs"),this.h()},l(e){s=l(e,"HEADER",{class:!0});var t=c(s);r=l(t,"NAV",{});var a=c(r);d=l(a,"UL",{class:!0});var n=c(d);v=l(n,"LI",{class:!0});var o=c(v);$=l(o,"A",{href:!0,class:!0});var u=c($);b=i(u,"Features"),u.forEach(f),o.forEach(f),E=h(n),y=l(n,"LI",{class:!0});var p=c(y);w=l(p,"A",{href:!0,class:!0});var g=c(w);_=i(g,"Articles"),g.forEach(f),p.forEach(f),S=h(n),A=l(n,"LI",{class:!0});var m=c(A);P=l(m,"A",{href:!0,target:!0,rel:!0,class:!0});var N=c(P);L=i(N,"Services"),N.forEach(f),m.forEach(f),k=h(n),j=l(n,"LI",{class:!0});var T=c(j);C=l(T,"A",{href:!0,target:!0,rel:!0,class:!0});var B=c(C);R=i(B,"Trainings"),B.forEach(f),T.forEach(f),n.forEach(f),a.forEach(f),x=h(t),I=l(t,"DIV",{class:!0});var M=c(I);D=l(M,"H1",{class:!0});var G=c(D);z=i(G,"What Web Can Do Today?"),G.forEach(f),O=h(M),U=l(M,"P",{class:!0});var F=c(U);V=i(F,"Can I rely on the Web Platform features to build my app?"),F.forEach(f),W=h(M),H=l(M,"P",{class:!0});var J=c(H);q=i(J,"An overview of the device integration HTML5 APIs"),J.forEach(f),M.forEach(f),t.forEach(f),this.h()},h(){u($,"href","."),u($,"class","svelte-1fz80hk"),p($,"selected",void 0===t.segment),u(v,"class","svelte-1fz80hk"),u(w,"href","/articles/"),u(w,"class","svelte-1fz80hk"),p(w,"selected","articles"===t.segment),u(y,"class","svelte-1fz80hk"),u(P,"href","https://adambar.pl/#services"),u(P,"target","_blank"),u(P,"rel","noopener"),u(P,"class","svelte-1fz80hk"),p(P,"selected","services"===t.segment),u(A,"class","svelte-1fz80hk"),u(C,"href","https://adambar.pl/#workshops"),u(C,"target","_blank"),u(C,"rel","noopener"),u(C,"class","svelte-1fz80hk"),p(C,"selected","trainings"===t.segment),u(j,"class","svelte-1fz80hk"),u(d,"class","svelte-1fz80hk"),u(D,"class","svelte-1fz80hk"),u(U,"class","svelte-1fz80hk"),u(H,"class","svelte-1fz80hk"),u(I,"class","title-container svelte-1fz80hk"),u(s,"class","text-center svelte-1fz80hk")},m(e,t){g(e,s,t),m(s,r),m(r,d),m(d,v),m(v,$),m($,b),m(d,E),m(d,y),m(y,w),m(w,_),m(d,S),m(d,A),m(A,P),m(P,L),m(d,k),m(d,j),m(j,C),m(C,R),m(s,x),m(s,I),m(I,D),m(D,z),m(I,O),m(I,U),m(U,V),m(I,W),m(I,H),m(H,q)},p(e,t){(e.segment||e.undefined)&&p($,"selected",void 0===t.segment),e.segment&&p(w,"selected","articles"===t.segment),e.segment&&p(P,"selected","services"===t.segment),e.segment&&p(C,"selected","trainings"===t.segment)},i:e,o:e,d(e){e&&f(s)}}}function q(e,t,s){let{segment:r}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment)},{segment:r}}class N extends s{constructor(e){super(),r(this,e,q,H,t,{segment:0})}}function T(t){let s,r,n,o,i,h;return{c(){s=a("div"),r=a("div"),n=a("div"),o=a("div"),i=a("div"),h=a("div"),this.h()},l(e){s=l(e,"DIV",{class:!0,"aria-hidden":!0});var t=c(s);r=l(t,"DIV",{class:!0});var a=c(r);n=l(a,"DIV",{class:!0}),c(n).forEach(f),o=l(a,"DIV",{class:!0}),c(o).forEach(f),i=l(a,"DIV",{class:!0}),c(i).forEach(f),h=l(a,"DIV",{class:!0}),c(h).forEach(f),a.forEach(f),t.forEach(f),this.h()},h(){u(n,"class","svelte-p0dnmz"),u(o,"class","svelte-p0dnmz"),u(i,"class","svelte-p0dnmz"),u(h,"class","svelte-p0dnmz"),u(r,"class","lds-ellipsis svelte-p0dnmz"),u(s,"class","loader svelte-p0dnmz"),u(s,"aria-hidden","true")},m(e,t){g(e,s,t),m(s,r),m(r,n),m(r,o),m(r,i),m(r,h)},p:e,i:e,o:e,d(e){e&&f(s)}}}class B extends s{constructor(e){super(),r(this,e,null,T,t,{})}}function M(t){let s,r,p,d,v,$,b,E,y,w,_,S,A,P,L,k,j,C,R,x,I,D,z,O,U,V,W,H,q,N,T,B,M,G,F;return{c(){s=a("div"),r=a("div"),p=a("h2"),d=n("Get in touch"),v=o(),$=a("ul"),b=a("li"),E=a("a"),y=n("Mail"),w=o(),_=a("li"),S=a("a"),A=n("Twitter"),P=o(),L=a("li"),k=a("a"),j=n("LinkedIn"),C=o(),R=a("li"),x=a("a"),I=n("GitHub"),D=o(),z=a("footer"),O=a("p"),U=a("a"),V=n("Privacy Policy"),W=o(),H=a("p"),q=n("Created by "),N=a("a"),T=n("Adam Bar"),B=a("br"),M=n("\n      Licenced under "),G=a("a"),F=n("CC-BY-SA 4.0"),this.h()},l(e){s=l(e,"DIV",{class:!0,"aria-label":!0});var t=c(s);r=l(t,"DIV",{class:!0});var a=c(r);p=l(a,"H2",{class:!0});var n=c(p);d=i(n,"Get in touch"),n.forEach(f),v=h(a),$=l(a,"UL",{class:!0});var o=c($);b=l(o,"LI",{class:!0});var u=c(b);E=l(u,"A",{href:!0,class:!0});var g=c(E);y=i(g,"Mail"),g.forEach(f),u.forEach(f),w=h(o),_=l(o,"LI",{class:!0});var m=c(_);S=l(m,"A",{href:!0,target:!0,rel:!0,class:!0});var J=c(S);A=i(J,"Twitter"),J.forEach(f),m.forEach(f),P=h(o),L=l(o,"LI",{class:!0});var K=c(L);k=l(K,"A",{href:!0,target:!0,rel:!0,class:!0});var Y=c(k);j=i(Y,"LinkedIn"),Y.forEach(f),K.forEach(f),C=h(o),R=l(o,"LI",{class:!0});var X=c(R);x=l(X,"A",{href:!0,target:!0,rel:!0,class:!0});var Q=c(x);I=i(Q,"GitHub"),Q.forEach(f),X.forEach(f),o.forEach(f),a.forEach(f),D=h(t),z=l(t,"FOOTER",{role:!0,class:!0});var Z=c(z);O=l(Z,"P",{class:!0});var ee=c(O);U=l(ee,"A",{href:!0,class:!0});var te=c(U);V=i(te,"Privacy Policy"),te.forEach(f),ee.forEach(f),W=h(Z),H=l(Z,"P",{class:!0});var se=c(H);q=i(se,"Created by "),N=l(se,"A",{href:!0,target:!0,rel:!0,class:!0});var re=c(N);T=i(re,"Adam Bar"),re.forEach(f),B=l(se,"BR",{}),M=i(se,"\n      Licenced under "),G=l(se,"A",{href:!0,target:!0,rel:!0,class:!0});var ae=c(G);F=i(ae,"CC-BY-SA 4.0"),ae.forEach(f),se.forEach(f),Z.forEach(f),t.forEach(f),this.h()},h(){u(p,"class","svelte-btjd4g"),u(E,"href","mailto:hi@adambar.pl"),u(E,"class","icon mail-icon svelte-btjd4g"),u(b,"class","svelte-btjd4g"),u(S,"href","https://twitter.com/WhatWebCanDo"),u(S,"target","_blank"),u(S,"rel","noreferrer noopener"),u(S,"class","icon twitter-icon svelte-btjd4g"),u(_,"class","svelte-btjd4g"),u(k,"href","https://linkedin.com/in/adamrbar"),u(k,"target","_blank"),u(k,"rel","noreferrer noopener"),u(k,"class","icon linkedin-icon svelte-btjd4g"),u(L,"class","svelte-btjd4g"),u(x,"href","https://github.com/NOtherDev/whatwebcando"),u(x,"target","_blank"),u(x,"rel","noreferrer noopener"),u(x,"class","icon github-icon svelte-btjd4g"),u(R,"class","svelte-btjd4g"),u($,"class","svelte-btjd4g"),u(r,"class","contact text-center"),u(U,"href","/privacy.html"),u(U,"class","svelte-btjd4g"),u(O,"class","text-left"),u(N,"href","https://adambar.pl"),u(N,"target","_blank"),u(N,"rel","noopener"),u(N,"class","svelte-btjd4g"),u(G,"href","https://creativecommons.org/licenses/by-sa/4.0/"),u(G,"target","_blank"),u(G,"rel","noreferrer noopener"),u(G,"class","svelte-btjd4g"),u(H,"class","text-right"),u(z,"role","contentinfo"),u(z,"class","svelte-btjd4g"),u(s,"class","container svelte-btjd4g"),u(s,"aria-label","Website footer")},m(e,t){g(e,s,t),m(s,r),m(r,p),m(p,d),m(r,v),m(r,$),m($,b),m(b,E),m(E,y),m($,w),m($,_),m(_,S),m(S,A),m($,P),m($,L),m(L,k),m(k,j),m($,C),m($,R),m(R,x),m(x,I),m(s,D),m(s,z),m(z,O),m(O,U),m(U,V),m(z,W),m(z,H),m(H,q),m(H,N),m(N,T),m(H,B),m(H,M),m(H,G),m(G,F)},p:e,i:e,o:e,d(e){e&&f(s)}}}class G extends s{constructor(e){super(),r(this,e,null,M,t,{})}}function F(e){let t,s,r,a;const n=new N({props:{segment:e.segment}}),l=e.$$slots.default,c=d(l,e,null),i=new B({}),u=new G({});return{c(){v(n.$$.fragment),t=o(),c&&c.c(),s=o(),v(i.$$.fragment),r=o(),v(u.$$.fragment)},l(e){$(n.$$.fragment,e),t=h(e),c&&c.l(e),s=h(e),$(i.$$.fragment,e),r=h(e),$(u.$$.fragment,e)},m(e,o){b(n,e,o),g(e,t,o),c&&c.m(e,o),g(e,s,o),b(i,e,o),g(e,r,o),b(u,e,o),a=!0},p(e,t){const s={};e.segment&&(s.segment=t.segment),n.$set(s),c&&c.p&&e.$$scope&&c.p(E(l,t,e,null),y(l,t,null))},i(e){a||(w(n.$$.fragment,e),w(c,e),w(i.$$.fragment,e),w(u.$$.fragment,e),a=!0)},o(e){_(n.$$.fragment,e),_(c,e),_(i.$$.fragment,e),_(u.$$.fragment,e),a=!1},d(e){S(n,e),e&&f(t),c&&c.d(e),e&&f(s),S(i,e),e&&f(r),S(u,e)}}}function J(e,t,s){let{segment:r}=t;const{page:a}=Ne();a.subscribe(async({path:e})=>{if(window.gaPageView&&window.gaPageView(e),"serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration();e&&e.waiting&&e.waiting.postMessage("refresh")}});let{$$slots:n={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",o=e.$$scope)},{segment:r,$$slots:n,$$scope:o}}class K extends s{constructor(e){super(),r(this,e,J,F,t,{segment:0})}}function Y(e){let t,s,r=e.error.stack+"";return{c(){t=a("pre"),s=n(r)},l(e){t=l(e,"PRE",{});var a=c(t);s=i(a,r),a.forEach(f)},m(e,r){g(e,t,r),m(t,s)},p(e,t){e.error&&r!==(r=t.error.stack+"")&&A(s,r)},d(e){e&&f(t)}}}function X(e){let t,s,r,p,d,E,y,P,L,k=e.error.message+"";const j=new z({props:{title:"Error "+e.status}});let C=e.dev&&e.error.stack&&Y(e);return{c(){v(j.$$.fragment),t=o(),s=a("main"),r=a("h1"),p=n(e.status),d=o(),E=a("p"),y=n(k),P=o(),C&&C.c(),this.h()},l(a){$(j.$$.fragment,a),t=h(a),s=l(a,"MAIN",{class:!0});var n=c(s);r=l(n,"H1",{});var o=c(r);p=i(o,e.status),o.forEach(f),d=h(n),E=l(n,"P",{});var u=c(E);y=i(u,k),u.forEach(f),P=h(n),C&&C.l(n),n.forEach(f),this.h()},h(){u(s,"class","page")},m(e,a){b(j,document.head,null),g(e,t,a),g(e,s,a),m(s,r),m(r,p),m(s,d),m(s,E),m(E,y),m(s,P),C&&C.m(s,null),L=!0},p(e,t){const r={};e.status&&(r.title="Error "+t.status),j.$set(r),L&&!e.status||A(p,t.status),L&&!e.error||k===(k=t.error.message+"")||A(y,k),t.dev&&t.error.stack?C?C.p(e,t):(C=Y(t),C.c(),C.m(s,null)):C&&(C.d(1),C=null)},i(e){L||(w(j.$$.fragment,e),L=!0)},o(e){_(j.$$.fragment,e),L=!1},d(e){S(j),e&&f(t),e&&f(s),C&&C.d()}}}function Q(e,t,s){let{status:r}=t,{error:a}=t;return P(async()=>{if(a&&500===r&&(!a.message||a.message.startsWith("Failed to fetch"))){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration();e&&await e.unregister()}window.location.reload(!0)}}),e.$set=e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",a=e.error)},{status:r,error:a,dev:!1}}class Z extends s{constructor(e){super(),r(this,e,Q,X,t,{status:0,error:0})}}function ee(e){let t,s;const r=[e.level1.props];var a=e.level1.component;function n(e){let t={};for(let e=0;e<r.length;e+=1)t=L(t,r[e]);return{props:t}}if(a)var o=new a(n());return{c(){o&&v(o.$$.fragment),t=R()},l(e){o&&$(o.$$.fragment,e),t=R()},m(e,r){o&&b(o,e,r),g(e,t,r),s=!0},p(e,s){const l=e.level1?k(r,[j(s.level1.props)]):{};if(a!==(a=s.level1.component)){if(o){x();const e=o;_(e.$$.fragment,1,0,()=>{S(e,1)}),I()}a?(o=new a(n()),v(o.$$.fragment),w(o.$$.fragment,1),b(o,t.parentNode,t)):o=null}else a&&o.$set(l)},i(e){s||(o&&w(o.$$.fragment,e),s=!0)},o(e){o&&_(o.$$.fragment,e),s=!1},d(e){e&&f(t),o&&S(o,e)}}}function te(e){let t;const s=new Z({props:{error:e.error,status:e.status}});return{c(){v(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,r){b(s,e,r),t=!0},p(e,t){const r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(w(s.$$.fragment,e),t=!0)},o(e){_(s.$$.fragment,e),t=!1},d(e){S(s,e)}}}function se(e){let t,s,r,a;const n=[te,ee],o=[];function l(e,t){return t.error?0:1}return t=l(0,e),s=o[t]=n[t](e),{c(){s.c(),r=R()},l(e){s.l(e),r=R()},m(e,s){o[t].m(e,s),g(e,r,s),a=!0},p(e,a){let c=t;t=l(0,a),t===c?o[t].p(e,a):(x(),_(o[c],1,1,()=>{o[c]=null}),I(),s=o[t],s||(s=o[t]=n[t](a),s.c()),w(s,1),s.m(r.parentNode,r))},i(e){a||(w(s),a=!0)},o(e){_(s),a=!1},d(e){o[t].d(e),e&&f(r)}}}function re(e){let t;const s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[se]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=L(r,s[e]);const a=new K({props:r});return{c(){v(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,s){b(a,e,s),t=!0},p(e,t){const r=e.segments||e.level0?k(s,[e.segments&&{segment:t.segments[0]},e.level0&&j(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(w(a.$$.fragment,e),t=!0)},o(e){_(a.$$.fragment,e),t=!1},d(e){S(a,e)}}}function ae(e,t,s){let{stores:r}=t,{error:a}=t,{status:n}=t,{segments:o}=t,{level0:l}=t,{level1:c=null}=t;return C(V,r),e.$set=e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",a=e.error),"status"in e&&s("status",n=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)},{stores:r,error:a,status:n,segments:o,level0:l,level1:c}}class ne extends s{constructor(e){super(),r(this,e,ae,re,t,{stores:0,error:0,status:0,segments:0,level0:0,level1:0})}}const oe=[/^\/articles.json$/,/^\/articles\/([^\/]+?).json$/],le=[{js:()=>import("./index.8547312a.js"),css:["index.8547312a.css","Article.528b6c68.css","Advertisement.57bbf4c4.css"]},{js:()=>import("./privacy.html.f2436aa4.js"),css:[]},{js:()=>import("./index.8f0893df.js"),css:["index.8f0893df.css","Article.528b6c68.css"]},{js:()=>import("./[slug].ea64f6a3.js"),css:["[slug].ea64f6a3.css","Article.528b6c68.css","Advertisement.57bbf4c4.css","prism.7976db51.css"]},{js:()=>import("./[feature].html.4c5b8ee4.js"),css:["[feature].html.4c5b8ee4.css","prism.7976db51.css"]}],ce=(ie=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/privacy.html\/?$/,parts:[{i:1}]},{pattern:/^\/articles\/?$/,parts:[{i:2}]},{pattern:/^\/articles\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:ie(e[1])})}]},{pattern:/^\/([^\/]+?).html\/?$/,parts:[{i:4,params:e=>({feature:ie(e[1])})}]}]);var ie;const fe="undefined"!=typeof __SAPPER__&&__SAPPER__,he={in_progress:!1};let ue,pe,ge,me=!1,de=[],ve="{}";const $e={page:U({}),preloading:U(null),session:U(fe&&fe.session)};let be,Ee;$e.session.subscribe(async e=>{if(be=e,!me)return;Ee=!0;const t=ke(new URL(location.href)),s=pe={},{redirect:r,props:a,branch:n}=await xe(t);s===pe&&await Re(r,n,a,t.page)});let ye,we=null;let _e,Se=1;const Ae="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},Pe={};function Le(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ke(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(fe.baseUrl))return null;let t=e.pathname.slice(fe.baseUrl.length);if(""===t&&(t="/"),!oe.some(e=>e.test(t)))for(let s=0;s<ce.length;s+=1){const r=ce[s],a=r.pattern.exec(t);if(a){const s=Le(e.search),n=r.parts[r.parts.length-1],o=n.params?n.params(a):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:a,page:l}}}}function je(){return{x:pageXOffset,y:pageYOffset}}async function Ce(e,t,s,r){if(t)_e=t;else{const e=je();Pe[_e]=e,t=_e=++Se,Pe[_e]=s?e:{x:0,y:0}}_e=t,ue&&$e.preloading.set(!0);const a=we&&we.href===e.href?we.promise:xe(e);we=null;const n=pe={},{redirect:o,props:l,branch:c}=await a;if(n===pe&&(await Re(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=Pe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}Pe[_e]=e,e&&scrollTo(e.x,e.y)}}async function Re(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ke(new URL(e,document.baseURI));return s?(Ae[t.replaceState?"replaceState":"pushState"]({id:_e},"",e),Ce(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if($e.page.set(r),$e.preloading.set(!1),ue)ue.$set(s);else{s.stores={page:{subscribe:$e.page.subscribe},preloading:{subscribe:$e.preloading.subscribe},session:$e.session},s.level0={props:await ge};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)De(e.nextSibling);De(e),De(t)}ue=new ne({target:ye,props:s,hydrate:!0})}de=t,ve=JSON.stringify(r.query),me=!0,Ee=!1}async function xe(e){he.in_progress=!0;const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let a=null;const n={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(a&&(a.statusCode!==e||a.location!==t))throw new Error("Conflicting redirects");a={statusCode:e,location:t}},error:(e,t)=>{n.error="string"==typeof t?new Error(t):t,n.status=e}};let l;ge||(ge=fe.preloaded[0]||W.call(o,{host:s.host,path:s.path,query:s.query,params:{}},be));let c=1;try{const a=JSON.stringify(s.query),i=t.pattern.exec(s.path);let f=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const h=r[l];if(function(e,t,s,r){if(r!==ve)return!0;const a=de[e];return!!a&&(t!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(l,h,i,a)&&(f=!0),n.segments[c]=r[l+1],!t)return{segment:h};const u=c++;if(!Ee&&!f&&de[l]&&de[l].part===t.i)return de[l];f=!1;const{default:p,preload:g}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Ie);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(le[t.i]);let m;return m=me||!fe.preloaded[l+1]?g?await g.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},be):{}:fe.preloaded[l+1],n[`level${u}`]={component:p,props:m,segment:h,match:i,part:t.i}}))}catch(e){n.error=e,n.status=500,l=[]}return he.in_progress=!1,{redirect:a,props:n,branch:l}}function Ie(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function De(e){e.parentNode.removeChild(e)}function ze(e){const t=ke(new URL(e,document.baseURI));if(t)return we&&e===we.href||function(e,t){we={href:e,promise:t}}(e,xe(t)),we.promise}let Oe;function Ue(e){clearTimeout(Oe),Oe=setTimeout(()=>{Ve(e)},20)}function Ve(e){const t=He(e.target);t&&"prefetch"===t.rel&&(he.in_progress||ze(t.href))}function We(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(he.in_progress)return;const t=He(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const a=new URL(r);if(a.pathname===location.pathname&&a.search===location.search)return;const n=ke(a);if(n){Ce(n,null,t.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),Ae.pushState({id:_e},"",a.href)}}function He(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function qe(e){if(Pe[_e]=je(),e.state){const t=ke(new URL(location.href));t?Ce(t,e.state.id):location.href=location.href}else Se=Se+1,function(e){_e=e}(Se),Ae.replaceState({id:_e},"",location.href)}const Ne=()=>D(V);var Te;Te={target:document.querySelector("#sapper")},"scrollRestoration"in Ae&&(Ae.scrollRestoration="manual"),function(e){ye=e}(Te.target),addEventListener("click",We),addEventListener("popstate",qe),addEventListener("touchstart",Ve),addEventListener("mousemove",Ue),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ae.replaceState({id:Se},"",t);const s=new URL(location.href);if(fe.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:a,preloaded:n,status:o,error:l}=fe;ge||(ge=n&&n[0]),Re(null,[],{error:l,status:o,session:a,level0:{props:ge},level1:{props:{status:o,error:l},component:Z},segments:n},{host:t,path:s,query:Le(r),params:{}})}();const r=ke(s);return r?Ce(r,Se,!0,e):void 0});(e=>{function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),window.gaPageView=function(s){t("config",e,{page_path:s,anonymize_ip:!0})};const s=document.createElement("script");s.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.body.appendChild(s)})("UA-69397212-1");
