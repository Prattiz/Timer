import { Container, ProjectInput, MinutesInput } from "./styles";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CyclesContext } from "../../../../context/CycleContext";





export function NewCycleForm(){

  const {activeCycle} = useContext(CyclesContext)
  const { register} = useFormContext()
  
    return(
        <Container>

          <label htmlFor="task">I'll Work With </label>
          <ProjectInput
           type="text" 
           id="task"
           placeholder="Project's Name"
           list="task-suggestions"
           disabled={!!activeCycle}
          {...register('task')}
           />

           <datalist id="task-suggestions">
            <option value="Project 1"/>
            <option value="Project 2"/>
            <option value="Project 3"/>
           </datalist>

          <label htmlFor="minutesAmount">In</label>

          <MinutesInput type="number"
           id="minutesAmount" 
           placeholder="0"
           min={1}
           max={60}
           disabled={!!activeCycle}
           {...register('minutesAmount', {valueAsNumber: true})}
           />
          <span>minutes</span>
          
        </Container>
    )
}