(()=>{"use strict";var t={596:(t,e,n)=>{function o(){}function r(t){return t()}function s(){return Object.create(null)}function c(t){t.forEach(r)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return 0===Object.keys(t).length}function d(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(){return t=" ",document.createTextNode(t);var t}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let y;function b(t){y=t}n.d(e,{Z:()=>H}),new Set,new Set;const v=[],x=[],w=[],k=[],_=Promise.resolve();let E=!1;function S(t){w.push(t)}let A=!1;const C=new Set;function L(){if(!A){A=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];b(e),T(e.$$)}for(b(null),v.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];C.has(e)||(C.add(e),e())}w.length=0}while(v.length);for(;k.length;)k.pop()();E=!1,A=!1,C.clear()}}function T(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const O=new Set;let q;function M(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e,n,l,a,d,u=[-1]){const f=y;b(t);const h=t.$$={fragment:null,ctx:null,props:d,update:o,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:s(),dirty:u,skip_bound:!1};let g=!1;if(h.ctx=n?n(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),g&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,_.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],h.update(),g=!0,c(h.before_update),h.fragment=!!l&&l(h.ctx),e.target){if(e.hydrate){const t=(x=e.target,Array.from(x.childNodes));h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();e.intro&&(($=t.$$.fragment)&&$.i&&(O.delete($),$.i(m))),function(t,e,n){const{fragment:o,on_mount:s,on_destroy:l,after_update:a}=t.$$;o&&o.m(e,n),S((()=>{const e=s.map(r).filter(i);l?l.push(...e):c(e),t.$$.on_mount=[]})),a.forEach(S)}(t,e.target,e.anchor),L()}var $,m,x;b(f)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){M(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function N(t){let e,n,r,s,i,l,a,y,b,v,x,w,k,_,E,S,A,C,L,T,O,q,M,j,N,P,H,B,D,Z;return{c(){e=f("header"),e.textContent="nine dot task",n=g(),r=f("main"),s=h("svg"),i=h("rect"),l=h("circle"),a=h("circle"),y=h("circle"),b=h("circle"),v=h("circle"),x=h("circle"),w=h("circle"),k=h("circle"),_=h("circle"),E=h("g"),S=h("polyline"),A=h("path"),C=h("line"),L=g(),T=f("br"),O=f("br"),q=f("br"),M=f("br"),j=f("br"),N=f("br"),P=f("br"),H=g(),B=f("div"),B.innerHTML='<table><tr><td><span class="dot"></span></td> \n                <td><span class="dot"></span></td> \n                <td><span class="dot"></span></td></tr> \n            <tr><td><span class="dot"></span></td> \n                <td><span class="dot"></span></td> \n                <td><span class="dot"></span></td></tr> \n            <tr><td><span class="dot"></span></td> \n                <td><span class="dot"></span></td> \n                <td><span class="dot"></span></td></tr></table>',m(i,"class","svg-dots-container"),m(i,"x","300"),m(i,"y","200"),m(i,"width","400"),m(i,"height","400"),m(l,"class","svg-dot"),m(l,"cx","370"),m(l,"cy","270"),m(l,"r","50"),m(a,"class","svg-dot"),m(a,"cx","370"),m(a,"cy","400"),m(a,"r","50"),m(y,"class","svg-dot"),m(y,"cx","370"),m(y,"cy","530"),m(y,"r","50"),m(b,"class","svg-dot"),m(b,"cx","500"),m(b,"cy","270"),m(b,"r","50"),m(v,"class","svg-dot"),m(v,"cx","500"),m(v,"cy","400"),m(v,"r","50"),m(x,"class","svg-dot"),m(x,"cx","500"),m(x,"cy","530"),m(x,"r","50"),m(w,"class","svg-dot"),m(w,"cx","630"),m(w,"cy","270"),m(w,"r","50"),m(k,"class","svg-dot"),m(k,"cx","630"),m(k,"cy","400"),m(k,"r","50"),m(_,"class","svg-dot"),m(_,"cx","630"),m(_,"cy","530"),m(_,"r","50"),m(S,"points",""),m(S,"stroke-width","5"),m(A,"stroke","blue"),m(A,"d","M70 75L25.9 1.2"),m(E,"stroke","red"),m(E,"fill","none"),m(C,"fill","none"),m(C,"stroke","black"),m(C,"x1","360"),m(C,"y1","6"),m(C,"x2","360"),m(C,"y2","95"),m(s,"xmlns","http://www.w3.org/2000/svg"),m(s,"xmlns:xlink","http://www.w3.org/1999/xlink"),m(s,"viewBox","0 0 1000 1000"),m(s,"class","svg"),m(B,"class","dots-container")},m(o,c){u(o,e,c),u(o,n,c),u(o,r,c),d(r,s),d(s,i),d(s,l),d(s,a),d(s,y),d(s,b),d(s,v),d(s,x),d(s,w),d(s,k),d(s,_),d(s,E),d(E,S),d(E,A),d(s,C),d(r,L),d(r,T),d(r,O),d(r,q),d(r,M),d(r,j),d(r,N),d(r,P),d(r,H),d(r,B),D||(Z=[$(s,"pointerdown",t[0]),$(s,"pointerup",t[1])],D=!0)},p:o,i:o,o,d(t){t&&p(e),t&&p(n),t&&p(r),D=!1,c(Z)}}}function P(t){var e,n,o,r,s;function c(t){return r.x=t.clientX,r.y=t.clientY,r.matrixTransform(o.getScreenCTM().inverse())}function i(t){var o=c(t),r=o.x,s=o.y;console.log("move"),n=e.getAttribute("points"),e.setAttribute("points",n+" "+r+","+s)}return s=()=>{o=document.querySelector(".svg"),r=o.createSVGPoint(),e=document.querySelector("polyline"),console.log(e.getAttribute("points"))},function(){if(!y)throw new Error("Function called outside component initialization");return y}().$$.on_mount.push(s),[function(t){t.preventDefault();var r=c(t),s=r.x,l=r.y;o.addEventListener("pointermove",i),e.setAttribute("points",s+","+l),n=e.getAttribute("points")},function(t){console.log("stop"),t.preventDefault(),o.removeEventListener("pointermove",i)}]}const H=class extends class{$destroy(){M(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,P,N,l,{})}}}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),new(0,n(596).Z)({target:document.querySelector("#app")})})();
//# sourceMappingURL=index_d585ca6373e15f3cc5be.js.map