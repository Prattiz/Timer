import { ActionTypes } from "./actions";

export interface Cycle {

    id:string,
    task: string,
    minutesAmount: number,
    startTime: Date,
    interruptedDate?: Date,
    finishedDate?: Date,  
}

interface CyclesState{
    cycle: Cycle[],
    active: string | null
}


export function cyclesReducer(state: CyclesState, action: any){

    switch(action.type){

      case ActionTypes.ADD_NEW_CYCLE:
        
        return {
          ...state,
          cycle: [...state.cycle, action.payload.newCycle],
          active: action.payload.newCycle.id,
        }
      case ActionTypes.INTERRUPT_CURRENT_CYCLE:
        return{
          ...state,

          cycle: state.cycle.map((cycle) => {
            if(cycle.id === state.active){
              return{...cycle, interruptedDate: new Date()}
            } else{
              return cycle
            }}
          ),

          active: null
        }
      case ActionTypes.ADD_CYCLE_FINISHED:
        return{
          ...state,

          cycle: state.cycle.map((cycle) => {
            if(cycle.id === state.active){
              return{...cycle, finishedDate: new Date()}
            } else{
              return cycle
            }}
          ),

          active: null
        }
      
      default: return state
    }    
}
