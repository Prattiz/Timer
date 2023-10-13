import { ReactNode, createContext, useState, useReducer } from "react";
import { Cycle, cyclesReducer, ActionTypes } from "../reducers/reducers"



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



interface ChildrenProps{
    children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextProps)

export function CycleContextProvider({children}: ChildrenProps){
    
  const [ cycleState, dispatch ] = useReducer( cyclesReducer, 
    {
      cycle: [],
      active:null
    })

    const { cycle, active } = cycleState
    const [amountSeconds, setAmountSeconds] = useState(0);
    const activeCycle = cycle.find((cycle) => cycle.id === active);

    function markCycleAsFinished(){
       
        dispatch({
          type: ActionTypes.ADD_CYCLE_FINISHED,
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
          type:ActionTypes.ADD_NEW_CYCLE,
          payload:{
            newCycle,
          }
        })
        
        setAmountSeconds(0)
      }
    
      function interruptCycle(){
        dispatch({
          type:ActionTypes.INTERRUPT_CURRENT_CYCLE,
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