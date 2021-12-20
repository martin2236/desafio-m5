import "./components/contador/contador"
import {state} from "./state"
import { router } from "./router"
import "./components/boton/index"
import "./components/estrellas/ganador"
import "./components/estrellas/perdedor"
import "./components/estrellas/empate"
import "./components/resultados/tablero"





window.addEventListener("load",()=>{
state.init();
router(location.pathname)
})