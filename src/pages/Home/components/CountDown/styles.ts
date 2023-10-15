import styled from "styled-components";

export const Container = styled.div`
    
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

    @media (max-width: 650px) {
        font-size: 5rem;
        line-height: 4rem;
        padding: 0 1rem;

        span{
            padding: 2rem .5rem;
        }
    }
`

export const Separator = styled.div`

    padding: 2rem 0;
    color: ${props => props.theme['green-500']};
    overflow:   hidden;
    width: 4rem;
    display: flex;
    justify-content: center;

    @media (max-width: 450px) {
        width: 1.3rem;
    }
`