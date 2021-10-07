import { goto } from "../../router";
class Perdedor extends HTMLElement{
    shadow:ShadowRoot
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        
    }
    connectedCallback(){
        this.render()
        const style = document.createElement("style")
        style.innerHTML = `
     
        .container{
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            background: #894949E5 90%;

        }
        
        `
        this.shadow.appendChild(style)
    }
    
  
    render(){
        
        this.shadow.innerHTML=`
       <div class="container">
       <perdiste-el></perdiste-el>
       <tablero-el></tablero-el>
       <btn-el href="/welcome" class= "boton">Volver a jugar</btn-el>
       </div>

      `
      const boton = this.shadow.querySelector(".boton")
      boton.addEventListener("click",function(e){
         const ruta = this.getAttribute("href")
         goto(ruta)
      })

    }
        
    
}
customElements.define("perdedor-el",Perdedor)