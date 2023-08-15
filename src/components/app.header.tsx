import { Navbar, Container, Nav } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function AppHeader() {
  const router = useRouter();
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => router.push('/')}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => router.push('/facebook')}>
              Facebook
            </Nav.Link>
            <Nav.Link href="/youtube">Youtube</Nav.Link>
            <Nav.Link href="/twitch">Twitch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
