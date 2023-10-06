import { Container, HistoryList } from "./history.styles";


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
                            <td>STA1</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </Container>
    )
}