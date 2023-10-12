import { Container, HistoryList, Status} from "./history.styles";
import { useContext } from "react";
import { CyclesContext } from "../../context/CycleContext";
import { formatDistanceToNow } from "date-fns"


export function History(){

    const { cycle } = useContext(CyclesContext) 
    return(
        <Container>
            <h1>My Historic</h1>

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
                        cycle.map(cycle => {
                            return(
                                 <tr key={cycle.id}>
                                     <td>{cycle.task}</td>
                                     <td>{cycle.minutesAmount}</td>
                                    <td>{formatDistanceToNow(cycle.startTime, {addSuffix: true})}</td>
                                    <td>
                                        {cycle.finishedDate && <Status $statusColor="green">Finished</Status>}

                                        {cycle.interruptedDate && <Status $statusColor="red">Interupted</Status>}

                                        {!cycle.interruptedDate 
                                        && 
                                        !cycle.finishedDate
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