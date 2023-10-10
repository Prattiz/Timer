import { 
    Container, HistoryList, Status
} from "./history.styles";


export function History(){
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
                        <tr>
                            <td>T1</td>
                            <td>d1</td>
                            <td>s1</td>
                            <td><Status $statusColor="green">Finished</Status></td>
                        </tr>
                        <tr>
                            <td>T2</td>
                            <td>d2</td>
                            <td>s2</td>
                            <td><Status $statusColor="yellow">In Progress</Status></td>
                        </tr>
                        <tr>
                            <td>T3</td>
                            <td>d3</td>
                            <td>s3</td>
                            <td><Status $statusColor="red">Interrupted</Status></td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </Container>
    )
}