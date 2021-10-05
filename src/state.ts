type Jugada = "piedra" | "papel" | "tijera"
type Game = {
    myPlay:Jugada,
    computerPlay:Jugada
}

const state = {
        data:{
            currentGame:{
                myPlay:"",
                computerPlay:"" 
            },
        history:[{
            jugador: 0,
            bot: 0
        }]
        },
        listener:[],
        getState(){
           return this.data
        },
        setState(newState){
           this.data = newState;
             for (const cb of this.listener){
                 cb(newState)
             }
        },
        history(){
        return this.data.history
        },
        pushToHistory(play:Game){
            const currentState = this.getState()
           // currentState.history(play)
          
        //    currentState.history.push({
        //         jugador:play.myPlay,
        //         bot:play.computerPlay
        //    })    
        },
        whoWins(myPlay:Jugada,computerPlay:Jugada){
            const currentState = this.history()
            console.log(currentState.pop())
            const ganeConTijeras:boolean = myPlay == "tijera" && computerPlay == "papel"
            const ganeConPiedra:boolean = myPlay == "piedra" && computerPlay == "tijera" 
            const ganeConPapel:boolean = myPlay == "papel" && computerPlay == "piedra"
            const empateConPapel:boolean = myPlay == "papel"  && computerPlay == "papel"
            const empateConPiedra:boolean = myPlay == "piedra"  && computerPlay =="piedra"
            const empateContijera:boolean = myPlay == "tijera" && computerPlay =="tijera"
            const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras]
            const empate = [empateConPapel, empateConPiedra, empateContijera]
            if (gane.includes(true)){
               
                console.log("ganaste")
            }else if(empate.includes(true)){
                console.log("empataste")
            } else {
              
                console.log("perdiste")
                //cambio
            }
        },
        setMove(move:Jugada){
            const currentState = this.getState()
            currentState.currentGame.myPlay
        },
        subscribe(callback:(any)=>any){
            return this.listener.push(callback)
        }
    }

   export {state}
