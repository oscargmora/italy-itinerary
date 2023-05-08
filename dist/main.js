(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),i=t.n(a),o=t(645),r=t.n(o),c=t(667),d=t.n(c),s=new URL(t(202),t.b),l=r()(i()),m=d()(s);l.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* Custom Font */\n\n@font-face {\n    font-family: 'caveat';\n    src: url("+m+");\n}\n\n/* Overall Website CSS */\n\nhtml {\n    font-family: 'caveat', sans-serif;\n    color: #e7e7e9;\n}\n\nbody {\n    display: flex;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center center;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    height: 100vh;\n    width: 100vw;\n}\n\n/* Header */\n\nheader,\nfooter {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.818);\n}\n\n#title-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2.5em;\n    margin-top: 0.5em;\n    margin-bottom: 0.2em;\n}\n\n.tab-button {\n    font-family: 'caveat', sans-serif;\n    border: none;\n    background: none;\n    font-size: 1.5em;\n    height: 2em;\n    color: #e7e7e9;\n}\n\n.tab-button:hover {\n    cursor: pointer;\n    color: yellow;\n}\n\n/* Main Content */\n\n#content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 0.5;\n    background-color: rgba(0, 0, 0, 0.818);\n    margin: 2em 10em 2em 10em;\n    border-radius: 1em;\n}\n\n#content > div {\n    display: flex;\n    flex-direction: column;\n    gap: 2em;\n}\n\n#main-title,\n#sub-title {\n    font-size: 2.5em;\n    text-align: center;\n}\n\n/* Home Page */\n\n#main-img {\n    height: 24em;\n}\n\n/* Tab Pages */\n\n.list-header {\n    margin: 1em;\n    font-size: 2em;\n}\n\n.li {\n    margin: 1em;\n}\n\n.tab-img {\n    height: 5em;\n}\n\n.img-ul-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Main Title Custom Property */\n\n.main-div-rome,\n.main-div-amalfi {\n    padding-top: 2em;\n}\n\n/* Footer*/\n\nfooter {\n    font-size: 1.5em;\n}\n\n#github-link {\n    margin: 0.5em;\n    color: #e7e7e9;\n    text-decoration: none;\n}\n\n#github-link:hover {\n    color: yellow;\n    text-decoration: none;\n}\n\n/* Styling for Phone */\n\n@media (max-width: 540px) {\n    #content {\n        margin: 2em 2em 2em 2em;\n    }\n\n    #main-title,\n    #sub-title {\n        font-size: 1.6em;\n    }\n\n    #main-img {\n        height: 16em;\n    }\n\n    .list-header {\n        margin: 1em;\n        font-size: 1em;\n    }\n\n    .main-div-rome {\n        padding-top: 0;\n    }\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},r=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],l=o[s]||0,m="".concat(s," ").concat(l);o[s]=l+1;var u=t(m),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=i(p,a);a.byIndex=c,n.splice(c,0,{identifier:m,updater:f,references:1})}r.push(m)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=t(o[r]);n[c].references--}for(var d=a(e,i),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},202:(e,n,t)=>{e.exports=t.p+"a58d6a2a86fd431d5635.ttf"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"ad5f4841d21ca9ff6fff.jpeg",n=t.p+"565cf345d994d6c67ded.png",a=document.querySelector("#content"),i=t.p+"cfbdfa798e8308f893bb.jpeg",o=document.querySelector("#content"),r=["3:30 PM: Departure from MIA Airport"],c=["2:05 PM: Arrival in Naples","4:30 PM: Train Ride from Napoli Centrale to Rome","7:00 PM: Arrive at AirBNB","8:00 PM: Arrive at Campo de Fiori"];function d(e,n,t){const a=document.createElement("h4");a.classList.add("list-header"),a.innerText=n,e.appendChild(a);const i=document.createElement("ul");i.classList.add("ul"),t.forEach((e=>{const n=document.createElement("li");n.classList.add("li"),n.innerText=e,i.appendChild(n)})),a.appendChild(i)}const s=t.p+"58ba09680f88eaa05acd.jpg",l=t.p+"4693f3280d45f93086c1.png",m=t.p+"e370731c5fd95f0f875a.png",u=document.querySelector("#content"),p=["6:00 AM: Trevi Fountain","5:30 PM: Colosseum","6:30 PM: Roman Forum","7:30 PM: Club/Bar"],f=["7:00 AM: Vatican City","8:00 PM: Campo de Fiori"],h=t.p+"0ac86ae421eca8d7feb0.png",g=t.p+"72249b4ccb11c9ea7612.png",b=t.p+"9a501cf3cd7dd4f23d99.png",v=t.p+"10c2f6b1de59d3e1def8.png",y=t.p+"6a98868a62a449940d16.png",C=document.querySelector("#content"),E=["6:30 AM - 8:30 AM: Train from Rome Termini to Napoli Centrale","9:00 AM - 10:30 AM: Bus from Napoli Centrale to Sorrento Enjoy Traveling Office","11:00 AM: Freeway Scooter Pickup","11:30 AM: 7 Hostel Check-In","12:30 AM: Bagni Regina Giovanna"],L=["9:30 AM: Capri Boat Tour","9:00 PM: Music on the Rocks"],M=["11:00 AM: Furore Di Fiordo","5:30 PM: Cooking Class","10:00 PM: Wine on the Beach"],x=["11:00 AM: Spiaggia Grande","4:00 PM: Franco's Bar","9:00 PM: La Tagliata"];function A(e,n,t,a){const i=document.createElement("h4");i.classList.add("list-header"),i.innerText=n,e.appendChild(i);const o=document.createElement("ul"),r=document.createElement("container");r.classList.add("img-ul-container"),o.appendChild(r);const c=document.createElement("img");c.src=a,c.classList.add("tab-img"),r.appendChild(c);const d=document.createElement("container");d.classList.add("li-container"),r.appendChild(d),t.forEach((e=>{const n=document.createElement("li");n.classList.add("li"),n.innerText=e,d.appendChild(n)})),i.appendChild(o)}function T(e,n,t,a){const i=document.createElement("h4");i.classList.add("list-header"),i.innerText=n,e.appendChild(i);const o=document.createElement("ul"),r=document.createElement("container");r.classList.add("img-ul-container"),o.appendChild(r);const c=document.createElement("container");c.classList.add("li-container"),r.appendChild(c),t.forEach((e=>{const n=document.createElement("li");n.classList.add("li"),n.innerText=e,c.appendChild(n)}));const d=document.createElement("img");d.src=a,d.classList.add("tab-img"),r.appendChild(d),i.appendChild(o)}const k=t.p+"f3aa2aa5be7774b165c5.jpeg",S=document.querySelector("#content"),P=["10:00 AM: Ferry to Naples","2:00 PM: Bed & Fly Check-In"],w=["7:40 AM: Departure from Naples","3:30 PM: Land in MIA"];function q(e,n,t){const a=document.createElement("h4");a.classList.add("list-header"),a.innerText=n,e.appendChild(a);const i=document.createElement("ul");i.classList.add("ul"),t.forEach((e=>{const n=document.createElement("li");n.classList.add("li"),n.innerText=e,i.appendChild(n)})),a.appendChild(i)}const I=document.querySelector("#departure"),j=document.querySelector("#rome"),F=document.querySelector("#amalfi"),N=document.querySelector("#arrival");function B(){const e=document.querySelector("#content"),n=document.querySelector("#main-div");n&&e.removeChild(n)}const R=()=>{I.addEventListener("click",(()=>{B(),(()=>{document.body.style.backgroundImage=`url('${i}')`;const e=document.createElement("div");e.classList.add("div"),e.setAttribute("id","main-div"),o.appendChild(e);const n=document.createElement("div");n.classList.add("main-container"),e.appendChild(n);const t=document.createElement("p");t.innerText="Departure Information",t.setAttribute("id","main-title"),n.appendChild(t);const a=document.createElement("div");a.classList.add("sub-container"),e.appendChild(a),d(a,"May 8th",r),d(a,"May 9th",c)})()})),j.addEventListener("click",(()=>{B(),(()=>{document.body.style.backgroundImage=`url('${s}')`;const e=document.createElement("div");e.classList.add("div"),e.classList.add("main-div-rome"),e.setAttribute("id","main-div"),u.appendChild(e);const n=document.createElement("div");n.classList.add("main-container"),e.appendChild(n);const t=document.createElement("p");t.innerText="When in Rome",t.setAttribute("id","main-title"),n.appendChild(t);const a=document.createElement("div");a.classList.add("sub-container"),e.appendChild(a),function(e,n,t,a){const i=document.createElement("h4");i.classList.add("list-header"),i.innerText="May 10th",e.appendChild(i);const o=document.createElement("ul"),r=document.createElement("container");r.classList.add("img-ul-container"),o.appendChild(r);const c=document.createElement("img");c.src=a,c.classList.add("tab-img"),r.appendChild(c);const d=document.createElement("container");d.classList.add("li-container"),r.appendChild(d),t.forEach((e=>{const n=document.createElement("li");n.classList.add("li"),n.innerText=e,d.appendChild(n)})),i.appendChild(o)}(a,0,p,l),function(e,n,t,a){const i=document.createElement("h4");i.classList.add("list-header"),i.innerText="May 11th",e.appendChild(i);const o=document.createElement("ul"),r=document.createElement("container");r.classList.add("img-ul-container"),o.appendChild(r);const c=document.createElement("container");c.classList.add("li-container"),r.appendChild(c),t.forEach((e=>{const n=document.createElement("li");n.classList.add("li"),n.innerText=e,c.appendChild(n)}));const d=document.createElement("img");d.src=a,d.classList.add("tab-img"),r.appendChild(d),i.appendChild(o)}(a,0,f,m)})()})),F.addEventListener("click",(()=>{B(),(()=>{document.body.style.backgroundImage=`url('${h}')`;const e=document.createElement("div");e.classList.add("div"),e.classList.add("main-div-amalfi"),e.setAttribute("id","main-div"),C.appendChild(e);const n=document.createElement("div");n.classList.add("main-container"),e.appendChild(n);const t=document.createElement("p");t.innerText="Welcome to Amalfi!",t.setAttribute("id","main-title"),n.appendChild(t);const a=document.createElement("div");a.classList.add("sub-container"),e.appendChild(a),A(a,"May 12th",E,g),T(a,"May 13th",L,b),A(a,"May 14th",M,v),T(a,"May 15th",x,y)})()})),N.addEventListener("click",(()=>{B(),(()=>{document.body.style.backgroundImage=`url('${k}')`;const e=document.createElement("div");e.classList.add("div"),e.setAttribute("id","main-div"),S.appendChild(e);const n=document.createElement("div");n.classList.add("main-container"),e.appendChild(n);const t=document.createElement("p");t.innerText="Arrival Information",t.setAttribute("id","main-title"),n.appendChild(t);const a=document.createElement("div");a.classList.add("sub-container"),e.appendChild(a),q(a,"May 16th",P),q(a,"May 17th",w)})()}))};var z=t(379),$=t.n(z),H=t(795),O=t.n(H),D=t(569),Z=t.n(D),U=t(565),W=t.n(U),_=t(216),G=t.n(_),J=t(589),Q=t.n(J),V=t(426),K={};K.styleTagTransform=Q(),K.setAttributes=W(),K.insert=Z().bind(null,"head"),K.domAPI=O(),K.insertStyleElement=G(),$()(V.Z,K),V.Z&&V.Z.locals&&V.Z.locals,(()=>{document.body.style.backgroundImage=`url('${e}')`;const t=document.createElement("div");t.classList.add("div"),t.setAttribute("id","main-div"),a.appendChild(t);const i=document.createElement("div");i.classList.add("main-container"),t.appendChild(i);const o=document.createElement("p");o.innerText="Bella Ciao! Pronto per l'italia?",o.setAttribute("id","main-title"),i.appendChild(o);const r=document.createElement("div");r.classList.add("img-container"),t.appendChild(r);const c=document.createElement("img");c.src=n,c.setAttribute("id","main-img"),r.appendChild(c);const d=document.createElement("div");d.classList.add("sub-container"),t.appendChild(d);const s=document.createElement("p");s.innerText="Choose a Selection Above!",s.setAttribute("id","sub-title"),d.appendChild(s)})(),R()})()})();