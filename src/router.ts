import "./pages/game/game"
import "./pages/welcome/welcome"
import "./pages/rules/rules"
import "./pages/results/winner"
import "./pages/results/loser"
import "./pages/results/draw"

export function router(ruta){

const route = [
    
    {
        route:/\/welcome/,
        page:` <home-el></home-el> `
    },
  
    {
        route:/\/rules/,
        page:`<rules-el></rules-el> `
    },
    {
        route:/\/game/,
        page:`<game-el></game-el>`
    }, 
    {
        route:/\/winner/,
        page:`<winner-el></winner-el>`
    },
    {
        route:/\/loser/,
        page:`<loser-el></loser-el>`
    },
    {
        route:/\/draw/,
        page:`<draw-el></draw-el>`
    },

]
for (const r of route){
    if(r.route.test(ruta)){
        const el = r.page
       const contenedor = document.querySelector(".container")
       if(contenedor.firstChild){
           contenedor.firstChild.remove()
       }
       contenedor.innerHTML = el
    }
}

}

export function goto(path){
    history.pushState({},"",path)
    router(path)
}