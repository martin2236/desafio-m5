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
        
    
        
    const style = document.createElement("style")
        style.innerHTML = `
        .container{
            height: 100vh;
        }
        .bot{
            display:none
        }
        .h1{
            display:none
        }
       .opcion{
          
           width:103px;
           height: 235px;
           margin: 70px 5px 0 5px;
          
       }
       #elegido{
        margin-bottom:80px;
        position: absolute;
        left:35%;
        bottom:-80px;
       }
       #noElegido{
           display:none;
       }
       #botElegido{
           display: inherit;
           transform: rotate(180deg);
           position : absolute;
           top:-80px;
           left: 35%;
           
           margin-top:80px;
           height: 235px;
       }
      
       .ganaste{
           display:none;
       }
       .perdiste{
           display:none;
       }
       #ganaste{
        display: inherit;
       }
       #perdiste{
        display: inherit;
       }
       .empate{
           display:none;
       }
       #empate{
           display:inherit;
       }
        
        `
        this.shadow.appendChild(style)
    }
    
  
    render(){
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML=`
        <div class= "container">
        <contador-el class="reloj">4</contador-el>
        <img class= "bot"  src="${this.jugadaDelBot} " alt="${this.alt}">
        <img class= "opcion"  src="${papel} " alt="papel">
        <img class = "opcion" src="${piedra} " alt="piedra">
        <img class="opcion" src="${tijera} " alt="tijera">
        <ganador-el class="ganaste"></ganador-el>
        <perdedor-el class="perdiste"></perdedor-el>
        <empate-el class="empate"></empate-el>
     
        </div>
       
      `
     var manos = this.shadow.querySelectorAll(".opcion")
      const botOpcion = this.shadow.querySelector(".bot") as any
      const reloj = this.shadow.querySelector(".reloj")
      const ganaste = this.shadow.querySelector(".ganaste")
      const perdiste = this.shadow.querySelector(".perdiste")
      const empataste = this.shadow.querySelector(".empate")
      //itera los elementos img
    manos.forEach((item)=>{
        item.addEventListener("click",function(e){

            const miOpcion = this.getAttribute("alt") 
            const elegido = e.target as any
            const computerMove =  botOpcion.getAttribute("alt")
            
           //muestra las opciones elegidas por el jugador y el bot
            elegido.id = "elegido"
            botOpcion.id = "botElegido"

           //si se hace click en una opcion remueve el elemento contador
           //si contador llega a 0 reinicia el juego 
            if(reloj.textContent == "0"){
                goto("/rules")
            }
            reloj.remove()
          
        
            //le paso los valores de la jugada al currentGame
            const lastState = state.getState()
            state.setState({...lastState,
                currentGame:{
                    myPlay:miOpcion,
                    computerPlay:computerMove 
                },
                
                })

                
           // consulta con el estado quien gano y muestra el componente correspondiente
            if (state.whoWins(miOpcion,computerMove)=="ganaste"){
                    lastState.score.jugador++
                    setTimeout(function(){ ganaste.id = "ganaste" }, 500);
           }else if(state.whoWins(miOpcion,computerMove)=="empate"){
                    empataste.id = "empate"
                    setTimeout(function(){goto("/game")  }, 1500);
           } else {
            lastState.score.bot++
            setTimeout(function(){ perdiste.id = "perdiste" }, 1000);
           }

               
            //pone display none a los no elegidos
           manos.forEach((item2)=>{
             if (item2.id != "elegido"){item2.id = "noElegido"}
           })

        })
     
    })
    
         
    }
}
customElements.define("game-el",GamePage)