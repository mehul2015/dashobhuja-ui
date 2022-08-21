import styled from 'styled-components';

const Container = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background: black; */
`;

const Logo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItemsContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  /* background-color: green; */
`;

const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
  width: 8%;
  transition: all 0.4s;
  background: #50835f;
  border: none;
  box-shadow: none;
  color: whitesmoke;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const NavItem = styled.a`
  transition: all 0.4s;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavItemsContainer>
        <Logo>Logo</Logo>
        <Button>CONTACT US</Button>
      </NavItemsContainer>
    </Container>
  );
};

export default Navbar;
