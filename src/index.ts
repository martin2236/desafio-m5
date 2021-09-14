
import "./components/contador/contador"
import {state} from "./state"
import { router } from "./router"



window.addEventListener("load",()=>{
router(location.pathname)
})