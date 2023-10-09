import 
{ 
  Container, Form, CountDownContainer, 
  Separator, StartButton, ProjectInput, 
  MinutesInput 
} 
from "./app.styles";
import { IoPlayOutline } from "react-icons/io5"

export function Home() {
  return (
    <Container>
      <form>
        <Form>
          <label htmlFor="task">I'll Work With </label>

          <ProjectInput
           type="text" 
           id="task"
           placeholder="Project's Name"
           list="task-suggestions"
           />
           <datalist id="task-suggestions">
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
           </datalist>

          <label htmlFor="minutesAmount">In</label>

          <MinutesInput type="number"
           id="minutesAmount" 
           placeholder="00"
           min={1}
           max={60}
           
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

        <StartButton type="submit" disabled><IoPlayOutline size={24}/> Start</StartButton>
      </form>
    </Container>
  )
}