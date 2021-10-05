
import "./components/contador/contador"
import {state} from "./state"
import { router } from "./router"
import "./components/boton/index"


window.addEventListener("load",()=>{
router(location.pathname)
})