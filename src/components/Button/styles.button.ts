import styled, {css} from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "sucess";

interface PropsButtonC{
    variants: ButtonVariants;
}

const buttonColors = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    sucess: "green",
}

export const Container = styled.button<PropsButtonC>`

    width: 100px;
    height: 40px;

    ${props => {
        return css`
        background-color:${buttonColors[props.variants]}`
    }}
`