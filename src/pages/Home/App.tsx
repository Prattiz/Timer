import { Container, StartButton, StopButton} from "./app.styles";
import { IoPlayOutline } from "react-icons/io5";
import { TbHandStop } from "react-icons/tb";

import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";
import { CyclesContext } from "../../context/CycleContext";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'the cicle must be a minimun of 1 minute')
    .max(60, 'the cicle must be a maximum of 60 minutes.'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const {activeCycle, createCycle, interruptCycle} = useContext(CyclesContext)
  
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema)});

  const { handleSubmit, watch, reset } = newCycleForm

  const submitDisabled = watch('task') && watch('minutesAmount');

  function handleCreateNewCycle(data: NewCycleFormData){
    createCycle(data)
    reset()
  }
  
  
  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        
          <FormProvider {...newCycleForm}>
            <NewCycleForm/>
            
            </FormProvider>
          <CountDown/>

        {
        activeCycle ? 
          <StopButton type="button" onClick={interruptCycle}>
            <TbHandStop size={24}/> Stop
          </StopButton>
        : 
          <StartButton type="submit" disabled={!submitDisabled}>
            <IoPlayOutline size={24}/> Start
          </StartButton>
        }

      </form>
    </Container>
)}