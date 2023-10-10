import { IoPlayOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
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
    .min(1, 'the cicle must be a minimun of 1 minute')
    .max(60, 'the cicle must be a maximum of 60 minutes.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {

  id:string,
  task: string,
  minutesAmount: number,
  startTime: Date
}

export function Home() {

  const [cycle, setCycles] = useState<Cycle[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [amountSeconds, setAmountSeconds] = useState(0);
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
  });
  const submitDisabled = watch('task') && watch('minutesAmount');
  const activeCycle = cycle.find((cycle) => cycle.id === active);

  useEffect(() => {
    if(activeCycle){
      setInterval(() => {
        setAmountSeconds(differenceInSeconds(new Date(), activeCycle.startTime))
      }, 1000)
    }
  }, [activeCycle])

  function handleCreateCicle(data: NewCycleFormData){
   
    const id =  String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startTime: new Date() 
    };

    setCycles((state) => [...state, newCycle])
    setActive(id)
    reset()
  }

 
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60  : 0;
  const CurentSeconds = activeCycle ? totalSeconds - amountSeconds : 0;
  const MinutesAmount = Math.floor(CurentSeconds / 60);
  const secondsAmount = CurentSeconds % 60;
  const minutes = String(MinutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');



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
           {...register('minutesAmount', {valueAsNumber: true})}
           />
          <span>minutes</span>
          
        </FormC>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <StartButton type="submit" disabled={!submitDisabled}>
          <IoPlayOutline size={24}/> Start
        </StartButton>

      </form>
    </Container>
)}