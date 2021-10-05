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
       <div class=""></div>

      `
        
    }
}
customElements.define("ganador-el",Ganador)