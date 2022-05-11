import { Navbar, Container } from 'react-bootstrap';
import { Auth } from './Auth';

const NavLogin = () => {

  return (
    <Navbar bg="dark">
      <Container>
        <Auth/>
      </Container>
    </Navbar>
  )
}
 export default NavLogin;