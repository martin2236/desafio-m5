import "./components/contador/contador"
import {state} from "./state"
import "./components/boton/index"
import "./components/estrellas/ganador"
import "./components/estrellas/perdedor"
import "./components/estrellas/empate"
import "./components/resultados/tablero"
import { goto } from "./router"





window.addEventListener("load",()=>{
state.init();
var path = location.pathname
console.log(path)
goto(path)
})