function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},s=n.parcelRequireca0a;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},n.parcelRequireca0a=s),s.register("7PhYn",(function(n,t){var o,s;e(n.exports,"resolve",(()=>s),(e=>s=e)),e(n.exports,"register",(()=>o),(e=>o=e));var a={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},s=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s("7PhYn").register(JSON.parse('{"di8mO":"index.d5f80da7.js","eLIZk":"ganaste.6f650477.png","ehzwI":"perdiste.dac9bc02.png","4OFG8":"empataste.f51a5dfe.png","4ONZb":"rectangle.ad45fd73.png","cQkp1":"papel.5dad405c.png","407lu":"piedra.3e5be059.png","gtmBI":"tijera.c1b7bbd5.png"}'));class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.contador=3}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .contador{\n            display: flex;\n            justify-content:center;\n            align-items:center;\n            height: 243px;\n            width: 243px;\n            font-size: 72px;\n            font-weight:700;\n            border: 23px solid #000;\n            border-radius: 150px;\n            margin:125px auto 0 auto;\n        }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML='\n       <div class = "contador"></div>\n\n      ';var e=this.shadow.querySelector(".contador"),n=4,t=setInterval((function(o){0==--n&&clearInterval(t);e.innerHTML=`${n}`}),1e3)}}customElements.define("contador-el",a);const i={data:{currentGame:{myPlay:"",computerPlay:""},score:{jugador:0,bot:0},history:[{jugador:"",bot:""}]},listener:[],getState(){return this.data},setState(e){this.data=e;for(const n of this.listener)n(e);localStorage.setItem("saved-state",JSON.stringify(e))},init(){const e=localStorage.getItem("saved-state");e&&this.setState(JSON.parse(e))},history(){return this.data.history},pushToHistory(e){this.getState().history.push({jugador:e.myPlay,bot:e.computerPlay})},whoWins(e,n){const t=["papel"==e&&"papel"==n,"piedra"==e&&"piedra"==n,"tijera"==e&&"tijera"==n];return["papel"==e&&"piedra"==n,"piedra"==e&&"tijera"==n,"tijera"==e&&"papel"==n].includes(!0)?"ganaste":t.includes(!0)?"empate":"perdiste"},setMove(e){this.getState().currentGame.myPlay},subscribe(e){return this.listener.push(e)}};class r extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .boton{\n            display: block;\n            margin:0 auto 86px auto;\n            width:322px;\n            border: 10px solid #001997;\n            height:87px;\n            background: #006CFC;\n            border-radius:10px;\n            font-size:45px;\n            line-height:50px;\n            color: #D8FCFC;\n        }\n        \n        ",this.shadow.appendChild(e)}render(){const e=this.textContent;this.shadow.innerHTML=`\n        <button class="boton">${e}</button>\n\n      `}}customElements.define("btn-el",r);var l;s.register("kVZsc",(function(n,t){var o;e(n.exports,"getBundleURL",(()=>o),(e=>o=e));var s={};function a(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=s[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),s[e]=n),n}})),l=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("eLIZk");class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`\n        <div class="contenedor">\n            <h1 class="titulo">Ganaste</h1>\n            <img class= "estrella"  src="${l}" alt="estrella">\n        </div>\n        \n\n        `;const e=document.createElement("style");e.innerHTML="\n        .contenedor{\n            width:200px;\n            height:200px;\n            display:flex;\n            flex-direction:column;\n            justify-content:center;\n            align-items:center;\n            margin:50px auto ;\n        }\n        .titulo{\n            font-family: 'Odibee Sans', cursive;\n            font-size:55px;\n            color:#fff;\n            position: absolute;\n            letter-spacing: 0.05em;\n            margin: auto auto;\n        }   \n    ",this.shadow.appendChild(e)}}customElements.define("ganaste-el",d);var c;c=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("ehzwI");class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`\n        <div class="contenedor">\n            <h1 class="titulo">Perdiste</h1>\n            <img class= "estrella"  src="${c}" alt="estrella">\n        </div>\n    `;const e=document.createElement("style");e.innerHTML="\n        .contenedor{\n            width:200px;\n            height:200px;\n            display:flex;\n            flex-direction:column;\n            justify-content:center;\n            align-items:center;\n            margin:50px auto ;\n        }\n        .titulo{\n            font-family: 'Odibee Sans', cursive;\n            font-size:55px;\n            color:#fff;\n            position: absolute;\n            letter-spacing: 0.05em;\n            margin: auto auto;\n        }   \n        ",this.shadow.appendChild(e)}}customElements.define("perdiste-el",h);var p;p=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("4OFG8");class u extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`\n        <div class="contenedor">\n            <h1 class="titulo">Empate</h1>\n            <img class= "estrella"  src="${p}" alt="estrella">\n        </div>\n    `;const e=document.createElement("style");e.innerHTML="\n        .contenedor{\n            width:200px;\n            height:200px;\n            display:flex;\n            flex-direction:column;\n            justify-content:center;\n            align-items:center;\n            margin:50px auto ;\n        }\n        .titulo{\n            font-family: 'Odibee Sans', cursive;\n            font-size:55px;\n            color:#fff;\n            position: absolute;\n            letter-spacing: 0.05em;\n            margin: auto auto;\n        }  \n        \n        ",this.shadow.appendChild(e)}}customElements.define("empataste-el",u);var m;m=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("4ONZb");class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`\n        \n        <img class="tablero"  src="${m}" alt="tablero">\n        <div class="contenedor">\n            <h1 class = "titulo">Record</h1>\n            <p class = "p">Vos:${i.getState().score.jugador}</p>\n            <p class = "p">Máquina:${i.getState().score.bot}</p>\n        </div>\n       \n\n        `;const e=document.createElement("style");e.innerHTML="\n      \n        .tablero{\n            display:block;\n            margin:11px auto;\n        }\n        .titulo{\n            font-family: 'Odibee Sans', cursive;\n            font-size: 55px;\n            margin-bottom:0;\n        }\n        .p{\n            font-family: 'Odibee Sans', cursive;\n            font-size: 45px;\n            margin-bottom:0;\n            margin-top:0;\n            text-align:end;\n        }\n        .contenedor{\n            position:absolute;\n            top:410px;\n            left:50%; \n            transform:translate(-50%, -50%);\n        }\n        \n        ",this.shadow.appendChild(e)}}customElements.define("tablero-el",g);var f;f=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("cQkp1");var b;b=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("407lu");var w;w=s("kVZsc").getBundleURL("di8mO")+s("7PhYn").resolve("gtmBI");class x extends HTMLElement{constructor(){super(),this.manoDelBot=[f,b,w],this.opcionesDelBot=["papel","piedra","tijera"],this.shadow=this.attachShadow({mode:"open"});var e=Math.floor(Math.random()*this.manoDelBot.length);this.urlJugadaDelBot=this.manoDelBot[e],this.alt=this.opcionesDelBot[e]}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n        .container{\n            height: 100vh;\n            margin-top:-100px;\n        }\n        .bot{\n            display:none\n        }\n        .h1{\n            display:none\n        }\n       .opcion{\n          \n           width:103px;\n           height: 235px;\n           margin: 70px 5px 0 5px;\n          \n       }\n       #elegido{\n        margin-bottom:80px;\n        position: absolute;\n        left:35%;\n        bottom:-80px;\n       }\n       #noElegido{\n           display:none;\n       }\n       #botElegido{\n           display: inherit;\n           transform: rotate(180deg);\n           position : absolute;\n           top:-80px;\n           left: 35%;\n           \n           margin-top:80px;\n           height: 235px;\n       }\n      \n       .ganaste{\n           display:none;\n       }\n       .perdiste{\n           display:none;\n       }\n       #ganaste{\n        display: inherit;\n       }\n       #perdiste{\n        display: inherit;\n       }\n       .empate{\n           display:none;\n       }\n       #empate{\n           display:inherit;\n       }\n       .hand-cont{\n           width:100%;\n           display:flex;\n           justify-content:space-around;\n           margin-top:100px;\n       }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`\n        <div class= "container">\n            <contador-el class="reloj">4</contador-el>\n            <img class= "bot"  src="${this.urlJugadaDelBot} " alt="${this.alt}">\n            <div class="hand-cont">\n                <img class= "opcion"  src="${f} " alt="papel">\n                <img class = "opcion" src="${b} " alt="piedra">\n                <img class="opcion" src="${w} " alt="tijera">\n            </div>\n            \n        </div>\n       \n      `;var e=this.shadow.querySelectorAll(".opcion");const n=this.shadow.querySelector(".bot"),t=this.shadow.querySelector(".reloj");this.shadow.querySelector(".ganaste"),this.shadow.querySelector(".perdiste"),this.shadow.querySelector(".empate");e.forEach((o=>{o.addEventListener("click",(function(o){const s=this.getAttribute("alt"),a=o.target,r=n.getAttribute("alt");a.id="elegido",n.id="botElegido",t.remove();const l=i.getState();console.log(l),"ganaste"==i.whoWins(s,r)?(l.score.jugador++,setTimeout((function(){T("/winner")}),1500)):"empate"==i.whoWins(s,r)?setTimeout((function(){T("/draw")}),1500):(l.score.bot++,setTimeout((function(){T("/loser")}),1500)),i.setState({...l,currentGame:{myPlay:s,computerPlay:r}});const d={myPlay:s,computerPlay:r};i.pushToHistory(d),e.forEach((e=>{"elegido"!=e.id&&(e.id="noElegido")}))}))}))}}customElements.define("game-el",x);class y extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .titulo{\n            margin:115px auto 74px auto;\n            width:284px;\n            height:204px;\n            font-size:80px;\n            color: #009048;\n            font-weight:700;\n            line-height:70px;\n        }\n       \n        .manos{\n            display:flex;\n            justify-content: space-evenly;\n            \n        }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`\n       <h1 class= "titulo">Piedra Papel ó Tijera</h1>\n       \n       <btn-el href="/rules" class= "boton" >Empezar</btn-el>\n       <div class = "manos">\n        <img src="${f} " alt="papel">\n       <img src="${b} " alt="piedra">\n       <img src="${w} " alt="tijera">\n       </div>\n      `;this.shadow.querySelector(".boton").addEventListener("click",(function(e){T(this.getAttribute("href"))}))}}customElements.define("home-el",y);class v extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .p{\n            margin:115px auto 45px auto;\n            width:317px;\n            height:240px;\n            font-size:40px;\n            color: #009048;\n            font-weight:600;\n            line-height:40px;\n            text-align:center;\n        }\n     \n        .manos{\n            display:flex;\n            justify-content: space-evenly;\n            \n        }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`\n       <p class = "p">\n       Presioná jugar\n       y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n       </p>\n       <btn-el href="/game" class= "boton">¡Jugar!</btn-el>\n       <div class = "manos">\n        <img src="${f} " alt="papel">\n       <img src="${b} " alt="piedra">\n       <img src="${w} " alt="tijera">\n       </div>\n      `;this.shadow.querySelector(".boton").addEventListener("click",(function(e){T(this.getAttribute("href"))}))}}customElements.define("rules-el",v);class E extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .container{\n            position:absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n            background: rgba(136, 137, 73, 0.9); ;\n        }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML='\n        <div class="container">\n        <ganaste-el></ganaste-el>\n        <tablero-el></tablero-el>\n        <btn-el href="/rules" class= "boton">Volver a jugar</btn-el>\n        </div>\n        ';this.shadow.querySelector(".boton").addEventListener("click",(function(e){T("/rules")}))}}customElements.define("winner-el",E);class H extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .container{\n            position:absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n            background: #894949E5 90%;\n\n        }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML='\n       <div class="container">\n       <perdiste-el></perdiste-el>\n       <tablero-el></tablero-el>\n       <btn-el href="/rules" class= "boton">Volver a jugar</btn-el>\n       </div>\n    ';this.shadow.querySelector(".boton").addEventListener("click",(function(e){T("/rules")}))}}customElements.define("loser-el",H);class L extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n     \n        .container{\n            position:absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n            background: rgba(136, 137, 73, 0.9); ;\n        }\n        \n        ",this.shadow.appendChild(e)}render(){this.shadow.innerHTML='\n       <div class="container">\n       <empataste-el></empataste-el>\n       <tablero-el></tablero-el>\n       ',setTimeout((function(){T("/rules")}),1500)}}customElements.define("draw-el",L);function S(){return location.host.includes("github.io")}function T(e){const n=S()?"/desafio-m5"+e:e;history.pushState({},"",n),function(e){S()&&e.replace("/desafio-m5","");const n=[{route:/\/welcome/,page:" <home-el></home-el> "},{route:/\/rules/,page:"<rules-el></rules-el> "},{route:/\/game/,page:"<game-el></game-el>"},{route:/\/winner/,page:"<winner-el></winner-el>"},{route:/\/loser/,page:"<loser-el></loser-el>"},{route:/\/draw/,page:"<draw-el></draw-el>"}];for(const t of n)if(t.route.test(e)){const e=t.page,n=document.querySelector(".container");n.firstChild&&n.firstChild.remove(),n.innerHTML=e}}(n)}window.addEventListener("load",(()=>{i.init();var e=location.pathname;console.log(e),T(e)}));
//# sourceMappingURL=index.d5f80da7.js.map
