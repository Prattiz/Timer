import styled from "styled-components";

export const Container = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5.6rem;
    }
`

export const FormC = styled.div`

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

export const CountDownContainer = styled.div`
    
    font-family: 'Roboto Mono', monospace;
    font-size: 16rem;
    line-height: 8rem;
    color:${props => props.theme["gray-100"]};
    display: flex;
    gap: 1.6rem;

    span{
        background: ${props => props.theme["gray-700"]};
        padding: 4rem 1rem;
        border-radius: 18px;
    }

    
`

export const Separator = styled.div`

    padding: 2rem 0;
    color: ${props => props.theme['green-500']};
    overflow:hidden;
    width: 4rem;
    display: flex;
    justify-content: center;
`

export const StartButton = styled.button`

    width: 100%;
    padding: 1.6rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: bold;
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:not(:disabled):hover{
        background-color: ${props => props.theme["green-700"]};
    }

    &:disabled{
        opacity: .7;
        cursor: not-allowed;
    }

    svg{
        margin-bottom: 2px;
    }
`