import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    color:${props => props.theme["gray-100"]};
    font-size: 1.6rem;
    font-weight: bold;
    flex-wrap: wrap;

    input{
        background: transparent;
        height: 3rem;
        color: ${props => props.theme["white"]};
        border: 0;
        border-bottom: 2.5px solid ${props => props.theme["gray-500"]};
        padding-bottom:.3rem;
        font-size: 1.6rem;

        
        &::placeholder{
            font-weight: bold;
        }

        &:focus{
            border-bottom: 2.5px solid ${props => props.theme["green-500"]};
        }
    }
`

export const ProjectInput = styled.input`
    flex:1;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`

export const MinutesInput = styled.input`
    width: 4rem;  
`