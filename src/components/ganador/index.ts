import { goto } from "../../router";
class Ganador extends HTMLElement{
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
            background: rgba(136, 137, 73, 0.9); ;
        }
        
        `
        this.shadow.appendChild(style)
    }
    
  
    render(){
        
        this.shadow.innerHTML=`
       <div class="container">
       <ganaste-el></ganaste-el>
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
customElements.define("ganador-el",Ganador)