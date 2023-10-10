
import { IoPlayOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import 
{ 
  Container, FormC, CountDownContainer, 
  Separator, StartButton, ProjectInput, 
  MinutesInput 
} 
from "./app.styles";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home() {

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues:{
      task:"",
      
    }
  });

  const submitDisabled = watch('task') && watch('minutesAmount')

  function handleCreateCicle(data: NewCycleFormData){
    console.log(data)
    reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateCicle)}>

        <FormC>

          <label htmlFor="task">I'll Work With </label>
          <ProjectInput
           type="text" 
           id="task"
           placeholder="Project's Name"
           list="task-suggestions"
          {...register("task")}
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
           {...register('minutesAmount')}
           />
          <span>minutes</span>
          
        </FormC>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton type="submit" disabled={!submitDisabled}>
          <IoPlayOutline size={24}/> Start
        </StartButton>

      </form>
    </Container>
  )
}