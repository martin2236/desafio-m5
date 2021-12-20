const empate = require("url:../../img/empataste.png");
class Estrellae extends HTMLElement{
    shadow:ShadowRoot
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        this.render()
    }
    render(){
        this.shadow.innerHTML=`
        <div class="contenedor">
            <h1 class="titulo">Empate</h1>
            <img class= "estrella"  src="${empate}" alt="estrella">
        </div>
    `

        const style = document.createElement("style")
        style.innerHTML = `
        .contenedor{
            width:200px;
            height:200px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin:50px auto ;
        }
        .titulo{
            font-family: 'Odibee Sans', cursive;
            font-size:55px;
            color:#fff;
            position: absolute;
            letter-spacing: 0.05em;
            margin: auto auto;
        }  
        
        `
        this.shadow.appendChild(style);
    }
}
customElements.define("empataste-el",Estrellae);