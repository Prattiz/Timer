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

const BaseButton = styled.button`

    width: 100%;
    padding: 1.6rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: bold;
    color: ${props => props.theme["gray-100"]};

    svg{
        margin-bottom: 2px;
    }
`

export const StopButton = styled(BaseButton)`

    background-color: ${props => props.theme["red-500"]};

    &:hover{
        background-color: ${props => props.theme["red-700"]}
    }
`

export const StartButton = styled(BaseButton)`

    background-color: ${props => props.theme["green-500"]};


    &:not(:disabled):hover{
        background-color: ${props => props.theme["green-700"]};
    }

    &:disabled{
        opacity: .7;
        cursor: not-allowed;
    }
`