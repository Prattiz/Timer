import styled from "styled-components";

export const Container = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0 0;
    

    nav{
        display: flex;
        gap: 20px;
    }

    a{
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color:${props => props.theme["gray-100"]};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        padding-bottom: 1rem;
        margin-top: 1rem;
        

        &:hover{
            border-bottom: 3px solid ${props => props.theme["green-500"]};
        }

        &.active{
            color:${props => props.theme["green-500"]}
        }

        
    }

`