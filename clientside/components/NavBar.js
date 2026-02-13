import {Container, Nav, Navbar} from "react-bootstrap"
import Link from "next/link"

export default function NavBar(){
    return(
    <Navbar className="fixed-top navbar-dark bg-dark">
    <Container>
        <Navbar.Brand>WikiBooks</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Books</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <p>Test push</p>
        </Nav>
    </Container>
    </Navbar>
    )
}