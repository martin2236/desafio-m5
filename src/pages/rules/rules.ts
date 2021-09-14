const papel = require("url:../../img/papel.png");
const piedra = require("url:../../img/piedra.png");
const tijera = require("url:../../img/tijera.png");
import { goto } from "../../router";

class RulesPage extends HTMLElement{
    shadow:ShadowRoot
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render()
        const style = document.createElement("style")
        style.innerHTML = `
     
        .p{
            margin:115px auto 45px auto;
            width:317px;
            height:240px;
            font-size:40px;
            color: #009048;
            font-weight:600;
            line-height:40px;
            text-align:center;
        }
        .boton{
            display: block;
            margin:0 auto 86px auto;
            width:322px;
            border: 10px solid #001997;
            height:87px;
            background: #006CFC;
            border-radius:10px;
            font-size:45px;
            line-height:50px;
            color: #D8FCFC;
        }
        .manos{
            display:flex;
            justify-content: space-evenly;
            
        }
        
        `
        this.shadow.appendChild(style)
    }
    render(){
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML=`
       <p class = "p">
       Presioná jugar
       y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
       </p>
       <button href="/game" class= "boton">¡Jugar!</button>
       <div class = "manos">
        <img src="${papel} " alt="papel">
       <img src="${piedra} " alt="piedra">
       <img src="${tijera} " alt="tijera">
       </div>
      `
      const boton = this.shadow.querySelector(".boton")
      boton.addEventListener("click",function(e){
         const ruta = this.getAttribute("href")
         goto(ruta)
      })
    }
}
customElements.define("rules-el",RulesPage)