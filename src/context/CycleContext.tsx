import { ReactNode, createContext } from "react";
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

interface ChildrenProps{
    children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextProps)

export function CycleContextProvider({children}: ChildrenProps){
    const [cycle, setCycles] = useState<Cycle[]>([]);
    const [active, setActive] = useState<string | null>(null);
    const [amountSeconds, setAmountSeconds] = useState(0);
    const activeCycle = cycle.find((cycle) => cycle.id === active);

    function markCycleAsFinished(){
        setCycles( state =>
          state.map((cycle) => {
            if(cycle.id === active){
              return {...cycle, finishedDate: new Date() }
            }else{
            return cycle
          }}
        ))
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
    
        setCycles((state) => [...state, newCycle])
        setActive(id)
        setAmountSeconds(0)
        // reset()
      }
    
      function interruptCycle(){
        setCycles(state => state.map((cycle) => {
            if(cycle.id === active){
              return{...cycle, interruptedDate: new Date() }
            } else{
              return cycle
            }}
          )
        )
        setActive(null)
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