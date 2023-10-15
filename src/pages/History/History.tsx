import { Container, HistoryList, Status} from "./history.styles";
import { useContext } from "react";
import { CyclesContext } from "../../context/CycleContext";
import { formatDistanceToNow } from "date-fns"



export function History(){

    const { cycle } = useContext(CyclesContext) 
    return(
        <Container>
            <h1>Historic</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Duration</th>
                            <th>Start</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        cycle.map((cycles) => {
                            
                            return(
                                 <tr key={cycles.id}>
                                     <td>{cycles.task}</td>
                                     <td>{cycles.minutesAmount} Minutes</td>
                                    <td>
                                        {
                                        formatDistanceToNow(new Date(cycles.startTime), {
                                            addSuffix: true,
                                        })}
                                    </td>
                                    <td>
                                        {cycles.finishedDate && <Status $statusColor="green">Finished</Status>}

                                        {cycles.interruptedDate && <Status $statusColor="red">Interupted</Status>}

                                        {!cycles.interruptedDate 
                                        && 
                                        !cycles.finishedDate
                                        && 
                                        <Status $statusColor="yellow">Working...</Status>}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </HistoryList>
        </Container>
    )
}

