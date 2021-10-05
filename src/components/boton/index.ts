class Boton extends HTMLElement{
    shadow:ShadowRoot
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        
    }
    connectedCallback(){
        this.render()
        const style = document.createElement("style")
        style.innerHTML = `
     
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
        
        `
        this.shadow.appendChild(style)
    }
    
  
    render(){
       const texto = this.textContent
        this.shadow.innerHTML=`
        <button class="boton">${texto}</button>

      `
    }
}
customElements.define("btn-el",Boton)