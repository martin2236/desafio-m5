const papel = require("url:../../img/papel.png");
const piedra = require("url:../../img/piedra.png");
const tijera = require("url:../../img/tijera.png");
import { goto } from "../../router";
import {state} from"../../state"

class GamePage extends HTMLElement{
    shadow:ShadowRoot
    opcionesDelBot:string[]= [papel, piedra, tijera]
    jugadaDelBot: string
    alt:string
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        var random = Math.floor(Math.random() * this.opcionesDelBot.length)
        this.jugadaDelBot = this.opcionesDelBot[random]
        var direccion = this.jugadaDelBot.split("/")
        this.alt=direccion[3].split(".")[0]
    }
    connectedCallback(){
        this.render()
     
        state.subscribe(()=>{
           const lastState = state.getState()
        })
        const style = document.createElement("style")
        style.innerHTML = `
        .container{
            height: 100vh;
        }
        .bot{
            display:none
        }
     
       .opcion{
           background-color:#FFCAB9;
           width:103px;
           height: 235px;
           margin: 70px 5px 0 5px;
          
       }
       #elegido{
        margin-bottom:80px;
        position: absolute;
        bottom:0;
       }
       #noElegido{
           display:none;
       }
       #botElegido{
           display: inherit;
           transform: rotate(180deg);
           background-color:#FFCAB9;
           position : absolute;
           top:0;
           left: 0;
           right: 0;
           margin-top:80px;
           height: 235px;
       }
       #reloj{
           display:none;
       }
        
        `
        this.shadow.appendChild(style)
    }
    
  
    render(){
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML=`
        <div class= "container">
        <contador-el class="reloj"></contador-el>
        <img class= "bot"  src="${this.jugadaDelBot} " alt="${this.alt}">
        <img class= "opcion"  src="${papel} " alt="papel">
        <img class = "opcion" src="${piedra} " alt="piedra">
        <img class="opcion" src="${tijera} " alt="tijera">
     
        </div>
       
      `
     var manos = this.shadow.querySelectorAll(".opcion")
      const botOpcion = this.shadow.querySelector(".bot") as any
      const reloj = this.shadow.querySelector(".reloj")

      //itera los elementos img
    manos.forEach((item)=>{
        item.addEventListener("click",function(e){

            const miOpcion = this.getAttribute("alt") 
            const elegido = e.target as any
            const computerMove =  botOpcion.getAttribute("alt")
           //muestra las opciones elegidas
           
            elegido.id = "elegido"
            botOpcion.id = "botElegido"
            reloj.id = "reloj"
            

            //manipulacion del state
           const lastState = state.getState()
            state.setState({...lastState,data:{
                 myPlay:miOpcion,
                computerPlay:computerMove
                } 
            })
           state.pushToHistory({
            myPlay:miOpcion,
            computerPlay:computerMove
           })

           state.whoWins(miOpcion,computerMove)
        console.log(state.getState())
            //pone display none a los no elegidos
           manos.forEach((item2)=>{
             if (item2.id != "elegido"){item2.id = "noElegido"}
           })

        })
     
    })
   
    }
}
customElements.define("game-el",GamePage)