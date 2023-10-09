
import { IoPlayOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import 
{ 
  Container, Form, CountDownContainer, 
  Separator, StartButton, ProjectInput, 
  MinutesInput 
} 
from "./app.styles";


export function Home() {

  const { register, handleSubmit, watch} = useForm();
  const submitDisabled = watch('task') && watch('minutesAmount');

  function handleCreateSubmit(data: any){
    console.log(data)
  }


  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateSubmit)}>
        <Form>

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
           placeholder="00"
           min={1}
           max={60}
           {...register('minutesAmount')}
           
           />
          <span>minutes</span>
          
        </Form>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton type="submit" disabled={!submitDisabled}><IoPlayOutline size={24}/> Start</StartButton>
      </form>
    </Container>
  )
}