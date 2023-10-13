import { Container, Separator } from "./styles";
import { useContext, useEffect} from "react";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../../../../context/CycleContext";



export function CountDown(){

    const { activeCycle, active, markCycleAsFinished, amountSeconds, setSecondsPassed } = useContext(CyclesContext)
    
    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60  : 0;
    
    const CurentSeconds = activeCycle ? totalSeconds - amountSeconds : 0;
    const MinutesAmount = Math.floor(CurentSeconds / 60);
    const secondsAmount = CurentSeconds % 60;

    const minutes = String(MinutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        let interval: number;
    
        if(activeCycle){
          interval = setInterval(() => {
            const secondsDiference = differenceInSeconds(new Date(), new Date(activeCycle.startTime));
    
            if(secondsDiference >= totalSeconds){
              markCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else setSecondsPassed(secondsDiference)
      }, 1000)
    
          return() => {
            clearInterval(interval)
          }
        }
      }, [activeCycle, totalSeconds, active, markCycleAsFinished])

    useEffect(() =>{
        if(activeCycle) {
          document.title = `Timer - ${minutes}:${seconds}`
        }}, 
        [minutes, seconds, activeCycle, active, setSecondsPassed]
    )

    return(
        <Container>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Container>
    )
}