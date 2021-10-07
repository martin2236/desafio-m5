import "./components/contador/contador"
import {state} from "./state"
import { router } from "./router"
import "./components/boton/index"
import "./components/estrellas/ganador"
import "./components/estrellas/perdedor"
import "./components/resultados/tablero"
import "./components/ganador/index"
import "./components/perdedor/index"




window.addEventListener("load",()=>{
router(location.pathname)
})