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
        <h1 class="titulo">Empate</h1>
        <img class= "estrella"  src="${empate}" alt="estrella">

        `

        const style = document.createElement("style")
        style.innerHTML = `
        .titulo{
            font-family: 'Odibee Sans', cursive;
            font-size:55px;
            color:#fff;
            position: absolute;
            top:95px;
            left:120px;
            letter-spacing: 0.05em;
            
            
        }
        .estrella{
            display:block;
            margin:30px auto;
        }
        
        `
        this.shadow.appendChild(style);
    }
}
customElements.define("empataste-el",Estrellae);