import { state } from "../../state";

const tablero = require("url:../../img/rectangle.png");
class Resultado extends HTMLElement{
    shadow:ShadowRoot
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        this.render()
    }
    render(){
        this.shadow.innerHTML=`
        
        <img class="tablero"  src="${tablero}" alt="tablero">
        <div class="contenedor">
            <h1 class = "titulo">Record</h1>
            <p class = "p">Vos:${state.history().jugador}</p>
            <p class = "p">Máquina:${state.history().bot}</p>
        </div>
       

        `

        const style = document.createElement("style")
        style.innerHTML = `
      
        .tablero{
            display:block;
            margin:11px auto;
        }
        .titulo{
            font-family: 'Odibee Sans', cursive;
            font-size: 55px;
            margin-bottom:0;
        }
        .p{
            font-family: 'Odibee Sans', cursive;
            font-size: 45px;
            margin-bottom:0;
            margin-top:0;
            text-align:end;
        }
        .contenedor{
            position:absolute;
            top:410px;
            left:50%; 
            transform:translate(-50%, -50%);
        }
        
        `
        this.shadow.appendChild(style);
    }
}
customElements.define("tablero-el",Resultado);