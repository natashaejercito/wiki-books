import {Container} from "react-bootstrap";
import NavBar from "@/components/NavBar";

export default function Layout(props){
    return(
        <>
        <NavBar/>
        <br/>
        <Container>
            {props.children}
        </Container>
        <br/>
        </>
    )
}