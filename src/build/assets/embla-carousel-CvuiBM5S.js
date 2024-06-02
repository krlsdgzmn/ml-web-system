function xt(t){return typeof t=="number"}function yt(t){return typeof t=="string"}function Et(t){return typeof t=="boolean"}function Pt(t){return Object.prototype.toString.call(t)==="[object Object]"}function M(t){return Math.abs(t)}function Lt(t){return Math.sign(t)}function it(t,n){return M(t-n)}function Ut(t,n){if(t===0||n===0||M(t)<=M(n))return 0;const r=it(M(t),M(n));return M(r/t)}function ct(t){return ut(t).map(Number)}function j(t){return t[at(t)]}function at(t){return Math.max(0,t.length-1)}function It(t,n){return n===at(t)}function Ot(t,n=0){return Array.from(Array(t),(r,s)=>n+s)}function ut(t){return Object.keys(t)}function Ct(t,n){return[t,n].reduce((r,s)=>(ut(s).forEach(i=>{const e=r[i],o=s[i],f=Pt(e)&&Pt(o);r[i]=f?Ct(e,o):o}),r),{})}function bt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function $t(t,n){const r={start:s,center:i,end:e};function s(){return 0}function i(c){return e(c)/2}function e(c){return n-c}function o(c,u){return yt(t)?r[t](c):t(n,c,u)}return{measure:o}}function ft(){let t=[];function n(i,e,o,f={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(e,o,f),c=()=>i.removeEventListener(e,o,f);else{const u=i;u.addListener(o),c=()=>u.removeListener(o)}return t.push(c),s}function r(){t=t.filter(i=>i())}const s={add:n,clear:r};return s}function Qt(t,n,r,s){const i=ft(),e=1e3/60;let o=null,f=0,c=0;function u(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function h(){x(),i.clear()}function l(S){if(!c)return;o||(o=S);const a=S-o;for(o=S,f+=a;f>=e;)r(),f-=e;const g=M(f/e);s(g),c&&n.requestAnimationFrame(l)}function m(){c||(c=n.requestAnimationFrame(l))}function x(){n.cancelAnimationFrame(c),o=null,f=0,c=0}function d(){o=null,f=0}return{init:u,destroy:h,start:m,stop:x,update:r,render:s}}function Kt(t,n){const r=n==="rtl",s=t==="y",i=s?"y":"x",e=s?"x":"y",o=!s&&r?-1:1,f=h(),c=l();function u(d){const{height:p,width:S}=d;return s?p:S}function h(){return s?"top":r?"right":"left"}function l(){return s?"bottom":r?"left":"right"}function m(d){return d*o}return{scroll:i,cross:e,startEdge:f,endEdge:c,measureSize:u,direction:m}}function nt(t=0,n=0){const r=M(t-n);function s(u){return u<t}function i(u){return u>n}function e(u){return s(u)||i(u)}function o(u){return e(u)?s(u)?t:n:u}function f(u){return r?u-r*Math.ceil((u-n)/r):u}return{length:r,max:n,min:t,constrain:o,reachedAny:e,reachedMax:i,reachedMin:s,removeOffset:f}}function wt(t,n,r){const{constrain:s}=nt(0,t),i=t+1;let e=o(n);function o(m){return r?M((i+m)%i):s(m)}function f(){return e}function c(m){return e=o(m),l}function u(m){return h().set(f()+m)}function h(){return wt(t,f(),r)}const l={get:f,set:c,add:u,clone:h};return l}function Xt(t,n,r,s,i,e,o,f,c,u,h,l,m,x,d,p,S,a,g){const{cross:b,direction:L}=t,v=["INPUT","SELECT","TEXTAREA"],F={passive:!1},E=ft(),I=ft(),D=nt(50,225).constrain(x.measure(20)),A={mouse:300,touch:400},O={mouse:500,touch:600},V=d?43:25;let Y=!1,B=0,U=0,J=!1,$=!1,_=!1,Q=!1;function Z(y){if(!g)return;function T(w){(Et(g)||g(y,w))&&z(w)}const C=n;E.add(C,"dragstart",w=>w.preventDefault(),F).add(C,"touchmove",()=>{},F).add(C,"touchend",()=>{}).add(C,"touchstart",T).add(C,"mousedown",T).add(C,"touchcancel",N).add(C,"contextmenu",N).add(C,"click",ot,!0)}function K(){E.clear(),I.clear()}function et(){const y=Q?r:n;I.add(y,"touchmove",R,F).add(y,"touchend",N).add(y,"mousemove",R,F).add(y,"mouseup",N)}function X(y){const T=y.nodeName||"";return v.includes(T)}function rt(){return(d?O:A)[Q?"mouse":"touch"]}function st(y,T){const C=l.add(Lt(y)*-1),w=h.byDistance(y,!d).distance;return d||M(y)<D?w:S&&T?w*.5:h.byIndex(C.get(),0).distance}function z(y){const T=bt(y,s);Q=T,_=d&&T&&!y.buttons&&Y,Y=it(i.get(),o.get())>=2,!(T&&y.button!==0)&&(X(y.target)||(J=!0,e.pointerDown(y),u.useFriction(0).useDuration(0),i.set(o),et(),B=e.readPoint(y),U=e.readPoint(y,b),m.emit("pointerDown")))}function R(y){if(!bt(y,s)&&y.touches.length>=2)return N(y);const C=e.readPoint(y),w=e.readPoint(y,b),q=it(C,B),H=it(w,U);if(!$&&!Q&&(!y.cancelable||($=q>H,!$)))return N(y);const G=e.pointerMove(y);q>p&&(_=!0),u.useFriction(.3).useDuration(.75),f.start(),i.add(L(G)),y.preventDefault()}function N(y){const C=h.byDistance(0,!1).index!==l.get(),w=e.pointerUp(y)*rt(),q=st(L(w),C),H=Ut(w,q),G=V-10*H,W=a+H/50;$=!1,J=!1,I.clear(),u.useDuration(G).useFriction(W),c.distance(q,!d),Q=!1,m.emit("pointerUp")}function ot(y){_&&(y.stopPropagation(),y.preventDefault(),_=!1)}function k(){return J}return{init:Z,destroy:K,pointerDown:k}}function Yt(t,n){let s,i;function e(l){return l.timeStamp}function o(l,m){const d=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(bt(l,n)?l:l.touches[0])[d]}function f(l){return s=l,i=l,o(l)}function c(l){const m=o(l)-o(i),x=e(l)-e(s)>170;return i=l,x&&(s=l),m}function u(l){if(!s||!i)return 0;const m=o(i)-o(s),x=e(l)-e(s),d=e(l)-e(i)>170,p=m/x;return x&&!d&&M(p)>.1?p:0}return{pointerDown:f,pointerMove:c,pointerUp:u,readPoint:o}}function _t(){function t(r){const{offsetTop:s,offsetLeft:i,offsetWidth:e,offsetHeight:o}=r;return{top:s,right:i+e,bottom:s+o,left:i,width:e,height:o}}return{measure:t}}function Jt(t){function n(s){return t*(s/100)}return{measure:n}}function Zt(t,n,r,s,i,e,o){let f,c,u=[],h=!1;function l(p){return i.measureSize(o.measure(p))}function m(p){if(!e)return;c=l(t),u=s.map(l);function S(g){for(const b of g){const L=b.target===t,v=s.indexOf(b.target),F=L?c:u[v],E=l(L?t:s[v]);if(M(E-F)>=.5){r.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}f=new ResizeObserver(g=>{h||(Et(e)||e(p,g))&&S(g)}),[t].concat(s).forEach(g=>f.observe(g))}function x(){f&&f.disconnect(),h=!0}return{init:m,destroy:x}}function Wt(t,n,r,s,i){let e=0,o=0,f=s,c=i,u=t.get(),h=0;function l(){const v=r.get()-t.get(),F=!f;let E=0;return F?(e=0,t.set(r),E=v):(e+=v/f,e*=c,u+=e,t.add(e),E=u-h),o=Lt(E),h=u,L}function m(){const v=r.get()-n.get();return M(v)<.001}function x(){return f}function d(){return o}function p(){return e}function S(){return g(s)}function a(){return b(i)}function g(v){return f=v,L}function b(v){return c=v,L}const L={direction:d,duration:x,velocity:p,seek:l,settled:m,useBaseFriction:a,useBaseDuration:S,useFriction:b,useDuration:g};return L}function tn(t,n,r,s,i){const e=i.measure(10),o=i.measure(50),f=nt(.1,.99);let c=!1;function u(){return!(c||!t.reachedAny(r.get())||!t.reachedAny(n.get()))}function h(x){if(!u())return;const d=t.reachedMin(n.get())?"min":"max",p=M(t[d]-n.get()),S=r.get()-n.get(),a=f.constrain(p/o);r.subtract(S*a),!x&&M(S)<e&&(r.set(t.constrain(r.get())),s.useDuration(25).useBaseFriction())}function l(x){c=!x}return{constrain:h,toggleActive:l}}function nn(t,n,r,s,i){const e=nt(-n+t,0),o=l(),f=h(),c=m();function u(d,p){return it(d,p)<1}function h(){const d=o[0],p=j(o),S=o.lastIndexOf(d),a=o.indexOf(p)+1;return nt(S,a)}function l(){return r.map((d,p)=>{const{min:S,max:a}=e,g=e.constrain(d),b=!p,L=It(r,p);return b?a:L||u(S,g)?S:u(a,g)?a:g}).map(d=>parseFloat(d.toFixed(3)))}function m(){if(n<=t+i)return[e.max];if(s==="keepSnaps")return o;const{min:d,max:p}=f;return o.slice(d,p)}return{snapsContained:c,scrollContainLimit:f}}function en(t,n,r){const s=n[0],i=r?s-t:j(n);return{limit:nt(i,s)}}function on(t,n,r,s){const e=n.min+.1,o=n.max+.1,{reachedMin:f,reachedMax:c}=nt(e,o);function u(m){return m===1?c(r.get()):m===-1?f(r.get()):!1}function h(m){if(!u(m))return;const x=t*(m*-1);s.forEach(d=>d.add(x))}return{loop:h}}function rn(t){const{max:n,length:r}=t;function s(e){const o=e-n;return r?o/-r:0}return{get:s}}function sn(t,n,r,s,i){const{startEdge:e,endEdge:o}=t,{groupSlides:f}=i,c=l().map(n.measure),u=m(),h=x();function l(){return f(s).map(p=>j(p)[o]-p[0][e]).map(M)}function m(){return s.map(p=>r[e]-p[e]).map(p=>-M(p))}function x(){return f(u).map(p=>p[0]).map((p,S)=>p+c[S])}return{snaps:u,snapsAligned:h}}function cn(t,n,r,s,i,e){const{groupSlides:o}=i,{min:f,max:c}=s,u=h();function h(){const m=o(e),x=!t||n==="keepSnaps";return r.length===1?[e]:x?m:m.slice(f,c).map((d,p,S)=>{const a=!p,g=It(S,p);if(a){const b=j(S[0])+1;return Ot(b)}if(g){const b=at(e)-j(S)[0]+1;return Ot(b,j(S)[0])}return d})}return{slideRegistry:u}}function un(t,n,r,s,i){const{reachedAny:e,removeOffset:o,constrain:f}=s;function c(d){return d.concat().sort((p,S)=>M(p)-M(S))[0]}function u(d){const p=t?o(d):f(d),S=n.map((g,b)=>({diff:h(g-p,0),index:b})).sort((g,b)=>M(g.diff)-M(b.diff)),{index:a}=S[0];return{index:a,distance:p}}function h(d,p){const S=[d,d+r,d-r];if(!t)return d;if(!p)return c(S);const a=S.filter(g=>Lt(g)===p);return a.length?c(a):j(S)-r}function l(d,p){const S=n[d]-i.get(),a=h(S,p);return{index:d,distance:a}}function m(d,p){const S=i.get()+d,{index:a,distance:g}=u(S),b=!t&&e(S);if(!p||b)return{index:a,distance:d};const L=n[a]-g,v=d+h(L,0);return{index:a,distance:v}}return{byDistance:m,byIndex:l,shortcut:h}}function fn(t,n,r,s,i,e,o){function f(l){const m=l.distance,x=l.index!==n.get();e.add(m),m&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),x&&(r.set(n.get()),n.set(l.index),o.emit("select"))}function c(l,m){const x=i.byDistance(l,m);f(x)}function u(l,m){const x=n.clone().set(l),d=i.byIndex(x.get(),m);f(d)}return{distance:c,index:u}}function an(t,n,r,s,i,e,o){let f=0;function c(){e.add(document,"keydown",u,!1),n.forEach(h)}function u(m){m.code==="Tab"&&(f=new Date().getTime())}function h(m){const x=()=>{if(new Date().getTime()-f>10)return;t.scrollLeft=0;const S=n.indexOf(m),a=r.findIndex(g=>g.includes(S));xt(a)&&(i.useDuration(0),s.index(a,0),o.emit("slideFocus"))};e.add(m,"focus",x,{passive:!0,capture:!0})}return{init:c}}function dt(t){let n=t;function r(){return n}function s(c){n=o(c)}function i(c){n+=o(c)}function e(c){n-=o(c)}function o(c){return xt(c)?c:c.get()}return{get:r,set:s,add:i,subtract:e}}function Nt(t,n){const r=t.scroll==="x"?e:o,s=n.style;let i=!1;function e(l){return`translate3d(${l}px,0px,0px)`}function o(l){return`translate3d(0px,${l}px,0px)`}function f(l){i||(s.transform=r(t.direction(l)))}function c(l){i=!l}function u(){i||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:u,to:f,toggleActive:c}}function ln(t,n,r,s,i,e,o,f,c){const h=ct(i),l=ct(i).reverse(),m=a().concat(g());function x(E,I){return E.reduce((D,A)=>D-i[A],I)}function d(E,I){return E.reduce((D,A)=>x(D,I)>0?D.concat([A]):D,[])}function p(E){return e.map((I,D)=>({start:I-s[D]+.5+E,end:I+n-.5+E}))}function S(E,I,D){const A=p(I);return E.map(O=>{const V=D?0:-r,Y=D?r:0,B=D?"end":"start",U=A[O][B];return{index:O,loopPoint:U,slideLocation:dt(-1),translate:Nt(t,c[O]),target:()=>f.get()>U?V:Y}})}function a(){const E=o[0],I=d(l,E);return S(I,r,!1)}function g(){const E=n-o[0]-1,I=d(h,E);return S(I,-r,!0)}function b(){return m.every(({index:E})=>{const I=h.filter(D=>D!==E);return x(I,n)<=.1})}function L(){m.forEach(E=>{const{target:I,translate:D,slideLocation:A}=E,O=I();O!==A.get()&&(D.to(O),A.set(O))})}function v(){m.forEach(E=>E.translate.clear())}return{canLoop:b,clear:v,loop:L,loopPoints:m}}function dn(t,n,r){let s,i=!1;function e(c){if(!r)return;function u(h){for(const l of h)if(l.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(h=>{i||(Et(r)||r(c,h))&&u(h)}),s.observe(t,{childList:!0})}function o(){s&&s.disconnect(),i=!0}return{init:e,destroy:o}}function pn(t,n,r,s){const i={};let e=null,o=null,f,c=!1;function u(){f=new IntersectionObserver(d=>{c||(d.forEach(p=>{const S=n.indexOf(p.target);i[S]=p}),e=null,o=null,r.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(d=>f.observe(d))}function h(){f&&f.disconnect(),c=!0}function l(d){return ut(i).reduce((p,S)=>{const a=parseInt(S),{isIntersecting:g}=i[a];return(d&&g||!d&&!g)&&p.push(a),p},[])}function m(d=!0){if(d&&e)return e;if(!d&&o)return o;const p=l(d);return d&&(e=p),d||(o=p),p}return{init:u,destroy:h,get:m}}function mn(t,n,r,s,i,e){const{measureSize:o,startEdge:f,endEdge:c}=t,u=r[0]&&i,h=d(),l=p(),m=r.map(o),x=S();function d(){if(!u)return 0;const g=r[0];return M(n[f]-g[f])}function p(){if(!u)return 0;const g=e.getComputedStyle(j(s));return parseFloat(g.getPropertyValue(`margin-${c}`))}function S(){return r.map((g,b,L)=>{const v=!b,F=It(L,b);return v?m[b]+h:F?m[b]+l:L[b+1][f]-g[f]}).map(M)}return{slideSizes:m,slideSizesWithGaps:x,startGap:h,endGap:l}}function gn(t,n,r,s,i,e,o,f,c){const{startEdge:u,endEdge:h,direction:l}=t,m=xt(r);function x(a,g){return ct(a).filter(b=>b%g===0).map(b=>a.slice(b,b+g))}function d(a){return a.length?ct(a).reduce((g,b,L)=>{const v=j(g)||0,F=v===0,E=b===at(a),I=i[u]-e[v][u],D=i[u]-e[b][h],A=!s&&F?l(o):0,O=!s&&E?l(f):0,V=M(D-O-(I+A));return L&&V>n+c&&g.push(b),E&&g.push(a.length),g},[]).map((g,b,L)=>{const v=Math.max(L[b-1]||0);return a.slice(v,g)}):[]}function p(a){return m?x(a,r):d(a)}return{groupSlides:p}}function hn(t,n,r,s,i,e,o){const{align:f,axis:c,direction:u,startIndex:h,loop:l,duration:m,dragFree:x,dragThreshold:d,inViewThreshold:p,slidesToScroll:S,skipSnaps:a,containScroll:g,watchResize:b,watchSlides:L,watchDrag:v}=e,F=2,E=_t(),I=E.measure(n),D=r.map(E.measure),A=Kt(c,u),O=A.measureSize(I),V=Jt(O),Y=$t(f,O),B=!l&&!!g,U=l||!!g,{slideSizes:J,slideSizesWithGaps:$,startGap:_,endGap:Q}=mn(A,I,D,r,U,i),Z=gn(A,O,S,l,I,D,_,Q,F),{snaps:K,snapsAligned:et}=sn(A,Y,I,D,Z),X=-j(K)+j($),{snapsContained:rt,scrollContainLimit:st}=nn(O,X,et,g,F),z=B?rt:et,{limit:R}=en(X,z,l),N=wt(at(z),h,l),ot=N.clone(),k=ct(r),P=({dragHandler:tt,scrollBody:ht,scrollBounds:St,options:{loop:lt}})=>{lt||St.constrain(tt.pointerDown()),ht.seek()},y=({scrollBody:tt,translate:ht,location:St,offsetLocation:lt,scrollLooper:kt,slideLooper:Ht,dragHandler:Gt,animation:jt,eventHandler:At,options:{loop:Rt}},qt)=>{const Mt=tt.velocity(),Ft=tt.settled();Ft&&!Gt.pointerDown()&&(jt.stop(),At.emit("settle")),Ft||At.emit("scroll"),lt.set(St.get()-Mt+Mt*qt),Rt&&(kt.loop(tt.direction()),Ht.loop()),ht.to(lt.get())},T=Qt(s,i,()=>P(gt),tt=>y(gt,tt)),C=.68,w=z[N.get()],q=dt(w),H=dt(w),G=dt(w),W=Wt(q,H,G,m,C),pt=un(l,z,X,R,G),mt=fn(T,N,ot,W,pt,G,o),vt=rn(R),Tt=ft(),zt=pn(n,r,o,p),{slideRegistry:Dt}=cn(B,g,z,st,Z,k),Bt=an(t,r,Dt,mt,W,Tt,o),gt={ownerDocument:s,ownerWindow:i,eventHandler:o,containerRect:I,slideRects:D,animation:T,axis:A,dragHandler:Xt(A,t,s,i,G,Yt(A,i),q,T,mt,W,pt,N,o,V,x,d,a,C,v),eventStore:Tt,percentOfView:V,index:N,indexPrevious:ot,limit:R,location:q,offsetLocation:H,options:e,resizeHandler:Zt(n,o,i,r,A,b,E),scrollBody:W,scrollBounds:tn(R,H,G,W,V),scrollLooper:on(X,R,H,[q,H,G]),scrollProgress:vt,scrollSnapList:z.map(vt.get),scrollSnaps:z,scrollTarget:pt,scrollTo:mt,slideLooper:ln(A,O,X,J,$,K,z,H,r),slideFocus:Bt,slidesHandler:dn(n,o,L),slidesInView:zt,slideIndexes:k,slideRegistry:Dt,slidesToScroll:Z,target:G,translate:Nt(A,n)};return gt}function Sn(){let t={},n;function r(u){n=u}function s(u){return t[u]||[]}function i(u){return s(u).forEach(h=>h(n,u)),c}function e(u,h){return t[u]=s(u).concat([h]),c}function o(u,h){return t[u]=s(u).filter(l=>l!==h),c}function f(){t={}}const c={init:r,emit:i,off:o,on:e,clear:f};return c}const yn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function bn(t){function n(e,o){return Ct(e,o||{})}function r(e){const o=e.breakpoints||{},f=ut(o).filter(c=>t.matchMedia(c).matches).map(c=>o[c]).reduce((c,u)=>n(c,u),{});return n(e,f)}function s(e){return e.map(o=>ut(o.breakpoints||{})).reduce((o,f)=>o.concat(f),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:r,optionsMediaQueries:s}}function xn(t){let n=[];function r(e,o){return n=o.filter(({options:f})=>t.optionsAtMedia(f).active!==!1),n.forEach(f=>f.init(e,t)),o.reduce((f,c)=>Object.assign(f,{[c.name]:c}),{})}function s(){n=n.filter(e=>e.destroy())}return{init:r,destroy:s}}function Vt(t,n,r){const s=t.ownerDocument,i=s.defaultView,e=bn(i),o=xn(e),f=ft(),c=Sn(),{mergeOptions:u,optionsAtMedia:h,optionsMediaQueries:l}=e,{on:m,off:x,emit:d}=c,p=O;let S=!1,a,g=u(yn,Vt.globalOptions),b=u(g),L=[],v,F,E;function I(){const{container:P,slides:y}=b;F=(yt(P)?t.querySelector(P):P)||t.children[0];const C=yt(y)?F.querySelectorAll(y):y;E=[].slice.call(C||F.children)}function D(P){const y=hn(t,F,E,s,i,P,c);if(P.loop&&!y.slideLooper.canLoop()){const T=Object.assign({},P,{loop:!1});return D(T)}return y}function A(P,y){S||(g=u(g,P),b=h(g),L=y||L,I(),a=D(b),l([g,...L.map(({options:T})=>T)]).forEach(T=>f.add(T,"change",O)),b.active&&(a.translate.to(a.location.get()),a.animation.init(),a.slidesInView.init(),a.slideFocus.init(),a.eventHandler.init(k),a.resizeHandler.init(k),a.slidesHandler.init(k),a.options.loop&&a.slideLooper.loop(),F.offsetParent&&E.length&&a.dragHandler.init(k),v=o.init(k,L)))}function O(P,y){const T=K();V(),A(u({startIndex:T},P),y),c.emit("reInit")}function V(){a.dragHandler.destroy(),a.eventStore.clear(),a.translate.clear(),a.slideLooper.clear(),a.resizeHandler.destroy(),a.slidesHandler.destroy(),a.slidesInView.destroy(),a.animation.destroy(),o.destroy(),f.clear()}function Y(){S||(S=!0,f.clear(),V(),c.emit("destroy"),c.clear())}function B(P,y,T){!b.active||S||(a.scrollBody.useBaseFriction().useDuration(y===!0?0:b.duration),a.scrollTo.index(P,T||0))}function U(P){const y=a.index.add(1).get();B(y,P,-1)}function J(P){const y=a.index.add(-1).get();B(y,P,1)}function $(){return a.index.add(1).get()!==K()}function _(){return a.index.add(-1).get()!==K()}function Q(){return a.scrollSnapList}function Z(){return a.scrollProgress.get(a.location.get())}function K(){return a.index.get()}function et(){return a.indexPrevious.get()}function X(){return a.slidesInView.get()}function rt(){return a.slidesInView.get(!1)}function st(){return v}function z(){return a}function R(){return t}function N(){return F}function ot(){return E}const k={canScrollNext:$,canScrollPrev:_,containerNode:N,internalEngine:z,destroy:Y,off:x,on:m,emit:d,plugins:st,previousScrollSnap:et,reInit:p,rootNode:R,scrollNext:U,scrollPrev:J,scrollProgress:Z,scrollSnapList:Q,scrollTo:B,selectedScrollSnap:K,slideNodes:ot,slidesInView:X,slidesNotInView:rt};return A(n,r),setTimeout(()=>c.emit("init"),0),k}Vt.globalOptions=void 0;export{Vt as E};
