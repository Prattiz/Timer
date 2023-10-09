import styled from "styled-components";

export const Container = styled.main`

    flex: 1;
    padding: 4rem;
    display: flex;
    flex-direction: column;

    h1{
        font-size: 2rem;
        color: ${props => props.theme["gray-100"]};
    }
`

export const HistoryList = styled.div`

    flex:1;
    overflow: auto;
    margin-top: 2rem;

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th{
            background-color: ${props => props.theme["gray-600"]};
            color:${props => props.theme["gray-100"]};
            padding: 1.6rem;
            font-size: 1.4rem;
            line-height: 1.6;
            text-align: left;

            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 2rem;
            }
            &:last-child{
                border-top-right-radius: 8px; 
                padding-right: 2rem;   
            }}
        
        td{
            background-color: ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};
            padding: 1.6rem;
            font-size: 1.4rem;
            line-height: 1.6;

            &:first-child{
                border-bottom-left-radius: 8px;
                padding-left: 2rem;
            }
            &:last-child{
                border-bottom-right-radius: 8px; 
                padding-right: 2rem;   
            }}}`


const STATUS_COLOR ={
    yellow: "yellow-500",
    red: "red-500",
    green: "green-500"
} as const

interface StatusProps{
    statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`

    display: flex;
    align-items: center;
    gap: 1rem;

    &::before{
        content: '';
        width: .5rem;
        height: .5rem;
        border-radius: 20px;
        background-color: ${props => props.theme[STATUS_COLOR[props.statusColor]]};

    }
    
`