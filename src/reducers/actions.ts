import { Cycle } from "./reducers";

export enum ActionTypes{
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
    ADD_CYCLE_FINISHED = "ADD_CYCLE_FINISHED"
}
  

export function addNewCycleAction(newCycle: Cycle){
    return {
        type:ActionTypes.ADD_NEW_CYCLE,
        payload:{
            newCycle
        }
    }  
}

export function cycleFinished(){
    return{
        type: ActionTypes.ADD_CYCLE_FINISHED,
    }
}

export function cycleInterrupted(){
    return{
        type:ActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}