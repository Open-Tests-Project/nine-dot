(()=>{"use strict";var t={395:(t,e,n)=>{function o(){}function s(t){return t()}function r(){return Object.create(null)}function a(t){t.forEach(s)}function c(t){return"function"==typeof t}function d(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}let f;function h(t){f=t}n.d(e,{Z:()=>M}),new Set,new Set;const $=[],m=[],g=[],b=[],y=Promise.resolve();let x=!1;function _(t){g.push(t)}let k=!1;const w=new Set;function v(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),E(e.$$)}for(h(null),$.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];w.has(e)||(w.add(e),e())}g.length=0}while($.length);for(;b.length;)b.pop()();x=!1,k=!1,w.clear()}}function E(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const O=new Set;let S;function C(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e,n,d,l,i,p=[-1]){const m=f;h(t);const g=t.$$={fragment:null,ctx:null,props:i,update:o,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:r(),dirty:p,skip_bound:!1};let b=!1;if(g.ctx=n?n(t,e.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return g.ctx&&l(g.ctx[e],g.ctx[e]=s)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](s),b&&function(t,e){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,y.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],g.update(),b=!0,a(g.before_update),g.fragment=!!d&&d(g.ctx),e.target){if(e.hydrate){const t=(E=e.target,Array.from(E.childNodes));g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();e.intro&&((k=t.$$.fragment)&&k.i&&(O.delete(k),k.i(w))),function(t,e,n){const{fragment:o,on_mount:r,on_destroy:d,after_update:l}=t.$$;o&&o.m(e,n),_((()=>{const e=r.map(s).filter(c);d?d.push(...e):a(e),t.$$.on_mount=[]})),l.forEach(_)}(t,e.target,e.anchor),v()}var k,w,E;h(m)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){C(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function j(t){let e,n,s;return{c(){var t;e=p("header"),e.textContent="nine dot task",t=" ",n=document.createTextNode(t),s=p("main"),s.innerHTML='<div class="dots-container"><table><tr><td><span class="dot"></span></td> \n                <td><span class="dot"></span></td> \n                <td><span class="dot"></span></td></tr> \n            <tr><td><span class="dot"></span></td> \n                <td><span class="dot"></span></td> \n                <td><span class="dot"></span></td></tr> \n            <tr><td><span class="dot"></span></td> \n                <td><span class="dot"></span></td> \n                <td><span class="dot"></span></td></tr></table></div>'},m(t,o){i(t,e,o),i(t,n,o),i(t,s,o)},p:o,i:o,o,d(t){t&&u(e),t&&u(n),t&&u(s)}}}function q(t){return console.log("ciao"),[]}const M=class extends class{$destroy(){C(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,q,j,d,{})}}}},e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),new(0,n(395).Z)({target:document.querySelector("#app")})})();
//# sourceMappingURL=index_5cbb083ab7abef03b039.js.map