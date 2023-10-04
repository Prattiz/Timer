import { Container, ButtonVariants } from "./styles.button";

interface PropsButton{
    variants?: ButtonVariants;
}

export function Button({variants = "primary"}: PropsButton){
    return(
    <Container variants={variants}></Container>
    )
}