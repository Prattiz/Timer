import { ReactNode, createContext, useState, useReducer, useEffect } from "react";
import { Cycle, cyclesReducer } from "../reducers/reducers";
import { addNewCycleAction , cycleFinished, cycleInterrupted} from "../reducers/actions";
import { differenceInSeconds } from "date-fns";



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
    
  const [ cycleState, dispatch ] = useReducer(cyclesReducer, 
    {
      cycle: [],
      active:null
    },
    (initialState) => {
      const storageState = localStorage.getItem("@time:cycles-state1.0.0");

      if(storageState){
        return JSON.parse(storageState)
      }
      return initialState
    }
    )

    const { cycle, active } = cycleState;
    const activeCycle = cycle.find((cycle) => cycle.id === active);

    const [amountSeconds, setAmountSeconds] = useState(() => {
      if(activeCycle){
        return differenceInSeconds(new Date(), new Date(activeCycle.startTime));
      }
    
      return 0
      }
    );
    

    useEffect(() =>{
      const stateJSON = JSON.stringify(cycleState);

      localStorage.setItem("@time:cycles-state1.0.0", stateJSON)
    }, [cycleState])

    function markCycleAsFinished(){
       
        dispatch(cycleFinished())
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
        console.log(newCycle)
        dispatch(addNewCycleAction(newCycle))
        
        setAmountSeconds(0)
      }
    
      function interruptCycle(){
        dispatch(cycleInterrupted())
        
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