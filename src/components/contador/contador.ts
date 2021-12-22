import { goto } from "../../router";
class Contador extends HTMLElement{
    shadow:ShadowRoot
    contador: number
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:"open"})
        this.contador = 3
    }
    connectedCallback(){
        this.render()
        const style = document.createElement("style")
        style.innerHTML = `
     
        .contador{
            display: flex;
            justify-content:center;
            align-items:center;
            height: 243px;
            width: 243px;
            font-size: 72px;
            font-weight:700;
            border: 23px solid #000;
            border-radius: 150px;
            margin:125px auto 0 auto;
        }
        
        `
        this.shadow.appendChild(style)
    }
    
  
    render(){
        //aca va el custom el de las jugadas se pueden definir por custom-el
        //o por atributos
        this.shadow.innerHTML=`
       <div class = "contador"></div>

      `
        var tiempo = this.shadow.querySelector(".contador")
        var numero = 4
        var contador = setInterval(cuentaRegresiva,1000)
        
        function cuentaRegresiva(number){
            numero--
            if (numero == 0){
                clearInterval(contador)
            }
            tiempo.innerHTML = `${numero}`

        }
    }
}
customElements.define("contador-el",Contador)