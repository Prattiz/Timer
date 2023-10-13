import { ReactNode, createContext, useReducer } from "react";
import { useState } from "react"

interface Cycle {

    id:string,
    task: string,
    minutesAmount: number,
    startTime: Date,
    interruptedDate?: Date,
    finishedDate?: Date,  
}

interface CycleDateProps{
    task: string,
    minutesAmount: number,

}

interface CyclesContextProps{
    cycle: Cycle[]
    activeCycle: Cycle | undefined,
    active: string | null,
    markCycleAsFinished: () => void,
    amountSeconds: number,
    setSecondsPassed: (seconds: number) => void
    createCycle: (data: CycleDateProps) => void
    interruptCycle: () => void
}

interface CyclesState{
  cycle: Cycle[],
  active: string | null
}

interface ChildrenProps{
    children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextProps)

export function CycleContextProvider({children}: ChildrenProps){
    const [cycleState, dispatch] = useReducer((state: CyclesState, action: any) => {

      switch(action.type){

        case "ADD_NEW_CYCLE":
          return {
            ...state, 
            cycle: [state.cycle, action.payload.newCycle],
            active: action.payload.newCycle.id,
          }
        case "INTERRUPT_CURRENT_CYCLE":
          return{
            ...state,
  
            cycle: state.cycle.map((cycle) => {
              if(cycle.id === state.active){
                return{...cycle, finishedDate: new Date() }
              } else{
                return cycle
              }}
            ),
  
            active: null
          }
        case "ADD_CYCLE_FINISHED":
          return{
            ...state,
  
            cycle: state.cycle.map((cycle) => {
              if(cycle.id === state.active){
                return{...cycle, finishedDate: new Date() }
              } else{
                return cycle
              }}
            ),
  
            active: null
          }
        
        default: return state
      }    
    }, {cycle: [], active: null })

    const { cycle, active } = cycleState
    const [amountSeconds, setAmountSeconds] = useState(0);
    const activeCycle = cycle.find((cycle) => cycle.id === active);

    function markCycleAsFinished(){
       
        dispatch({
          type:"ADD_CYCLE_FINISHED",
          payload:{
            data: active
          }
        })
      }
    
      function setSecondsPassed(seconds: number){
        setAmountSeconds(seconds)
      }

      function createCycle(data: CycleDateProps){
   
        const id =  String(new Date().getTime());
    
        const newCycle: Cycle = {
          id,
          task: data.task,
          minutesAmount: data.minutesAmount,
          startTime: new Date() 
        };
    
        dispatch({
          type:"ADD_NEW_CYCLE",
          payload:{
            newCycle,
          }
        })
        
        setAmountSeconds(0)
      }
    
      function interruptCycle(){
        dispatch({
          type:"INTERRUPT_CURRENT_CYCLE",
          payload:{
            activeCycle,
          }
        })
        
        document.title = "Timer"
      }

      
    return(
        <CyclesContext.Provider
         value={{
            cycle,
            activeCycle,
             active,
            markCycleAsFinished,
            amountSeconds, 
            setSecondsPassed, 
            createCycle, 
            interruptCycle
            }}>
            
            {children}
            
        </CyclesContext.Provider>
    )
}