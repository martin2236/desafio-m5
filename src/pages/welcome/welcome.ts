const papel = require("url:../../img/papel.png");
const piedra = require("url:../../img/piedra.png");
const tijera = require("url:../../img/tijera.png");
import { goto } from "../../router";

class WelcomePage extends HTMLElement{
    shadow:ShadowRoot
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render()
        const style = document.createElement("style")
        style.innerHTML = `
     
        .titulo{
            margin:115px auto 74px auto;
            width:284px;
            height:204px;
            font-size:80px;
            color: #009048;
            font-weight:700;
            line-height:70px;
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
       <h1 class= "titulo">Piedra Papel ó Tijera</h1>
       
       <btn-el href="/rules" class= "boton" >Empezar</btn-el>
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
customElements.define("home-el",WelcomePage)