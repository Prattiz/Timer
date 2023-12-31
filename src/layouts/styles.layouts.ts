import styled from "styled-components";

export const Container = styled.div`

    max-width: 112rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2rem 4rem;

    background-color: ${props => props.theme["gray-800"]};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`