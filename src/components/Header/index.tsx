import { Container } from "./styles.header";
import imageIgnite from "../../assets/ignite.svg";
import { LuTimer } from "react-icons/lu";
import { RiNewspaperLine } from "react-icons/ri"
import { NavLink } from "react-router-dom";



export function Header(){
    return(
        <Container>
            <img src={imageIgnite} />
            
            <nav>
                <NavLink to="/" title="Timer"><LuTimer size={24}/></NavLink>
                <NavLink to="/history" title="Historic"><RiNewspaperLine size={24} /></NavLink>
            </nav>
        </Container>
    )
}